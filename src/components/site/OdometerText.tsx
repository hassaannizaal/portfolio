export function OdometerText({ text }: { text: string }) {
  const chars = text.split("");

  return (
    <span aria-hidden="true" className="flex items-center">
      {chars.map((char, index) => {
        const glyph = char === " " ? "\u00a0" : char;
        return (
          <span
            key={`${glyph}-${index}`}
            className="relative inline-block overflow-hidden align-baseline"
            style={{ height: "1em", lineHeight: "1em" }}
          >
            <span className="invisible">{glyph}</span>
            <span
              className="absolute inset-x-0 top-0 flex flex-col motion-safe:transition-transform"
              style={{
                transform: "translateY(calc(var(--odometer-progress, 0) * -1em))",
                transitionDuration: "520ms",
                transitionDelay: `calc(var(--odometer-progress, 0) * ${index * 18}ms)`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span>{glyph}</span>
              <span>{glyph}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
