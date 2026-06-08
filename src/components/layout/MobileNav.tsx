"use client";

import { NAV_ITEMS } from "@/lib/navigation";
import type { SectionId } from "@/lib/types";

interface MobileNavProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <nav className="sm:hidden flex overflow-x-auto border-b border-border bg-bg shrink-0 scrollbar">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`shrink-0 px-4 py-3 text-xs transition-colors ${
              isActive
                ? "text-foreground border-b border-foreground"
                : "text-muted"
            }`}
          >
            {item.label.replace(/\.(tsx|md|json|log|sh)$/, "")}
          </button>
        );
      })}
    </nav>
  );
}
