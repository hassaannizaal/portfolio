"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function HomeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-10"
    >
      <div>
        <h1 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
          {portfolio.name}
        </h1>
        <p className="text-muted text-lg mt-2">{portfolio.title}</p>
        <p className="text-muted/80 mt-4 max-w-xl leading-relaxed">
          {portfolio.tagline}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <StatCard label="Location" value={portfolio.location} />
        <StatCard label="Status" value="Open to opportunities" />
      </div>

      <div className="border border-border rounded-md p-5 bg-bg">
        <p className="text-xs text-muted uppercase tracking-wider mb-4">Quick start</p>
        <ul className="space-y-3 text-sm text-muted">
          <li>Browse sections using the sidebar</li>
          <li>Or use the terminal below with commands like <code className="text-foreground">help</code></li>
        </ul>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border rounded-md p-4 bg-bg">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  );
}
