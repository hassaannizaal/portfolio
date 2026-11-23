"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { AboutModal } from "./AboutModal";
import { CodexHeroDiagram } from "./CodexHeroDiagram";
import { ContactModal } from "./ContactModal";

const PILLARS = [
  { num: "01", title: "Full-Stack Web", sub: "Next.js · React · TypeScript" },
  { num: "02", title: "Realtime Backends", sub: "Node.js · Sockets · Queues" },
  { num: "03", title: "Data Systems", sub: "MongoDB · Redis · Kafka" },
  { num: "04", title: "Cloud & Delivery", sub: "Docker · Nginx · Azure CI/CD" },
];

export function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const [firstName, ...restName] = portfolio.headline.split(" ");
  const lastName = restName.join(" ");

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-between px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16"
      >
        <div className="mx-auto my-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Monumental Editorial Identity */}
            <div className="fade-up lg:col-span-6">
              <div className="inline-flex items-center gap-2.5 border border-hairline bg-paper-elevated px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-secondary backdrop-blur-xs">
                <span className="beacon-pulse size-1.5 rounded-full bg-accent" />
                <span>{portfolio.title}</span>
              </div>

              <h1 className="mt-6 font-display text-[60px] font-light leading-[0.9] tracking-[-0.03em] text-ink sm:text-[78px] lg:text-[92px]">
                {firstName}
                <br />
                <span className="italic font-normal text-ink/90">
                  {lastName}
                </span>
              </h1>

              {/* Drafting Scale Bar + Margin Annotation */}
              <div className="mt-7 flex items-center gap-4">
                <div className="scale-rule w-28" aria-hidden="true" />
                <span className="font-script text-[19px] text-ink-muted">
                  crafted for clarity &amp; scale
                </span>
              </div>

              <p className="mt-6 max-w-md font-sans text-[15.5px] font-light leading-[1.8] text-ink-secondary sm:text-[16.5px]">
                {portfolio.bio}. Focused on full-stack applications, dependable
                backend architecture, and cloud infrastructure.
              </p>

              {/* Signature CTA Row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                <button
                  type="button"
                  onClick={() => setAboutOpen(true)}
                  className="ink-button inline-flex min-h-11 items-center gap-2.5 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em]"
                >
                  <span>About Me</span>
                  <span aria-hidden="true">↗</span>
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

            {/* Right Column: Interactive Renaissance Sketch Plate */}
            <div className="fade-up-delay lg:col-span-6">
              <CodexHeroDiagram />
            </div>
          </div>
        </div>

        {/* Bottom Architectural Discipline Strip */}
        <div className="fade-up-delay-2 mx-auto mt-14 w-full max-w-6xl border-t border-hairline pt-5 lg:mt-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {PILLARS.map((item) => (
              <div key={item.num} className="group">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">
                  <span className="mr-1.5 text-accent">{item.num}</span>
                  {item.title}
                </p>
                <p className="mt-1 font-sans text-[12px] font-light text-ink-secondary">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
