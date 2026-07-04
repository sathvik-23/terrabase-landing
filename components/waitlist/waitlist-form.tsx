"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWaitlist } from "@/components/waitlist/use-waitlist";

export function WaitlistForm({
  ctaLabel = "Join the waitlist",
  className,
  size = "md",
}: {
  ctaLabel?: string;
  className?: string;
  size?: "md" | "lg";
}) {
  const { status, error, submit } = useWaitlist();
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const busy = status === "submitting";

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit(email, website);
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("w-full", className)}>
      <div className="flex w-full flex-col gap-2.5 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@company.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={busy}
          aria-invalid={status === "error"}
          className={cn("flex-1", size === "lg" && "h-12 text-base")}
        />

        {/* Honeypot — hidden from users, catches naive bots. */}
        <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <Button type="submit" size={size} disabled={busy} className="shrink-0">
          {busy && <Loader2 className="size-4 animate-spin" />}
          {busy ? "Joining…" : ctaLabel}
        </Button>
      </div>

      <p
        aria-live="polite"
        className={cn("mt-2 min-h-5 text-sm", error ? "text-accent" : "text-transparent")}
      >
        {error ?? "placeholder"}
      </p>
    </form>
  );
}
