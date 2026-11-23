"use client";

import { useEffect } from "react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

const PORTRAIT_SRC = "/imgs/portrait.png";

const INTERESTS = [
  "Music",
  "Films",
  "Books",
  "Travel",
  "Open-Source",
  "Gaming",
];

export function AboutModal({ open, onClose }: AboutModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`About ${portfolio.name}`}
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-xs"
      />

      <div className="archival-paper fade-up relative z-10 flex h-[90dvh] w-full max-w-[600px] flex-col overflow-hidden border border-hairline-strong bg-paper text-ink sm:h-auto sm:max-h-[88vh]">
        <div className="flex shrink-0 items-center justify-between border-b border-hairline px-6 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            About
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-ink"
          >
            Close [ESC]
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:px-8">
          <div className="mb-7 flex items-center gap-5 border-b border-hairline pb-6">
            <div className="portrait-frame relative size-22 shrink-0 overflow-hidden border border-hairline">
              <Image
                src={PORTRAIT_SRC}
                alt={portfolio.name}
                fill
                sizes="88px"
                className="etching-portrait object-cover object-[50%_22%]"
                priority
              />
            </div>

            <div>
              <h2 className="font-display text-[34px] font-normal leading-none text-ink">
                {portfolio.name}
              </h2>
              <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                {portfolio.title}
              </p>
            </div>
          </div>

          <div className="mb-8 space-y-4 font-sans text-[14.5px] font-light leading-[1.78] text-ink-secondary">
            <p>
              I&rsquo;m a software developer, enthusiastic about leveraging
              technology to provide digital solutions for the greater good of
              humanity. I am passionate about cloud technologies.
            </p>
            <p>
              I have focused expertise in full-stack development and building
              scalable applications with efficient backend systems and intuitive
              user interfaces. My interests lie in creating reliable
              infrastructure, automating deployments, and delivering clean,
              production-ready code that serves real-world needs.
            </p>
          </div>

          <div className="border-t border-hairline pt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Interests
            </p>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] leading-loose text-ink-secondary">
              {INTERESTS.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
