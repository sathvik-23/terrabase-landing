import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/brand/eyebrow";
import { Glow } from "@/components/brand/glow";
import { Topographic } from "@/components/brand/topographic";
import { FadeIn } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { HeroCodeSwap } from "@/components/sections/hero/hero-code-swap";
import { TrustStrip } from "@/components/sections/hero/trust-strip";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <Topographic className="opacity-70 mask-fade-b" />
      <Glow className="left-1/2 top-[-140px] h-[420px] w-[720px] -translate-x-1/2" />

      <Container className="relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-7">
          <FadeIn immediate>
            <Eyebrow>Sovereign backend for Indian developers</Eyebrow>
          </FadeIn>

          <FadeIn immediate delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              The Supabase-compatible backend,{" "}
              <span className="text-gradient">hosted in India.</span>
            </h1>
          </FadeIn>

          <FadeIn immediate delay={0.1}>
            <p className="max-w-xl text-pretty text-lg text-muted">
              When Supabase went dark in India, your projects didn&apos;t have to.
              Point your SDK at Terrabase — same client, same code, data that never
              leaves the country.
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.15} className="w-full max-w-xl">
            <WaitlistForm size="lg" />
            <div className="mt-3">
              <Link
                href="#how-migration"
                className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                See how migration works →
              </Link>
            </div>
          </FadeIn>

          <FadeIn immediate delay={0.2} className="pt-2">
            <TrustStrip />
          </FadeIn>
        </div>

        <FadeIn immediate delay={0.12} y={26} className="w-full">
          <HeroCodeSwap />
        </FadeIn>
      </Container>
    </section>
  );
}
