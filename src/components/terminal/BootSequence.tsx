"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { BOOT_LINES } from "@/lib/commands";

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step < BOOT_LINES.length) {
      const timer = setTimeout(() => {
        setStep((s) => s + 1);
        setProgress(((step + 1) / BOOT_LINES.length) * 100);
      }, 500);
      return () => clearTimeout(timer);
    }

    const doneTimer = setTimeout(onComplete, 400);
    return () => clearTimeout(doneTimer);
  }, [step, onComplete]);

  return (
    <div className="relative flex flex-col h-full justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-sm text-center"
      >
        <p className="text-foreground text-lg font-medium tracking-tight">
          {portfolio.name}
        </p>
        <p className="text-muted text-sm mt-1">
          {BOOT_LINES[Math.min(step, BOOT_LINES.length - 1)]}
        </p>

        <div className="mt-8 h-px bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-foreground"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
