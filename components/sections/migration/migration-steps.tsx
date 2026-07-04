import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/brand/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { CodeBlock, Tok } from "@/components/brand/code";
import { StepCard } from "@/components/sections/migration/step-card";
import { buttonVariants } from "@/components/ui/button";

export function MigrationSteps() {
  return (
    <section id="how-migration" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How migration works"
          title="Three steps. Zero rewrites."
          description="If your app already talks to Supabase, it already talks to Terrabase. Here's the whole migration."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <FadeIn delay={0}>
            <StepCard
              index={1}
              title="Create a project"
              description="Spin up a Terrabase project and copy your project URL and anon key from the dashboard."
            >
              <CodeBlock className="text-xs">
                <span className="block"><Tok k="comment"># Terrabase dashboard</Tok></span>
                <span className="block"><Tok k="prop">URL</Tok> <Tok k="punct">=</Tok> <Tok k="accent">https://xyz.terrabase.dev</Tok></span>
                <span className="block"><Tok k="prop">ANON_KEY</Tok> <Tok k="punct">=</Tok> <Tok k="string">eyJhbGci…</Tok></span>
              </CodeBlock>
            </StepCard>
          </FadeIn>

          <FadeIn delay={0.06}>
            <StepCard
              index={2}
              title="Swap the URL and keys"
              description="Point your existing config at Terrabase. Nothing else in your app changes."
            >
              <CodeBlock className="text-xs">
                <span className="block"><Tok k="comment"># .env</Tok></span>
                <span className="block text-[#f0916b]/70 line-through">- NEXT_PUBLIC_SUPABASE_URL=…supabase.co</span>
                <span className="block text-accent">+ NEXT_PUBLIC_SUPABASE_URL=…terrabase.dev</span>
              </CodeBlock>
            </StepCard>
          </FadeIn>

          <FadeIn delay={0.12}>
            <StepCard
              index={3}
              title="Ship"
              description="Queries, auth, storage calls, and realtime subscriptions all work unchanged."
            >
              <CodeBlock className="text-xs">
                <span className="block"><Tok k="keyword">await</Tok> <Tok k="prop">supabase</Tok></span>
                <span className="block pl-2"><Tok k="punct">.</Tok><Tok k="fn">from</Tok><Tok k="punct">(</Tok><Tok k="string">&apos;posts&apos;</Tok><Tok k="punct">)</Tok></span>
                <span className="block pl-2"><Tok k="punct">.</Tok><Tok k="fn">select</Tok><Tok k="punct">()</Tok> <Tok k="comment">{"// just works"}</Tok></span>
              </CodeBlock>
            </StepCard>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 flex justify-center">
          <Link href="/migrate" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Read the migration guide
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
