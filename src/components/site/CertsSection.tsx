"use client";

import { useState } from "react";

const courses = [
  "Technical Support Fundamentals",
  "The Bits and Bytes of Computer Networking",
  "Operating Systems and You: Becoming a Power User",
  "System Administration and IT Infrastructure Services",
  "IT Security: Defense against the digital dark arts",
];

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 lg:mb-14">
      <span className="h-px flex-1 bg-line" />
      <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-fg/70 lg:text-[13px]">
        {label}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function CertsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="certs"
      className="relative bg-bg px-6 py-16 text-fg lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle label="03 · Certifications" />

        <div className="border-t border-line">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center gap-4 border-b border-line py-4 text-left transition-colors hover:bg-fg/[0.02]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png"
              alt="Google IT Support badge"
              width={44}
              height={44}
              className="size-11 shrink-0 rounded"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-medium leading-tight text-fg">
                Google IT Support
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45">
                Google · Coursera · March 2024
              </p>
            </div>

            <span
              aria-hidden="true"
              className="shrink-0 text-fg/40 transition-transform duration-300"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </span>
          </button>

          <div
            className="grid overflow-hidden transition-all duration-500 ease-out"
            style={{
              gridTemplateRows: open ? "1fr" : "0fr",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="min-h-0">
              <div className="border-b border-line px-1 py-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                  Courses · ~3 months at 10 hrs/week
                </p>
                <ul className="space-y-1.5">
                  {courses.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-3 text-[13px] text-fg/70"
                    >
                      <span className="font-mono text-[10px] tracking-[0.12em] text-fg/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/WUWRV3476BR4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/55 transition-colors hover:text-accent"
                  >
                    Verify on Coursera →
                  </a>
                  <a
                    href="https://www.credly.com/earner/earned/share/90b8f3e2-db4e-45f7-90ad-f9d624beaaab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/55 transition-colors hover:text-accent"
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
