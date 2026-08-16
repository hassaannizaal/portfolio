import { portfolio } from "@/data/portfolio";

function pad(index: number) {
  return String(index + 1).padStart(3, "0");
}

export function About() {
  return (
    <section id="about" className="bg-fg px-6 py-24 text-white lg:px-20 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <h2 className="max-w-md text-balance text-[40px] font-medium leading-[1.1] tracking-tight lg:text-[46px]">
          A short note. Then the work.
        </h2>
        <p className="max-w-md text-[17px] leading-relaxed text-white/70 lg:text-[18px]">
          {portfolio.bio}
        </p>
      </div>

      <ol className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.skillGroups.map((group, index) => (
          <li key={group.label} className="border-t border-white/10 pt-5">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-white/40">
              {pad(index)} / {group.label}
            </p>
            <p className="text-[16px] leading-relaxed text-white/80">
              {group.items.join(", ")}.
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
