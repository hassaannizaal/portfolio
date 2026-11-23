"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionTitle } from "./SectionTitle";

const courses = [
  "Technical Support Fundamentals",
  "The Bits and Bytes of Computer Networking",
  "Operating Systems and You: Becoming a Power User",
  "System Administration and IT Infrastructure Services",
  "IT Security: Defense against the digital dark arts",
];

export function CertsSection() {
  return (
    <section
      id="certs"
      className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle
            index="02 / CERTIFICATIONS"
            label="Verified"
            italicWord="Credentials"
            subtitle="Foundational certification across networking, operating systems, infrastructure, and security."
          />
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <div className="specimen-surface relative p-6 sm:p-9">
            {/* Corner drafting ticks */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-1.5 -top-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-1.5 -top-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 -left-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 -right-1.5 font-mono text-[11px] leading-none text-ink-muted"
            >
              +
            </span>

            {/* Header Row */}
            <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-7 sm:flex-row sm:items-center">
              <div className="flex items-center gap-5">
                <div className="shrink-0 border border-hairline bg-paper p-2">
                  <Image
                    src="https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png"
                    alt="Google IT Support badge"
                    width={52}
                    height={52}
                    className="size-[52px] shrink-0"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Google · Coursera · March 2024
                  </p>
                  <h3 className="mt-1 font-display text-[34px] font-normal leading-tight text-ink sm:text-[38px]">
                    Google IT Support
                  </h3>
                  <p className="mt-0.5 font-sans text-[13.5px] font-light text-ink-muted">
                    5-course professional specialization · ~3 months at 10
                    hrs/week
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/WUWRV3476BR4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.15em] text-ink hover:text-accent"
                >
                  Verify on Coursera ↗
                </a>
                <a
                  href="https://www.credly.com/earner/earned/share/90b8f3e2-db4e-45f7-90ad-f9d624beaaab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.15em] text-ink hover:text-accent"
                >
                  View on Credly ↗
                </a>
              </div>
            </div>

            {/* Five-Module Syllabus Grid */}
            <div className="mt-7">
              <p className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
                Completed Modules
              </p>
              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {courses.map((course, idx) => (
                  <li
                    key={course}
                    className="group border border-hairline bg-paper/65 p-3.5 transition-colors hover:border-hairline-strong"
                  >
                    <span className="block font-mono text-[10px] text-accent">
                      0{idx + 1}
                    </span>
                    <p className="mt-2 font-sans text-[13px] font-light leading-snug text-ink-secondary transition-colors group-hover:text-ink">
                      {course}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
