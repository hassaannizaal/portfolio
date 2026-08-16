const odin = {
  slug: "odin",
  title: "ODIN",
  period: "2025 — Present",
  tag: "Work",
  desc: "Omni-channel customer engagement platform with social listening, agent inbox, CRM, campaigns and AI-driven insights across Facebook, Instagram, WhatsApp and YouTube. Built as a microservices monorepo with a Next.js portal, Node.js APIs, real-time Socket.IO, BullMQ workers, a Kafka bot bridge and a Python sentiment service — driven by a doc-driven agent orchestrator.",
  stack: [
    "Next.js",
    "Node.js",
    "TypeScript",
    "Socket.IO",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Kafka",
    "MinIO",
    "FastAPI",
    "PyTorch",
  ],
  links: {} as { github?: string; live?: string },
};

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 sm:mb-10 sm:gap-4 lg:mb-14">
      <span className="h-px flex-1 bg-line" />
      <h2 className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/70 sm:text-[12px] sm:tracking-[0.24em] lg:text-[13px]">
        {label}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative bg-bg px-4 py-12 text-fg sm:px-6 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle label="02 · Projects" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group flex flex-col rounded-lg border border-line bg-fg/[0.015] p-4 transition-colors hover:border-fg/25 sm:p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                  {odin.tag}
                </span>
                <h3 className="text-[15px] font-medium leading-snug tracking-tight text-fg">
                  {odin.title}
                </h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg/40">
                  {odin.period}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                {odin.links.github && (
                  <a
                    href={odin.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ODIN source"
                    className="flex size-7 items-center justify-center rounded-md border border-line text-fg/45 transition-colors hover:border-fg/30 hover:text-accent"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
                {odin.links.live && (
                  <a
                    href={odin.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ODIN live"
                    className="flex size-7 items-center justify-center rounded-md border border-line text-fg/45 transition-colors hover:border-fg/30 hover:text-accent"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 1.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V7.5M7.5 1.5h3v3M5.5 6.5l5-5" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <p className="text-[13px] leading-[1.6] text-fg/60">{odin.desc}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {odin.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-line bg-fg/[0.02] px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-fg/50"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-3 sm:pt-4">
              <a
                href={`/projects/${odin.slug}`}
                className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-fg/70 transition-colors hover:text-accent"
                aria-label={`View ${odin.title} details`}
              >
                View details
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/projects"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-line bg-fg/[0.02] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/70 transition-colors hover:border-fg/25 hover:text-accent sm:w-auto"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
