import { cn } from "@/lib/utils";

/* Minimal syntax tokens — hand-authored coloring, no highlighter dependency. */
const tone = {
  comment: "text-faint italic",
  keyword: "text-[#b78cf0]",
  string: "text-[#e8b36a]",
  fn: "text-[#f0916b]",
  prop: "text-foreground/90",
  punct: "text-muted",
  accent: "text-accent font-medium",
} as const;

type TokKind = keyof typeof tone;

export function Tok({ k, children }: { k: TokKind; children: React.ReactNode }) {
  return <span className={tone[k]}>{children}</span>;
}

/** Monospace code surface. Wrap lines as children (often using <Tok>). */
export function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto font-mono text-[13px] leading-relaxed text-foreground/90",
        className,
      )}
    >
      <code>{children}</code>
    </pre>
  );
}
