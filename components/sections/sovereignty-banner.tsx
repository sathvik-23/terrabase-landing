import { Container } from "@/components/ui/container";
import { Glow } from "@/components/brand/glow";
import { Topographic } from "@/components/brand/topographic";
import { FadeIn } from "@/components/motion/fade-in";

export function SovereigntyBanner() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-surface-2 to-background px-8 py-16 md:px-16 md:py-20">
            <Topographic className="opacity-50" />
            <Glow className="right-[-80px] top-[-80px] h-[320px] w-[420px]" />
            <div className="relative max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Your data stays in India.{" "}
                <span className="text-gradient">Full stop.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Sovereign hosting isn&apos;t a checkbox — it&apos;s latency you can feel,
                compliance you can prove, and resilience against the access disruptions
                that stranded a generation of Indian developers. Every query, every file,
                every byte is served from infrastructure inside the country. Nothing
                leaves. Nothing routes abroad.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
