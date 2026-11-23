"use client";

import { useState } from "react";
import Link from "next/link";
import { stackList } from "@/data/projects";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: string;
}

export function ProjectCard({ project, index = "01" }: ProjectCardProps) {
  const stack = stackList(project);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <article className="py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        {/* Left Metadata Column */}
        <div className="lg:col-span-3 lg:border-r lg:border-hairline lg:pr-8">
          <span className="font-display text-[48px] font-normal leading-none text-ink/22">
            {index}
          </span>
          <dl className="mt-5 space-y-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em]">
            <div>
              <dt className="text-ink-muted">Category</dt>
              <dd className="mt-0.5 text-ink">{project.tag}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Timeline</dt>
              <dd className="mt-0.5 text-ink">{project.period}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Stack</dt>
              <dd className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-1 text-[10px] leading-relaxed text-ink-secondary">
                {stack.slice(0, 10).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* Center Editorial Column */}
        <div className="lg:col-span-5 lg:border-r lg:border-hairline lg:px-8">
          <h3 className="font-display text-[44px] font-normal leading-none tracking-[-0.02em] text-ink sm:text-[52px]">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted">
            {project.role}
          </p>

          <p className="mt-5 font-sans text-[15px] font-light leading-[1.78] text-ink-secondary">
            {project.summary}
          </p>

          <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
            {project.features.map((feat, i) => (
              <li
                key={feat}
                className="flex items-baseline gap-3 font-sans text-[13.5px] font-light leading-relaxed text-ink-secondary"
              >
                <span className="font-mono text-[10px] text-accent">
                  0{i + 1}
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={`/projects/${project.slug}`}
              className="editorial-link font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
            >
              Read Case Study &amp; Diagrams <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Interactive Ink Schematic Column */}
        <div className="flex flex-col justify-between lg:col-span-4 lg:pl-8">
          <div>
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              <span className="text-accent">[FIG. 02]</span>
              <span>HOVER TO INSPECT</span>
            </div>

            <svg
              viewBox="0 0 300 210"
              className="h-auto w-full select-none"
              role="img"
              aria-label={`${project.title} architecture schematic`}
            >
              <defs>
                <marker
                  id="thinArrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 1 2 L 8.5 5 L 1 8 z" fill="var(--accent)" />
                </marker>
              </defs>

              <circle
                cx="150"
                cy="105"
                r="86"
                fill="none"
                stroke="var(--ink)"
                strokeOpacity="0.1"
                strokeDasharray="3 4"
              />
              <line
                x1="150"
                y1="6"
                x2="150"
                y2="204"
                stroke="var(--ink)"
                strokeOpacity="0.09"
              />

              <line
                x1="150"
                y1="52"
                x2="150"
                y2="82"
                stroke="var(--accent)"
                strokeWidth="1"
                markerEnd="url(#thinArrow)"
              />
              <line
                x1="150"
                y1="126"
                x2="150"
                y2="156"
                stroke="var(--accent)"
                strokeWidth="1"
                markerEnd="url(#thinArrow)"
              />

              {/* Layer 2 in data = Dashboard (top) */}
              <g
                onMouseEnter={() => setActiveLayer(2)}
                onMouseLeave={() => setActiveLayer(null)}
                className="cursor-pointer"
              >
                <rect
                  x="44"
                  y="16"
                  width="212"
                  height="36"
                  fill={activeLayer === 2 ? "var(--paper-soft)" : "var(--paper)"}
                  stroke={activeLayer === 2 ? "var(--accent)" : "var(--ink)"}
                  strokeOpacity={activeLayer === 2 ? 1 : 0.35}
                  strokeWidth={activeLayer === 2 ? 1.2 : 0.9}
                />
                <text
                  x="150"
                  y="30"
                  textAnchor="middle"
                  className="fill-ink-muted font-mono text-[7.5px] uppercase tracking-[0.16em]"
                >
                  01 · DASHBOARD
                </text>
                <text
                  x="150"
                  y="44"
                  textAnchor="middle"
                  className="fill-ink font-display text-[14px] font-medium"
                >
                  Next.js Operator Portal
                </text>
              </g>

              {/* Layer 1 in data = APIs (middle) */}
              <g
                onMouseEnter={() => setActiveLayer(1)}
                onMouseLeave={() => setActiveLayer(null)}
                className="cursor-pointer"
              >
                <rect
                  x="28"
                  y="84"
                  width="244"
                  height="42"
                  fill={activeLayer === 1 ? "var(--paper-soft)" : "var(--paper)"}
                  stroke="var(--accent)"
                  strokeOpacity={activeLayer === 1 ? 1 : 0.65}
                  strokeWidth={activeLayer === 1 ? 1.35 : 1}
                />
                <text
                  x="150"
                  y="99"
                  textAnchor="middle"
                  className="fill-accent font-mono text-[7.5px] uppercase tracking-[0.16em]"
                >
                  02 · OMNICHANNEL CORE
                </text>
                <text
                  x="150"
                  y="114"
                  textAnchor="middle"
                  className="fill-ink font-display text-[14px] font-medium"
                >
                  REST · Socket.IO · BullMQ · FastAPI
                </text>
              </g>

              {/* Layer 0 in data = Control plane & Data (bottom) */}
              <g
                onMouseEnter={() => setActiveLayer(0)}
                onMouseLeave={() => setActiveLayer(null)}
                className="cursor-pointer"
              >
                <rect
                  x="40"
                  y="158"
                  width="220"
                  height="36"
                  fill={activeLayer === 0 ? "var(--paper-soft)" : "var(--paper)"}
                  stroke={activeLayer === 0 ? "var(--accent)" : "var(--ink)"}
                  strokeOpacity={activeLayer === 0 ? 1 : 0.35}
                  strokeWidth={activeLayer === 0 ? 1.2 : 0.9}
                />
                <text
                  x="150"
                  y="172"
                  textAnchor="middle"
                  className="fill-ink-muted font-mono text-[7.5px] uppercase tracking-[0.16em]"
                >
                  03 · DATA &amp; CONTROL PLANE
                </text>
                <text
                  x="150"
                  y="186"
                  textAnchor="middle"
                  className="fill-ink font-mono text-[9px] tracking-[0.08em]"
                >
                  MONGO · REDIS · KAFKA · MINIO
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-6 space-y-3 border-t border-hairline pt-4">
            {project.architecture.map((part, idx) => {
              const highlighted = activeLayer === idx;
              return (
                <div
                  key={part.title}
                  onMouseEnter={() => setActiveLayer(idx)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`border-l pl-3 transition-colors ${
                    highlighted
                      ? "border-accent"
                      : "border-transparent"
                  }`}
                >
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                      highlighted ? "text-accent" : "text-ink"
                    }`}
                  >
                    {part.title}
                  </p>
                  <p className="mt-0.5 font-sans text-[12.5px] font-light leading-relaxed text-ink-muted">
                    {part.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
