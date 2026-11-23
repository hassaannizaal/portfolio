"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", num: "00", label: "Intro" },
  { id: "proj", num: "01", label: "Projects" },
  { id: "certs", num: "02", label: "Certifications" },
  { id: "bg", num: "03", label: "Background" },
  { id: "contact", num: "04", label: "Contact" },
];

export function DraftingRail() {
  const [activeId, setActiveId] = useState("top");
  const [progress, setProgress] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, Math.round((window.scrollY / max) * 100)));

      // Determine active section
      let current = "top";
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.42) {
          current = sec.id;
        }
      }
      setActiveId(current);
    };

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
        raf = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const currentSection =
    SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];

  return (
    <aside
      aria-label="Page section indicator"
      className="pointer-events-none fixed inset-y-0 left-0 right-0 z-30 hidden 2xl:block"
    >
      {/* Left Vernier Folio Rail */}
      <div className="pointer-events-auto fixed left-5 top-1/2 flex -translate-y-1/2 flex-col items-start gap-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted">
          INDEX
        </span>

        {/* Vertical progress track */}
        <div className="relative flex flex-col gap-3 border-l border-hairline pl-3">
          <span
            aria-hidden="true"
            className="absolute -left-px top-0 w-[1.5px] bg-accent transition-all duration-200"
            style={{ height: `${Math.max(8, progress)}%` }}
          />
          {SECTIONS.map((sec) => {
            const on = sec.id === activeId;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`group flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-colors ${
                  on ? "text-ink" : "text-ink-muted/70 hover:text-ink"
                }`}
              >
                <span className={on ? "text-accent" : "text-ink-muted/60"}>
                  {sec.num}
                </span>
                <span
                  className={`transition-opacity duration-200 ${
                    on
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {sec.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom-right subtle drafting coordinate telemetry */}
      <div className="fixed bottom-5 right-6 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-muted/75">
        <span>
          {currentSection.num} · {currentSection.label}
        </span>
        <span className="text-hairline-strong">|</span>
        <span>
          X {String(coords.x).padStart(4, "0")} · Y{" "}
          {String(coords.y).padStart(4, "0")}
        </span>
        <span className="text-hairline-strong">|</span>
        <span>{String(progress).padStart(2, "0")}%</span>
      </div>
    </aside>
  );
}
