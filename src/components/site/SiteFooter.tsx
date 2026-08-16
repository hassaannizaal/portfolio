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
      className="border-t border-line bg-bg px-6 pt-16 pb-8 text-fg lg:px-16 lg:pt-20 lg:pb-10 xl:px-20"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="mb-6 flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.14em] text-fg/60">
            <span className="size-1.5 rounded-full bg-accent" />
            End transmission
          </p>
          <h2 className="text-balance text-[40px] font-medium leading-[1.02] tracking-tight lg:text-[52px]">
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
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-4 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors hover:text-accent"
                >
                  <span className="text-fg/40">{link.label}</span>
                  <span className="truncate text-fg/80 group-hover:text-accent">
                    {link.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fg/45 lg:flex-row lg:items-center lg:justify-between">
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
