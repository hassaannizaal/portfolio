interface CliBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CliBlock({ children, className = "" }: CliBlockProps) {
  return (
    <div
      className={`border border-border rounded px-4 py-3 bg-cli-block text-muted text-sm leading-relaxed font-mono ${className}`}
    >
      <span className="text-subtle">`</span>
      {children}
      <span className="text-subtle">`</span>
    </div>
  );
}
