"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const DIGIT_COUNT = 3200;
const STAR_COUNT = 1100;

function makeDigitTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");

  ctx.clearRect(0, 0, 512, 256);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 190px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("0", 128, 136);
  ctx.fillText("1", 384, 136);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

const digitVertex = /* glsl */ `
  #define TAU 6.283185307

  attribute float aSeed;
  attribute float aDigit;

  uniform float uTime;

  varying vec2 vUv;
  varying float vDigit;
  varying float vHeat;
  varying float vAlpha;

  float hash(float n) {
    return fract(sin(n * 127.1) * 43758.5453);
  }

  void main() {
    vUv = uv;
    vDigit = aDigit;

    float s = aSeed;
    float r1 = hash(s * 1.7);
    float r2 = hash(s * 3.3 + 1.0);
    float r3 = hash(s * 5.9 + 2.0);
    float r4 = hash(s * 9.1 + 3.0);

    float rOut = mix(3.4, 12.0, pow(r1, 0.7));
    float rIn = 1.02;

    float life = fract(uTime * mix(0.030, 0.062, r2) + s);
    float r = mix(rOut, rIn, pow(life, 1.5));

    float omega = 0.26 + 1.55 / pow(max(r, 1.0), 1.2);
    float theta = s * TAU + uTime * omega;

    float thick = 0.30 * pow(clamp(r / rOut, 0.0, 1.0), 1.2);
    vec3 orbit = vec3(r * cos(theta), (r3 - 0.5) * thick, r * sin(theta));

    vHeat = 1.0 - smoothstep(1.15, 7.0, r);
    float spawn = smoothstep(0.0, 0.12, life);
    float sink = smoothstep(1.02, 1.5, r);
    vAlpha = spawn * sink * mix(0.5, 1.0, r4);

    vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 camUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);

    float tilt = (r4 - 0.5) * 0.34;
    float ca = cos(tilt);
    float sa = sin(tilt);

    float size = mix(0.26, 0.085, smoothstep(rIn, rOut, r)) * mix(0.85, 1.15, r4);

    vec2 spun = vec2(
      position.x * ca - position.y * sa,
      position.x * sa + position.y * ca
    );

    vec3 world = orbit + (camRight * spun.x + camUp * spun.y) * size;
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  }
`;

const digitFragment = /* glsl */ `
  uniform sampler2D uMap;

  varying vec2 vUv;
  varying float vDigit;
  varying float vHeat;
  varying float vAlpha;

  void main() {
    vec2 uv = vec2(vUv.x * 0.5 + vDigit * 0.5, vUv.y);
    float glyph = texture2D(uMap, uv).a;
    if (glyph < 0.08) discard;

    vec3 cool = vec3(0.60, 0.70, 0.92);
    vec3 warm = vec3(1.00, 0.70, 0.30);
    vec3 hot = vec3(1.00, 0.97, 0.90);

    vec3 color = mix(cool, warm, smoothstep(0.12, 0.72, vHeat));
    color = mix(color, hot, pow(vHeat, 2.1));

    float boost = 0.5 + 1.25 * vHeat;
    gl_FragColor = vec4(color * boost, glyph * vAlpha);
  }
`;

const diskVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const diskFragment = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float a = atan(p.y, p.x);

    float band = smoothstep(0.07, 0.17, r) * (1.0 - smoothstep(0.26, 0.86, r));
    float streak = 0.70 + 0.30 * sin(a * 8.0 + uTime * 0.9 - r * 20.0);
    float doppler = 0.58 + 0.42 * cos(a + 0.7);

    vec3 warm = vec3(1.00, 0.58, 0.20);
    vec3 hot = vec3(1.00, 0.93, 0.80);
    vec3 color = mix(warm, hot, smoothstep(0.08, 0.24, r));

    float i = band * streak * doppler * 0.7;
    gl_FragColor = vec4(color * i, i);
  }
`;

const ringFragment = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);

    float ring = smoothstep(0.435, 0.478, r) * (1.0 - smoothstep(0.478, 0.545, r));
    float halo = pow(1.0 - clamp(r, 0.0, 1.0), 4.0) * 0.16;
    float flicker = 0.92 + 0.08 * sin(uTime * 2.4);

    vec3 color = vec3(1.0, 0.86, 0.62);
    float i = (ring * 1.25 + halo) * flicker;
    gl_FragColor = vec4(color * i, i);
  }
`;

const haloFragment = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float glow = pow(1.0 - clamp(r, 0.0, 1.0), 3.4) * 0.30;
    vec3 color = vec3(1.0, 0.72, 0.42);
    gl_FragColor = vec4(color * glow, glow);
  }
`;

const starVertex = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;

  uniform float uTime;
  varying float vTwinkle;

  void main() {
    vTwinkle = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 1.1 + aPhase * 12.0));
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (200.0 / max(-mv.z, 0.001));
    gl_Position = projectionMatrix * mv;
  }
`;

const starFragment = /* glsl */ `
  varying float vTwinkle;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vTwinkle * 0.75;
    if (a < 0.03) discard;
    gl_FragColor = vec4(vec3(0.82, 0.87, 1.0) * a, a);
  }
`;

function cameraFacingQuad(size: number, fragmentShader: string, uTime: boolean) {
  const uniforms: Record<string, THREE.IUniform> = {};
  if (uTime) uniforms.uTime = { value: 0 };
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: diskVertex,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);
}

export function BinaryMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearAlpha(0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 90);

    const digitTexture = makeDigitTexture();
    const quad = new THREE.PlaneGeometry(1, 1);
    const digitGeometry = new THREE.InstancedBufferGeometry();
    digitGeometry.index = quad.index;
    digitGeometry.attributes.position = quad.attributes.position;
    digitGeometry.attributes.uv = quad.attributes.uv;
    digitGeometry.instanceCount = DIGIT_COUNT;

    const seeds = new Float32Array(DIGIT_COUNT);
    const digits = new Float32Array(DIGIT_COUNT);
    for (let i = 0; i < DIGIT_COUNT; i += 1) {
      seeds[i] = Math.random();
      digits[i] = Math.random() > 0.5 ? 1 : 0;
    }
    digitGeometry.setAttribute(
      "aSeed",
      new THREE.InstancedBufferAttribute(seeds, 1),
    );
    digitGeometry.setAttribute(
      "aDigit",
      new THREE.InstancedBufferAttribute(digits, 1),
    );

    const digitMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMap: { value: digitTexture },
      },
      vertexShader: digitVertex,
      fragmentShader: digitFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const swirl = new THREE.Mesh(digitGeometry, digitMaterial);
    swirl.frustumCulled = false;
    scene.add(swirl);

    const starPositions = new Float32Array(STAR_COUNT * 3);
    const starSizes = new Float32Array(STAR_COUNT);
    const starPhases = new Float32Array(STAR_COUNT);
    for (let i = 0; i < STAR_COUNT; i += 1) {
      const radius = 20 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.cos(phi) * 0.7;
      starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      starSizes[i] = 0.5 + Math.random() * 1.7;
      starPhases[i] = Math.random();
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    starGeometry.setAttribute("aSize", new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute(
      "aPhase",
      new THREE.BufferAttribute(starPhases, 1),
    );
    const starMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: starVertex,
      fragmentShader: starFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const horizon = new THREE.Mesh(
      new THREE.SphereGeometry(0.88, 48, 48),
      new THREE.MeshBasicMaterial({ color: 0x000000 }),
    );
    scene.add(horizon);

    const disk = cameraFacingQuad(20, diskFragment, true);
    disk.rotation.x = -Math.PI / 2;
    scene.add(disk);

    const photonRing = cameraFacingQuad(4.2, ringFragment, true);
    scene.add(photonRing);

    const halo = cameraFacingQuad(12, haloFragment, false);
    scene.add(halo);

    const origin = new THREE.Vector3(0, 0, 0);
    let yaw = 0.55;
    let pitch = 0.34;
    let yawTarget = yaw;
    let pitchTarget = pitch;
    let yawVelocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let intro = 0;

    const setSize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    setSize();

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      yawVelocity = 0;
      lastX = event.clientX;
      lastY = event.clientY;
      wrap.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      yawVelocity = dx * 0.004;
      yawTarget += yawVelocity;
      pitchTarget = Math.max(
        0.06,
        Math.min(0.85, pitchTarget + dy * 0.0032),
      );
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (wrap.hasPointerCapture(event.pointerId)) {
        wrap.releasePointerCapture(event.pointerId);
      }
    };

    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(wrap);

    let frame = 0;
    let firstFrame = true;

    const tick = (elapsed: number) => {
      frame = requestAnimationFrame(tick);

      const time = reduceMotion ? 14 : elapsed * 0.001;
      digitMaterial.uniforms.uTime.value = time;
      starMaterial.uniforms.uTime.value = time;
      (disk.material as THREE.ShaderMaterial).uniforms.uTime.value = time;
      (photonRing.material as THREE.ShaderMaterial).uniforms.uTime.value = time;

      if (!reduceMotion) {
        stars.rotation.y = time * 0.008;
        if (!dragging) {
          yawVelocity *= 0.94;
          yawTarget += yawVelocity + 0.0007;
        }
      }

      yaw += (yawTarget - yaw) * 0.075;
      pitch += (pitchTarget - pitch) * 0.075;

      intro += (1 - intro) * 0.02;
      const radius = 22.5 - 7.4 * (reduceMotion ? 1 : intro);

      camera.position.x = Math.sin(yaw) * radius * Math.cos(pitch);
      camera.position.z = Math.cos(yaw) * radius * Math.cos(pitch);
      camera.position.y = Math.sin(pitch) * radius * 0.95 + 0.7;
      camera.lookAt(origin);

      photonRing.quaternion.copy(camera.quaternion);
      halo.quaternion.copy(camera.quaternion);

      renderer.render(scene, camera);

      if (firstFrame) {
        firstFrame = false;
        setReady(true);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);

      quad.dispose();
      digitGeometry.dispose();
      digitMaterial.dispose();
      digitTexture.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      horizon.geometry.dispose();
      (horizon.material as THREE.Material).dispose();
      for (const mesh of [disk, photonRing, halo]) {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      }
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="relative size-full overflow-hidden bg-[#05060a]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 85% at 60% 42%, #121724 0%, #090c14 46%, #04050a 100%)",
        }}
      />

      <div
        ref={wrapRef}
        className={`absolute inset-0 cursor-grab transition-opacity duration-1000 ease-out active:cursor-grabbing ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(78% 62% at 50% 48%, transparent 40%, rgba(4,5,10,0.55) 82%, rgba(4,5,10,0.9) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-white/45 lg:inset-x-8 lg:bottom-8">
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-[#ffb45c]" />
          Drag to orbit
        </span>
        <span className="hidden sm:inline">0 / 1</span>
      </div>
    </div>
  );
}
