import { z } from "zod";

/** Shared request shape for the waitlist endpoint. `website` is a honeypot. */
export const waitlistSchema = z.object({
  email: z.email("Enter a valid email address."),
  website: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

/** Lowercase + trim so duplicate detection is case-insensitive. */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Cheap client-side gate before hitting the network. */
export function isValidEmail(email: string): boolean {
  return z.email().safeParse(email.trim()).success;
}
