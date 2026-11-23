"use client";

import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const experience = [
  {
    role: "Software Developer",
    company: "wAI Industries",
    detail: "ISSM Labelling Solution",
    period: "Aug 2025 — Present",
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
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="03 / BACKGROUND"
          label="Experience & Education"
          subtitle="Work history and computer science foundation."
        />

        {/* Quiet Hairline Tab Switcher */}
        <div className="mb-10 flex items-center gap-8 border-b border-hairline">
          <button
            type="button"
            onClick={() => setTab("experience")}
            className={`relative pb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              tab === "experience"
                ? "text-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Experience
            {tab === "experience" && (
              <span className="absolute inset-x-0 -bottom-px h-[1.5px] bg-accent" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setTab("education")}
            className={`relative pb-3.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
              tab === "education"
                ? "text-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Education
            {tab === "education" && (
              <span className="absolute inset-x-0 -bottom-px h-[1.5px] bg-accent" />
            )}
          </button>
        </div>

        {tab === "experience" ? (
          <ul className="divide-y divide-hairline border-b border-hairline">
            {experience.map((job) => (
              <li
                key={job.company}
                className="grid gap-6 py-9 first:pt-2 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-[30px] font-normal leading-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-sans text-[14px] text-ink-secondary">
                    {job.company}
                    {job.detail && (
                      <span className="text-ink-muted"> — {job.detail}</span>
                    )}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="space-y-2.5">
                    {job.points.map((point, idx) => (
                      <li
                        key={point}
                        className="flex items-baseline gap-3 font-sans text-[14.5px] font-light leading-[1.7] text-ink-secondary"
                      >
                        <span className="font-mono text-[10px] text-accent">
                          0{idx + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {job.skills.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid gap-8 border-b border-hairline pb-10 pt-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">
                Oct 2021 — Jul 2025
              </p>
              <h3 className="mt-2 font-display text-[32px] font-normal leading-tight text-ink">
                BS Computer Science
              </h3>
              <p className="mt-1 font-sans text-[14px] text-ink-secondary">
                Air University
                <span className="text-ink-muted"> — CGPA 3.41 / 4.0</span>
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                Relevant Coursework
              </p>
              <ol className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-8">
                {coursework.map((course, idx) => (
                  <li
                    key={course}
                    className="flex items-baseline gap-3 font-sans text-[14px] font-light text-ink-secondary"
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
    </section>
  );
}
