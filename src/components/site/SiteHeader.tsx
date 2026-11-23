"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const NAV = [
  { href: "/#proj", label: "Projects" },
  { href: "/#certs", label: "Certifications" },
  { href: "/#bg", label: "Background" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Clean Editorial Logotype — no box, no seal */}
          <Link
            href="/#top"
            className="font-display text-[22px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-accent"
            aria-label={`${portfolio.name} — Home`}
          >
            {portfolio.name}
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="editorial-link font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-end text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="archival-paper fixed inset-0 z-40 flex flex-col justify-between px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 md:hidden">
          <nav className="flex flex-col divide-y divide-hairline border-y border-hairline">
            {NAV.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 text-ink transition-colors hover:text-accent"
              >
                <span className="font-mono text-[11px] text-ink-muted">
                  0{idx + 1}
                </span>
                <span className="font-display text-[36px] font-normal leading-none">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              Email
            </p>
            <a
              href={`mailto:${portfolio.email}`}
              className="mt-1 inline-block break-all font-mono text-[12px] text-ink underline decoration-hairline-strong underline-offset-4 hover:text-accent"
            >
              {portfolio.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
