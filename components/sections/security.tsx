import { Server, ShieldCheck, FolderLock, Globe, Lock, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/brand/eyebrow";
import { FadeIn } from "@/components/motion/fade-in";

const layers: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Server, title: "Namespaced database roles", detail: "Each project gets its own Postgres roles — no shared superuser surface between tenants." },
  { icon: ShieldCheck, title: "Row-Level Security", detail: "Access policies are enforced in the database itself, not bolted onto the API layer." },
  { icon: FolderLock, title: "Per-tenant storage buckets", detail: "Files live in isolated buckets scoped to a single project. No cross-tenant paths." },
  { icon: Globe, title: "Network-level separation", detail: "Tenant traffic is segmented at the network layer, not just in application code." },
  { icon: Lock, title: "Least privilege by default", detail: "Every credential is scoped to the narrowest role that still does the job." },
];

export function Security() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Security &amp; isolation</Eyebrow>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Hard multi-tenancy, at every layer
          </h2>
          <p className="mt-5 text-lg text-muted">
            Projects don&apos;t share a trust boundary. Isolation is enforced from the
            database roles down to the network — so one tenant can never reach another.
            This audience checks; so did we.
          </p>
        </FadeIn>

        <ul className="flex flex-col gap-3">
          {layers.map(({ icon: Icon, title, detail }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <li className="flex gap-4 rounded-xl border border-border bg-surface/40 p-5">
                <div className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-surface-2 text-accent">
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-medium tracking-tight">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
