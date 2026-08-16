"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { OdometerText } from "./OdometerText";

const NAV = [
  { href: "#bg", label: "BG" },
  { href: "#proj", label: "Proj" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
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
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-start p-4 lg:justify-center lg:p-8">
        <div className="pointer-events-auto rounded-lg bg-black p-1.5 shadow-lg ring-1 ring-black">
          <nav className="flex h-[48px] items-center overflow-hidden rounded bg-nav lg:h-[52px]">
            <a
              href="#top"
              className="flex aspect-square h-full items-center justify-center text-white"
              aria-label="Home"
            >
              <span className="flex h-[30px] w-[30px] items-center justify-center bg-white font-mono text-[11px] font-medium text-black">
                HN
              </span>
            </a>

            <ul className="hidden h-full items-center lg:flex">
              {NAV.map((item) => (
                <li key={item.href} className="h-full">
                  <a
                    href={item.href}
                    className="odometer relative z-1 flex h-full items-center whitespace-nowrap px-3 font-mono text-[13px] uppercase text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="sr-only">{item.label}</span>
                    <OdometerText text={item.label} />
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="ml-1 mr-1.5 flex h-[30px] w-[30px] items-center justify-center text-white lg:ml-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="flex w-3.5 flex-col gap-[3px]">
                <span
                  className={`h-px w-full bg-white transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-px w-full bg-white transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-fg text-white">
          <div className="flex h-full flex-col justify-end px-8 pb-16 pt-28 lg:px-20">
            <p className="mb-10 flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.14em] text-white/45">
              <span className="size-1.5 rounded-full bg-accent-glow" />
              {portfolio.title}
            </p>
            <nav className="flex flex-col gap-4">
              {NAV.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 font-medium text-[44px] leading-none tracking-tight text-white transition-colors hover:text-accent-glow lg:text-[56px]"
                >
                  <span className="font-mono text-[13px] tracking-[0.14em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={`mailto:${portfolio.email}`}
              className="mt-14 inline-flex w-fit items-center gap-2 font-mono text-[13px] uppercase tracking-[0.14em] text-white/55 hover:text-accent-glow"
            >
              <span className="size-1 rounded-full bg-accent-glow" />
              {portfolio.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
