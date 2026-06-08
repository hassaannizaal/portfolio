"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { executeCommand, getWelcomeLine } from "@/lib/commands";
import { getSectionFromCommand } from "@/lib/navigation";
import type { SectionId, TerminalLine as TerminalLineType } from "@/lib/types";
import { CommandInput } from "./CommandInput";
import { TerminalLine } from "./TerminalLine";

interface TerminalPanelProps {
  open: boolean;
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export function TerminalPanel({
  open,
  activeSection,
  onNavigate,
}: TerminalPanelProps) {
  const [lines, setLines] = useState<TerminalLineType[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [initialized, setInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  useEffect(() => {
    if (!initialized) {
      setLines([getWelcomeLine()]);
      setInitialized(true);
    }
  }, [initialized]);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const inputLine: TerminalLineType = {
      id: crypto.randomUUID(),
      type: "input",
      content: trimmed,
    };

    if (trimmed.toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      return;
    }

    const section = getSectionFromCommand(trimmed);
    if (section) {
      onNavigate(section);
    }

    const output = executeCommand(trimmed);
    setLines((prev) => [...prev, inputLine, ...output]);
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput("");
  }, [input, onNavigate]);

  const handleHistoryUp = useCallback(() => {
    if (history.length === 0) return;
    const newIndex =
      historyIndex === -1
        ? history.length - 1
        : Math.max(0, historyIndex - 1);
    setHistoryIndex(newIndex);
    setInput(history[newIndex]);
  }, [history, historyIndex]);

  const handleHistoryDown = useCallback(() => {
    if (historyIndex === -1) return;
    const newIndex = historyIndex + 1;
    if (newIndex >= history.length) {
      setHistoryIndex(-1);
      setInput("");
    } else {
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
  }, [history, historyIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-border bg-bg shrink-0 overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface">
            <span className="text-xs font-mono text-muted">
              Terminal — {activeSection}
            </span>
            <span className="text-xs font-mono text-subtle hidden sm:inline">
              ↑↓ history
            </span>
          </div>

          <div
            ref={scrollRef}
            className="h-36 sm:h-44 overflow-y-auto p-3 sm:px-4 space-y-0.5 scrollbar"
            onClick={() =>
              document
                .querySelector<HTMLInputElement>("[data-terminal-input]")
                ?.focus()
            }
          >
            {lines.map((line) => (
              <TerminalLine key={line.id} line={line} />
            ))}
          </div>

          <div className="px-3 sm:px-4 py-2.5 border-t border-border">
            <CommandInput
              value={input}
              onChange={setInput}
              onSubmit={handleSubmit}
              onHistoryUp={handleHistoryUp}
              onHistoryDown={handleHistoryDown}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
