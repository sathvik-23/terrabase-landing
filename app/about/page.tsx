import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Terrabase exists: to keep Indian developers unblocked and sovereign. Built by Sathvik, solo founder behind the Bengaluru studio Metawurks.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Keep Indian developers unblocked — and sovereign"
        description="Terrabase started as a response to a single, disruptive event. It exists so no Indian developer has to choose between the tools they love and control over their own data."
      />

      <Container className="max-w-3xl space-y-14 py-16 md:py-20">
        <FadeIn className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The story</h2>
          <p className="text-muted">
            In early 2026, Supabase became inaccessible in India. Overnight, a large
            community of developers lost access to the backend their apps were built
            on. Projects broke mid-flight. There was no sovereign, drop-in compatible
            place to land.
          </p>
          <p className="text-muted">
            Terrabase is that place. It runs the same client protocol Supabase
            developers already use, so migration is a URL and key swap rather than a
            rewrite — and every byte of data stays on Indian infrastructure, beyond the
            reach of the access disruptions that caused the problem in the first place.
          </p>
        </FadeIn>

        <FadeIn className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">The mission</h2>
          <p className="text-muted">
            Sovereignty shouldn&apos;t mean starting over. Compatibility shouldn&apos;t
            mean giving up control. Terrabase exists to prove you can have both — a
            full, modern backend that&apos;s familiar on day one and sovereign by
            default.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface/40 p-7 sm:flex-row sm:items-center">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber to-accent text-2xl font-semibold text-accent-foreground">
              {site.founder.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tight">{site.founder}</h3>
              <p className="text-sm text-accent">Solo founder, {site.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {site.founder} also runs {site.studio}, a development studio in{" "}
                {site.location}. Terrabase is built with the same hands-on, ship-it
                ethos — close to the developers it serves.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}
