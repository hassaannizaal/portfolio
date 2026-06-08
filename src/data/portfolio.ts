import type { PortfolioData } from "@/lib/types";

export const portfolio: PortfolioData = {
  username: "hassaan",
  name: "Hassaan Nizaal",
  title: "Software Engineer",
  tagline: "Building elegant solutions to complex problems.",
  email: "hello@hassaannizaal.dev",
  github: "https://github.com/hassaannizaal",
  linkedin: "https://linkedin.com/in/hassaannizaal",
  location: "Your City, Country",
  available: true,
  bio: "Software engineer with experience in full-stack development and modern web technologies. Passionate about crafting clean, performant applications and exploring new tools that push what's possible on the web.",
  highlights: [
    "Full-Stack Web Development",
    "API Design & Architecture",
    "Performance Optimization",
    "Open Source Contributions",
    "DevOps & Cloud Infrastructure",
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
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      icon: "⚙️",
      label: "Backend",
      items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      icon: "🛠️",
      label: "Tools",
      items: ["Git", "Docker", "Linux", "VS Code", "Figma"],
    },
  ],
  education: [
    "B.S. Computer Science — Your University",
    "Relevant Certification — Issuer (Year)",
  ],
  resumeUrl: "#",
  resumeUpdated: "2 months ago",
  projects: [
    {
      name: "Project Alpha",
      description:
        "A full-stack web application with real-time features and a CLI-inspired interface.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/hassaannizaal",
    },
    {
      name: "Dev Toolkit",
      description:
        "Collection of developer utilities and automation scripts for streamlining workflows.",
      tech: ["Python", "Node.js", "Shell"],
      github: "https://github.com/hassaannizaal",
    },
    {
      name: "API Gateway",
      description:
        "Scalable microservices gateway with authentication, rate limiting, and monitoring.",
      tech: ["Node.js", "Redis", "Docker"],
      github: "https://github.com/hassaannizaal",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Your Company",
      period: "2023 — Present",
      highlights: [
        "Built and shipped production features used by thousands of users",
        "Improved application performance by 40% through optimization",
        "Led migration to modern tech stack (React → Next.js)",
      ],
    },
    {
      role: "Junior Developer",
      company: "Previous Company",
      period: "2021 — 2023",
      highlights: [
        "Developed REST APIs and frontend components",
        "Collaborated with cross-functional teams in agile environment",
        "Maintained 95%+ test coverage on critical modules",
      ],
    },
  ],
};
