import { Stars } from "./Stars";

const projects = [
  {
    title: "TrashCat",
    period: "2025 — Present",
    tag: "Work",
    desc: "An educational gaming platform combining Unity gameplay with research-backed learning science principles to build mathematical fluency. Built on AWS serverless architecture with a few hundred active users.",
    links: { github: "#", live: "#" },
  },
  {
    title: "Crossover Hiring Platform",
    period: "2023 — Present",
    tag: "Work",
    desc: "Led engineering on a global hiring platform processing tens of thousands of applications monthly. Deeply involved in AI-powered features including automatic grading, AI-based candidate screening, and various automations throughout the hiring funnel.",
    links: { live: "#" },
  },
  {
    title: "InsideSales: PlayBooks",
    period: "2021 — 2023",
    tag: "Work",
    desc: "A Sales Engagement platform with a micro-service architecture, written in Golang, Rust, NodeJS and PHP, with a React UI running on AWS. Coordinated multiple parallel tracks including SaaS migrations and data center shifts.",
    links: { github: "#", live: "#" },
  },
];

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative overflow-hidden bg-[#07080c] px-6 py-24 text-white lg:px-16 lg:py-32 xl:px-20"
    >
      <Stars field={1} />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[30%] -left-[520px] size-[880px] rounded-full border border-white/[0.05]"
      />

      <div className="relative">
        <div className="mb-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
              <span className="text-[#ffb45c]">02</span>
              Projects
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[17px] font-medium leading-snug text-white/90 transition-colors group-hover:text-[#ffb45c]">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-white/35">
                    {p.period}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} source`}
                      className="flex size-7 items-center justify-center rounded-md border border-white/[0.08] text-white/35 transition-colors hover:border-white/20 hover:text-white/70"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live`}
                      className="flex size-7 items-center justify-center rounded-md border border-white/[0.08] text-white/35 transition-colors hover:border-white/20 hover:text-white/70"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 1.5H2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V7.5M7.5 1.5h3v3M5.5 6.5l5-5"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <span className="mb-4 w-fit rounded border border-[#ffb45c]/20 bg-[#ffb45c]/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ffb45c]/70">
                {p.tag}
              </span>

              <p className="text-[13px] leading-[1.65] text-white/50">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
