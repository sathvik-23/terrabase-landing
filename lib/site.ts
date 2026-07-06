/** Single source of truth for brand, URLs, and navigation. */

export const site = {
  name: "Terrabase",
  domain: "terrabase.dev",
  url: "https://terrabase.dev",
  tagline: "The Supabase-compatible backend, hosted in India.",
  description:
    "Terrabase is a Supabase-compatible, multi-tenant backend — Postgres, Auth, Storage, Realtime, and instant REST APIs — hosted entirely on India-sovereign infrastructure. Swap your SDK URL, not your code.",
  founder: "Sathvik",
  studio: "Metawurks",
  location: "Bengaluru, India",
  email: "message@terrabase.in",
  twitter: "@terrabasedev",
  github: "https://github.com/terrabase",
} as const;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Migrate", href: "/migrate" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Migrate", href: "/migrate" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Status", href: "/status" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
