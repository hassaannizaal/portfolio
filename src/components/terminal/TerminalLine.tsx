"use client";

import { motion } from "framer-motion";
import type { TerminalLine as TerminalLineType } from "@/lib/types";
import { TypewriterText } from "./TypewriterText";

interface TerminalLineProps {
  line: TerminalLineType;
}

const lineColors: Record<TerminalLineType["type"], string> = {
  input: "text-muted",
  output: "text-foreground",
  error: "text-destructive",
  system: "text-muted",
  ascii: "text-foreground",
};

export function TerminalLine({ line }: TerminalLineProps) {
  const colorClass = lineColors[line.type];

  if (line.animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`font-mono text-sm leading-relaxed ${colorClass}`}
      >
        <TypewriterText text={line.content} />
      </motion.div>
    );
  }

  if (!line.content) {
    return <div className="h-4" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`font-mono text-sm leading-relaxed whitespace-pre-wrap break-words ${colorClass}`}
    >
      {line.type === "input" && (
        <span className="text-subtle mr-2">$</span>
      )}
      {line.content}
    </motion.div>
  );
}
