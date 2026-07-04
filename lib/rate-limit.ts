/**
 * Fixed-window in-memory rate limiter. Sufficient for a single-instance
 * pre-launch endpoint; swap for Upstash/Redis when running multi-region.
 */
type Window = { count: number; resetAt: number };

const store = new Map<string, Window>();

const LIMIT = 5;
const WINDOW_MS = 60_000;

export type RateResult = { allowed: boolean; retryAfter: number };

export function rateLimit(key: string, now: number): RateResult {
  const existing = store.get(key);

  if (!existing || now > existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  existing.count += 1;
  if (existing.count > LIMIT) {
    return { allowed: false, retryAfter: Math.ceil((existing.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}

/** Best-effort client IP from proxy headers. */
export function clientIp(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return headers.get("x-real-ip") ?? "unknown";
}
