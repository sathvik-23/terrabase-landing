import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/pages/page-header";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Status",
  description: "Terrabase system status.",
  robots: { index: false, follow: true },
};

const services = ["API Gateway", "Postgres", "Auth", "Storage", "Realtime", "Dashboard"];

export default function StatusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Status"
        title="All systems nominal"
        description="A live status page arrives with launch. This is the shell it will grow into."
      />
      <Container className="max-w-2xl py-16 md:py-20">
        <FadeIn>
          <div className="flex items-center gap-3 rounded-2xl border border-emerald/25 bg-emerald/[0.06] px-6 py-5">
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-60" />
              <span className="relative inline-flex size-3 rounded-full bg-emerald" />
            </span>
            <p className="font-medium">All systems operational</p>
          </div>
        </FadeIn>

        <FadeIn className="mt-6 overflow-hidden rounded-2xl border border-border">
          <ul>
            {services.map((service, i) => (
              <li
                key={service}
                className="flex items-center justify-between px-6 py-4"
                style={{ borderTop: i ? "1px solid var(--color-border)" : undefined }}
              >
                <span className="text-sm">{service}</span>
                <span className="inline-flex items-center gap-2 text-sm text-emerald">
                  <span className="size-2 rounded-full bg-emerald" /> Operational
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="mt-6 text-center text-sm text-faint">
          Pre-launch placeholder. Real uptime metrics and incident history land at launch.
        </FadeIn>
      </Container>
    </>
  );
}
