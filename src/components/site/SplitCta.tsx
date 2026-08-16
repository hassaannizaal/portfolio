import { OdometerText } from "./OdometerText";

interface SplitCtaProps {
  href?: string;
  onClick?: () => void;
  left: string;
  right: string;
  dark?: boolean;
  variant?: "primary" | "outline";
  ariaLabel?: string;
}

export function SplitCta({
  href,
  onClick,
  left,
  right,
  dark = false,
  variant = "primary",
  ariaLabel,
}: SplitCtaProps) {
  const primary = dark
    ? "bg-white text-fg hover:bg-white/90"
    : "bg-fg text-bg hover:bg-fg/90";
  const outline = dark
    ? "border border-white/25 text-white hover:bg-white/5"
    : "border border-fg/25 text-fg hover:bg-fg/5";
  const pill = variant === "outline" ? outline : primary;

  const className =
    "odometer group inline-flex w-full shrink-0 cursor-pointer items-center justify-center font-mono text-[14px] uppercase tracking-wide sm:w-fit sm:text-[15px]";

  const inner = (
    <>
      <span className="sr-only">
        {ariaLabel ?? `${left} ${right}`}
      </span>
      <span
        className={`inline-flex h-12 w-full items-center justify-center gap-[0.4em] rounded-lg px-5 transition-colors duration-300 sm:w-auto sm:px-6 ${pill}`}
      >
        <OdometerText text={left} />
        <OdometerText text={right} />
        <span
          aria-hidden="true"
          className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {inner}
    </button>
  );
}
