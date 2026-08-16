"use client";

import { useState } from "react";

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

function PreviewCard({
  label,
  title,
  meta,
  desc,
  active,
  onClick,
}: {
  label: string;
  title: string;
  meta: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-lg border p-5 transition-colors ${
        active
          ? "border-fg/25 bg-fg/[0.025]"
          : "border-line bg-fg/[0.015] hover:border-fg/20"
      }`}
    >
      <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
        {label}
      </span>
      <h3 className="text-[15px] font-medium leading-snug tracking-tight text-fg">
        {title}
      </h3>
      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg/40">
        {meta}
      </p>
      <p className="mt-3 flex-1 text-[13px] leading-[1.6] text-fg/60">{desc}</p>
      <button
        type="button"
        onClick={onClick}
        className={`mt-4 self-start font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
          active ? "text-accent" : "text-fg/55 hover:text-accent"
        }`}
      >
        {active ? "Hide details ↑" : "See full →"}
      </button>
    </div>
  );
}

export function BackgroundSection() {
  const [tab, setTab] = useState<"experience" | "education" | null>(null);

  const openTab = (t: "experience" | "education") =>
    setTab((v) => (v === t ? null : t));

  const latest = experience[0];

  return (
    <section
      id="bg"
      className="relative bg-bg px-6 py-16 text-fg lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle label="04 · Background" />

        <div className="grid gap-4 sm:grid-cols-2">
          <PreviewCard
            label="Experience"
            title={`${latest.role} @ ${latest.company}`}
            meta={latest.period}
            desc="Full-stack MERN work, Node.js microservices, Azure CI/CD and AI-driven features integrated end-to-end."
            active={tab === "experience"}
            onClick={() => openTab("experience")}
          />
          <PreviewCard
            label="Education"
            title="BS Computer Science"
            meta="Air University · 2021 — 2025"
            desc="CGPA 3.41 / 4.0. Coursework across systems, security, AI, and distributed computing."
            active={tab === "education"}
            onClick={() => openTab("education")}
          />
        </div>

        <div
          className="grid overflow-hidden transition-all duration-500 ease-out"
          style={{
            gridTemplateRows: tab ? "1fr" : "0fr",
            opacity: tab ? 1 : 0,
            marginTop: tab ? "1.5rem" : "0",
          }}
        >
          <div className="min-h-0">
            {tab === "experience" && (
              <ul className="border-t border-line">
                {experience.map((job, i) => (
                  <li
                    key={i}
                    className="grid gap-4 border-b border-line py-6 lg:grid-cols-12 lg:gap-8 lg:py-8"
                  >
                    <div className="lg:col-span-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/40">
                        {job.period}
                      </p>
                      <h3 className="mt-2 text-[16px] font-medium leading-tight tracking-tight text-fg">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-[13px] text-fg/60">
                        {job.company}
                        {job.detail && (
                          <span className="text-fg/40"> — {job.detail}</span>
                        )}
                      </p>
                    </div>
                    <div className="lg:col-span-8">
                      <ul className="space-y-2">
                        {job.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-baseline gap-3 text-[13px] leading-[1.6] text-fg/70"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 size-1 shrink-0 rounded-full bg-fg/30"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45">
                        {job.skills.join(" · ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {tab === "education" && (
              <div className="border-t border-line">
                <div className="grid gap-4 border-b border-line py-6 lg:grid-cols-12 lg:gap-8 lg:py-8">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/40">
                      Oct 2021 — Jul 2025
                    </p>
                    <h3 className="mt-2 text-[16px] font-medium leading-tight tracking-tight text-fg">
                      BS Computer Science
                    </h3>
                    <p className="mt-1 text-[13px] text-fg/60">
                      Air University
                      <span className="text-fg/40"> — CGPA 3.41 / 4.0</span>
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg/40">
                      Relevant coursework
                    </p>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {coursework.map((c, i) => (
                        <li
                          key={c}
                          className="flex items-baseline gap-3 text-[13px] text-fg/70"
                        >
                          <span className="font-mono text-[10px] tracking-[0.12em] text-fg/35">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
