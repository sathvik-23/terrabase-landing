# Terrabase — pre-launch site

Marketing + waitlist site for **Terrabase**, the Supabase-compatible backend hosted on
India-sovereign infrastructure. The primary goal of every page is one thing: convert
visiting developers into **waitlist signups** ahead of a free public launch.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
hand-rolled shadcn-style primitives, and **Framer Motion**. Dark-first, responsive,
accessible, and SEO-complete.

See [`DECISIONS.md`](./DECISIONS.md) for the design + architecture rationale.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # optional — see "Waitlist" below
pnpm dev                     # http://localhost:3000
```

### Scripts

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Start the dev server (Turbopack)     |
| `pnpm build`  | Production build                     |
| `pnpm start`  | Serve the production build           |
| `pnpm lint`   | Run ESLint                           |

## Environment variables

All are **optional in development**. Without them the waitlist endpoint still
validates, rate-limits, and returns success — it simply skips email delivery.

| Variable             | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| `RESEND_API_KEY`     | Enables waitlist email delivery via [Resend](https://resend.com). |
| `RESEND_AUDIENCE_ID` | Optional Resend audience to add waitlist contacts to.          |
| `RESEND_FROM_EMAIL`  | Verified sender. Falls back to `onboarding@resend.dev`.        |

Set the site's canonical URL in `lib/site.ts` (`url`) before deploying — it drives
`metadataBase`, canonical tags, `sitemap.xml`, and `robots.txt`.

## Waitlist flow

- **Form** — `components/waitlist/` (`WaitlistForm` + `useWaitlist` hook). Validates
  client-side, then POSTs to the API and redirects to `/waitlist/confirmed`.
- **Endpoint** — `app/api/waitlist/route.ts`: server-side zod validation, IP
  rate-limiting, a honeypot field, graceful duplicate handling (never leaks whether an
  email already exists), and Resend delivery via `lib/resend.ts`.

## Project structure

```
app/                 Routes, API, metadata (robots, sitemap, OG image)
components/
  brand/             Logo, topographic motif, terminal chrome, code tokens
  layout/            Nav, mobile nav, footer
  motion/            FadeIn scroll-reveal
  pages/             Shared interior-page building blocks
  sections/          Landing-page sections (one folder each)
  ui/                Button, Input, Container (shadcn-style)
  waitlist/          Form + submission hook
lib/                 site config, validation, rate limit, Resend, structured data
```

Every file is intentionally small and single-purpose (see `DECISIONS.md`).

## Pages

`/` landing · `/migrate` (full migration guide) · `/pricing` · `/docs` · `/about`
· `/status` · `/blog` · `/privacy` · `/terms` · `/waitlist/confirmed` · custom `404`.

## Deploy (Vercel)

1. Push to a Git repo and import it into [Vercel](https://vercel.com/new).
2. Add the `RESEND_*` environment variables in Project Settings (optional but needed
   for real email delivery).
3. Deploy. The framework preset, build command (`next build`), and output are detected
   automatically.

## A note on Supabase

Terrabase is **compatible with** the Supabase client SDKs and is **not affiliated with
or endorsed by Supabase**. "Supabase" is a trademark of its respective owner.
