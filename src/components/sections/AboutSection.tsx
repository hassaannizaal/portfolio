"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CliBlock } from "@/components/cli/CliBlock";
import { CliPrompt } from "@/components/cli/CliPrompt";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <CliPrompt command="About" />

      <CliBlock>{portfolio.bio}</CliBlock>

      <div className="flex items-center gap-3 text-sm font-mono text-muted">
        <span className="text-subtle">`</span>
        profile.jpg
        <span className="text-subtle">`</span>
        <span className="text-subtle">(73KB)</span>
      </div>

      <ul className="space-y-2">
        {portfolio.highlights.map((item) => (
          <li key={item} className="text-sm font-mono text-muted flex gap-2">
            <span className="text-subtle shrink-0">•</span>
            <span>
              <span className="text-subtle">`</span>
              {item}
              <span className="text-subtle">`</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="grid sm:grid-cols-2 gap-4">
        {portfolio.skillGroups.map((group) => (
          <div
            key={group.label}
            className="border border-border rounded p-4 bg-surface"
          >
            <p className="text-sm font-mono text-foreground mb-3">
              {group.icon}
              <span className="text-subtle ml-2">`</span>
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

      <ul className="space-y-2">
        {portfolio.education.map((item) => (
          <li key={item} className="text-sm font-mono text-muted">
            <span className="text-subtle">-</span> {item}
          </li>
        ))}
      </ul>

      {portfolio.resumeUrl && (
        <div className="pt-2">
          <p className="text-sm font-mono text-muted mb-3">
            <span className="text-subtle">`</span>
            Download Resume
            {portfolio.resumeUpdated && (
              <span className="text-subtle">
                {" "}
                (Updated {portfolio.resumeUpdated})
              </span>
            )}
            <span className="text-subtle">`</span>
          </p>
          <a
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-mono text-foreground border border-border px-4 py-2 rounded hover:bg-surface-2 transition-colors"
          >
            Download Resume PDF →
          </a>
        </div>
      )}
    </motion.div>
  );
}
