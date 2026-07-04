const ITEMS = [
  "Postgres",
  "Auth",
  "Storage",
  "Realtime",
  "Auto REST APIs",
  "100% India-hosted",
];

/** Compact capability line shown beneath the hero CTAs. */
export function TrustStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint">
      {ITEMS.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden className="text-border-strong">·</span>}
          <span className={item.includes("India") ? "text-muted" : undefined}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
