"use client";

import { portfolio } from "@/data/portfolio";

interface TopBarProps {
  onHome?: () => void;
}

export function TopBar({ onHome }: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-border shrink-0">
      <button
        onClick={onHome}
        className="font-mono text-sm text-foreground hover:text-muted transition-colors"
      >
        <span className="text-subtle">[</span>
        <span className="text-muted">&gt;.</span> {portfolio.username}@portfolio:
        <span className="text-subtle">~$</span>
        <span className="text-subtle">]</span>
      </button>

      {portfolio.available && (
        <span className="flex items-center gap-2 text-xs font-mono text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-available" />
          Available
        </span>
      )}
    </header>
  );
}
