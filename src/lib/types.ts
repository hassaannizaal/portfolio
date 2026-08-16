export type LineType = "input" | "output" | "error" | "system" | "ascii";

export interface TerminalLine {
  id: string;
  type: LineType;
  content: string;
  animate?: boolean;
}

export type SectionId =
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  command: string;
}

export interface SkillGroup {
  icon: string;
  label: string;
  items: string[];
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
  username: string;
  name: string;
  title: string;
  tagline: string;
  eyebrow: string;
  headline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  available: boolean;
  bio: string;
  highlights: string[];
  stack: string[];
  skillGroups: SkillGroup[];
  education: string[];
  resumeUrl?: string;
  resumeUpdated?: string;
  projects: Project[];
  experience: Experience[];
}
