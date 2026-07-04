import { cn } from "@/lib/utils";

/** Editor/terminal window chrome — traffic lights + optional filename tab. */
export function Terminal({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-surface/80 shadow-2xl backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-3 font-mono text-xs text-faint">{title}</span>
        )}
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
