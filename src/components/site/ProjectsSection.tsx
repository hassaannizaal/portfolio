import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionTitle
            index="01 / PROJECTS"
            label="Selected"
            italicWord="Work"
            subtitle="Production systems documented with bespoke schematics and engineering trade-offs."
          />
        </ScrollReveal>

        <div className="divide-y divide-hairline border-y border-hairline">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.slug} delayMs={80}>
              <ProjectCard
                project={project}
                index={String(idx + 1).padStart(2, "0")}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
