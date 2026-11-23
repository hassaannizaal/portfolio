"use client";

import { useEffect, useState } from "react";
import { contactLinks, portfolio } from "@/data/portfolio";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-xs"
      />

      <div className="archival-paper fade-up relative z-10 flex h-[84dvh] w-full max-w-[500px] flex-col overflow-hidden border border-hairline-strong bg-paper text-ink sm:h-auto sm:max-h-[86vh]">
        <div className="flex shrink-0 items-center justify-between border-b border-hairline px-6 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            Contact
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
          <h2 className="font-display text-[36px] font-normal leading-none text-ink">
            Get in <span className="italic">Touch</span>
          </h2>
          <p className="mt-2 font-sans text-[14px] font-light text-ink-muted">
            Direct ways to reach {portfolio.name}.
          </p>

          <div className="mt-6 flex items-center justify-between gap-3 border-y border-hairline py-3.5">
            <span className="truncate font-mono text-[12px] text-ink">
              {portfolio.email}
            </span>
            <button
              type="button"
              onClick={copyEmail}
              className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent transition-opacity hover:opacity-75"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <ul className="mt-2 divide-y divide-hairline">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-12 items-center justify-between gap-4 py-3 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-ink-muted group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="truncate font-mono text-[12px] text-ink group-hover:text-accent">
                      {link.value} ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
