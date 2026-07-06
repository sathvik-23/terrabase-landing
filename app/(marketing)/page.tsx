import { Hero } from "@/components/sections/hero/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features/features";
import { MigrationSteps } from "@/components/sections/migration/migration-steps";
import { Security } from "@/components/sections/security";
import { SovereigntyBanner } from "@/components/sections/sovereignty-banner";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { softwareSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <Hero />
      <Problem />
      <Features />
      <MigrationSteps />
      <Security />
      <SovereigntyBanner />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}
