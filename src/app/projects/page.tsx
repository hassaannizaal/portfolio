import Link from "next/link";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects · Hassaan Nizaal",
  description:
    "Selected engineering work and architecture case studies by Hassaan Nizaal.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-ink">
      <SiteHeader />
      <main className="px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            <Link
              href="/"
              className="text-ink-secondary transition-colors hover:text-accent"
            >
              ← Back to Home
            </Link>
            <span>{projects.length} PROJECT</span>
          </div>

          <SectionTitle
            index="ARCHIVE"
            label="Selected Work"
            subtitle="Detailed case studies, system diagrams, and architectural decisions."
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
      </main>
      <SiteFooter />
    </div>
  );
}
