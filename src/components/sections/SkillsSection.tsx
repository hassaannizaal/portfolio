"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function SkillsSection() {
  const entries = Object.entries(portfolio.skills);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl font-medium text-foreground tracking-tight">Skills</h2>
      </header>

      <div className="space-y-6">
        {entries.map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="text-xs text-muted uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm border border-border rounded-md text-foreground bg-bg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
