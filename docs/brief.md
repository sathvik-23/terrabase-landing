# Build Prompt: Terrabase Pre-Launch Landing Site

> Paste this into Claude Code, v0, Lovable, or any frontend agent. Sections are ordered so you can trim from the bottom if you only want the landing page first. Adjust copy in brackets to taste.

---

## 1. Role & Objective

You are a senior frontend engineer and product designer. Build a **pre-launch marketing website** for **Terrabase** — the primary goal is to convert visiting developers into **waitlist signups** ahead of a public free launch. The product is not live yet, so every primary CTA drives to a waitlist, not a signup/login.

Ship a polished, fast, responsive, accessible site. Prioritize the landing page; scaffold the secondary pages.

---

## 2. Product Brief (context for tone & copy)

**Terrabase** is a Supabase-compatible, multi-tenant Backend-as-a-Service (Postgres database, Auth, Storage, Realtime, auto-generated REST APIs) hosted entirely on **India-sovereign infrastructure**.

The origin story is the hook: in early 2026 **Supabase became inaccessible in India**, stranding a large community of Indian developers mid-project. Terrabase exists to catch them — with **drop-in SDK compatibility** (you literally just swap the project URL and keys; no code rewrite) and **data that never leaves India**.

Key differentiators to weave through the copy:
- **Drop-in compatible** — works with the existing Supabase client SDKs. Migration is a URL + key swap, not a rewrite.
- **Sovereign by default** — all data hosted in India (on Indian cloud infrastructure). Compliance and latency win.
- **Full backend** — Postgres, Row-Level Security, Authentication, file Storage, Realtime subscriptions, and instant REST APIs.
- **Secure multi-tenancy** — hard isolation between projects at every layer (database roles, storage buckets, network).
- **Free to start** — no credit card, no billing at launch.

Do NOT imply any affiliation with, or endorsement by, Supabase. Terrabase is *compatible with* the Supabase client SDKs — position it as "works with the tools you already use," never as an official Supabase product. Avoid copying Supabase's exact logo, wordmark, or brand assets.

**Domains:** terrabase.dev (primary), terrabase.in
**Built by:** the team behind Metawurks (a Bengaluru dev studio) — use for the "About" credibility.

---

## 3. Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS**, shadcn/ui primitives
- Framer Motion for restrained scroll/entrance animation (subtle — no gaudy parallax)
- Fully responsive (mobile-first), dark-mode-first
- No backend required for v1 except the waitlist handler (see §7)

---

## 4. Design Direction

Aesthetic: **modern developer-tool** — dark-first, high-contrast, technical but warm. Think a confident indie infra product, not a bloated enterprise SaaS.

- **Mood:** sovereign, grounded, trustworthy. The name "Terra" invites an earthy/terrain undertone — consider a deep charcoal/near-black base with a single vivid accent (suggest a warm terracotta/amber OR an emerald — pick one and commit) and a subtle topographic-line or grid motif in the background. Keep it tasteful and performance-cheap (SVG/CSS, not heavy images).
- **Typography:** a clean geometric or grotesk sans for headings (e.g. Inter, Geist, or Satoshi), a monospace for code snippets and stat labels.
- **Layout:** generous whitespace, strong left-aligned hero, code samples shown in realistic terminal/editor chrome.
- **Motion:** entrance fades + slight rise on scroll; one hero "before/after" code-swap animation. Nothing that hurts LCP.
- Distinct enough to be its own brand; familiar enough that a Supabase refugee feels instantly at home.

---

## 5. Landing Page — Section by Section

Build these as ordered sections on `/`:

### 5.1 Nav (sticky, minimal)
Logo/wordmark "Terrabase" · links: Features, Migrate, Pricing, Docs, About · right-side CTA button **"Join the waitlist"**. Collapses to a hamburger on mobile.

### 5.2 Hero
- **Eyebrow:** `Sovereign backend for Indian developers`
- **Headline (H1):** *"The Supabase-compatible backend, hosted in India."*
- **Subhead:** *"When Supabase went dark in India, your projects didn't have to. Point your SDK at Terrabase — same client, same code, data that never leaves the country."*
- **Primary CTA:** `Join the waitlist` → email capture inline or modal
- **Secondary CTA:** `See how migration works` → scrolls to §5.5
- **Visual:** an animated code block showing the one-line swap:
  ```ts
  // before
  const supabase = createClient('https://xyz.supabase.co', ANON_KEY)
  // after — same SDK, just point it here
  const supabase = createClient('https://xyz.terrabase.dev', ANON_KEY)
  ```
  Animate the URL changing from `.supabase.co` → `.terrabase.dev` on load.
- Trust strip below: small line — `Postgres · Auth · Storage · Realtime · Auto REST APIs · 100% India-hosted`

### 5.3 Problem / Origin (short, empathetic)
Two-to-three sentences: Supabase became inaccessible in India in early 2026. Thousands of developers were stranded mid-build with no sovereign, compatible alternative. Terrabase was built to be exactly that.

### 5.4 Features grid (6 cards)
Each card: icon, title, one-line benefit.
1. **Drop-in compatible** — Keep the Supabase client SDKs you already use. Migrate with a URL swap, not a rewrite.
2. **Postgres, fully yours** — A dedicated Postgres database per project with Row-Level Security built in.
3. **Auth included** — Email, password, and JWT-based auth out of the box.
4. **Storage** — S3-style file storage with per-project isolation.
5. **Realtime** — Subscribe to database changes over websockets, live.
6. **Sovereign hosting** — Every byte stays on Indian infrastructure. Compliance and low latency by default.

### 5.5 "How migration works" (3 steps)
Numbered, with mini code/UI snippets:
1. **Create a project** on Terrabase → get your project URL + anon key.
2. **Swap the URL and keys** in your existing app config.
3. **Ship.** Your queries, auth, storage calls, and realtime subscriptions work unchanged.
End with CTA `Read the migration guide` → `/migrate`.

### 5.6 Security & isolation (trust section)
Short, confident copy for technical readers: hard multi-tenant isolation at every layer — namespaced database roles per project, Row-Level Security, per-tenant storage buckets, and network-level separation. Least-privilege by design. (Keep it plain-language but credible; this audience checks.)

### 5.7 Sovereignty callout (banner)
Full-width band: *"Your data stays in India. Full stop."* — one paragraph on why sovereign hosting matters (latency, compliance, resilience against access disruptions).

### 5.8 Pricing teaser
*"Free to start — no card, no catch."* One line that launch pricing is free-first, with paid tiers coming later. CTA → `/pricing`.

### 5.9 Final CTA / waitlist
Big, centered. Headline: *"Be first in when we open the doors."* Email field + `Join the waitlist`. Reassure: "No spam. We'll email you once when your invite is ready."

### 5.10 Footer
Columns: Product (Features, Migrate, Pricing, Docs), Company (About, Blog, Status), Legal (Privacy, Terms), Connect (X/Twitter, GitHub, email). Note: *"Built in Bengaluru. Hosted in India."* Terrabase is not affiliated with Supabase; "Supabase" is a trademark of its owner (small disclaimer line).

---

## 6. Secondary Pages (scaffold these)

- **/migrate** — Migration guide. Step-by-step with real code diffs for swapping the client, notes on what's compatible (Postgres, Auth, Storage, Realtime, REST), and a "gotchas" callout. This page matters most to the target audience — make it genuinely useful, not a stub.
- **/pricing** — Free tier prominent; "Pro / paid tiers coming soon" placeholder cards. Clear that launch is free-first.
- **/docs** — Docs landing (can be a styled placeholder linking to "coming at launch," or a shell ready for real content).
- **/about** — The origin story + founder credibility (solo founder behind Metawurks, Bengaluru). Mission: keep Indian developers unblocked and sovereign.
- **/waitlist/confirmed** — Post-signup thank-you page.
- **/status** — Simple placeholder ("All systems nominal" shell) for later.
- **404** — On-brand not-found page.

---

## 7. Waitlist Mechanics

- Email capture stores to a simple backend: use a Next.js Route Handler (`/api/waitlist`) that writes to [choose one: Resend audience / a Postgres table via Drizzle / a simple hosted form service]. Since the founder already uses **Resend**, prefer wiring the confirmation email through Resend.
- Validate email client + server side. Handle duplicates gracefully (don't leak whether an email already exists — return the same success state).
- Basic anti-abuse: rate-limit the endpoint, honeypot field.
- On success → redirect or transition to `/waitlist/confirmed`.

---

## 8. SEO, Meta & Performance

- Per-page `<title>` and meta description; Open Graph + Twitter card images (generate a clean OG image with the wordmark + tagline).
- Semantic HTML, proper heading hierarchy, alt text on all imagery.
- `robots.txt` + `sitemap.xml`.
- Target Lighthouse 95+ across the board: optimize fonts (self-host or `next/font`), lazy-load below-the-fold, keep JS lean.
- Structured data (`Organization` / `SoftwareApplication` JSON-LD).
- Accessible: keyboard navigable, visible focus states, sufficient contrast, `prefers-reduced-motion` respected.

---

## 9. Deliverables

1. A working Next.js 15 App Router project, TypeScript, Tailwind, shadcn/ui.
2. Fully built landing page (`/`) matching §5.
3. Scaffolded secondary pages (§6) with real content where specified (especially `/migrate`).
4. Working waitlist endpoint + confirmation flow (§7).
5. A short `README.md` with setup, env vars, and deploy notes (Vercel-ready).

Start with the landing page and the waitlist flow end-to-end, then fill in secondary pages. Confirm the design direction (accent color, font pairing) with a quick sample before building everything out if unsure.
