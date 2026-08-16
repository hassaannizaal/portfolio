import { Stars } from "./Stars";

const projects = [
  {
    name: "Portfolio",
    desc: "This site. A Three.js black hole rendered in custom shaders.",
    tech: "Next.js · Three.js",
    href: "https://github.com/hassaannizaal",
  },
  {
    name: "Cloud Dashboard",
    desc: "Real-time monitoring for cloud infrastructure.",
    tech: "React · Node · AWS",
    href: "#",
  },
  {
    name: "Task Engine",
    desc: "Task queue with retry logic and observability built in.",
    tech: "TypeScript · Redis",
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative overflow-hidden bg-[#07080c] px-6 py-24 text-white lg:px-16 lg:py-32 xl:px-20"
    >
      <Stars field={1} />

      {/* orbit arc bleeding off the left */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[30%] -left-[520px] size-[880px] rounded-full border border-white/[0.05]"
      />

      <div className="relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
            <span className="text-[#ffb45c]">02</span>
            Projects
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group block border-t border-white/[0.07] py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline justify-between gap-6">
                <p className="text-[20px] font-medium leading-snug text-white/90 transition-colors duration-200 group-hover:text-[#ffb45c] lg:text-[22px]">
                  {p.name}
                </p>
                <p className="shrink-0 font-mono text-[11px] tracking-[0.1em] text-white/30">
                  {p.tech}
                </p>
              </div>
              <p className="mt-1.5 max-w-[36rem] text-[14px] leading-relaxed text-white/45">
                {p.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
