"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { getNavItem } from "@/lib/navigation";
import type { SectionId } from "@/lib/types";
import { ContentPanel } from "@/components/sections/ContentPanel";
import { BootSequence } from "@/components/terminal/BootSequence";
import { TerminalPanel } from "@/components/terminal/TerminalPanel";
import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function PortfolioShell() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [terminalOpen, setTerminalOpen] = useState(true);

  const handleNavigate = useCallback((section: SectionId) => {
    setActiveSection(section);
  }, []);

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  const handleSkipBoot = useCallback(() => {
    setBooting(false);
  }, []);

  if (booting) {
    return (
      <div className="relative h-screen flex flex-col bg-bg">
        <BootSequence onComplete={handleBootComplete} />
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={handleSkipBoot}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    );
  }

  const nav = getNavItem(activeSection);

  return (
    <div className="h-screen flex flex-col bg-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col flex-1 min-h-0 border border-border m-2 sm:m-3 rounded-md bg-surface overflow-hidden"
      >
        <TopBar
          activeSection={activeSection}
          terminalOpen={terminalOpen}
          onToggleTerminal={() => setTerminalOpen((o) => !o)}
        />

        <div className="flex flex-1 min-h-0">
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
          <div className="flex flex-col flex-1 min-w-0">
            <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 border-b border-border bg-bg/50 shrink-0">
              <span className="text-xs font-mono text-muted">{nav.path}</span>
              <span className="text-subtle">/</span>
              <span className="text-xs font-mono text-foreground">{nav.label}</span>
            </div>
            <ContentPanel activeSection={activeSection} />
          </div>
        </div>

        <TerminalPanel
          open={terminalOpen}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </motion.div>

      <footer className="text-center text-muted text-xs py-2 shrink-0">
        © {new Date().getFullYear()} {portfolio.name}
      </footer>
    </div>
  );
}
