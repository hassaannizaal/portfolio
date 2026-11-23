"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionTitle } from "./SectionTitle";

const experience = [
  {
    role: "Software Developer",
    company: "wAI Industries",
    detail: "ISSM Labelling Solution",
    period: "Aug 2025 — Present",
    current: true,
    points: [
      "Built full-stack MERN applications with a focus on responsive UI/UX and frontend-to-backend efficiency.",
      "Developed and scaled Node.js microservices, optimizing MongoDB schemas and aggregation queries for performance.",
      "Set up Azure CI/CD pipelines to automate builds and deployments, reducing manual overhead.",
      "Integrated AI-driven features into existing MERN stacks, owning each feature from architecture to launch.",
    ],
    skills: [
      "MERN Stack",
      "Azure CI/CD",
      "Microservices",
      "Performance Optimization",
      "UI/UX",
      "Agile",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "UNLOOP",
    detail: null,
    period: "2024 — 2025",
    current: false,
    points: [
      "Built and cross-compiled mobile apps using React Native and Flutter across iOS and Android.",
      "Developed full-stack features using the MERN stack, bridging Node.js backends with web and mobile interfaces.",
      "Optimized API consumption and state management, reducing latency for data-heavy features.",
      "Collaborated in an Agile environment to deliver production-ready code.",
    ],
    skills: [
      "MERN Stack",
      "React Native",
      "Flutter",
      "Cross-Platform",
      "Mobile UI/UX",
      "Technical Docs",
    ],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating Systems",
  "Computer Networks",
  "Database Design",
  "Software Engineering",
  "Information Security",
  "Parallel & Distributed Computing",
  "Artificial Intelligence",
  "Data Science",
];

export function BackgroundSection() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  return (
    <section
      id="bg"
      className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle
            index="03 / BACKGROUND"
            label="Experience"
            italicWord="& Education"
            subtitle="Engineering appointments, shipped roles, and computer science training."
          />
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Rail: Tab Switcher + Custom Renaissance Caliper & Compass Sketch */}
            <div className="lg:col-span-4">
              <div className="flex gap-2 border-b border-hairline pb-5">
                <button
                  type="button"
                  onClick={() => setTab("experience")}
                  className={`flex-1 border px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors ${
                    tab === "experience"
                      ? "border-ink bg-ink text-paper"
                      : "border-hairline bg-paper-elevated text-ink-secondary hover:border-hairline-strong hover:text-ink"
                  }`}
                >
                  Experience
                </button>
                <button
                  type="button"
                  onClick={() => setTab("education")}
                  className={`flex-1 border px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors ${
                    tab === "education"
                      ? "border-ink bg-ink text-paper"
                      : "border-hairline bg-paper-elevated text-ink-secondary hover:border-hairline-strong hover:text-ink"
                  }`}
                >
                  Education
                </button>
              </div>

              {/* Bespoke Caliper & Compass Rose Plate */}
              <figure className="mt-7 hidden lg:block">
                <div className="relative mx-auto aspect-square w-full max-w-[270px] select-none">
                  <Image
                    src="/imgs/caliper-sketch-light.png"
                    alt="Fine-line Renaissance ink sketch of precision calipers over an astronomical compass rose"
                    fill
                    unoptimized
                    sizes="270px"
                    className="theme-light-only object-contain opacity-90"
                  />
                  <Image
                    src="/imgs/caliper-sketch-dark.png"
                    alt="Luminous ivory and brass engraving of precision calipers over an astronomical compass rose"
                    fill
                    unoptimized
                    sizes="270px"
                    className="theme-dark-only object-contain opacity-85"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between border-t border-hairline pt-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-muted">
                  <span className="text-accent">FIG. 03</span>
                  <span>PRECISION &amp; CRAFT</span>
                </figcaption>
              </figure>
            </div>

            {/* Right Column: Interactive Meridian Timeline / Education Grid */}
            <div className="lg:col-span-8">
              {tab === "experience" ? (
                <div className="relative border-y border-hairline">
                  {/* Vertical meridian ink line */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-8 left-[5px] top-8 hidden w-px bg-hairline sm:block"
                  />

                  <ul className="divide-y divide-hairline">
                    {experience.map((job) => (
                      <li
                        key={job.company}
                        className="relative py-8 sm:pl-9"
                      >
                        {/* Meridian node */}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-10 hidden size-[11px] rounded-full border sm:block ${
                            job.current
                              ? "beacon-pulse border-accent bg-accent"
                              : "border-hairline-strong bg-paper"
                          }`}
                        />

                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-display text-[34px] font-normal leading-tight text-ink">
                            {job.role}
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                            {job.period}
                          </span>
                        </div>

                        <p className="mt-1 font-sans text-[14px] text-ink-secondary">
                          {job.company}
                          {job.detail && (
                            <span className="text-ink-muted">
                              {" "}
                              — {job.detail}
                            </span>
                          )}
                        </p>

                        <ul className="mt-5 space-y-2.5">
                          {job.points.map((point, idx) => (
                            <li
                              key={point}
                              className="flex items-baseline gap-3 font-sans text-[14.5px] font-light leading-[1.72] text-ink-secondary"
                            >
                              <span className="font-mono text-[10px] text-accent">
                                0{idx + 1}
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="border border-hairline bg-paper-elevated px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="specimen-surface p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-hairline pb-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        Oct 2021 — Jul 2025
                      </p>
                      <h3 className="mt-1 font-display text-[36px] font-normal leading-tight text-ink">
                        BS Computer Science
                      </h3>
                      <p className="mt-1 font-sans text-[14.5px] text-ink-secondary">
                        Air University
                      </p>
                    </div>
                    <span className="border border-hairline-strong bg-paper px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink">
                      CGPA 3.41 / 4.0
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
                      Relevant Coursework
                    </p>
                    <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {coursework.map((course, idx) => (
                        <li
                          key={course}
                          className="flex items-baseline gap-3 border border-hairline bg-paper/65 px-3.5 py-2.5 font-sans text-[13.5px] font-light text-ink-secondary"
                        >
                          <span className="font-mono text-[10px] text-accent">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
