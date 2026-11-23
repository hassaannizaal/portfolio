"use client";

import { useState } from "react";
import Image from "next/image";

interface Callout {
  id: string;
  code: string;
  label: string;
  detail: string;
  pos: string;
}

const CALLOUTS: Callout[] = [
  {
    id: "ui",
    code: "A",
    label: "Web & Mobile UI",
    detail: "TypeScript · React · Next.js · React Native · Flutter",
    pos: "right-2 top-[13%] sm:right-0",
  },
  {
    id: "api",
    code: "B",
    label: "Backend & APIs",
    detail: "Node.js · Express · FastAPI · Socket.IO · BullMQ",
    pos: "left-0 bottom-[22%] sm:-left-2",
  },
  {
    id: "cloud",
    code: "C",
    label: "Data & Cloud",
    detail: "MongoDB · Redis · Kafka · Docker · Azure CI/CD",
    pos: "right-0 bottom-[6%] sm:right-2",
  },
];

export function CodexHeroDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = CALLOUTS.find((c) => c.id === activeId);

  return (
    <figure className="relative mx-auto w-full max-w-[500px] select-none">
      {/* Subtle top-left figure tag */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        <span className="text-accent">+</span>
        <span>FIG. 01</span>
      </div>

      {/* Hand-drawn Renaissance ink sketch blended seamlessly onto the archival paper */}
      <div className="relative aspect-square w-full">
        <Image
          src="/imgs/hero-sketch.jpg"
          alt="Fine-line Renaissance scientific ink sketch of an armillary sphere, precision gears, and drafting compass"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 500px"
          className="ink-blend object-contain"
        />

        {/* Minimalist hairline callout labels */}
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
              className={`group absolute z-10 flex items-center gap-2 bg-paper/85 px-2 py-1 backdrop-blur-[2px] transition-colors ${item.pos}`}
            >
              <span
                className={`flex size-4 items-center justify-center border font-mono text-[9px] transition-colors ${
                  isOn
                    ? "border-accent bg-accent text-paper"
                    : "border-hairline-strong text-ink-muted group-hover:border-accent group-hover:text-accent"
                }`}
              >
                {item.code}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.13em] transition-colors ${
                  isOn ? "text-ink" : "text-ink-secondary group-hover:text-ink"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quiet single-line caption beneath sketch */}
      <figcaption className="mt-1 flex min-h-6 items-center justify-between border-t border-hairline pt-2.5 font-mono text-[10px] tracking-[0.1em] text-ink-muted">
        <span className="truncate">
          {active ? (
            <>
              <span className="mr-2 text-accent">[{active.code}]</span>
              <span className="text-ink-secondary">{active.detail}</span>
            </>
          ) : (
            "STUDY OF SYSTEMS & ENGINEERING CRAFT"
          )}
        </span>
        <span className="ml-3 shrink-0 uppercase">PLATE I</span>
      </figcaption>
    </figure>
  );
}
