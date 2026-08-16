"use client";

import { useState } from "react";
import { Stars } from "./Stars";

const courses = [
  "Technical Support Fundamentals",
  "The Bits and Bytes of Computer Networking",
  "Operating Systems and You: Becoming a Power User",
  "System Administration and IT Infrastructure Services",
  "IT Security: Defense against the digital dark arts",
];

export function CertsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="certs"
      className="relative overflow-hidden bg-[#07080c] px-6 pt-24 pb-28 text-white lg:px-16 lg:pt-32 lg:pb-36 xl:px-20"
    >
      <Stars field={2} />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[480px] -right-[200px] size-[800px] rounded-full border border-white/[0.05]"
      />

      <div className="relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
            <span className="text-[#ffb45c]">03</span>
            Certifications
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {/* cert card */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02]">
            {/* header — always visible */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex w-full items-start gap-5 px-6 py-6 text-left transition-colors hover:bg-white/[0.02] sm:items-center"
            >
              {/* badge */}
              <a
                href="https://www.credly.com/earner/earned/share/90b8f3e2-db4e-45f7-90ad-f9d624beaaab"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png"
                  alt="Google IT Support badge"
                  width={64}
                  height={64}
                  className="size-14 rounded-lg sm:size-16"
                />
              </a>

              <div className="min-w-0 flex-1">
                <p className="text-[18px] font-medium leading-snug text-white/90 sm:text-[20px]">
                  Google IT Support
                </p>
                <p className="mt-1 text-[13px] text-white/45">
                  Google · Coursera — March 2024
                </p>
              </div>

              {/* chevron */}
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-white/30 transition-transform duration-300"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </span>
            </button>

            {/* expandable detail */}
            <div
              className="overflow-hidden transition-all duration-400 ease-out"
              style={{
                maxHeight: open ? "600px" : "0px",
                opacity: open ? 1 : 0,
              }}
            >
              <div className="border-t border-white/[0.06] px-6 py-6">
                <p className="mb-1 text-[13px] leading-relaxed text-white/55">
                  Completed by Muhammad Hassaan Nizaal
                </p>
                <p className="mb-5 text-[13px] text-white/35">
                  ~3 months at 10 hrs/week
                </p>

                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">
                  Courses completed
                </p>
                <ul className="space-y-2">
                  {courses.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 text-[14px] text-white/60"
                    >
                      <span className="font-mono text-[11px] text-white/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/WUWRV3476BR4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-[#ffb45c]"
                  >
                    Verify on Coursera →
                  </a>
                  <a
                    href="https://www.credly.com/earner/earned/share/90b8f3e2-db4e-45f7-90ad-f9d624beaaab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-[#ffb45c]"
                  >
                    View on Credly →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
