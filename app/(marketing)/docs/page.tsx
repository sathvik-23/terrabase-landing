import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, Database, KeyRound, FolderLock, Radio, FileCode } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { LinkCard } from "@/components/pages/link-card";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Terrabase documentation. Full guides land at launch — and because Terrabase is Supabase-compatible, the client SDK docs you know already apply.",
};

const sections = [
  { icon: Rocket, title: "Quickstart", description: "Create a project, grab your keys, and make your first query." },
  { icon: Database, title: "Database", description: "Postgres, Row-Level Security, and the auto-generated query API." },
  { icon: KeyRound, title: "Auth", description: "Email/password and JWT sessions with the auth client." },
  { icon: FolderLock, title: "Storage", description: "Upload, serve, and sign files with per-project isolation." },
  { icon: Radio, title: "Realtime", description: "Subscribe to database changes over websockets." },
  { icon: FileCode, title: "REST APIs", description: "Instant REST endpoints for every table you expose." },
];

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Docs, landing at launch"
        description="Full Terrabase guides ship when we open the doors. In the meantime: because Terrabase is drop-in compatible, the official Supabase client SDK docs describe the same methods you'll call against Terrabase."
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={(i % 3) * 0.06}>
              <LinkCard {...section} badge="Coming at launch" />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-10">
          <p className="text-muted">
            Migrating an existing app? The migration guide is ready today.
          </p>
          <Link href="/migrate" className={buttonVariants({ variant: "outline" })}>
            Read the migration guide
          </Link>
        </FadeIn>
      </Container>
    </>
  );
}
