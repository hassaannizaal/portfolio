// left %, top %, opacity — fixed positions so the field is stable across renders
const FIELDS: Array<Array<[number, number, number]>> = [
  [
    [8, 18, 0.35], [22, 72, 0.2], [37, 30, 0.28], [55, 85, 0.18],
    [67, 12, 0.3], [78, 55, 0.22], [90, 28, 0.35], [45, 50, 0.15],
    [15, 90, 0.25], [95, 75, 0.2],
  ],
  [
    [5, 60, 0.3], [18, 25, 0.2], [33, 80, 0.25], [48, 15, 0.32],
    [62, 68, 0.18], [74, 35, 0.28], [88, 82, 0.22], [96, 20, 0.3],
    [27, 48, 0.15], [70, 92, 0.2],
  ],
  [
    [10, 40, 0.28], [25, 12, 0.32], [40, 65, 0.18], [58, 38, 0.25],
    [72, 78, 0.3], [85, 15, 0.2], [93, 55, 0.28], [50, 90, 0.15],
    [3, 85, 0.22], [65, 8, 0.25],
  ],
];

export function Stars({ field = 0 }: { field?: number }) {
  const stars = FIELDS[field % FIELDS.length];

  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      {stars.map(([left, top, opacity], i) => (
        <span
          key={i}
          className="absolute size-px rounded-full bg-white"
          style={{ left: `${left}%`, top: `${top}%`, opacity }}
        />
      ))}
    </span>
  );
}
