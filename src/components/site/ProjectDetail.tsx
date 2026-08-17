import type { ReactNode } from "react";
import type { Project, ProjectDetailStack } from "@/lib/types";
import { portfolio } from "@/data/portfolio";
import { ArchDiagram } from "./ArchDiagram";
import { ProjectNav } from "./ProjectNav";

const CARD_STACK: { key: keyof Project["stack"]; label: string }[] = [
  { key: "lang", label: "Languages" },
  { key: "backend", label: "Backend" },
  { key: "data", label: "Data" },
  { key: "infra", label: "Infra" },
];

const DETAIL_STACK: { key: keyof ProjectDetailStack; label: string }[] = [
  { key: "lang", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "data", label: "Data" },
  { key: "infra", label: "Infra" },
  { key: "auth", label: "Auth" },
];

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-line py-10 lg:scroll-mt-32 lg:py-12"
    >
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/40">
        {label}
      </p>
      {children}
    </section>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-line bg-fg/[0.02] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-fg/60">
      {children}
    </span>
  );
}

export function ProjectDetail({
  project,
  others,
}: {
  project: Project;
  others: Project[];
}) {
  const detail = project.detail;
  const overview = detail?.overview ?? project.summary;
  const role = detail?.role ?? project.role;
  const layers = detail?.layers ?? project.architecture;
  const outcome = detail?.outcome ?? project.outcome;
  const demoMailto = `mailto:${portfolio.email}?subject=${encodeURIComponent(`${project.title} walkthrough`)}`;

  return (
    <div className="bg-bg px-4 pb-20 pt-24 text-fg sm:px-6 sm:pt-28 lg:px-16 lg:pt-32 xl:px-20">
      <div className="mx-auto flex max-w-6xl gap-10 lg:gap-14">
        <ProjectNav project={project} others={others} />

        <article className="min-w-0 flex-1">
          <Section id="overview" label="Overview">
            <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
              {project.tag}
            </span>
            <h1 className="text-[28px] font-medium leading-tight tracking-tight sm:text-[36px]">
              {project.title}
            </h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg/40">
              {project.period}
            </p>
            <p className="mt-5 max-w-[42rem] text-[15px] leading-[1.65] text-fg/70">
              {overview}
            </p>

            <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              {detail?.problem && (
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                    Problem
                  </p>
                  <p className="text-[14px] leading-[1.65] text-fg/65">
                    {detail.problem}
                  </p>
                </div>
              )}
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                  Role
                </p>
                <p className="text-[14px] leading-[1.65] text-fg/65">{role}</p>
              </div>
            </div>

            {detail && (detail.owned.length > 0 || detail.shared.length > 0) && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                    I owned
                  </p>
                  <ul className="space-y-2">
                    {detail.owned.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-[13px] leading-[1.55] text-fg/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                    Shared
                  </p>
                  <ul className="space-y-2">
                    {detail.shared.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 text-[13px] leading-[1.55] text-fg/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-fg/25"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {detail?.decisions && detail.decisions.length > 0 && (
              <ul className="mt-8 space-y-4 border-t border-line pt-6">
                {detail.decisions.map((d) => (
                  <li key={d.title} className="grid gap-1 sm:grid-cols-12 sm:gap-4">
                    <p className="text-[14px] font-medium text-fg sm:col-span-4">
                      {d.title}
                    </p>
                    <p className="text-[13px] leading-[1.65] text-fg/65 sm:col-span-8">
                      {d.why}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Section>

          <Section id="stack" label="Stack">
            {detail ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {DETAIL_STACK.map((group) => (
                  <div key={group.key}>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.stack[group.key].map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {CARD_STACK.map((group) => (
                  <div key={group.key}>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack[group.key].map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section id="architecture" label="Architecture">
            <div className="mb-8 hidden grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:grid">
              {layers.map((part, i) => (
                <div key={part.title} className="contents">
                  <div className="rounded-lg border border-line bg-fg/[0.02] px-3 py-4 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                      {part.title}
                    </p>
                  </div>
                  {i < layers.length - 1 && (
                    <span aria-hidden="true" className="text-fg/25">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
            <ul className="space-y-5">
              {layers.map((part) => (
                <li key={part.title}>
                  <p className="text-[15px] font-medium text-fg">{part.title}</p>
                  <p className="mt-1 text-[14px] leading-[1.65] text-fg/65">
                    {part.desc}
                  </p>
                </li>
              ))}
            </ul>

            {detail && (
              <div className="mt-10 space-y-5">
                {detail.diagrams.map((spec) => (
                  <ArchDiagram key={spec.id} spec={spec} />
                ))}
              </div>
            )}
          </Section>

          <Section id="features" label="Features">
            {detail ? (
              <div className="space-y-12">
                {detail.featureGroups.map((group, gi) => (
                  <div key={group.id}>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-[18px] font-medium tracking-tight text-fg">
                      {group.title}
                    </h2>
                    <p className="mt-2 max-w-[40rem] text-[13px] leading-[1.6] text-fg/55">
                      {group.blurb}
                    </p>
                    <ul className="mt-5 space-y-4 border-t border-line">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="grid gap-1 border-b border-line/80 py-3 sm:grid-cols-12 sm:gap-4"
                        >
                          <p className="text-[14px] font-medium text-fg sm:col-span-4">
                            {item.name}
                          </p>
                          <p className="text-[13px] leading-[1.65] text-fg/65 sm:col-span-8">
                            {item.how}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {detail.alsoShipped.length > 0 && (
                  <div>
                    <h2 className="text-[18px] font-medium tracking-tight text-fg">
                      Also in the product
                    </h2>
                    <p className="mt-2 max-w-[40rem] text-[13px] leading-[1.6] text-fg/55">
                      I touched these. They are not the story. Assignment, sockets, and the ticket loop are.
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {detail.alsoShipped.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] leading-[1.6] text-fg/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <ol className="space-y-3">
                {project.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-baseline gap-4 text-[14px] leading-[1.65] text-fg/70"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-fg/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {feature}
                  </li>
                ))}
              </ol>
            )}
          </Section>

          <Section id="demo" label="Demo">
            <div className="rounded-lg border border-line bg-fg/[0.02] px-5 py-8 sm:px-6">
              <p className="max-w-[36rem] text-[14px] leading-[1.65] text-fg/65">
                {detail?.demo ??
                  "No live tenant here. Client product, private data. Email me for a walkthrough."}
              </p>
              <a
                href={demoMailto}
                className="mt-5 inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
              >
                Email me for a walkthrough →
              </a>
            </div>
          </Section>

          <Section id="outcome" label="Outcome">
            <ul className="space-y-3">
              {outcome.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-[14px] leading-[1.65] text-fg/70"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-fg/30"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {detail?.next && detail.next.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                  If I had another month
                </p>
                <ul className="space-y-3">
                  {detail.next.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[14px] leading-[1.65] text-fg/65"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent/50"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Section>
        </article>
      </div>
    </div>
  );
}
