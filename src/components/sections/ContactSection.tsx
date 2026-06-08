"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
  { label: "GitHub", value: "github.com/hassaannizaal", href: portfolio.github },
  { label: "LinkedIn", value: "linkedin.com/in/hassaannizaal", href: portfolio.linkedin },
];

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl font-medium text-foreground tracking-tight">Contact</h2>
        <p className="text-muted text-sm mt-2">
          Feel free to reach out — I respond to all messages.
        </p>
      </header>

      <div className="space-y-3">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between border border-border rounded-md p-4 bg-bg hover:border-subtle hover:bg-surface transition-all group"
          >
            <div>
              <p className="text-xs text-muted">{link.label}</p>
              <p className="text-sm text-foreground mt-0.5 group-hover:text-accent transition-colors">
                {link.value}
              </p>
            </div>
            <span className="text-subtle group-hover:text-foreground transition-colors">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
