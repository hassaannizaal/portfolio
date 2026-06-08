import { portfolio } from "@/data/portfolio";
import type { TerminalLine } from "@/lib/types";

function line(
  content: string,
  type: TerminalLine["type"] = "output",
  animate = false,
): TerminalLine {
  return {
    id: crypto.randomUUID(),
    type,
    content,
    animate,
  };
}

export const BOOT_LINES: string[] = [
  "Loading portfolio",
  "Preparing interface",
  "Ready",
];

export const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "whoami",
  "ls",
  "clear",
  "sudo hire-me",
] as const;

export type Command = (typeof COMMANDS)[number];

export function getHelpLines(): TerminalLine[] {
  return [
    line("Available commands:", "output"),
    line("", "output"),
    line("  help         — Show this help message", "output"),
    line("  about        — Learn about me", "output"),
    line("  skills       — View technical skills", "output"),
    line("  projects     — Browse my projects", "output"),
    line("  experience   — Work history", "output"),
    line("  contact      — Get in touch", "output"),
    line("  whoami       — Quick introduction", "output"),
    line("  ls           — List directories", "output"),
    line("  clear        — Clear terminal", "output"),
    line("  sudo hire-me — Try it ;)", "output"),
    line("", "output"),
    line("Tip: Use ↑/↓ for command history", "system"),
  ];
}

export function executeCommand(input: string): TerminalLine[] {
  const cmd = input.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return getHelpLines();

    case "clear":
      return [];

    case "whoami":
      return [
        line(portfolio.name, "output", true),
        line(portfolio.title, "output"),
        line(portfolio.tagline, "output"),
      ];

    case "about":
      return [
        line(`> cat about.txt`, "input"),
        line("", "output"),
        ...portfolio.about.map((p) => line(p, "output")),
        line("", "output"),
        line(`Location: ${portfolio.location}`, "system"),
      ];

    case "skills":
      return [
        line(`> ls -la ~/skills/`, "input"),
        line("", "output"),
        ...Object.entries(portfolio.skills).flatMap(([category, items]) => [
          line(`[${category}]`, "output"),
          line(`  ${items.join("  ·  ")}`, "output"),
          line("", "output"),
        ]),
      ];

    case "projects":
      return [
        line(`> ls ~/projects/`, "input"),
        line("", "output"),
        ...portfolio.projects.flatMap((project) => [
          line(`▸ ${project.name}`, "output"),
          line(`  ${project.description}`, "output"),
          line(`  Tech: ${project.tech.join(", ")}`, "system"),
          ...(project.github
            ? [line(`  GitHub: ${project.github}`, "system")]
            : []),
          line("", "output"),
        ]),
      ];

    case "experience":
      return [
        line(`> cat experience.log`, "input"),
        line("", "output"),
        ...portfolio.experience.flatMap((exp) => [
          line(`${exp.role} @ ${exp.company}`, "output"),
          line(`  ${exp.period}`, "system"),
          ...exp.highlights.map((h) => line(`  • ${h}`, "output")),
          line("", "output"),
        ]),
      ];

    case "contact":
      return [
        line(`> ./contact.sh`, "input"),
        line("", "output"),
        line(`Email:    ${portfolio.email}`, "output"),
        line(`GitHub:   ${portfolio.github}`, "output"),
        line(`LinkedIn: ${portfolio.linkedin}`, "output"),
        line("", "output"),
        line("Feel free to reach out — I respond to all messages.", "system", true),
      ];

    case "ls":
      return [
        line(`> ls ~/${portfolio.name.toLowerCase().replace(/\s/g, "-")}/`, "input"),
        line("", "output"),
        line("drwxr-xr-x  about/", "output"),
        line("drwxr-xr-x  skills/", "output"),
        line("drwxr-xr-x  projects/", "output"),
        line("drwxr-xr-x  experience/", "output"),
        line("-rw-r--r--  contact.sh", "output"),
        line("-rw-r--r--  resume.pdf", "output"),
        line("", "output"),
        line('Type a directory name or use commands like "about", "projects"', "system"),
      ];

    case "sudo hire-me":
      return [
        line(`> sudo hire-me`, "input"),
        line("", "output"),
        line("Access granted.", "system", true),
        line("", "output"),
        line("Status: open to collaborate", "output"),
        line(`→ ${portfolio.email}`, "system"),
      ];

    case "":
      return [];

    default:
      return [
        line(`Command not found: ${input}`, "error"),
        line('Type "help" for available commands.', "system"),
      ];
  }
}

export function getWelcomeLine(): TerminalLine {
  return {
    id: "welcome",
    type: "system",
    content: `${portfolio.name} — type "help" to get started`,
    animate: false,
  };
}
