import { site } from "@/lib/site";

/** Plain, deliverable confirmation email. Inline styles for mail-client safety. */
export function waitlistConfirmationEmail() {
  const subject = `You're on the ${site.name} waitlist`;

  const html = `
  <div style="background:#0b0a0a;padding:40px 0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0"
          style="background:#141211;border:1px solid #2a2623;border-radius:16px;padding:36px">
          <tr><td>
            <p style="margin:0 0 8px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#e8663d">${site.name}</p>
            <h1 style="margin:0 0 16px;font-size:22px;color:#f6f2ec">You're on the list.</h1>
            <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#a9a29a">
              Thanks for signing up. We'll email you once — and only once — when your
              invite is ready. No spam in the meantime.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#a9a29a">
              ${site.name} is the Supabase-compatible backend hosted entirely in India.
              When we open the doors, migration is a URL and key swap — not a rewrite.
            </p>
            <a href="${site.url}"
              style="display:inline-block;background:#e8663d;color:#1a0d07;text-decoration:none;
              font-weight:600;font-size:14px;padding:12px 22px;border-radius:999px">
              Read the migration guide
            </a>
            <p style="margin:28px 0 0;font-size:12px;color:#6f6860">
              Built in Bengaluru. Hosted in India. — ${site.founder}, ${site.name}
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </div>`;

  const text = `You're on the ${site.name} waitlist.

We'll email you once when your invite is ready. No spam in the meantime.

${site.name} is the Supabase-compatible backend hosted entirely in India.
Migration guide: ${site.url}/migrate

— ${site.founder}, ${site.name}`;

  return { subject, html, text };
}
