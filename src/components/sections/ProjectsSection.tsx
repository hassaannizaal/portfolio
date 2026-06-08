"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl font-medium text-foreground tracking-tight">Projects</h2>
      </header>

      <div className="space-y-4">
        {portfolio.projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="border border-border rounded-md p-5 bg-bg hover:border-subtle transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-medium text-foreground">
                {project.name}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground transition-colors shrink-0"
                >
                  GitHub →
                </a>
              )}
            </div>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-subtle">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
