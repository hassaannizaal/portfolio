import type { NavItem, SectionId } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About", command: "about" },
  { id: "projects", label: "Projects", command: "projects" },
  { id: "experience", label: "Experience", command: "experience" },
  { id: "skills", label: "Skills", command: "skills" },
  { id: "contact", label: "Contact", command: "contact" },
];

const COMMAND_TO_SECTION: Record<string, SectionId> = {
  whoami: "about",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  contact: "contact",
  ls: "about",
};

export function getSectionFromCommand(cmd: string): SectionId | null {
  return COMMAND_TO_SECTION[cmd.trim().toLowerCase()] ?? null;
}

export function getNavItem(id: SectionId): NavItem {
  return NAV_ITEMS.find((item) => item.id === id) ?? NAV_ITEMS[0];
}

export function getSectionLabel(id: SectionId): string {
  return getNavItem(id).label;
}
