import { portfolio } from "@/data/portfolio";

interface CliPromptProps {
  command: string;
  className?: string;
}

export function CliPrompt({ command, className = "" }: CliPromptProps) {
  return (
    <p className={`font-mono text-sm sm:text-base ${className}`}>
      <span className="text-subtle">{portfolio.username}.dev@portfolio:~$</span>{" "}
      <span className="text-foreground">{command}</span>
    </p>
  );
}
