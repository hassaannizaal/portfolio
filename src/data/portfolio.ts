import type { PortfolioData } from "@/lib/types";

export const portfolio: PortfolioData = {
  username: "hassaan",
  name: "Hassaan Nizaal",
  title: "Software Engineer",
  tagline: "Building on the web.",
  eyebrow: "Software engineer.",
  headline: "Hassaan Nizaal\nbuilds on the web.",
  email: "hello@hassaannizaal.dev",
  github: "https://github.com/hassaannizaal",
  linkedin: "https://linkedin.com/in/hassaannizaal",
  location: "Your City, Country",
  available: true,
  bio: "Full-stack work in TypeScript. I keep this page short on purpose — the work is the point.",
  highlights: [
    "Full-stack web",
    "API design",
    "Performance",
  ],
  stack: [
    "NEXT.JS",
    "TYPESCRIPT",
    "REACT",
    "NODE.JS",
    "POSTGRES",
  ],
  skillGroups: [
    {
      icon: "🧠",
      label: "Languages",
      items: ["TypeScript", "Python", "JavaScript", "SQL"],
    },
    {
      icon: "🌐",
      label: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: "⚙️",
      label: "Backend",
      items: ["Node.js", "PostgreSQL", "REST APIs"],
    },
    {
      icon: "🛠️",
      label: "Tools",
      items: ["Git", "Docker", "Linux"],
    },
  ],
  education: [],
  resumeUrl: "#",
  resumeUpdated: "2 months ago",
  projects: [
    {
      name: "Project Alpha",
      description: "Full-stack app with real-time features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/hassaannizaal",
    },
    {
      name: "Dev Toolkit",
      description: "Small utilities for day-to-day engineering work.",
      tech: ["Python", "Node.js"],
      github: "https://github.com/hassaannizaal",
    },
    {
      name: "API Gateway",
      description: "Auth, rate limits, and monitoring in one place.",
      tech: ["Node.js", "Redis", "Docker"],
      github: "https://github.com/hassaannizaal",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Your Company",
      period: "2023 — Present",
      highlights: ["Shipped production features"],
    },
  ],
};
