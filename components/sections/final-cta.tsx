import { Container } from "@/components/ui/container";
import { Glow } from "@/components/brand/glow";
import { FadeIn } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-20 py-24 md:py-32">
      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <Glow className="left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-70" />
          <FadeIn className="relative">
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Be first in when we{" "}
              <span className="text-gradient">open the doors.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
              Join the waitlist and we&apos;ll email you the moment your invite is
              ready. Migration takes minutes; your spot takes seconds.
            </p>
            <div className="mx-auto mt-9 max-w-lg">
              <WaitlistForm size="lg" />
            </div>
            <p className="mt-4 text-sm text-faint">
              No spam. We&apos;ll email you once when your invite is ready.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
