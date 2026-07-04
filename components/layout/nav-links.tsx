import Link from "next/link";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Shared nav link list, reused by the desktop bar and mobile sheet. */
export function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="inline-flex rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
