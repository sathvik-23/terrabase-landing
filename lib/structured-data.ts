import { site } from "@/lib/site";

/** Organization schema — describes the company behind Terrabase. */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    foundingLocation: site.location,
    sameAs: [site.github],
  };
}

/** SoftwareApplication schema — describes the Terrabase product. */
export function softwareSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cloud",
    description: site.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free to start — no credit card required at launch.",
    },
    featureList: [
      "Supabase-compatible client SDKs",
      "Dedicated Postgres with Row-Level Security",
      "Authentication",
      "File Storage",
      "Realtime subscriptions",
      "Auto-generated REST APIs",
      "India-sovereign hosting",
    ],
  };
}
