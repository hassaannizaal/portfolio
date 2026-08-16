"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

const PORTRAIT_SRC =
  "/imgs/Gemini_Generated_Image_5jfklt5jfklt5jfk-removebg-preview.png";

export function AboutModal({ open, onClose }: AboutModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`About ${portfolio.name}`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-md transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      />

      <div
        className="terminal-scroll relative z-10 flex max-h-[88vh] w-full max-w-[640px] flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0b0f] font-mono text-[13.5px] leading-[1.7] text-white/75 transition-all duration-400 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {/* title bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            hassaan@dev ~
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-6 items-center justify-center rounded text-white/40 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 1l8 8M9 1L1 9" />
            </svg>
          </button>
        </div>

        {/* scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          {/* whoami */}
          <div className="mb-8">
            <p className="mb-4 text-[#ffb45c]">
              <span className="text-white/30">→ </span>whoami
            </p>
            <div className="flex items-center gap-5">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-lg border border-white/[0.08]">
                <Image
                  src={PORTRAIT_SRC}
                  alt={portfolio.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-[16px] font-medium text-white/90">
                  {portfolio.name}
                </p>
                <p className="mt-0.5 text-[12px] text-white/40">
                  {portfolio.title}
                </p>
              </div>
            </div>
          </div>

          {/* about */}
          <div className="mb-7">
            <p className="mb-3 text-[#ffb45c]">
              <span className="text-white/30">→ </span>cat about.txt
            </p>
            <p className="mb-3">
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

          {/* interests */}
          <div className="mb-7">
            <p className="mb-3 text-[#ffb45c]">
              <span className="text-white/30">→ </span>ls interests/
            </p>
            <p><span className="text-white/30">  drwx  </span>music</p>
            <p><span className="text-white/30">  drwx  </span>films</p>
            <p><span className="text-white/30">  drwx  </span>books</p>
            <p><span className="text-white/30">  drwx  </span>travel</p>
            <p><span className="text-white/30">  drwx  </span>open-source</p>
            <p><span className="text-white/30">  drwx  </span>gaming</p>
          </div>

          {/* cursor blink */}
          <p className="mt-6 text-white/30">
            → <span className="inline-block h-[1em] w-[7px] animate-pulse bg-[#ffb45c]/70" />
          </p>
        </div>
      </div>
    </div>
  );
}
