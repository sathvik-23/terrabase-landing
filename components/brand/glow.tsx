import { cn } from "@/lib/utils";

/** Soft terracotta radial glow used to anchor the eye behind key content. */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[110px]",
        "bg-[radial-gradient(circle,rgba(232,102,61,0.32),transparent_70%)]",
        className,
      )}
    />
  );
}
