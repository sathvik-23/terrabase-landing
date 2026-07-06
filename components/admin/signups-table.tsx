import type { Signup } from "@/lib/waitlist-store";

const fmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "UTC",
  hour12: false,
});

function formatWhen(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "—" : `${fmt.format(d)} UTC`;
}

export function SignupsTable({ signups }: { signups: Signup[] }) {
  if (signups.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-surface/40 px-6 py-16 text-center text-muted">
        No signups yet. Share the waitlist and they&apos;ll appear here.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-2/60 font-mono text-xs uppercase tracking-wider text-faint">
          <tr>
            <th className="w-12 px-5 py-3 font-normal">#</th>
            <th className="px-5 py-3 font-normal">Email</th>
            <th className="px-5 py-3 font-normal">Signed up</th>
          </tr>
        </thead>
        <tbody>
          {signups.map((s, i) => (
            <tr key={s.email} className={i % 2 ? "bg-surface/30" : undefined}>
              <td className="px-5 py-3 font-mono text-faint">{signups.length - i}</td>
              <td className="px-5 py-3">
                <a href={`mailto:${s.email}`} className="hover:text-accent">
                  {s.email}
                </a>
              </td>
              <td className="px-5 py-3 font-mono text-xs text-muted">{formatWhen(s.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
