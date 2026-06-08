"use client";

import type { SectionId } from "@/lib/types";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

const SECTIONS: Record<SectionId, React.ComponentType> = {
  home: HomeSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  contact: ContactSection,
};

interface ContentPanelProps {
  activeSection: SectionId;
}

export function ContentPanel({ activeSection }: ContentPanelProps) {
  const Section = SECTIONS[activeSection];

  return (
    <main className="flex-1 overflow-y-auto scrollbar p-6 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <Section key={activeSection} />
      </div>
    </main>
  );
}
