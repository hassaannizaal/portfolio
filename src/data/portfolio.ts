import type { PortfolioData } from "@/lib/types";

export const portfolio: PortfolioData = {
  name: "Hassaan Nizaal",
  title: "Software Engineer",
  tagline: "Building elegant solutions to complex problems.",
  email: "hello@hassaannizaal.dev",
  github: "https://github.com/hassaannizaal",
  linkedin: "https://linkedin.com/in/hassaannizaal",
  location: "Your City, Country",
  about: [
    "I'm a software engineer passionate about crafting clean, performant applications.",
    "I specialize in full-stack development with a focus on modern web technologies.",
    "When I'm not coding, you'll find me exploring new tech, contributing to open source, or leveling up in retro games.",
  ],
  skills: {
    Languages: ["TypeScript", "Python", "JavaScript", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"],
    Tools: ["Git", "Docker", "Linux", "VS Code", "Figma"],
  },
  projects: [
    {
      name: "Project Alpha",
      description:
        "A full-stack web application with real-time features and a modern CLI-inspired UI.",
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
