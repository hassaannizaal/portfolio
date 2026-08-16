"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { AboutModal } from "./AboutModal";
import { ContactModal } from "./ContactModal";
import { BinaryMap } from "./BinaryMap";
import { SplitCta } from "./SplitCta";

const BINARY_STREAM =
  "01001000 01100001 01110011 01110011 01100001 01100001 01101110 · 01001110 01101001 01111010 01100001 01100001 01101100 · 00110010 00110000 00110010 00110110";

export function Hero() {
  const headline = portfolio.headline.split("\n");
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="top" className="relative min-h-svh lg:h-svh">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-line lg:block"
      />

      <div className="grid min-h-svh lg:h-full lg:grid-cols-12">
        <div className="relative flex flex-col justify-center px-6 pb-14 pt-28 lg:col-span-6 lg:px-16 lg:pb-16 lg:pt-8 xl:px-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "radial-gradient(120% 90% at 100% 50%, color-mix(in srgb, var(--fg) 6%, transparent) 0%, transparent 60%)",
            }}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-6 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45 lg:flex"
          >
            N° 01
            <span className="h-px w-6 bg-fg/25" />
            24.86° N
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-6 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45 lg:flex xl:left-8"
          >
            <span className="size-1 rounded-full bg-accent-glow" />
            Signal · Karachi
          </span>

          <div className="relative">
            <p
              className="rise mb-5 flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.14em] text-fg/60"
              style={{ animationDelay: "60ms" }}
            >
              <span className="size-1.5 rounded-full bg-accent" />
              {portfolio.eyebrow}
            </p>
            <h1
              className="rise mb-7 text-balance text-[40px] font-medium leading-[1.02] tracking-tight lg:text-[54px]"
              style={{ animationDelay: "140ms" }}
            >
              {headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="rise mb-10 max-w-[30rem] text-[17px] leading-[1.6] text-fg/70 lg:text-[18px]"
              style={{ animationDelay: "220ms" }}
            >
              {portfolio.bio}
            </p>
            <div
              className="rise flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <SplitCta
                onClick={() => setContactOpen(true)}
                left="Contact"
                right="me"
                ariaLabel="Open contact"
              />
              <SplitCta
                onClick={() => setAboutOpen(true)}
                left="About"
                right="me"
                variant="outline"
                ariaLabel="Open about me"
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-6 hidden overflow-hidden font-mono text-[10px] tracking-[0.28em] text-fg/25 lg:block"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 55%, transparent 100%)",
            }}
          >
            <div className="whitespace-nowrap px-16 xl:px-20">
              {BINARY_STREAM}
            </div>
          </div>
        </div>

        <div className="relative h-[62vh] min-h-[340px] overflow-hidden lg:col-span-6 lg:col-start-7 lg:h-full lg:min-h-0">
          <BinaryMap />
        </div>
      </div>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
