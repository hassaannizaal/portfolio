"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-hassaan-nizaal",
    href: portfolio.linkedin,
  },
  {
    label: "Github",
    value: "github.com/hassaannizaal",
    href: portfolio.github,
  },
  {
    label: "Instagram",
    value: "@hassaannizaal",
    href: portfolio.instagram,
  },
  {
    label: "Phone",
    value: portfolio.phone,
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
  },
];

export function ContactModal({ open, onClose }: ContactModalProps) {
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
      aria-label="Contact"
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
            hassaan@dev ~/contact
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

        {/* body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          <div className="mb-7">
            <p className="mb-4 text-[#ffb45c]">
              <span className="text-white/30">→ </span>cat contact.txt
            </p>
            <div className="space-y-3">
              {links.map((link) => (
                <div key={link.label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-0">
                  <span className="w-28 shrink-0 text-[12px] uppercase tracking-[0.14em] text-white/35">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-white/65 underline decoration-white/15 underline-offset-2 transition-colors hover:text-[#ffb45c] hover:decoration-[#ffb45c]/30"
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* cursor blink */}
          <p className="mt-4 text-white/30">
            → <span className="inline-block h-[1em] w-[7px] animate-pulse bg-[#ffb45c]/70" />
          </p>
        </div>
      </div>
    </div>
  );
}
