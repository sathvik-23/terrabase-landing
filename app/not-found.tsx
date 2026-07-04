import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Glow } from "@/components/brand/glow";
import { Topographic } from "@/components/brand/topographic";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <Topographic className="opacity-50" />
      <Glow className="left-1/2 top-1/3 h-[320px] w-[520px] -translate-x-1/2" />
      <Container className="relative text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          404 — off the map
        </p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          This terrain doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          The page you&apos;re looking for moved, or never existed. Let&apos;s get you
          back on solid ground.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            Back to home
          </Link>
          <Link href="/migrate" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Migration guide
          </Link>
        </div>
      </Container>
    </section>
  );
}
