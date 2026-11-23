export function CodexBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Subtle architectural outer page margins on wide displays */}
      <div className="mx-auto hidden h-full max-w-[1360px] border-x border-hairline/75 xl:block" />

      {/* Delicate celestial & geometric drafting construction watermark */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-ink opacity-[0.075]"
        fill="none"
        stroke="currentColor"
      >
        {/* Right-side sweeping astrolabe rings */}
        <circle cx="1180" cy="410" r="468" strokeWidth="0.7" />
        <circle
          cx="1180"
          cy="410"
          r="446"
          strokeWidth="0.6"
          strokeDasharray="3 7"
        />
        <circle cx="1180" cy="410" r="326" strokeWidth="0.5" />
        <circle
          cx="1180"
          cy="410"
          r="210"
          strokeWidth="0.45"
          strokeDasharray="2 6"
        />

        {/* Golden-ratio diagonal & meridian axes */}
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
          x1="180"
          y1="900"
          x2="1180"
          y2="410"
          strokeWidth="0.5"
          strokeOpacity="0.65"
        />
        <line
          x1="440"
          y1="0"
          x2="1180"
          y2="410"
          strokeWidth="0.45"
          strokeOpacity="0.45"
        />

        {/* Bottom-left secondary compass arc */}
        <circle cx="110" cy="820" r="245" strokeWidth="0.6" />
        <circle
          cx="110"
          cy="820"
          r="228"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />

        {/* Corner drafting registration crosshairs */}
        <g strokeWidth="0.85" opacity="0.9">
          <path d="M 48 88 L 48 110 M 37 99 L 59 99" />
          <circle cx="48" cy="99" r="3.5" strokeWidth="0.6" />
          <path d="M 1392 88 L 1392 110 M 1381 99 L 1403 99" />
          <circle cx="1392" cy="99" r="3.5" strokeWidth="0.6" />
          <path d="M 48 806 L 48 828 M 37 817 L 59 817" />
          <circle cx="48" cy="817" r="3.5" strokeWidth="0.6" />
          <path d="M 1392 806 L 1392 828 M 1381 817 L 1403 817" />
          <circle cx="1392" cy="817" r="3.5" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}
