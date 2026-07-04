import { cn } from "@/lib/utils";

/** One numbered migration step with an inline snippet. */
export function StepCard({
  index,
  title,
  description,
  children,
  className,
}: {
  index: number;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-surface/40 p-6",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-medium text-accent">
          {index}
        </span>
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-5 rounded-lg border border-border bg-background/60 p-4">
        {children}
      </div>
    </div>
  );
}
