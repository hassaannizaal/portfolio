const projects = [
  {
    title: "TrashCat",
    period: "2025 — Present",
    tag: "Work",
    desc: "Educational gaming platform combining Unity gameplay with learning-science principles to build math fluency. AWS serverless, a few hundred active users.",
    links: { github: "#", live: "#" },
  },
  {
    title: "Crossover Hiring Platform",
    period: "2023 — Present",
    tag: "Work",
    desc: "Global hiring platform processing tens of thousands of applications monthly. AI-powered grading, candidate screening and funnel automations.",
    links: { live: "#" },
  },
  {
    title: "InsideSales: PlayBooks",
    period: "2021 — 2023",
    tag: "Work",
    desc: "Sales Engagement micro-service platform in Go, Rust, NodeJS and PHP with a React UI on AWS. Coordinated SaaS migrations and DC shifts.",
    links: { github: "#", live: "#" },
  },
];

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 lg:mb-14">
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-fg/70 lg:text-[13px]">
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
      className="relative bg-bg px-6 py-16 text-fg lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle label="02 · Projects" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-lg border border-line bg-fg/[0.015] p-5 transition-colors hover:border-fg/25"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                    {p.tag}
                  </span>
                  <h3 className="text-[15px] font-medium leading-snug tracking-tight text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg/40">
                    {p.period}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source`}
                      className="flex size-7 items-center justify-center rounded-md border border-line text-fg/45 transition-colors hover:border-fg/30 hover:text-accent"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live`}
                      className="flex size-7 items-center justify-center rounded-md border border-line text-fg/45 transition-colors hover:border-fg/30 hover:text-accent"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 1.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V7.5M7.5 1.5h3v3M5.5 6.5l5-5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[13px] leading-[1.6] text-fg/60">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
