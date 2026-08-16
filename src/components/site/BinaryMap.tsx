"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const BG = 0xf1eee7;
const FG = "#232323";

function makeBinaryTexture() {
  const size = 2048;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");

  ctx.fillStyle = "#f1eee7";
  ctx.fillRect(0, 0, size, size);

  const line =
    "01001000 01100001 01110011 01110011 01100001 01100001 01101110  01001110 01101001 01111010 01100001 01100001 01101100  ";
  ctx.fillStyle = FG;
  ctx.font = "600 84px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.textBaseline = "top";

  const lineHeight = 102;
  for (let y = 8, row = 0; y < size; y += lineHeight, row += 1) {
    const offset = (row * 17) % line.length;
    const shifted = line.slice(offset) + line.slice(0, offset);
    ctx.fillText(shifted, 0, y);
    ctx.fillText(shifted, ctx.measureText(shifted).width, y);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uDisplace;
  varying vec2 vUv;
  varying vec3 vWorld;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(0.80, -0.60, 0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p * 2.07;
      a *= 0.5;
    }
    return v;
  }

  float terrain(vec2 p) {
    vec2 q = p * 0.055 + vec2(uTime * 0.012, uTime * 0.008);
    vec2 w = vec2(fbm(q), fbm(q + vec2(5.2, 1.3)));
    float n = fbm(q + 4.0 * w);
    n = pow(n, 1.15);
    return (n * 2.2 - 0.7) * uDisplace;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.y = terrain(pos.xz);
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uMap;
  uniform vec3 uFog;
  uniform vec2 uRepeat;
  varying vec2 vUv;
  varying vec3 vWorld;

  void main() {
    vec3 color = texture2D(uMap, vUv * uRepeat).rgb;

    vec3 dx = dFdx(vWorld);
    vec3 dy = dFdy(vWorld);
    vec3 n = normalize(cross(dx, dy));
    vec3 light = normalize(vec3(0.35, 0.82, 0.28));
    float diff = clamp(dot(n, light), 0.0, 1.0);
    color *= 0.55 + 0.55 * diff;

    float dist = length(vWorld - cameraPosition);
    float fog = smoothstep(10.0, 32.0, dist);
    color = mix(color, uFog, fog);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function BinaryMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(BG, 1);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 10, 32);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 3.4, 14);

    const texture = makeBinaryTexture();
    texture.repeat.set(1.55, 1.55);

    const uniforms = {
      uTime: { value: 0 },
      uDisplace: { value: 11.5 },
      uMap: { value: texture },
      uFog: { value: new THREE.Color(BG) },
      uRepeat: { value: new THREE.Vector2(1.55, 1.55) },
    };

    const geometry = new THREE.PlaneGeometry(46, 46, 220, 220);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -6;
    scene.add(mesh);

    const target = new THREE.Vector3(0, 1.8, -3);
    let yaw = 0.42;
    let pitch = 0.1;
    let yawT = yaw;
    let pitchT = pitch;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let auto = 0;

    const setSize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    setSize();

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      wrap.setPointerCapture(e.pointerId);
      setHint(false);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      yawT += dx * 0.005;
      pitchT = Math.max(0.02, Math.min(0.38, pitchT + dy * 0.0035));
    };
    const onPointerUp = () => {
      dragging = false;
    };

    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointerleave", onPointerUp);

    const ro = new ResizeObserver(setSize);
    ro.observe(wrap);

    let frame = 0;
    const tick = (t: number) => {
      frame = requestAnimationFrame(tick);
      const time = t * 0.001;
      uniforms.uTime.value = time;
      if (!dragging) auto += 0.0022;
      yawT += 0.00035 + Math.sin(auto) * 0.00025;
      yaw += (yawT - yaw) * 0.08;
      pitch += (pitchT - pitch) * 0.08;

      const radius = 13.5;
      camera.position.x = target.x + Math.sin(yaw) * radius;
      camera.position.z = target.z + Math.cos(yaw) * radius;
      camera.position.y = 2.6 + pitch * 8;
      camera.lookAt(target);

      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointerleave", onPointerUp);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative size-full cursor-grab overflow-hidden active:cursor-grabbing"
      onPointerEnter={() => setHint(true)}
      onPointerLeave={() => setHint(false)}
    >
      <span
        className={`pointer-events-none absolute top-8 left-8 z-10 bg-white px-2 py-1 font-mono text-[11px] uppercase text-black transition-opacity duration-150 ${
          hint ? "opacity-100" : "opacity-0"
        }`}
      >
        Click & hold
      </span>
    </div>
  );
}
