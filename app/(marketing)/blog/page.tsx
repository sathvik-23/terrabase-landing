import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on sovereign infrastructure, Postgres, and building Terrabase.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Nothing published yet"
        description="We're heads-down building. Once we launch, expect notes on sovereign infrastructure, Postgres at scale, and the engineering behind drop-in compatibility."
      />
      <Container className="py-16 md:py-20">
        <FadeIn className="flex flex-col items-start gap-4">
          <p className="text-muted">
            Want the first posts — and your invite — in your inbox?
          </p>
          <Link href="/#waitlist" className={buttonVariants()}>
            Join the waitlist
          </Link>
        </FadeIn>
      </Container>
    </>
  );
}
