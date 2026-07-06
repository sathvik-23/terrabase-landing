import { put, list } from "@vercel/blob";

/**
 * Waitlist persistence on Vercel Blob (private store). One object per signup at a
 * deterministic path — so re-signups overwrite rather than duplicate, and the admin
 * reads everything from list() metadata without fetching each object's contents.
 */

const PREFIX = "waitlist/";
const token = process.env.BLOB_READ_WRITE_TOKEN;

export type Signup = { email: string; createdAt: string };

const encode = (email: string) => Buffer.from(email).toString("base64url");
const decode = (pathname: string) =>
  Buffer.from(pathname.slice(PREFIX.length, -".json".length), "base64url").toString("utf8");

/** Whether the Blob store is wired up (env present). */
export function storeConfigured(): boolean {
  return Boolean(token);
}

/** Persist one signup. No-op (logged) when the store isn't configured. */
export async function saveSignup(
  email: string,
  meta: { source?: string; userAgent?: string } = {},
): Promise<void> {
  if (!token) {
    console.warn(`[waitlist-store] BLOB_READ_WRITE_TOKEN unset — "${email}" not persisted`);
    return;
  }
  const body = JSON.stringify({ email, createdAt: new Date().toISOString(), ...meta });
  await put(`${PREFIX}${encode(email)}.json`, body, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    token,
  });
}

/** All signups, newest first. Empty when the store isn't configured. */
export async function listSignups(): Promise<Signup[]> {
  if (!token) return [];
  const out: Signup[] = [];
  let cursor: string | undefined;
  do {
    const res = await list({ prefix: PREFIX, cursor, limit: 1000, token });
    for (const blob of res.blobs) {
      try {
        out.push({ email: decode(blob.pathname), createdAt: blob.uploadedAt.toISOString() });
      } catch {
        // Skip any object that doesn't decode to an email (defensive).
      }
    }
    cursor = res.hasMore ? res.cursor : undefined;
  } while (cursor);

  return out.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
