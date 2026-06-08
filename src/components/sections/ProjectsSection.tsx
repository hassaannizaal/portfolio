"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CliPrompt } from "@/components/cli/CliPrompt";

export function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <CliPrompt command="Projects" />

      <div className="space-y-4">
        {portfolio.projects.map((project) => (
          <div
            key={project.name}
            className="border border-border rounded p-4 bg-surface hover:bg-surface-2/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-mono text-foreground">
                <span className="text-subtle">▸</span> {project.name}
              </p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted hover:text-foreground shrink-0"
                >
                  [source]
                </a>
              )}
            </div>
            <p className="text-sm font-mono text-muted mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-subtle border border-border px-2 py-0.5 rounded bg-bg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
