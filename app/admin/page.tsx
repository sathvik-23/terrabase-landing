import type { Metadata } from "next";
import { checkAdminAccess } from "@/lib/admin-auth";
import { listSignups, storeConfigured } from "@/lib/waitlist-store";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminDenied } from "@/components/admin/admin-denied";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Waitlist admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ k?: string }>;
}) {
  const { k } = await searchParams;
  const access = checkAdminAccess(k);
  if (!access.allowed) return <AdminDenied />;

  const signups = await listSignups();

  return (
    <AdminDashboard
      signups={signups}
      storeConfigured={storeConfigured()}
      open={access.open}
      accessKey={k}
    />
  );
}
