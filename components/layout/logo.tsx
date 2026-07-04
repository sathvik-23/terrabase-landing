import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Terrabase mark: three stacked strata — layered earth, a "terra base." */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id="tb-strata" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6b45a" />
          <stop offset="1" stopColor="#d9491f" />
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="12" height="5" rx="2.5" fill="url(#tb-strata)" opacity="0.95" />
      <rect x="6.5" y="13.5" width="19" height="5" rx="2.5" fill="url(#tb-strata)" opacity="0.8" />
      <rect x="3" y="21" width="26" height="5" rx="2.5" fill="url(#tb-strata)" opacity="0.62" />
    </svg>
  );
}

/** Full clickable wordmark for nav + footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg font-semibold tracking-tight",
        className,
      )}
    >
      <LogoMark className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="text-lg">{site.name}</span>
    </Link>
  );
}
