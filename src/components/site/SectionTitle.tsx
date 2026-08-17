interface SectionTitleProps {
  label: string;
  variant?: "default" | "light";
}

export function SectionTitle({ label, variant = "default" }: SectionTitleProps) {
  const borderColor = variant === "light" ? "bg-white/15" : "bg-white/12";
  const textColor =
    variant === "light" ? "text-white/70" : "text-white/60";

  return (
    <div className="mb-8 flex items-center gap-3 sm:mb-10 sm:gap-4 lg:mb-14">
      <span className={`h-px flex-1 ${borderColor}`} />
      <h2
        className={`shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] sm:text-[12px] sm:tracking-[0.24em] lg:text-[13px] ${textColor}`}
      >
        {label}
      </h2>
      <span className={`h-px flex-1 ${borderColor}`} />
    </div>
  );
}
