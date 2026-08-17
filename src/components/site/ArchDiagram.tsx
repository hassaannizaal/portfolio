import type { ArchDiagramSpec } from "@/lib/types";

function label(id: string) {
  return id.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function NodeBox({ id }: { id: string }) {
  return (
    <span className="inline-flex min-h-9 items-center justify-center rounded-md border border-line bg-fg/[0.03] px-2.5 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-fg/75">
      {label(id)}
    </span>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="shrink-0 px-1 font-mono text-[11px] text-fg/25">
      →
    </span>
  );
}

function DownArrow() {
  return (
    <span aria-hidden="true" className="block py-1 text-center font-mono text-[11px] text-fg/25">
      ↓
    </span>
  );
}

export function ArchDiagram({ spec }: { spec: ArchDiagramSpec }) {
  const isFlow = !spec.rows;

  return (
    <figure className="rounded-lg border border-line bg-fg/[0.015] p-4 sm:p-5">
      <figcaption className="mb-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/50">
          {spec.title}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-fg/55">{spec.caption}</p>
      </figcaption>

      {spec.rows ? (
        <div>
          {spec.rows.map((row, i) => (
            <div key={row.join("-")}>
              {i > 0 && <DownArrow />}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {row.map((id) => (
                  <NodeBox key={id} id={id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {isFlow && (
        <div className="flex flex-col items-stretch gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
          {spec.nodes.map((id, i) => (
            <div key={id} className="flex items-center sm:contents">
              <NodeBox id={id} />
              {i < spec.nodes.length - 1 && (
                <>
                  <span className="hidden sm:inline">
                    <Arrow />
                  </span>
                  <span className="sm:hidden">
                    <DownArrow />
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {isFlow && spec.edges.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-fg/40">
          {spec.edges.map((e) => (
            <li key={`${e.from}-${e.to}`}>
              {label(e.from)} → {label(e.to)}
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
