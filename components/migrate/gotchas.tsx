import { TriangleAlert } from "lucide-react";

const gotchas = [
  {
    title: "Re-register OAuth redirect URLs",
    body: "Update callback URLs with each auth provider to point at your Terrabase domain, or logins will bounce.",
  },
  {
    title: "Hunt down hardcoded project refs",
    body: "Search beyond your .env for any *.supabase.co strings — webhooks, CORS allowlists, and mobile builds included.",
  },
  {
    title: "Bring your schema and policies",
    body: "Tables, RLS policies, and functions move as SQL via pg_dump. Data isn't copied automatically — you control the cutover.",
  },
  {
    title: "Verify exotic extensions",
    body: "Common Postgres extensions are available out of the box. Confirm anything unusual before you switch production over.",
  },
];

/** Migration edge cases the target audience will look for. */
export function Gotchas() {
  return (
    <div className="rounded-2xl border border-amber/25 bg-amber/[0.06] p-6 md:p-8">
      <div className="flex items-center gap-2.5">
        <TriangleAlert className="size-5 text-amber" strokeWidth={2} />
        <h3 className="text-lg font-medium tracking-tight">Gotchas worth knowing</h3>
      </div>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2">
        {gotchas.map((g) => (
          <li key={g.title}>
            <p className="font-medium text-foreground">{g.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{g.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
