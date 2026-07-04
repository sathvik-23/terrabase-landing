import { Check } from "lucide-react";

const rows = [
  { feature: "Postgres queries", note: "Same PostgREST-style API — .from().select().insert().update()." },
  { feature: "Auth", note: "Email/password and JWT sessions via the same auth client." },
  { feature: "Storage", note: "Upload, download, and signed URLs through the storage client." },
  { feature: "Realtime", note: "Channel subscriptions to Postgres changes over websockets." },
  { feature: "REST APIs", note: "Auto-generated REST endpoints for every table you expose." },
  { feature: "Row-Level Security", note: "Policies travel with your schema — bring them as SQL." },
];

/** Compatibility matrix for the migration guide. */
export function CompatTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-2/60 font-mono text-xs uppercase tracking-wider text-faint">
          <tr>
            <th className="px-5 py-3 font-normal">Capability</th>
            <th className="px-5 py-3 font-normal">Status</th>
            <th className="hidden px-5 py-3 font-normal sm:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.feature} className={i % 2 ? "bg-surface/30" : undefined}>
              <td className="px-5 py-4 font-medium">{row.feature}</td>
              <td className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-0.5 text-xs text-emerald">
                  <Check className="size-3" strokeWidth={3} /> Drop-in
                </span>
              </td>
              <td className="hidden px-5 py-4 text-muted sm:table-cell">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
