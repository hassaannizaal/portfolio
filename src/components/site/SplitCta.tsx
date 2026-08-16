import { OdometerText } from "./OdometerText";

interface SplitCtaProps {
  href: string;
  left: string;
  right: string;
  dark?: boolean;
}

export function SplitCta({ href, left, right, dark = false }: SplitCtaProps) {
  const pill = dark
    ? "bg-white text-fg"
    : "bg-fg text-bg";

  return (
    <a
      href={href}
      className="odometer relative inline-flex w-fit shrink-0 cursor-pointer items-center gap-px font-mono text-[15px] uppercase tracking-wide"
    >
      <span className="sr-only">
        {left} {right}
      </span>
      <span
        className={`inline-flex h-12 items-center rounded-lg px-5 ${pill}`}
      >
        <OdometerText text={left} />
      </span>
      <span
        className={`inline-flex h-12 items-center rounded-lg px-5 ${pill}`}
      >
        <OdometerText text={right} />
      </span>
    </a>
  );
}
