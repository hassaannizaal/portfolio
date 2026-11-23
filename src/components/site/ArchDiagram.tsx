"use client";

import { useMemo, useState } from "react";
import type { ArchDiagramSpec } from "@/lib/types";

function formatLabel(id: string) {
  return id.replace(/([a-z])([A-Z])/g, "$1 $2");
}

interface NodePos {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  index: number;
}

export function ArchDiagram({
  spec,
  figureLabel = "FIG.",
}: {
  spec: ArchDiagramSpec;
  figureLabel?: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  const layout = useMemo(() => {
    const rows = spec.rows ?? [spec.nodes];
    const isFlow = !spec.rows;

    if (isFlow) {
      const maxPerRow = 4;
      const chunked: string[][] = [];
      for (let i = 0; i < spec.nodes.length; i += maxPerRow) {
        chunked.push(spec.nodes.slice(i, i + maxPerRow));
      }

      const width = 760;
      const rowH = 108;
      const height = chunked.length * rowH + 30;
      const nodeW = 136;
      const nodeH = 42;
      const positions = new Map<string, NodePos>();

      let counter = 1;
      chunked.forEach((row, rIdx) => {
        const totalRowW = row.length * nodeW + (row.length - 1) * 40;
        const startX = (width - totalRowW) / 2;
        const y = 32 + rIdx * rowH;
        row.forEach((id, cIdx) => {
          positions.set(id, {
            id,
            x: startX + cIdx * (nodeW + 40),
            y,
            w: nodeW,
            h: nodeH,
            index: counter++,
          });
        });
      });

      return { width, height, positions };
    }

    const width = 760;
    const rowH = 100;
    const height = rows.length * rowH + 30;
    const nodeH = 42;
    const positions = new Map<string, NodePos>();

    let counter = 1;
    rows.forEach((row, rIdx) => {
      const nodeW = row.length >= 5 ? 124 : 140;
      const gap = row.length >= 5 ? 18 : 28;
      const totalRowW = row.length * nodeW + (row.length - 1) * gap;
      const startX = (width - totalRowW) / 2;
      const y = 28 + rIdx * rowH;
      row.forEach((id, cIdx) => {
        positions.set(id, {
          id,
          x: startX + cIdx * (nodeW + gap),
          y,
          w: nodeW,
          h: nodeH,
          index: counter++,
        });
      });
    });

    return { width, height, positions };
  }, [spec]);

  const connectedEdges = useMemo(() => {
    if (!hovered) return null;
    return new Set(
      spec.edges
        .filter((e) => e.from === hovered || e.to === hovered)
        .map((e) => `${e.from}->${e.to}`),
    );
  }, [hovered, spec.edges]);

  const connectedNodes = useMemo(() => {
    if (!hovered) return null;
    const set = new Set<string>([hovered]);
    spec.edges.forEach((e) => {
      if (e.from === hovered) set.add(e.to);
      if (e.to === hovered) set.add(e.from);
    });
    return set;
  }, [hovered, spec.edges]);

  return (
    <figure className="drafting-grid border-y border-hairline py-6">
      <figcaption className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            [{figureLabel}] · {spec.title}
          </p>
          <p className="mt-1.5 font-sans text-[13.5px] font-light leading-relaxed text-ink-secondary">
            {spec.caption}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-muted">
          Hover node to trace
        </span>
      </figcaption>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="mx-auto h-auto min-w-[560px] w-full select-none"
          role="img"
          aria-label={`${spec.title} architecture diagram`}
        >
          <defs>
            <marker
              id={`arrow-ink-${spec.id}`}
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="5.5"
              markerHeight="5.5"
              orient="auto-start-reverse"
            >
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="var(--ink-secondary)" />
            </marker>
            <marker
              id={`arrow-accent-${spec.id}`}
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="5.5"
              markerHeight="5.5"
              orient="auto-start-reverse"
            >
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="var(--accent)" />
            </marker>
          </defs>

          {spec.edges.map((edge) => {
            const from = layout.positions.get(edge.from);
            const to = layout.positions.get(edge.to);
            if (!from || !to) return null;

            const key = `${edge.from}->${edge.to}`;
            const active = connectedEdges ? connectedEdges.has(key) : false;
            const dimmed = connectedEdges ? !active : false;

            const sameRow = Math.abs(from.y - to.y) < 10;
            let d = "";
            if (sameRow) {
              const goingRight = to.x > from.x;
              const x1 = goingRight ? from.x + from.w : from.x;
              const y1 = from.y + from.h / 2;
              const x2 = goingRight ? to.x : to.x + to.w;
              const y2 = to.y + to.h / 2;
              d = `M ${x1} ${y1} L ${x2} ${y2}`;
            } else {
              const goingDown = to.y > from.y;
              const x1 = from.x + from.w / 2;
              const y1 = goingDown ? from.y + from.h : from.y;
              const x2 = to.x + to.w / 2;
              const y2 = goingDown ? to.y : to.y + to.h;
              const midY = (y1 + y2) / 2;
              d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
            }

            return (
              <path
                key={key}
                d={d}
                fill="none"
                stroke={active ? "var(--accent)" : "var(--ink-secondary)"}
                strokeOpacity={dimmed ? 0.14 : active ? 0.95 : 0.45}
                strokeWidth={active ? 1.5 : 0.95}
                strokeDasharray={active ? undefined : "3 3"}
                markerEnd={
                  active
                    ? `url(#arrow-accent-${spec.id})`
                    : `url(#arrow-ink-${spec.id})`
                }
              />
            );
          })}

          {Array.from(layout.positions.values()).map((node) => {
            const isActive = hovered === node.id;
            const isRelated = connectedNodes
              ? connectedNodes.has(node.id)
              : true;

            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() =>
                  setHovered((curr) => (curr === node.id ? null : node.id))
                }
                className="cursor-pointer"
                style={{ opacity: isRelated ? 1 : 0.36 }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  fill={isActive ? "var(--paper-soft)" : "var(--paper)"}
                  stroke={isActive ? "var(--accent)" : "var(--ink)"}
                  strokeOpacity={isActive ? 1 : 0.32}
                  strokeWidth={isActive ? 1.2 : 0.9}
                />
                <text
                  x={node.x + 7}
                  y={node.y + 12}
                  className="fill-accent font-mono text-[7px] tracking-[0.12em]"
                >
                  {String(node.index).padStart(2, "0")}
                </text>
                <text
                  x={node.x + node.w / 2}
                  y={node.y + 27}
                  textAnchor="middle"
                  className="fill-ink font-display text-[14px] font-medium"
                >
                  {formatLabel(node.id)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {spec.edges.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-hairline pt-3 font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-muted">
          {spec.edges.map((e) => {
            const key = `${e.from}->${e.to}`;
            const highlight = connectedEdges?.has(key);
            return (
              <li
                key={key}
                className={highlight ? "text-accent" : undefined}
              >
                {formatLabel(e.from)} → {formatLabel(e.to)}
              </li>
            );
          })}
        </ul>
      )}
    </figure>
  );
}
