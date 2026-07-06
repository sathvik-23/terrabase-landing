import { checkAdminAccess } from "@/lib/admin-auth";
import { listSignups } from "@/lib/waitlist-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** GET /api/admin/export?k=KEY — download the waitlist as CSV. */
export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("k") ?? undefined;
  if (!checkAdminAccess(key).allowed) {
    return new Response("Restricted", { status: 401 });
  }

  const signups = await listSignups();
  const rows = [["email", "signed_up_at"], ...signups.map((s) => [s.email, s.createdAt])];
  const csv = rows.map((r) => r.map(csvCell).join(",")).join("\r\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="terrabase-waitlist.csv"',
      "Cache-Control": "no-store",
    },
  });
}

/** Escape a CSV cell and neutralise spreadsheet formula injection. */
function csvCell(value: string): string {
  const isFormula = /^[=+\-@]/.test(value);
  const body = isFormula ? `'${value}` : value;
  return /[",\r\n]/.test(body) ? `"${body.replace(/"/g, '""')}"` : body;
}
