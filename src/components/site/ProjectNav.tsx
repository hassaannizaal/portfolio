"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/types";

export const PROJECT_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "stack", label: "Stack" },
  { id: "architecture", label: "Architecture" },
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
  { id: "outcome", label: "Outcome" },
] as const;

export function ProjectNav({
  project,
  others,
}: {
  project: Project;
  others: Project[];
}) {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const ids = PROJECT_SECTIONS.map((s) => s.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [project.slug]);

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-28 w-[220px] pr-6">
          <a
            href="/projects"
            className="mb-6 inline-flex min-h-10 items-center font-mono text-[11px] uppercase tracking-[0.14em] text-fg/50 transition-colors hover:text-accent"
          >
            ← Projects
          </a>

          <p className="mb-1 text-[15px] font-medium tracking-tight text-fg">
            {project.title}
          </p>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/40">
            {project.year}
          </p>

          <nav className="flex flex-col border-l border-line">
            {PROJECT_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`-ml-px border-l py-1.5 pl-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  active === s.id
                    ? "border-accent text-accent"
                    : "border-transparent text-fg/45 hover:text-fg/80"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          {others.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/35">
                Other projects
              </p>
              <ul className="space-y-2">
                {others.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`/projects/${p.slug}`}
                      className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg/55 transition-colors hover:text-accent"
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      <div className="sticky top-[60px] z-30 -mx-4 mb-8 border-b border-line bg-bg/90 px-4 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:hidden">
        <div className="flex items-center gap-3 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="/projects"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45"
          >
            ← Projects
          </a>
          {PROJECT_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                active === s.id
                  ? "border-accent/40 text-accent"
                  : "border-line text-fg/50"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
