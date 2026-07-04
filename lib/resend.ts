import { Resend } from "resend";
import { site } from "@/lib/site";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";

const apiKey = process.env.RESEND_API_KEY;
const audienceId = process.env.RESEND_AUDIENCE_ID;
const from = process.env.RESEND_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`;

const resend = apiKey ? new Resend(apiKey) : null;

export type JoinResult = { ok: true; delivered: boolean };

/**
 * Add an email to the waitlist audience and send a confirmation.
 * Never throws and never reveals whether the address already existed —
 * the caller returns the same success state regardless.
 */
export async function joinWaitlist(email: string): Promise<JoinResult> {
  if (!resend) {
    console.warn(`[waitlist] RESEND_API_KEY unset — recorded "${email}" without delivery`);
    return { ok: true, delivered: false };
  }

  if (audienceId) {
    try {
      await resend.contacts.create({ email, audienceId, unsubscribed: false });
    } catch (err) {
      // Duplicate contacts throw here — expected, and we stay quiet about it.
      console.error("[waitlist] contact create failed", err);
    }
  }

  try {
    const { subject, html, text } = waitlistConfirmationEmail();
    await resend.emails.send({ from, to: email, subject, html, text });
    return { ok: true, delivered: true };
  } catch (err) {
    console.error("[waitlist] confirmation send failed", err);
    return { ok: true, delivered: false };
  }
}
