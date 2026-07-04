"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidEmail } from "@/lib/validate-email";

type Status = "idle" | "submitting" | "error";

/** Handles validation, submission, and redirect for the waitlist form. */
export function useWaitlist() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(email: string, website: string) {
    setError(null);

    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push("/waitlist/confirmed");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return { status, error, submit };
}
