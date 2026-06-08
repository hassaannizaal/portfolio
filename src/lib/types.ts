export type LineType = "input" | "output" | "error" | "system" | "ascii";

export interface TerminalLine {
  id: string;
  type: LineType;
  content: string;
  animate?: boolean;
}

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  path: string;
  icon: string;
  command: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  about: string[];
  skills: Record<string, string[]>;
  projects: Project[];
  experience: Experience[];
}
