import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type LinkCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  badge?: string;
};

/** Generic card used across docs and interior index pages. */
export function LinkCard({ icon: Icon, title, description, href, badge }: LinkCardProps) {
  const inner = (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-colors",
        href && "hover:border-border-strong hover:bg-surface/70",
      )}
    >
      <div className="flex items-center justify-between">
        {Icon && (
          <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border-strong bg-surface-2 text-accent">
            <Icon className="size-5" strokeWidth={1.75} />
          </div>
        )}
        {badge && (
          <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}
