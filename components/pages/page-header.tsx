import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/brand/eyebrow";
import { Glow } from "@/components/brand/glow";
import { Topographic } from "@/components/brand/topographic";
import { FadeIn } from "@/components/motion/fade-in";

/** Consistent header band for interior pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <Topographic className="opacity-50 mask-fade-b" />
      <Glow className="left-1/2 top-[-160px] h-[360px] w-[620px] -translate-x-1/2" />
      <Container className="relative py-20 md:py-24">
        <FadeIn immediate className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted">
              {description}
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
