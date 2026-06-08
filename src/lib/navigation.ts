import type { NavItem, SectionId } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "index.tsx", path: "~/portfolio", icon: "◆", command: "whoami" },
  { id: "about", label: "about.md", path: "~/portfolio/about", icon: "◇", command: "about" },
  { id: "skills", label: "skills.json", path: "~/portfolio/skills", icon: "◇", command: "skills" },
  { id: "projects", label: "projects/", path: "~/portfolio/projects", icon: "▸", command: "projects" },
  { id: "experience", label: "experience.log", path: "~/portfolio/experience", icon: "◇", command: "experience" },
  { id: "contact", label: "contact.sh", path: "~/portfolio/contact", icon: "◇", command: "contact" },
];

const COMMAND_TO_SECTION: Record<string, SectionId> = {
  whoami: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  contact: "contact",
  ls: "home",
};

export function getSectionFromCommand(cmd: string): SectionId | null {
  return COMMAND_TO_SECTION[cmd.trim().toLowerCase()] ?? null;
}

export function getNavItem(id: SectionId): NavItem {
  return NAV_ITEMS.find((item) => item.id === id) ?? NAV_ITEMS[0];
}
