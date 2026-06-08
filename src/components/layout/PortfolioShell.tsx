"use client";

import { useCallback, useState } from "react";
import type { SectionId } from "@/lib/types";
import { ContentPanel } from "@/components/sections/ContentPanel";
import { TerminalPanel } from "@/components/terminal/TerminalPanel";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const handleNavigate = useCallback((section: SectionId) => {
    setActiveSection(section);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-bg">
      <TopBar onHome={() => handleNavigate("about")} />

      <div className="flex flex-1 min-h-0">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
        <div className="flex flex-col flex-1 min-w-0">
          <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
          <ContentPanel activeSection={activeSection} />
        </div>
      </div>

      <TerminalPanel
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
