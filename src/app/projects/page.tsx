import { ProjectCard } from "@/components/site/ProjectCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects · Hassaan Nizaal",
  description: "Selected work. ODIN and more.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-bg text-fg">
      <SiteHeader />
      <main className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4">
            <span className="h-px flex-1 bg-line" />
            <h1 className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-fg/70 sm:text-[12px] sm:tracking-[0.24em]">
              Projects
            </h1>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
