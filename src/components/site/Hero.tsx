"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { AboutModal } from "./AboutModal";
import { CodexHeroDiagram } from "./CodexHeroDiagram";
import { ContactModal } from "./ContactModal";

export function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [firstName, ...restName] = portfolio.headline.split(" ");
  const lastName = restName.join(" ");

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Sculptural Editorial Typography */}
            <div className="fade-up lg:col-span-6">
              <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                <span>{portfolio.title}</span>
                <span aria-hidden="true" className="h-px w-8 bg-accent/45" />
                <span className="text-ink-muted">FULL-STACK &amp; CLOUD</span>
              </div>

              <h1 className="mt-5 font-display text-[58px] font-normal leading-[0.92] tracking-[-0.028em] text-ink sm:text-[76px] lg:text-[88px]">
                {firstName}{" "}
                <span className="italic font-normal text-ink/90">
                  {lastName}
                </span>
              </h1>

              {/* Subtle drafting scale rule */}
              <div className="mt-7 flex items-center gap-3">
                <div className="scale-rule w-28" aria-hidden="true" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">
                  PORTFOLIO
                </span>
              </div>

              <p className="mt-6 max-w-md font-sans text-[15.5px] font-light leading-[1.78] text-ink-secondary sm:text-[16.5px]">
                {portfolio.bio}. Focused on scalable web applications,
                dependable backend systems, and cloud infrastructure.
              </p>

              {/* Editorial Links */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <button
                  type="button"
                  onClick={() => setAboutOpen(true)}
                  className="editorial-link font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
                >
                  About Me <span aria-hidden="true">↗</span>
                </button>

                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="editorial-link font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
                >
                  Get in Touch <span aria-hidden="true">↗</span>
                </button>

                <a
                  href="#proj"
                  className="editorial-link font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-ink"
                >
                  Selected Work <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* Right Column: Blended Ink Sketch with Precision Leader Callouts */}
            <div className="fade-up-delay lg:col-span-6">
              <CodexHeroDiagram />
            </div>
          </div>
        </div>
      </section>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
