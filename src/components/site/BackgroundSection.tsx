import { Stars } from "./Stars";

const timeline = [
  {
    year: "2024 — Now",
    role: "Software Engineer",
    detail: "Full-stack development, cloud infrastructure, deployment automation.",
  },
  {
    year: "2020 — 2024",
    role: "BS Computer Science",
    detail: "University of Karachi.",
  },
];

export function BackgroundSection() {
  return (
    <section
      id="bg"
      className="relative overflow-hidden bg-[#07080c] px-6 py-24 text-white lg:px-16 lg:py-32 xl:px-20"
    >
      <Stars field={0} />

      {/* orbit arc bleeding off the top-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[420px] -right-[280px] size-[720px] rounded-full border border-white/[0.05]"
      />

      <div className="relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
            <span className="text-[#ffb45c]">01</span>
            Background
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {timeline.map((entry, i) => (
            <div
              key={i}
              className="grid gap-1 border-t border-white/[0.07] py-8 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <p className="pt-0.5 font-mono text-[12px] tracking-[0.1em] text-white/35">
                {entry.year}
              </p>
              <div>
                <p className="text-[20px] font-medium leading-snug text-white/90 lg:text-[22px]">
                  {entry.role}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/45">
                  {entry.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
