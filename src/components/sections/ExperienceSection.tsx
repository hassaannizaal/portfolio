"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CliPrompt } from "@/components/cli/CliPrompt";

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <CliPrompt command="Experience" />

      <div className="space-y-6">
        {portfolio.experience.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="border border-border rounded p-4 bg-surface"
          >
            <p className="text-sm font-mono text-foreground">
              {exp.role}{" "}
              <span className="text-muted">@ {exp.company}</span>
            </p>
            <p className="text-xs font-mono text-subtle mt-1">{exp.period}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.highlights.map((h) => (
                <li key={h} className="text-sm font-mono text-muted flex gap-2">
                  <span className="text-subtle">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
