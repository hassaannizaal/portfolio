import { portfolio } from "@/data/portfolio";
import { SplitCta } from "./SplitCta";

const links = [
  { label: "GitHub", href: portfolio.github },
  { label: "LinkedIn", href: portfolio.linkedin },
  { label: "Email", href: `mailto:${portfolio.email}` },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-fg px-6 py-16 text-white lg:px-20 lg:py-20">
      <h2 className="mb-10 text-[40px] font-medium leading-none tracking-tight lg:text-[46px]">
        {portfolio.name}
      </h2>

      <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 font-mono text-[13px] uppercase tracking-wide text-white/40">
            Email
          </p>
          <SplitCta
            href={`mailto:${portfolio.email}`}
            left="Email"
            right="me"
            dark
          />
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] uppercase tracking-wide text-white/55">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[13px] text-white/40 lg:flex-row lg:justify-between">
        <p>© {portfolio.name}</p>
        <p>Built by {portfolio.name.toLowerCase().replaceAll(" ", "")}.dev</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[12px] uppercase tracking-wide text-white/40">
        <span>{year}</span>
        <span>⎇ main</span>
      </div>
    </footer>
  );
}
