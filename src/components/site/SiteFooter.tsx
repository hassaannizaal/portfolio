import { portfolio } from "@/data/portfolio";

const links = [
  { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  {
    label: "GitHub",
    value: portfolio.github.replace(/^https?:\/\//, ""),
    href: portfolio.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-hassaan-nizaal",
    href: portfolio.linkedin,
  },
  {
    label: "Instagram",
    value: "@hassaannizaal",
    href: portfolio.instagram,
  },
  {
    label: "Phone",
    value: portfolio.phone,
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const handle = portfolio.name.toLowerCase().replaceAll(" ", "");

  return (
    <footer
      id="contact"
      className="border-t border-line bg-bg px-4 pt-12 pb-[max(2rem,env(safe-area-inset-bottom))] text-fg sm:px-6 sm:pt-16 sm:pb-8 lg:px-16 lg:pt-20 lg:pb-10 xl:px-20"
    >
      <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="mb-4 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-fg/60 sm:mb-6 sm:text-[13px]">
            <span className="size-1.5 rounded-full bg-accent" />
            End transmission
          </p>
          <h2 className="text-balance text-[28px] font-medium leading-[1.1] tracking-tight sm:text-[40px] lg:text-[52px]">
            Let&rsquo;s build something
            <br className="hidden sm:block" /> for the greater good.
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-6">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between gap-3 py-3 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors hover:text-accent sm:grid sm:min-h-0 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-4 sm:py-4 sm:text-[13px] sm:tracking-[0.12em]"
                >
                  <span className="shrink-0 text-fg/40">{link.label}</span>
                  <span className="min-w-0 truncate text-right text-fg/80 group-hover:text-accent sm:text-left">
                    {link.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden transition-transform duration-300 group-hover:translate-x-1 sm:inline"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45 sm:mt-16 sm:gap-3 sm:pt-6 sm:text-[11px] lg:flex-row lg:items-center lg:justify-between">
        <span className="flex items-center gap-2">
          <span className="size-1 rounded-full bg-accent-glow" />
          © {year} — {portfolio.name}
        </span>
        <span>Built by {handle}.dev</span>
        <span>⎇ main</span>
      </div>
    </footer>
  );
}
