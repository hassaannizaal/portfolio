import { portfolio } from "@/data/portfolio";

function pad(index: number) {
  return String(index + 1).padStart(3, "0");
}

export function Work() {
  return (
    <section id="work" className="px-6 py-24 lg:px-20 lg:py-32">
      <h2 className="mb-16 max-w-xl text-balance text-[40px] font-medium leading-[1.1] tracking-tight lg:text-[46px]">
        The work that gets remembered.
      </h2>

      <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {portfolio.projects.map((project, index) => (
          <li key={project.name} className="flex flex-col border-t border-line pt-5">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-wide text-faint">
              {pad(index)} / {project.name}
            </p>
            <p className="mb-6 text-[17px] leading-relaxed text-fg/75">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[12px] uppercase tracking-wide text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="odometer mt-6 inline-flex font-mono text-[13px] uppercase text-fg/55 transition-colors hover:text-fg"
              >
                Source
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
