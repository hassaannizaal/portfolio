import { contactLinks, portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-hairline px-5 pb-12 pt-16 text-ink sm:px-8 sm:pt-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
              04 / CONTACT
            </p>
            <h2 className="mt-3 font-display text-[44px] font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:text-[52px]">
              Get in <span className="italic">Touch</span>
            </h2>
            <p className="mt-4 max-w-sm font-sans text-[14.5px] font-light leading-[1.75] text-ink-secondary">
              Open to software engineering roles, full-stack projects, and
              technical collaborations.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-hairline border-y border-hairline">
              {contactLinks.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex min-h-13 items-center justify-between gap-4 py-3.5 transition-colors hover:text-accent"
                    >
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-muted group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="truncate font-mono text-[12px] text-ink group-hover:text-accent">
                        {link.value} ↗
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {portfolio.name} · {portfolio.title}
          </p>
          <a
            href="#top"
            className="text-ink-secondary transition-colors hover:text-accent"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
