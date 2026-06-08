"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <h2 className="text-2xl font-medium text-foreground tracking-tight">About</h2>
      </header>

      <div className="space-y-4 text-muted leading-relaxed">
        {portfolio.about.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <p className="text-sm text-subtle pt-2">{portfolio.location}</p>
    </motion.div>
  );
}
