"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { stackList } from "@/data/projects";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: string;
}

const DIAGRAM_PINS = [
  {
    archIndex: 2, // Dashboard / Channels entry
    code: "01",
    label: "5-Channel Inbox",
    pin: { x: 250, y: 122 },
    elbow: { x: 344, y: 66 },
    end: { x: 392, y: 66 },
    pos: "right-0 top-[9%]",
  },
  {
    archIndex: 1, // APIs, Sockets & Workers
    code: "02",
    label: "APIs & Workers",
    pin: { x: 386, y: 248 },
    elbow: { x: 422, y: 318 },
    end: { x: 446, y: 318 },
    pos: "right-0 top-[61%]",
  },
  {
    archIndex: 0, // Control plane & Stores
    code: "03",
    label: "Vaults & Control",
    pin: { x: 186, y: 388 },
    elbow: { x: 120, y: 446 },
    end: { x: 82, y: 446 },
    pos: "left-0 bottom-[6%]",
  },
];

export function ProjectCard({ project, index = "01" }: ProjectCardProps) {
  const stack = stackList(project);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <article className="py-12 sm:py-16">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left Editorial Monograph Column (6 cols) */}
        <div className="lg:col-span-6">
          <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[48px] font-light leading-none text-ink/25">
                {index}
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {project.tag} · {project.period}
                </p>
                <h3 className="mt-1 font-display text-[48px] font-normal leading-[0.95] tracking-[-0.025em] text-ink sm:text-[58px]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted">
            {project.role}
          </p>

          <p className="mt-5 font-sans text-[15.5px] font-light leading-[1.8] text-ink-secondary">
            {project.summary}
          </p>

          {/* Key Highlights */}
          <div className="mt-7 border-t border-hairline pt-6">
            <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
              Engineering Highlights
            </p>
            <ul className="space-y-2.5">
              {project.features.map((feat, i) => (
                <li
                  key={feat}
                  className="flex items-baseline gap-3 font-sans text-[14px] font-light leading-relaxed text-ink-secondary"
                >
                  <span className="font-mono text-[10px] text-accent">
                    0{i + 1}
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border border-hairline bg-paper-elevated px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Signature CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href={`/projects/${project.slug}`}
              className="ink-button inline-flex min-h-11 items-center gap-2.5 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              <span>Explore Case Study &amp; Diagrams</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="font-script text-[18px] text-ink-muted">
              3 interactive architecture plates inside
            </span>
          </div>
        </div>

        {/* Right Custom Hand-Drawn Mechanical Conduit Sketch Column (6 cols) */}
        <div className="lg:col-span-6">
          <div className="specimen-surface relative p-5 sm:p-6">
            {/* Subtle drafting corner ticks */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-1.5 -top-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1.5 -top-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>

            <div className="mb-2 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
              <span className="text-accent">FIG. 02 · ODIN MECHANISM</span>
              <span className="font-script text-[15px] normal-case tracking-normal text-ink-muted">
                5 channels → 1 inbox
              </span>
            </div>

            {/* Bespoke Transparent Light/Dark Renaissance Clockwork Conduit Sketch */}
            <div className="relative mx-auto aspect-square w-full max-w-[440px] select-none">
              <Image
                src="/imgs/odin-sketch-light.png"
                alt="Fine-line Renaissance mechanical sketch representing ODIN's five converging channels, central router, twin worker wheels, and four data stores"
                fill
                unoptimized
                sizes="(max-width: 1024px) 90vw, 440px"
                className="theme-light-only object-contain"
              />
              <Image
                src="/imgs/odin-sketch-dark.png"
                alt="Luminous ivory and brass mechanical engraving representing ODIN's five converging channels, central router, twin worker wheels, and four data stores"
                fill
                unoptimized
                sizes="(max-width: 1024px) 90vw, 440px"
                className="theme-dark-only object-contain"
              />

              {/* Precision SVG Callout Leader Overlay */}
              <svg
                viewBox="0 0 500 500"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                {DIAGRAM_PINS.map((item) => {
                  const isOn = activeLayer === item.archIndex;
                  const dimmed = activeLayer !== null && !isOn;
                  return (
                    <g
                      key={item.code}
                      style={{
                        opacity: dimmed ? 0.22 : 1,
                        transition: "opacity 220ms ease",
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
                        r={isOn ? 7 : 4.5}
                        fill="none"
                        stroke={isOn ? "var(--accent)" : "var(--ink)"}
                        strokeOpacity={isOn ? 0.9 : 0.45}
                        strokeWidth="0.9"
                      />
                      <circle
                        cx={item.pin.x}
                        cy={item.pin.y}
                        r="2.2"
                        fill={isOn ? "var(--accent)" : "var(--ink)"}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive Pins */}
              {DIAGRAM_PINS.map((item) => {
                const isOn = activeLayer === item.archIndex;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onMouseEnter={() => setActiveLayer(item.archIndex)}
                    onMouseLeave={() => setActiveLayer(null)}
                    onClick={() =>
                      setActiveLayer((curr) =>
                        curr === item.archIndex ? null : item.archIndex,
                      )
                    }
                    className={`absolute z-10 flex items-center gap-1.5 border px-2 py-1 backdrop-blur-sm transition-colors ${
                      isOn
                        ? "border-accent bg-paper text-ink"
                        : "border-hairline bg-paper-elevated text-ink-secondary hover:border-hairline-strong hover:text-ink"
                    } ${item.pos}`}
                  >
                    <span className="font-mono text-[9px] text-accent">
                      {item.code}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.11em]">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Synchronized Architecture Notes */}
            <div className="mt-4 grid gap-3 border-t border-hairline pt-4 sm:grid-cols-3">
              {project.architecture.map((part, idx) => {
                const on = activeLayer === idx;
                return (
                  <div
                    key={part.title}
                    onMouseEnter={() => setActiveLayer(idx)}
                    onMouseLeave={() => setActiveLayer(null)}
                    className={`cursor-default border-t pt-2.5 transition-colors ${
                      on ? "border-accent" : "border-hairline"
                    }`}
                  >
                    <p
                      className={`font-mono text-[9.5px] uppercase tracking-[0.14em] transition-colors ${
                        on ? "text-accent" : "text-ink"
                      }`}
                    >
                      {part.title}
                    </p>
                    <p className="mt-1 font-sans text-[12px] font-light leading-relaxed text-ink-muted">
                      {part.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
