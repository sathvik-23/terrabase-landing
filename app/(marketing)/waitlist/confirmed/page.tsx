import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Glow } from "@/components/brand/glow";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "You're on the waitlist",
  description: "Thanks for joining the Terrabase waitlist.",
  robots: { index: false, follow: false },
};

export default function ConfirmedPage() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-24 md:py-32">
      <Glow className="left-1/2 top-1/3 h-[320px] w-[520px] -translate-x-1/2 opacity-70" />
      <Container className="relative">
        <FadeIn immediate className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl border border-emerald/30 bg-emerald/10 text-emerald">
            <CircleCheck className="size-8" strokeWidth={1.75} />
          </div>
          <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            You&apos;re on the list.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-muted">
            Thanks for signing up. We&apos;ll email you once — and only once — when your
            invite is ready. No spam in the meantime.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/migrate" className={buttonVariants({ size: "lg" })}>
              Read the migration guide
            </Link>
            <Link href="/" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Back to home
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
