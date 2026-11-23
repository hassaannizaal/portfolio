import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import type { Project } from "@/lib/types";
import { ArchDiagram } from "./ArchDiagram";
import { ProjectCard } from "./ProjectCard";
import { ProjectNav, type NavItem } from "./ProjectNav";

interface ProjectDetailProps {
  project: Project;
  others: Project[];
}

function SubHeading({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-b border-hairline pb-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        {index}
      </p>
      <h2 className="mt-1 font-display text-[32px] font-normal leading-tight text-ink sm:text-[38px]">
        {title}
      </h2>
    </div>
  );
}

export function ProjectDetail({ project, others }: ProjectDetailProps) {
  const detail = project.detail;

  const navItems: NavItem[] = detail
    ? [
        { id: "overview", index: "01", label: "Overview & Problem" },
        { id: "decisions", index: "02", label: "Key Decisions" },
        { id: "diagrams", index: "03", label: "Architecture Diagrams" },
        { id: "stack", index: "04", label: "Tech Stack & Layers" },
        { id: "features", index: "05", label: "System Breakdown" },
        { id: "outcome", index: "06", label: "Outcomes & Next" },
      ]
    : [{ id: "overview", index: "01", label: "Overview" }];

  return (
    <div className="px-5 pb-24 pt-10 sm:px-8 sm:pt-14 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          <div className="flex items-center gap-3">
            <Link
              href="/#proj"
              className="text-ink-secondary transition-colors hover:text-accent"
            >
              ← Portfolio
            </Link>
            <span>/</span>
            <Link
              href="/projects"
              className="text-ink-secondary transition-colors hover:text-accent"
            >
              Projects
            </Link>
          </div>
          <span>
            {project.tag} · {project.period}
          </span>
        </div>

        {/* Editorial Title Header with Bespoke Mechanical Sketch */}
        <header className="mb-16 border-b border-hairline pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                Case Study · {project.year}
              </p>
              <h1 className="mt-3 font-display text-[56px] font-light leading-[0.94] tracking-[-0.025em] text-ink sm:text-[74px]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl font-sans text-[16.5px] font-light leading-[1.75] text-ink-secondary">
                {project.summary}
              </p>

              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.14em]">
                <div>
                  <dt className="text-ink-muted">Role</dt>
                  <dd className="mt-0.5 text-ink">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Timeline</dt>
                  <dd className="mt-0.5 text-ink">{project.period}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-square w-full max-w-[340px] select-none">
                <Image
                  src="/imgs/odin-sketch-light.png"
                  alt={`${project.title} mechanical architecture etching`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="theme-light-only object-contain"
                />
                <Image
                  src="/imgs/odin-sketch-dark.png"
                  alt={`${project.title} dark-mode mechanical architecture etching`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="theme-dark-only object-contain"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Two-Column Body */}
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <aside className="hidden lg:sticky lg:top-24 lg:col-span-3 lg:block">
            <ProjectNav items={navItems} />
          </aside>

          <div className="space-y-16 lg:col-span-9">
            {detail ? (
              <>
                {/* 01. Overview & Problem */}
                <section className="space-y-8">
                  <SubHeading
                    id="overview"
                    index="01 / OVERVIEW"
                    title="Overview & Problem"
                  />

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        What It Is
                      </p>
                      <p className="font-sans text-[14.5px] font-light leading-[1.78] text-ink-secondary">
                        {detail.overview}
                      </p>
                    </div>
                    <div>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        The Problem
                      </p>
                      <p className="font-sans text-[14.5px] font-light leading-[1.78] text-ink-secondary">
                        {detail.problem}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-8 border-y border-hairline py-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                        Directly Owned
                      </p>
                      <ul className="space-y-2">
                        {detail.owned.map((item, i) => (
                          <li
                            key={item}
                            className="flex items-baseline gap-3 font-sans text-[14px] font-light text-ink-secondary"
                          >
                            <span className="font-mono text-[10px] text-accent">
                              0{i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-hairline pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        Shared With Team
                      </p>
                      <ul className="space-y-2">
                        {detail.shared.map((item, i) => (
                          <li
                            key={item}
                            className="flex items-baseline gap-3 font-sans text-[14px] font-light text-ink-secondary"
                          >
                            <span className="font-mono text-[10px] text-ink-muted">
                              0{i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 02. Key Decisions */}
                <section className="space-y-8">
                  <SubHeading
                    id="decisions"
                    index="02 / DECISIONS"
                    title="Engineering Decisions"
                  />

                  <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    {detail.decisions.map((decision, idx) => (
                      <div
                        key={decision.title}
                        className="border-t border-hairline pt-4"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                          0{idx + 1}
                        </p>
                        <h3 className="mt-1.5 font-display text-[24px] font-normal leading-snug text-ink">
                          {decision.title}
                        </h3>
                        <p className="mt-2 font-sans text-[14px] font-light leading-[1.72] text-ink-secondary">
                          {decision.why}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 03. Architecture Diagrams */}
                <section className="space-y-8">
                  <SubHeading
                    id="diagrams"
                    index="03 / DIAGRAMS"
                    title="Architecture Diagrams"
                  />

                  <div className="space-y-10">
                    {detail.diagrams.map((spec, idx) => (
                      <ArchDiagram
                        key={spec.id}
                        spec={spec}
                        figureLabel={`FIG. 0${idx + 1}`}
                      />
                    ))}
                  </div>
                </section>

                {/* 04. Tech Stack & Layers */}
                <section className="space-y-8">
                  <SubHeading
                    id="stack"
                    index="04 / STACK"
                    title="Tech Stack & Layers"
                  />

                  <div className="grid gap-8 sm:grid-cols-3">
                    {detail.layers.map((layer, idx) => (
                      <div
                        key={layer.title}
                        className="border-t border-hairline pt-4"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                          Layer 0{idx + 1}
                        </p>
                        <h3 className="mt-1.5 font-display text-[24px] font-normal text-ink">
                          {layer.title}
                        </h3>
                        <p className="mt-2 font-sans text-[13.5px] font-light leading-[1.7] text-ink-secondary">
                          {layer.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <dl className="grid gap-6 border-y border-hairline py-6 sm:grid-cols-2 lg:grid-cols-3">
                    {(
                      [
                        ["Languages", detail.stack.lang],
                        ["Frontend", detail.stack.frontend],
                        ["Backend", detail.stack.backend],
                        ["Data & Queues", detail.stack.data],
                        ["Infrastructure", detail.stack.infra],
                        ["Auth", detail.stack.auth],
                      ] as const
                    ).map(([label, items]) => (
                      <div key={label}>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                          {label}
                        </dt>
                        <dd className="mt-1.5 font-mono text-[11px] leading-relaxed text-ink">
                          {items.join(" · ")}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>

                {/* 05. System Breakdown */}
                <section className="space-y-8">
                  <SubHeading
                    id="features"
                    index="05 / MODULES"
                    title="System Breakdown"
                  />

                  <div className="divide-y divide-hairline border-b border-hairline">
                    {detail.featureGroups.map((group, idx) => (
                      <div key={group.id} className="py-8 first:pt-2">
                        <div className="mb-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                            Module 0{idx + 1}
                          </p>
                          <h3 className="mt-1 font-display text-[28px] font-normal text-ink">
                            {group.title}
                          </h3>
                          <p className="mt-1 font-sans text-[13.5px] font-light text-ink-muted">
                            {group.blurb}
                          </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <div key={item.name}>
                              <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                                {item.name}
                              </h4>
                              <p className="mt-1.5 font-sans text-[14px] font-light leading-[1.7] text-ink-secondary">
                                {item.how}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      Also Shipped
                    </p>
                    <ul className="grid gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                      {detail.alsoShipped.map((item, idx) => (
                        <li
                          key={item}
                          className="flex items-baseline gap-3 font-sans text-[14px] font-light text-ink-secondary"
                        >
                          <span className="font-mono text-[10px] text-accent">
                            0{idx + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 06. Outcomes & Next */}
                <section className="space-y-8">
                  <SubHeading
                    id="outcome"
                    index="06 / OUTCOMES"
                    title="Outcomes & What’s Next"
                  />

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-slate">
                        Production Outcomes
                      </p>
                      <ul className="space-y-2.5">
                        {detail.outcome.map((item, i) => (
                          <li
                            key={item}
                            className="flex items-baseline gap-3 font-sans text-[14px] font-light leading-relaxed text-ink-secondary"
                          >
                            <span className="font-mono text-[10px] text-accent-slate">
                              0{i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        Planned Improvements
                      </p>
                      <ul className="space-y-2.5">
                        {detail.next.map((item, i) => (
                          <li
                            key={item}
                            className="flex items-baseline gap-3 font-sans text-[14px] font-light leading-relaxed text-ink-secondary"
                          >
                            <span className="font-mono text-[10px] text-accent">
                              0{i + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-y border-hairline py-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      Demo &amp; Walkthrough
                    </p>
                    <p className="mt-2 max-w-2xl font-sans text-[14.5px] font-light leading-relaxed text-ink-secondary">
                      {detail.demo}
                    </p>
                    <a
                      href={`mailto:${portfolio.email}?subject=ODIN%20Walkthrough`}
                      className="editorial-link mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink hover:text-accent"
                    >
                      Request a Walkthrough →
                    </a>
                  </div>
                </section>
              </>
            ) : (
              <section id="overview">
                <p className="font-sans text-[15px] font-light leading-[1.75] text-ink-secondary">
                  {project.summary}
                </p>
              </section>
            )}

            {others.length > 0 && (
              <section className="border-t border-hairline pt-12">
                <h2 className="mb-6 font-display text-[32px] font-normal text-ink">
                  More Projects
                </h2>
                <div className="divide-y divide-hairline border-y border-hairline">
                  {others.map((other, idx) => (
                    <ProjectCard
                      key={other.slug}
                      project={other}
                      index={String(idx + 2).padStart(2, "0")}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
