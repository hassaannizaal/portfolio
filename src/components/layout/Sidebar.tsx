"use client";

import { NAV_ITEMS } from "@/lib/navigation";
import type { SectionId } from "@/lib/types";

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="w-40 shrink-0 border-r border-border hidden sm:flex flex-col py-6 px-4">
      <p className="text-xs font-mono text-subtle uppercase tracking-wider mb-4">
        Navigation
      </p>
      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`block w-full text-left text-sm font-mono py-1.5 transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {isActive && (
                <span className="text-subtle mr-1">-</span>
              )}
              [{item.label}](./{item.id})
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
