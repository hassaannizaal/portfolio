"use client";

import { useState } from "react";
import Image from "next/image";

interface Callout {
  id: string;
  code: string;
  label: string;
  detail: string;
  /** Target point on the 500x500 sketch canvas */
  pin: { x: number; y: number };
  /** Elbow + end point for the SVG leader line */
  elbow: { x: number; y: number };
  end: { x: number; y: number };
  /** Button anchor class */
  pos: string;
}

const CALLOUTS: Callout[] = [
  {
    id: "ui",
    code: "A",
    label: "Web & Mobile UI",
    detail: "TypeScript · React · Next.js · React Native · Flutter",
    pin: { x: 288, y: 150 },
    elbow: { x: 344, y: 78 },
    end: { x: 382, y: 78 },
    pos: "right-0 top-[11%]",
  },
  {
    id: "api",
    code: "B",
    label: "Backend & APIs",
    detail: "Node.js · Express · FastAPI · Socket.IO · BullMQ",
    pin: { x: 162, y: 318 },
    elbow: { x: 112, y: 392 },
    end: { x: 76, y: 392 },
    pos: "left-0 bottom-[17%]",
  },
  {
    id: "cloud",
    code: "C",
    label: "Data & Cloud",
    detail: "MongoDB · Redis · Kafka · Docker · Azure CI/CD",
    pin: { x: 368, y: 346 },
    elbow: { x: 398, y: 432 },
    end: { x: 422, y: 432 },
    pos: "right-0 bottom-[8%]",
  },
];

export function CodexHeroDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = CALLOUTS.find((c) => c.id === activeId);

  return (
    <figure className="relative mx-auto w-full max-w-[520px] select-none">
      {/* Top figure bar with drafting crosshairs */}
      <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        <span className="flex items-center gap-2">
          <span className="text-accent">+</span>
          <span>FIG. 01 · SYSTEMS STUDY</span>
        </span>
        <span>SCALE 1:1</span>
      </div>

      {/* Blended Renaissance Ink Sketch + Precision SVG Leader Overlay */}
      <div className="relative aspect-square w-full">
        <Image
          src="/imgs/hero-sketch.jpg"
          alt="Fine-line Renaissance scientific ink sketch of an armillary sphere, precision gears, and drafting compass"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 520px"
          className="ink-blend object-contain"
        />

        {/* SVG Precision Leader Lines & Target Pins */}
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
                  opacity: dimmed ? 0.25 : 1,
                  transition: "opacity 220ms ease",
                }}
              >
                <polyline
                  points={`${item.pin.x},${item.pin.y} ${item.elbow.x},${item.elbow.y} ${item.end.x},${item.end.y}`}
                  fill="none"
                  stroke={isOn ? "#8f3928" : "#4e473e"}
                  strokeOpacity={isOn ? 0.95 : 0.45}
                  strokeWidth={isOn ? 1.25 : 0.85}
                  strokeDasharray={isOn ? undefined : "2.5 2.5"}
                />
                {/* Outer target ring */}
                <circle
                  cx={item.pin.x}
                  cy={item.pin.y}
                  r={isOn ? 6.5 : 4.5}
                  fill="none"
                  stroke={isOn ? "#8f3928" : "#1c1916"}
                  strokeOpacity={isOn ? 0.85 : 0.4}
                  strokeWidth="0.9"
                />
                {/* Inner target dot */}
                <circle
                  cx={item.pin.x}
                  cy={item.pin.y}
                  r="2"
                  fill={isOn ? "#8f3928" : "#1c1916"}
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
              className={`group absolute z-10 flex items-center gap-2 border bg-paper/88 px-2.5 py-1 backdrop-blur-[3px] transition-all duration-200 ${
                isOn
                  ? "border-accent text-ink"
                  : "border-hairline text-ink-secondary hover:border-hairline-strong hover:text-ink"
              } ${item.pos}`}
            >
              <span
                className={`font-mono text-[9.5px] font-medium transition-colors ${
                  isOn ? "text-accent" : "text-ink-muted group-hover:text-accent"
                }`}
              >
                {item.code}.
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quiet bottom ruler & live stack readout */}
      <figcaption className="mt-2 border-t border-hairline pt-2.5">
        <div className="flex min-h-5 items-center justify-between gap-3 font-mono text-[10px] tracking-[0.1em] text-ink-muted">
          <span className="truncate">
            {active ? (
              <>
                <span className="mr-2 text-accent">[{active.code}]</span>
                <span className="text-ink">{active.detail}</span>
              </>
            ) : (
              "HOVER A CALLOUT TO INSPECT STACK"
            )}
          </span>
          <span className="shrink-0 uppercase">PLATE I</span>
        </div>
      </figcaption>
    </figure>
  );
}
