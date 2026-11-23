import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index="01 / PROJECTS"
          label="Selected Work"
          subtitle="Production architecture, system sketches, and shipped engineering."
        />

        <div className="divide-y divide-hairline border-y border-hairline">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={String(idx + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
