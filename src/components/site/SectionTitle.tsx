interface SectionTitleProps {
  index?: string;
  label: string;
  italicWord?: string;
  subtitle?: string;
}

export function SectionTitle({
  index,
  label,
  italicWord,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 border-t border-hairline pt-6 sm:mb-16">
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="flex items-center gap-3 lg:col-span-3">
          {index && (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {index}
            </span>
          )}
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-display text-[42px] font-light leading-[1.0] tracking-[-0.025em] text-ink sm:text-[52px]">
            {label}{" "}
            {italicWord && (
              <span className="italic font-normal text-ink/90">
                {italicWord}
              </span>
            )}
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          {subtitle && (
            <p className="font-sans text-[13.5px] font-light leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
