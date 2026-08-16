"use client";

import { useState } from "react";
import { Stars } from "./Stars";

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-mono text-[13px] uppercase tracking-[0.16em] transition-colors duration-200 ${
        active ? "text-[#ffb45c]" : "text-white/35 hover:text-white/60"
      }`}
    >
      {label}
    </button>
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
    skills: ["MERN Stack", "Azure CI/CD", "Microservices", "Performance Optimization", "UI/UX", "Agile"],
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
    skills: ["MERN Stack", "React Native", "Flutter", "Cross-Platform", "Mobile UI/UX", "Technical Docs"],
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
      className="relative overflow-hidden bg-[#07080c] px-6 py-24 text-white lg:px-16 lg:py-32 xl:px-20"
    >
      <Stars field={0} />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[420px] -right-[280px] size-[720px] rounded-full border border-white/[0.05]"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-14 flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
          <span className="text-[#ffb45c]">03</span>
          Background
        </p>

        {/* tabs */}
        <div className="mb-10 flex gap-6 border-b border-white/[0.07] pb-4">
          <Tab
            label="Experience"
            active={tab === "experience"}
            onClick={() => setTab("experience")}
          />
          <Tab
            label="Education"
            active={tab === "education"}
            onClick={() => setTab("education")}
          />
        </div>

        {/* experience panel */}
        {tab === "experience" && (
          <div className="space-y-0">
            {experience.map((job, i) => (
              <div
                key={i}
                className="border-b border-white/[0.06] py-8 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-[20px] font-medium text-white/90 lg:text-[22px]">
                    {job.role}
                  </h3>
                  <p className="font-mono text-[12px] tracking-[0.1em] text-white/30">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1.5 text-[15px] text-white/55">
                  {job.company}
                  {job.detail && (
                    <span className="text-white/30"> — {job.detail}</span>
                  )}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-white/45"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-white/20" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/[0.07] bg-white/[0.02] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* education panel */}
        {tab === "education" && (
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[20px] font-medium text-white/90 lg:text-[22px]">
                BS Computer Science
              </h3>
              <p className="font-mono text-[12px] tracking-[0.1em] text-white/30">
                Oct 2021 — Jul 2025
              </p>
            </div>
            <p className="mt-1.5 text-[15px] text-white/55">
              Air University
              <span className="text-white/30"> — CGPA 3.41 / 4.0</span>
            </p>

            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">
                Relevant coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[12px] text-white/50"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
