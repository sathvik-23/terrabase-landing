/**
 * Lightweight, login-free gate for the admin dashboard: a secret key passed as
 * `?k=` in the (bookmarkable) URL, compared against ADMIN_ACCESS_KEY.
 *
 * If ADMIN_ACCESS_KEY is unset the dashboard is OPEN — the UI surfaces a warning,
 * since it exposes waitlist emails. Set the env var to lock it down.
 */
export type AdminAccess =
  | { allowed: true; open: boolean }
  | { allowed: false; open: false };

export function checkAdminAccess(providedKey: string | undefined): AdminAccess {
  const expected = process.env.ADMIN_ACCESS_KEY;
  if (!expected) return { allowed: true, open: true };
  if (providedKey && timingSafeEqual(providedKey, expected)) {
    return { allowed: true, open: false };
  }
  return { allowed: false, open: false };
}

/** Constant-time compare so the key isn't leaked via response timing. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
