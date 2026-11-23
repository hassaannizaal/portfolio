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
        className="relative flex min-h-[calc(100svh-4rem)] items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Airy Editorial Typography */}
            <div className="fade-up lg:col-span-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent">
                {portfolio.title}
              </p>

              <h1 className="mt-4 font-display text-[56px] font-normal leading-[0.94] tracking-[-0.025em] text-ink sm:text-[72px] lg:text-[84px]">
                {firstName}{" "}
                <span className="italic font-normal text-ink/90">
                  {lastName}
                </span>
              </h1>

              <p className="mt-7 max-w-md font-sans text-[15.5px] font-light leading-[1.75] text-ink-secondary sm:text-[16.5px]">
                {portfolio.bio}. Focused on full-stack development, reliable
                backend systems, and cloud infrastructure.
              </p>

              {/* Quiet Editorial Links — no bulky buttons */}
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

            {/* Right Column: Borderless Ink Sketch with Minimal Callouts */}
            <div className="fade-up lg:col-span-6">
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
