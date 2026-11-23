"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

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
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="02 / CERTIFICATIONS"
          label="Certifications"
          subtitle="Verified credentials in networking, systems, and security."
        />

        <div className="border-y border-hairline">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="grid w-full items-center gap-4 py-7 text-left transition-colors hover:bg-paper-soft/40 lg:grid-cols-12"
          >
            <div className="flex items-center gap-4 lg:col-span-3">
              <Image
                src="https://images.credly.com/size/340x340/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png"
                alt="Google IT Support badge"
                width={42}
                height={42}
                className="size-[42px] shrink-0"
              />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                March 2024
              </span>
            </div>

            <div className="lg:col-span-6">
              <h3 className="font-display text-[30px] font-normal leading-tight text-ink">
                Google IT Support
              </h3>
              <p className="mt-1 font-sans text-[13.5px] font-light text-ink-muted">
                Google · Coursera · 5-course specialization (~3 months at 10
                hrs/week)
              </p>
            </div>

            <div className="flex items-center lg:col-span-3 lg:justify-end">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-secondary">
                {open ? "Hide Courses −" : "View Courses +"}
              </span>
            </div>
          </button>

          <div
            className="grid overflow-hidden transition-all duration-400 ease-out"
            style={{
              gridTemplateRows: open ? "1fr" : "0fr",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="min-h-0">
              <div className="grid gap-6 border-t border-hairline py-7 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    Curriculum
                  </p>
                </div>

                <div className="lg:col-span-9">
                  <ol className="grid gap-y-2.5 sm:grid-cols-2 sm:gap-x-8">
                    {courses.map((course, idx) => (
                      <li
                        key={course}
                        className="flex items-baseline gap-3 font-sans text-[14px] font-light text-ink-secondary"
                      >
                        <span className="font-mono text-[10px] text-accent">
                          0{idx + 1}
                        </span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 flex flex-wrap gap-6 border-t border-hairline pt-5">
                    <a
                      href="https://www.coursera.org/account/accomplishments/specialization/WUWRV3476BR4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink hover:text-accent"
                    >
                      Verify on Coursera ↗
                    </a>
                    <a
                      href="https://www.credly.com/earner/earned/share/90b8f3e2-db4e-45f7-90ad-f9d624beaaab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink hover:text-accent"
                    >
                      View on Credly ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
