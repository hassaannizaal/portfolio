import { OdometerText } from "./OdometerText";

interface SplitCtaProps {
  href: string;
  left: string;
  right: string;
  dark?: boolean;
}

export function SplitCta({ href, left, right, dark = false }: SplitCtaProps) {
  const pill = dark
    ? "bg-white text-fg hover:bg-white/90"
    : "bg-fg text-bg hover:bg-fg/90";

  return (
    <a
      href={href}
      className="odometer group inline-flex w-fit shrink-0 cursor-pointer items-center font-mono text-[15px] uppercase tracking-wide"
    >
      <span className="sr-only">
        {left} {right}
      </span>
      <span
        className={`inline-flex h-12 items-center gap-[0.4em] rounded-lg px-6 transition-colors duration-300 ${pill}`}
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
    </a>
  );
}
