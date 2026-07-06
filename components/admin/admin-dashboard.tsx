import { TriangleAlert, Download, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { SignupsTable } from "@/components/admin/signups-table";
import type { Signup } from "@/lib/waitlist-store";

type Props = {
  signups: Signup[];
  storeConfigured: boolean;
  open: boolean;
  accessKey?: string;
};

/** The admin view: header, count, warnings, table, and CSV export. */
export function AdminDashboard({ signups, storeConfigured, open, accessKey }: Props) {
  const q = accessKey ? `?k=${encodeURIComponent(accessKey)}` : "";

  return (
    <div className="min-h-screen py-10">
      <Container className="max-w-4xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-6" />
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Waitlist</h1>
              <p className="font-mono text-xs text-faint">admin · internal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href={q || "?"} className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <RefreshCw className="size-4" /> Refresh
            </a>
            <a
              href={`/api/admin/export${q}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Download className="size-4" /> CSV
            </a>
          </div>
        </header>

        {!storeConfigured && (
          <Notice tone="warn">
            Storage isn&apos;t configured (<code>BLOB_READ_WRITE_TOKEN</code> missing), so
            signups aren&apos;t being saved and can&apos;t be shown.
          </Notice>
        )}
        {open && (
          <Notice tone="warn">
            This dashboard is <strong>unprotected</strong> — anyone with the URL can read
            every email. Set <code>ADMIN_ACCESS_KEY</code> to require a secret key.
          </Notice>
        )}

        <div className="mt-8 mb-4 flex items-baseline gap-2">
          <span className="text-3xl font-semibold tracking-tight">{signups.length}</span>
          <span className="text-muted">{signups.length === 1 ? "signup" : "signups"}</span>
        </div>

        <SignupsTable signups={signups} />
      </Container>
    </div>
  );
}

function Notice({ tone, children }: { tone: "warn"; children: React.ReactNode }) {
  return (
    <div
      className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber/25 bg-amber/[0.06] px-4 py-3 text-sm text-muted [&_code]:font-mono [&_code]:text-amber [&_strong]:text-foreground"
      data-tone={tone}
    >
      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber" />
      <p>{children}</p>
    </div>
  );
}
