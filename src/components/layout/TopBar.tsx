"use client";

import { portfolio } from "@/data/portfolio";
import { getNavItem } from "@/lib/navigation";
import type { SectionId } from "@/lib/types";

interface TopBarProps {
  activeSection: SectionId;
  terminalOpen: boolean;
  onToggleTerminal: () => void;
}

export function TopBar({
  activeSection,
  terminalOpen,
  onToggleTerminal,
}: TopBarProps) {
  const nav = getNavItem(activeSection);

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg shrink-0">
      <span className="text-sm text-foreground truncate">
        {portfolio.name}
      </span>

      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-muted hidden md:inline truncate max-w-[200px]">
          {nav.path}/{nav.label}
        </span>
        <button
          onClick={onToggleTerminal}
          className={`text-xs px-3 py-1.5 rounded border transition-colors ${
            terminalOpen
              ? "border-foreground/30 text-foreground bg-surface-2"
              : "border-border text-muted hover:text-foreground hover:border-subtle"
          }`}
          aria-pressed={terminalOpen}
        >
          Terminal
        </button>
      </div>
    </header>
  );
}
