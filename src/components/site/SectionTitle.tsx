interface SectionTitleProps {
  index?: string;
  label: string;
  subtitle?: string;
}

export function SectionTitle({ index, label, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 border-t border-hairline pt-6 sm:mb-16">
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-3">
          {index && (
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
              {index}
            </span>
          )}
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-display text-[38px] font-normal leading-[1.04] tracking-[-0.02em] text-ink sm:text-[46px]">
            {label}
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          {subtitle && (
            <p className="font-sans text-[13.5px] leading-relaxed text-ink-muted">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
