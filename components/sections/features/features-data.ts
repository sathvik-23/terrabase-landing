import {
  Replace,
  Database,
  KeyRound,
  FolderLock,
  Radio,
  MapPinned,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Replace,
    title: "Drop-in compatible",
    description:
      "Keep the Supabase client SDKs you already use. Migrate with a URL swap, not a rewrite.",
  },
  {
    icon: Database,
    title: "Postgres, fully yours",
    description:
      "A dedicated Postgres database per project, with Row-Level Security built in.",
  },
  {
    icon: KeyRound,
    title: "Auth included",
    description:
      "Email, password, and JWT-based authentication out of the box — no extra service.",
  },
  {
    icon: FolderLock,
    title: "Storage",
    description:
      "S3-style file storage with hard per-project isolation at the bucket layer.",
  },
  {
    icon: Radio,
    title: "Realtime",
    description:
      "Subscribe to database changes over websockets and push updates to clients live.",
  },
  {
    icon: MapPinned,
    title: "Sovereign hosting",
    description:
      "Every byte stays on Indian infrastructure. Compliance and low latency by default.",
  },
];
