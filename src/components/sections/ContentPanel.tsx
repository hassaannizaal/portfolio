"use client";

import type { SectionId } from "@/lib/types";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

const SECTIONS: Record<SectionId, React.ComponentType> = {
  about: AboutSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  skills: SkillsSection,
  contact: ContactSection,
};

interface ContentPanelProps {
  activeSection: SectionId;
}

export function ContentPanel({ activeSection }: ContentPanelProps) {
  const Section = SECTIONS[activeSection];

  return (
    <main className="flex-1 overflow-y-auto scrollbar px-5 sm:px-8 py-6 sm:py-8">
      <div className="max-w-2xl">
        <Section key={activeSection} />
      </div>
    </main>
  );
}
