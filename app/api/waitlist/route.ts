import { NextResponse } from "next/server";
import { waitlistSchema, normalizeEmail } from "@/lib/validate-email";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { joinWaitlist } from "@/lib/resend";

export const runtime = "nodejs";

/** POST /api/waitlist — capture an email for the pre-launch waitlist. */
export async function POST(request: Request) {
  const now = Date.now();
  const ip = clientIp(request.headers);

  const limit = rateLimit(ip, now);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (parsed.data.website && parsed.data.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  await joinWaitlist(normalizeEmail(parsed.data.email));

  // Always the same response — never leak whether the email already existed.
  return NextResponse.json({ ok: true }, { status: 200 });
}
