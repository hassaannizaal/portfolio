"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CliPrompt } from "@/components/cli/CliPrompt";

const links = [
  { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  { label: "GitHub", value: portfolio.github.replace("https://", ""), href: portfolio.github },
  { label: "LinkedIn", value: portfolio.linkedin.replace("https://", ""), href: portfolio.linkedin },
];

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <CliPrompt command="Contact" />

      <p className="text-sm font-mono text-muted">
        Feel free to reach out — I respond to all messages.
      </p>

      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-border rounded p-4 bg-surface hover:bg-surface-2 transition-colors group"
          >
            <div className="font-mono text-sm">
              <span className="text-subtle">{link.label}:</span>{" "}
              <span className="text-muted group-hover:text-foreground transition-colors">
                {link.value}
              </span>
            </div>
            <span className="text-subtle group-hover:text-foreground">→</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
