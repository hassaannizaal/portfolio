"use client";

import { useEffect, useRef } from "react";

interface CommandInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
  prompt?: string;
  disabled?: boolean;
}

export function CommandInput({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  prompt = "~$",
  disabled = false,
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onHistoryUp();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onHistoryDown();
    }
  };

  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-muted shrink-0">{prompt}</span>
      <input
        ref={inputRef}
        type="text"
        data-terminal-input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        aria-label="Terminal command input"
        className="flex-1 bg-transparent outline-none text-foreground caret-foreground placeholder:text-subtle disabled:opacity-50"
        placeholder=""
      />
      {!disabled && (
        <span className="cursor-blink text-muted shrink-0">▌</span>
      )}
    </div>
  );
}
