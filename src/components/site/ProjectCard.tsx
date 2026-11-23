import Link from "next/link";
import { stackList } from "@/data/projects";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: string;
}

export function ProjectCard({ project, index = "01" }: ProjectCardProps) {
  const stack = stackList(project);

  return (
    <article className="py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        {/* Left Metadata Column */}
        <div className="lg:col-span-3 lg:border-r lg:border-hairline lg:pr-8">
          <span className="font-display text-[44px] font-normal leading-none text-ink/25">
            {index}
          </span>
          <dl className="mt-5 space-y-3 font-mono text-[10.5px] uppercase tracking-[0.14em]">
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
              <dd className="mt-1 flex flex-wrap gap-x-2.5 gap-y-1 text-[10px] leading-relaxed text-ink-secondary">
                {stack.slice(0, 10).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* Center Editorial Column */}
        <div className="lg:col-span-5 lg:border-r lg:border-hairline lg:px-8">
          <h3 className="font-display text-[42px] font-normal leading-none tracking-[-0.02em] text-ink sm:text-[50px]">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-muted">
            {project.role}
          </p>

          <p className="mt-5 font-sans text-[15px] font-light leading-[1.75] text-ink-secondary">
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

        {/* Right Borderless Ink Schematic Column */}
        <div className="flex flex-col justify-between lg:col-span-4 lg:pl-8">
          <div>
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              <span className="text-accent">[FIG. 02]</span>
              <span>SYSTEM LAYERS</span>
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
                  <path d="M 1 2 L 8.5 5 L 1 8 z" fill="#8c3b2b" />
                </marker>
              </defs>

              {/* Subtle geometric compass arc */}
              <circle
                cx="150"
                cy="105"
                r="86"
                fill="none"
                stroke="#1e1b18"
                strokeOpacity="0.08"
                strokeDasharray="3 4"
              />
              <line
                x1="150"
                y1="6"
                x2="150"
                y2="204"
                stroke="#1e1b18"
                strokeOpacity="0.07"
              />

              {/* Connectors */}
              <line
                x1="150"
                y1="52"
                x2="150"
                y2="82"
                stroke="#8c3b2b"
                strokeWidth="1"
                markerEnd="url(#thinArrow)"
              />
              <line
                x1="150"
                y1="126"
                x2="150"
                y2="156"
                stroke="#8c3b2b"
                strokeWidth="1"
                markerEnd="url(#thinArrow)"
              />

              {/* Layer 1 */}
              <rect
                x="44"
                y="16"
                width="212"
                height="36"
                fill="#f6f3ec"
                stroke="#1e1b18"
                strokeOpacity="0.35"
                strokeWidth="0.9"
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

              {/* Layer 2 */}
              <rect
                x="28"
                y="84"
                width="244"
                height="42"
                fill="#f6f3ec"
                stroke="#8c3b2b"
                strokeOpacity="0.7"
                strokeWidth="1"
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

              {/* Layer 3 */}
              <rect
                x="40"
                y="158"
                width="220"
                height="36"
                fill="#f6f3ec"
                stroke="#1e1b18"
                strokeOpacity="0.35"
                strokeWidth="0.9"
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
            </svg>
          </div>

          <div className="mt-6 space-y-3 border-t border-hairline pt-4">
            {project.architecture.map((part) => (
              <div key={part.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                  {part.title}
                </p>
                <p className="mt-0.5 font-sans text-[12.5px] font-light leading-relaxed text-ink-muted">
                  {part.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
