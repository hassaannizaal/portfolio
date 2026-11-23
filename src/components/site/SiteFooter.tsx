"use client";

import { useState } from "react";
import { contactLinks, portfolio } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-hairline px-5 pb-12 pt-20 text-ink sm:px-8 sm:pt-28 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Sculptural Closing CTA */}
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                04 / CONTACT
              </p>
              <h2 className="mt-4 font-display text-[48px] font-light leading-[0.98] tracking-[-0.025em] text-ink sm:text-[58px]">
                Let&rsquo;s build something{" "}
                <span className="italic font-normal">enduring.</span>
              </h2>
              <p className="mt-5 max-w-sm font-sans text-[14.5px] font-light leading-[1.78] text-ink-secondary">
                Open to software engineering roles, distributed systems work,
                and thoughtful collaborations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="ink-button inline-flex min-h-11 items-center gap-2.5 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em]"
                >
                  <span>Send an Email</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
                >
                  {copied ? "Address Copied ✓" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* Right Interactive Contact Ledger */}
            <div className="lg:col-span-7">
              <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
                Direct Channels
              </p>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {contactLinks.map((link, idx) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex min-h-14 items-center justify-between gap-4 px-1 py-3.5 transition-colors hover:bg-paper-soft/45 hover:text-accent"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-[9.5px] text-accent/70">
                            0{idx + 1}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted transition-colors group-hover:text-accent">
                            {link.label}
                          </span>
                        </span>
                        <span className="truncate font-mono text-[12px] text-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent">
                          {link.value} ↗
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Architectural Drafting Colophon */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              © {new Date().getFullYear()} {portfolio.name}
            </span>
            <span className="hidden text-hairline-strong sm:inline">/</span>
            <span className="hidden sm:inline">{portfolio.title}</span>
          </div>
          <a
            href="#top"
            className="editorial-link text-ink-secondary hover:text-accent"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
