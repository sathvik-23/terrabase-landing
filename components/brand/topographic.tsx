import { cn } from "@/lib/utils";

/** Irregular blob traced once, then scaled into concentric contour rings. */
const BLOB =
  "M -120 0 C -112 -62 -52 -112 22 -106 C 92 -100 142 -52 130 20 C 120 88 58 132 -12 120 C -82 108 -128 60 -120 0 Z";

const RINGS = [1, 1.28, 1.6, 1.96, 2.36, 2.8, 3.28] as const;

/**
 * Decorative terrain-contour background. Purely visual; hidden from a11y tree.
 */
export function Topographic({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g transform="translate(820 300)">
        {RINGS.map((scale, i) => (
          <path
            key={scale}
            d={BLOB}
            transform={`scale(${scale})`}
            stroke="var(--color-accent)"
            strokeWidth={0.7 / scale}
            opacity={0.14 - i * 0.014}
          />
        ))}
      </g>
      <g transform="translate(180 620)">
        {RINGS.slice(0, 5).map((scale, i) => (
          <path
            key={scale}
            d={BLOB}
            transform={`scale(${scale})`}
            stroke="var(--color-foreground)"
            strokeWidth={0.6 / scale}
            opacity={0.05 - i * 0.008}
          />
        ))}
      </g>
    </svg>
  );
}
