import { NextResponse, type NextRequest } from "next/server";

/**
 * Serve the admin dashboard at the `admin.` subdomain root by rewriting `/` to
 * `/admin`. Everything else (assets, /api, /admin/*) serves as-is on any host.
 * Access control lives inside /admin (secret key), so it also works on localhost.
 */
export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").split(":")[0];
  if (host.startsWith("admin.")) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/"] };
