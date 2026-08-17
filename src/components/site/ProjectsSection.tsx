import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <section
      id="proj"
      className="relative bg-bg px-4 py-12 text-fg sm:px-6 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle label="02 · Projects" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/projects"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-line bg-fg/[0.02] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/70 transition-colors hover:border-fg/25 hover:text-accent sm:w-auto"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
