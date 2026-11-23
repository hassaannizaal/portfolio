"use client";

import { useState } from "react";
import Image from "next/image";

interface Callout {
  id: string;
  code: string;
  label: string;
  detail: string;
  pin: { x: number; y: number };
  elbow: { x: number; y: number };
  end: { x: number; y: number };
  pos: string;
}

const CALLOUTS: Callout[] = [
  {
    id: "ui",
    code: "A",
    label: "Web & Mobile UI",
    detail: "TypeScript · React · Next.js · React Native · Flutter",
    pin: { x: 288, y: 150 },
    elbow: { x: 344, y: 74 },
    end: { x: 382, y: 74 },
    pos: "right-0 top-[9%]",
  },
  {
    id: "api",
    code: "B",
    label: "Backend & APIs",
    detail: "Node.js · Express · FastAPI · Socket.IO · BullMQ",
    pin: { x: 162, y: 318 },
    elbow: { x: 110, y: 394 },
    end: { x: 74, y: 394 },
    pos: "left-0 bottom-[16%]",
  },
  {
    id: "cloud",
    code: "C",
    label: "Data & Cloud",
    detail: "MongoDB · Redis · Kafka · Docker · Azure CI/CD",
    pin: { x: 368, y: 346 },
    elbow: { x: 396, y: 434 },
    end: { x: 422, y: 434 },
    pos: "right-0 bottom-[6%]",
  },
];

export function CodexHeroDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const active = CALLOUTS.find((c) => c.id === activeId);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: nx * 10, y: ny * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <figure className="relative mx-auto w-full max-w-[540px] select-none">
      {/* Top Plate Bar */}
      <div className="mb-1.5 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
        <span className="flex items-center gap-2">
          <span className="text-accent">+</span>
          <span>FIG. 01 · SYSTEMS STUDY</span>
        </span>
        <span>SCALE 1:1</span>
      </div>

      {/* Interactive Sketch Stage */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative aspect-square w-full"
      >
        {/* Whisper-slow rotating astronomical degree reticle behind sketch */}
        <svg
          viewBox="0 0 500 500"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.13]"
        >
          <g className="reticle-spin" style={{ transformOrigin: "250px 250px" }}>
            <circle
              cx="250"
              cy="250"
              r="228"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
              strokeDasharray="2 6"
            />
            {Array.from({ length: 36 }).map((_, idx) => {
              const deg = idx * 10;
              const rad = (deg * Math.PI) / 180;
              const r1 = idx % 3 === 0 ? 219 : 223;
              const r2 = 228;
              return (
                <line
                  key={deg}
                  x1={250 + Math.cos(rad) * r1}
                  y1={250 + Math.sin(rad) * r1}
                  x2={250 + Math.cos(rad) * r2}
                  y2={250 + Math.sin(rad) * r2}
                  stroke="currentColor"
                  strokeWidth={idx % 3 === 0 ? "0.9" : "0.55"}
                />
              );
            })}
          </g>
          {/* Fixed cardinal compass labels */}
          <text
            x="250"
            y="14"
            textAnchor="middle"
            className="fill-current font-mono text-[7.5px] tracking-[0.16em]"
          >
            0°
          </text>
          <text
            x="490"
            y="253"
            textAnchor="end"
            className="fill-current font-mono text-[7.5px] tracking-[0.16em]"
          >
            90°
          </text>
          <text
            x="250"
            y="495"
            textAnchor="middle"
            className="fill-current font-mono text-[7.5px] tracking-[0.16em]"
          >
            180°
          </text>
          <text
            x="10"
            y="253"
            textAnchor="start"
            className="fill-current font-mono text-[7.5px] tracking-[0.16em]"
          >
            270°
          </text>
        </svg>

        {/* Parallax-coupled Sketch + Leader Lines */}
        <div
          className="relative h-full w-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
          }}
        >
          <Image
            src="/imgs/hero-sketch-light.png"
            alt="Fine-line Renaissance scientific ink sketch of an armillary sphere, precision gears, and drafting compass"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 92vw, 540px"
            className="theme-light-only object-contain"
          />
          <Image
            src="/imgs/hero-sketch-dark.png"
            alt="Luminous ivory and brass scientific engraving of an armillary sphere, precision gears, and drafting compass"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 92vw, 540px"
            className="theme-dark-only object-contain"
          />

          {/* Precision SVG Leader Lines & Bullseye Target Pins */}
          <svg
            viewBox="0 0 500 500"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {CALLOUTS.map((item) => {
              const isOn = activeId === item.id;
              const dimmed = activeId !== null && !isOn;
              return (
                <g
                  key={item.id}
                  style={{
                    opacity: dimmed ? 0.22 : 1,
                    transition: "opacity 240ms ease",
                  }}
                >
                  <polyline
                    points={`${item.pin.x},${item.pin.y} ${item.elbow.x},${item.elbow.y} ${item.end.x},${item.end.y}`}
                    fill="none"
                    stroke={isOn ? "var(--accent)" : "var(--ink-secondary)"}
                    strokeOpacity={isOn ? 1 : 0.45}
                    strokeWidth={isOn ? 1.35 : 0.85}
                    strokeDasharray={isOn ? undefined : "2.5 2.5"}
                  />
                  <circle
                    cx={item.pin.x}
                    cy={item.pin.y}
                    r={isOn ? 7.5 : 4.5}
                    fill="none"
                    stroke={isOn ? "var(--accent)" : "var(--ink)"}
                    strokeOpacity={isOn ? 0.9 : 0.45}
                    strokeWidth="0.9"
                  />
                  <circle
                    cx={item.pin.x}
                    cy={item.pin.y}
                    r={isOn ? 2.6 : 2}
                    fill={isOn ? "var(--accent)" : "var(--ink)"}
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive Callout Tags */}
          {CALLOUTS.map((item) => {
            const isOn = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(item.id)}
                onBlur={() => setActiveId(null)}
                onClick={() =>
                  setActiveId((curr) => (curr === item.id ? null : item.id))
                }
                className={`group absolute z-10 flex items-center gap-2 border px-2.5 py-1.5 backdrop-blur-sm transition-all duration-200 ${
                  isOn
                    ? "border-accent bg-paper text-ink shadow-xs"
                    : "border-hairline bg-paper-elevated text-ink-secondary hover:border-hairline-strong hover:text-ink"
                } ${item.pos}`}
              >
                <span
                  className={`font-mono text-[9.5px] font-medium transition-colors ${
                    isOn
                      ? "text-accent"
                      : "text-ink-muted group-hover:text-accent"
                  }`}
                >
                  {item.code}.
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.13em]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Specimen Readout Bar */}
      <figcaption className="mt-2.5 border-t border-hairline pt-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-[0.1em] text-ink-muted">
          <span className="min-w-0 flex-1 truncate">
            {active ? (
              <>
                <span className="mr-2 text-accent">[{active.code}]</span>
                <span className="text-ink">{active.detail}</span>
              </>
            ) : (
              "HOVER OR SELECT A CALLOUT TO INSPECT"
            )}
          </span>
          <div className="flex items-center gap-1">
            {CALLOUTS.map((c) => {
              const on = activeId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() =>
                    setActiveId((curr) => (curr === c.id ? null : c.id))
                  }
                  className={`border px-1.5 py-0.5 text-[9px] transition-colors ${
                    on
                      ? "border-accent bg-accent text-paper"
                      : "border-hairline text-ink-muted hover:border-hairline-strong hover:text-ink"
                  }`}
                >
                  {c.code}
                </button>
              );
            })}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
