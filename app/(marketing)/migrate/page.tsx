import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { CodeDiff } from "@/components/migrate/code-diff";
import { CompatTable } from "@/components/migrate/compat-table";
import { Gotchas } from "@/components/migrate/gotchas";
import { CodeBlock, Tok } from "@/components/brand/code";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Migration guide",
  description:
    "Move from Supabase to Terrabase in minutes. Swap your project URL and anon key — your queries, auth, storage, and realtime code stay exactly the same.",
};

const envDiff = [
  { type: "context" as const, text: "# .env — the only lines that change" },
  { type: "del" as const, text: "NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co" },
  { type: "add" as const, text: "NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.terrabase.dev" },
  { type: "del" as const, text: "NEXT_PUBLIC_SUPABASE_ANON_KEY=<old-supabase-anon-key>" },
  { type: "add" as const, text: "NEXT_PUBLIC_SUPABASE_ANON_KEY=<new-terrabase-anon-key>" },
];

export default function MigratePage() {
  return (
    <>
      <PageHeader
        eyebrow="Migration guide"
        title="Move from Supabase to Terrabase in minutes"
        description="Terrabase speaks the same client protocol as Supabase. Point the SDK at your Terrabase project and your existing code keeps working — no rewrite, no new mental model."
      />

      <Container className="max-w-3xl space-y-16 py-16 md:py-20">
        <FadeIn className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">1. Swap the URL and keys</h2>
          <p className="text-muted">
            Create a Terrabase project, copy its URL and anon key from the dashboard,
            and change two lines in your environment. That&apos;s the migration.
          </p>
          <CodeDiff filename=".env" lines={envDiff} />
        </FadeIn>

        <FadeIn className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">2. Your app code is untouched</h2>
          <p className="text-muted">
            The client reads its URL and key from the environment, so the code that
            creates and uses the client doesn&apos;t change at all.
          </p>
          <div className="rounded-xl border border-border bg-surface/40 p-5">
            <CodeBlock>
              <span className="block"><Tok k="keyword">import</Tok> <Tok k="punct">{"{"}</Tok> <Tok k="prop">createClient</Tok> <Tok k="punct">{"}"}</Tok> <Tok k="keyword">from</Tok> <Tok k="string">&apos;@supabase/supabase-js&apos;</Tok></span>
              <span className="block">&nbsp;</span>
              <span className="block"><Tok k="keyword">export const</Tok> <Tok k="prop">supabase</Tok> <Tok k="punct">=</Tok> <Tok k="fn">createClient</Tok><Tok k="punct">(</Tok></span>
              <span className="block pl-4"><Tok k="prop">process</Tok><Tok k="punct">.</Tok><Tok k="prop">env</Tok><Tok k="punct">.</Tok><Tok k="prop">NEXT_PUBLIC_SUPABASE_URL</Tok><Tok k="punct">!,</Tok></span>
              <span className="block pl-4"><Tok k="prop">process</Tok><Tok k="punct">.</Tok><Tok k="prop">env</Tok><Tok k="punct">.</Tok><Tok k="prop">NEXT_PUBLIC_SUPABASE_ANON_KEY</Tok><Tok k="punct">!,</Tok></span>
              <span className="block"><Tok k="punct">)</Tok> <Tok k="comment">{"// same import, same call, same types"}</Tok></span>
            </CodeBlock>
          </div>
        </FadeIn>

        <FadeIn className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">3. What&apos;s compatible</h2>
          <p className="text-muted">
            Every core primitive maps one-to-one. If you use the official Supabase
            client libraries, you&apos;re already using the Terrabase API.
          </p>
          <CompatTable />
        </FadeIn>

        <FadeIn>
          <Gotchas />
        </FadeIn>

        <FadeIn className="flex flex-col items-start gap-4 border-t border-border pt-10">
          <p className="text-muted">
            Terrabase isn&apos;t open for signups yet — join the waitlist and we&apos;ll
            send your project URL and keys the moment invites go out.
          </p>
          <Link href="/#waitlist" className={buttonVariants({ size: "lg" })}>
            Join the waitlist
          </Link>
        </FadeIn>
      </Container>
    </>
  );
}
