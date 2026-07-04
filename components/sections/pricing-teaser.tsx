import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/brand/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";

const perks = [
  "No credit card",
  "No billing at launch",
  "Full backend included",
];

export function PricingTeaser() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Free to start — no card, no catch."
          description="Terrabase launches free-first. Paid tiers with higher limits arrive later; getting your project running costs nothing today."
        />
        <FadeIn className="mt-10 flex flex-col items-center gap-6">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-muted">
                <Check className="size-4 text-accent" strokeWidth={2.5} />
                {perk}
              </li>
            ))}
          </ul>
          <Link href="/pricing" className={buttonVariants({ variant: "outline" })}>
            See pricing
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
