import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/brand/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { FeatureCard } from "@/components/sections/features/feature-card";
import { features } from "@/components/sections/features/features-data";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The full backend"
          title="A full backend, not a database with extras"
          description="Postgres, Auth, Storage, Realtime, and instant REST APIs — the same primitives you already build against, hosted on sovereign infrastructure."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={(i % 3) * 0.06}>
              <FeatureCard {...feature} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
