export function CodexBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle architectural drafting margin lines on large screens */}
      <div className="mx-auto hidden h-full max-w-[1360px] border-x border-hairline/70 xl:block" />

      {/* Faint Renaissance celestial / geometric compass watermark */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-ink opacity-[0.075]"
        fill="none"
        stroke="currentColor"
      >
        {/* Large sweeping right-side astrolabe arc */}
        <circle cx="1180" cy="410" r="460" strokeWidth="0.7" />
        <circle
          cx="1180"
          cy="410"
          r="438"
          strokeWidth="0.6"
          strokeDasharray="3 7"
        />
        <circle cx="1180" cy="410" r="320" strokeWidth="0.5" />

        {/* Subtle golden-ratio diagonal & horizon construction lines */}
        <line
          x1="0"
          y1="410"
          x2="1440"
          y2="410"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
        <line
          x1="1180"
          y1="0"
          x2="1180"
          y2="900"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
        <line
          x1="210"
          y1="900"
          x2="1180"
          y2="410"
          strokeWidth="0.5"
          strokeOpacity="0.65"
        />

        {/* Subtle bottom-left compass rose arc */}
        <circle cx="110" cy="820" r="240" strokeWidth="0.6" />
        <circle
          cx="110"
          cy="820"
          r="224"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />

        {/* Delicate drafting corner crosshairs */}
        <g strokeWidth="0.8" opacity="0.9">
          <path d="M 48 92 L 48 112 M 38 102 L 58 102" />
          <path d="M 1392 92 L 1392 112 M 1382 102 L 1402 102" />
          <path d="M 48 808 L 48 828 M 38 818 L 58 818" />
          <path d="M 1392 808 L 1392 828 M 1382 818 L 1402 818" />
        </g>
      </svg>
    </div>
  );
}
