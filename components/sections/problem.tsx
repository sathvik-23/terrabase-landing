import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/brand/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

export function Problem() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-3xl">
          <Eyebrow>The origin</Eyebrow>
          <p className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            In early 2026, Supabase became inaccessible in India — and thousands of
            developers were stranded mid-build.
          </p>
          <p className="mt-5 text-lg text-muted">
            No sovereign, compatible alternative existed to catch them. Apps broke.
            Migrations stalled. Roadmaps slipped. Terrabase was built to be exactly
            that alternative: a backend that speaks the same SDK you already use, and
            keeps every byte of your data inside the country.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
