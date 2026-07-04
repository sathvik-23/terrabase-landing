import { cn } from "@/lib/utils";

/** Small mono uppercase label with an accent dot — used above headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1",
        "font-mono text-[11px] uppercase tracking-[0.14em] text-muted",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
      {children}
    </span>
  );
}
