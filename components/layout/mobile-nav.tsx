"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

/** Hamburger menu + full-screen sheet for small viewports. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-surface"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              onClick={close}
              className={buttonVariants({ size: "lg", className: "mt-3 w-full" })}
            >
              Join the waitlist
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
