# Design & engineering decisions

A record of the calls made building the Terrabase pre-launch site, and why.

## Brand & visual direction

**Accent: terracotta / amber (`#e8663d`), not emerald.**
The brief offered a choice. Emerald is Supabase's brand colour — leaning on it would
make Terrabase read as a clone and risk implying affiliation, which the brief
explicitly forbids. Terracotta does three jobs at once: it ties to the name
("Terra" = earth/terrain), it carries a warm, subtly Indian undertone, and it makes
Terrabase unmistakably its own brand. One accent, committed to everywhere — no toggles.

**Base: warm near-black charcoal (`#0b0a0a`), dark-first, no light mode.**
A confident dev-tool aesthetic. A light-mode toggle is scope the brief didn't ask for
and would dilute the single committed look (YAGNI).

**Motif: topographic contour rings.**
"Terra" invites terrain. The background rings are a single irregular blob path scaled
into concentric contours (`components/brand/topographic.tsx`) — cheap (inline SVG, no
images), and reused as the logo mark (three stacked earth strata) so the system coheres.
The grid and accent glow are pure CSS.

**Type: Geist Sans + Geist Mono, self-hosted via the `geist` package.**
Geist reads as a modern 2026 infra tool, ships with `next/font` optimisation, and
self-hosts from the package (no build-time Google fetch). Mono is used for code, stat
labels, and eyebrows to reinforce the developer register.

**Motion: entrance fade + rise, one hero code-swap.**
Restrained. A reusable `FadeIn` (`whileInView`, plays once) and the hero's animated
`.supabase.co → .terrabase.dev` slot-swap. Everything is disabled under
`prefers-reduced-motion`.

## Architecture

**Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion.**
Tailwind v4's CSS-first `@theme` holds all design tokens (`app/globals.css`) — one
source of truth for colour, type, and radii.

**shadcn-style primitives, hand-rolled (no Radix, no CLI).**
`Button` (+ `buttonVariants` for links), `Input`, and `Container` follow the shadcn API
(`cva`, `cn`) without pulling Radix or running the registry CLI — full control, smaller
surface, and links get button styling without a `Slot` dependency.

**Relentless decomposition — every file is small and single-purpose.**
Sections live under `components/sections/<section>/`, one responsibility per file
(e.g. the hero is split into `hero.tsx`, `hero-code-swap.tsx`, `trust-strip.tsx`).
Shared building blocks live in `components/brand`, `components/ui`, `components/motion`,
and `components/pages`. Content and config are data, not markup
(`lib/site.ts`, `features-data.ts`). This keeps every file easy to hold in context.

**Icons: lucide-react, with two hand-drawn brand glyphs.**
lucide v1 dropped `Github`/`Twitter`, so `components/brand/social-icons.tsx` provides
inline X and GitHub marks.

## Waitlist

**Resend, wired but optional.**
`lib/resend.ts` adds the contact to a Resend audience and sends a confirmation email.
If `RESEND_API_KEY` is unset it degrades gracefully — the endpoint still validates,
rate-limits, and returns success — so the repo runs end-to-end with zero config.

**Endpoint hardening (`app/api/waitlist/route.ts`):**
- Email validated client-side (cheap gate) and server-side (zod).
- Fixed-window in-memory rate limit keyed by IP (`lib/rate-limit.ts`).
- Honeypot `website` field — filled means bot, silently returns success.
- Duplicates never leak: the response is identical whether or not the email existed.
- On success the client redirects to `/waitlist/confirmed`.

## SEO & accessibility

Per-page metadata via the App Router; dynamic OG/Twitter image with the wordmark and
tagline (`app/opengraph-image.tsx`); `robots.ts` + `sitemap.ts`; Organization and
SoftwareApplication JSON-LD; semantic headings; a skip link; visible focus rings;
`aria-live` form status; and full `prefers-reduced-motion` support.

## Trademark posture

Terrabase is positioned as *compatible with* the Supabase SDKs, never as official. The
footer and Terms carry an explicit non-affiliation + trademark disclaimer.
