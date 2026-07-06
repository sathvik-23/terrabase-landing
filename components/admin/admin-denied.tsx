import { Lock } from "lucide-react";
import { Container } from "@/components/ui/container";

/** Shown when the admin key is missing or wrong. Deliberately uninformative. */
export function AdminDenied() {
  return (
    <div className="flex min-h-screen items-center">
      <Container className="max-w-md text-center">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-surface text-muted">
          <Lock className="size-6" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">Restricted</h1>
        <p className="mt-3 text-muted">
          This page needs a valid access key. Append <code className="font-mono text-faint">?k=…</code>{" "}
          to the URL with the key you were given.
        </p>
      </Container>
    </div>
  );
}
