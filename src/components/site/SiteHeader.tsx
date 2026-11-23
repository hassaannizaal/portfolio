"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/#proj", num: "01", label: "Projects" },
  { href: "/#certs", num: "02", label: "Certifications" },
  { href: "/#bg", num: "03", label: "Background" },
  { href: "/#contact", num: "04", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setScrollPct(Math.min(100, (window.scrollY / max) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md">
        {/* Live 1.5px terracotta drafting progress hair-bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] bg-accent/80 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollPct}%` }}
        />

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/#top"
            className="group flex items-baseline gap-2.5 focus:outline-none"
            aria-label={`${portfolio.name} — Home`}
          >
            <span className="font-display text-[23px] font-medium tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
              {portfolio.name}
            </span>
            <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted sm:inline">
              · {portfolio.title}
            </span>
          </Link>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden items-center gap-7 md:flex">
            <nav
              aria-label="Primary navigation"
              className="flex items-center gap-7"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-secondary transition-colors hover:text-ink"
                >
                  <span className="text-[9px] text-accent/80">{item.num}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
            <span aria-hidden="true" className="h-4 w-px bg-hairline" />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-end text-ink"
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
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="archival-paper fixed inset-0 z-40 flex flex-col justify-between px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 md:hidden">
          <nav className="flex flex-col divide-y divide-hairline border-y border-hairline">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 text-ink transition-colors hover:text-accent"
              >
                <span className="font-mono text-[11px] text-accent">
                  {item.num}
                </span>
                <span className="font-display text-[36px] font-light leading-none">
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
