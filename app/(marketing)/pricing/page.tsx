import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { PricingCard, type Plan } from "@/components/pricing/pricing-card";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Terrabase launches free-first — no credit card, no billing at launch. Paid tiers with higher limits arrive later.",
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    cadence: "at launch",
    description: "The full backend, free to start. Perfect for launching your project.",
    features: [
      "Dedicated Postgres with Row-Level Security",
      "Auth, Storage, Realtime & REST APIs",
      "100% India-hosted infrastructure",
      "Fair-usage limits, no credit card",
    ],
    cta: "Join the waitlist",
    href: "/#waitlist",
    featured: true,
  },
  {
    name: "Pro",
    price: "Soon",
    description: "For production apps that need room to grow and stronger guarantees.",
    features: [
      "Higher usage & storage limits",
      "Automated daily backups",
      "Custom domains",
      "Priority support",
    ],
    cta: "Coming soon",
  },
  {
    name: "Scale",
    price: "Soon",
    description: "For teams with compliance, isolation, and support requirements.",
    features: [
      "Dedicated resources",
      "Uptime SLA",
      "SSO & audit logs",
      "Onboarding support",
    ],
    cta: "Coming soon",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Free to start. No card, no catch."
        description="Terrabase is free-first at launch. You can build and ship a real backend today for nothing — paid tiers arrive once you need to scale."
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.06}>
              <PricingCard plan={plan} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center text-sm text-faint">
          Prices shown in INR. Launch pricing is free-first; paid tiers are indicative
          and not yet final.
        </FadeIn>
      </Container>
    </>
  );
}
