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

export function getHelpLines(): TerminalLine[] {
  return [
    line("Available commands:", "output"),
    line("", "output"),
    line("  help         — Show this help message", "output"),
    line("  about        — About me", "output"),
    line("  skills       — Technical skills", "output"),
    line("  projects     — Browse projects", "output"),
    line("  experience   — Work history", "output"),
    line("  contact      — Get in touch", "output"),
    line("  whoami       — Quick intro", "output"),
    line("  clear        — Clear terminal", "output"),
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
        line(portfolio.bio, "output"),
      ];

    case "about":
      return [
        line(portfolio.bio, "output"),
        line("", "output"),
        ...portfolio.highlights.map((h) => line(`• ${h}`, "output")),
        line("", "output"),
        line(`Location: ${portfolio.location}`, "system"),
      ];

    case "skills":
      return portfolio.skillGroups.flatMap((group) => [
        line(`[${group.label}]`, "output"),
        line(`  ${group.items.join("  ·  ")}`, "output"),
        line("", "output"),
      ]);

    case "projects":
      return portfolio.projects.flatMap((project) => [
        line(`▸ ${project.name}`, "output"),
        line(`  ${project.description}`, "output"),
        line(`  ${project.tech.join(", ")}`, "system"),
        line("", "output"),
      ]);

    case "experience":
      return portfolio.experience.flatMap((exp) => [
        line(`${exp.role} @ ${exp.company}`, "output"),
        line(`  ${exp.period}`, "system"),
        ...exp.highlights.map((h) => line(`  • ${h}`, "output")),
        line("", "output"),
      ]);

    case "contact":
      return [
        line(`Email:    ${portfolio.email}`, "output"),
        line(`GitHub:   ${portfolio.github}`, "output"),
        line(`LinkedIn: ${portfolio.linkedin}`, "output"),
        line("", "output"),
        line("Feel free to reach out.", "system", true),
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
    content: `Type "help" to explore — or use the navigation above`,
    animate: false,
  };
}
