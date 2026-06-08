"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CliPrompt } from "@/components/cli/CliPrompt";

export function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <CliPrompt command="Skills" />

      <div className="grid sm:grid-cols-2 gap-4">
        {portfolio.skillGroups.map((group) => (
          <div
            key={group.label}
            className="border border-border rounded p-4 bg-surface"
          >
            <p className="text-sm font-mono text-foreground mb-3">
              {group.icon}{" "}
              <span className="text-subtle">`</span>
              {group.label}
              <span className="text-subtle">`</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-muted px-2 py-1 border border-border rounded bg-bg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
