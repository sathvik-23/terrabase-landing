import { Terminal } from "@/components/brand/terminal";
import { cn } from "@/lib/utils";

export type DiffLine = { type: "context" | "del" | "add"; text: string };

const rowStyle = {
  context: "text-foreground/70",
  del: "bg-[#ff5f57]/10 text-[#f0a094]",
  add: "bg-[#28c840]/10 text-[#8fe0a0]",
} as const;

const prefix = { context: " ", del: "-", add: "+" } as const;

/** Renders a unified before/after diff inside editor chrome. */
export function CodeDiff({
  filename,
  lines,
  className,
}: {
  filename: string;
  lines: DiffLine[];
  className?: string;
}) {
  return (
    <Terminal title={filename} className={className}>
      <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className={cn("block -mx-2 px-2", rowStyle[line.type])}
            >
              <span className="mr-3 select-none opacity-50">{prefix[line.type]}</span>
              {line.text}
            </span>
          ))}
        </code>
      </pre>
    </Terminal>
  );
}
