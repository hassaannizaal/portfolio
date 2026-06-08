"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl font-medium text-foreground tracking-tight">Experience</h2>
      </header>

      <div className="space-y-8">
        {portfolio.experience.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="border-l border-border pl-5"
          >
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="font-medium text-foreground">{exp.role}</h3>
              <span className="text-muted text-sm">{exp.company}</span>
            </div>
            <p className="text-subtle text-xs mt-1">{exp.period}</p>
            <ul className="mt-3 space-y-2">
              {exp.highlights.map((h) => (
                <li key={h} className="text-sm text-muted leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
