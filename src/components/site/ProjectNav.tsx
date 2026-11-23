"use client";

import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  index: string;
  label: string;
}

export function ProjectNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="border-t border-hairline pt-4">
      <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-muted">
        Contents
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const isCurrent = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-baseline gap-2.5 border-l py-1 pl-3 text-[13px] transition-colors ${
                  isCurrent
                    ? "border-accent text-ink"
                    : "border-transparent text-ink-muted hover:border-hairline-strong hover:text-ink"
                }`}
              >
                <span className="font-mono text-[9.5px] text-accent">
                  {item.index}
                </span>
                <span className="font-sans font-light">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
