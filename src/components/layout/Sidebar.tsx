"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { NAV_ITEMS } from "@/lib/navigation";
import type { SectionId } from "@/lib/types";

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  collapsed?: boolean;
}

export function Sidebar({
  activeSection,
  onNavigate,
  collapsed = false,
}: SidebarProps) {
  if (collapsed) return null;

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-52 shrink-0 border-r border-border bg-bg flex flex-col hidden sm:flex"
    >
      <div className="px-4 py-4 border-b border-border">
        <p className="text-xs text-muted uppercase tracking-wider">Explorer</p>
        <p className="text-sm text-foreground mt-1 truncate">
          {portfolio.name.split(" ")[0].toLowerCase()}-portfolio
        </p>
      </div>

      <nav className="flex-1 py-2 overflow-y-auto scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left text-sm font-mono transition-colors ${
                isActive
                  ? "bg-surface-2 text-foreground"
                  : "text-muted hover:text-foreground hover:bg-surface/50"
              }`}
            >
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
}
