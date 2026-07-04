import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const strata = [
  { w: 150, o: 0.95 },
  { w: 230, o: 0.8 },
  { w: 310, o: 0.62 },
];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a0a",
          backgroundImage:
            "radial-gradient(600px circle at 82% 12%, rgba(232,102,61,0.35), transparent 60%)",
          padding: "72px",
          color: "#f6f2ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {strata.map((s) => (
              <div
                key={s.w}
                style={{
                  width: s.w,
                  height: 20,
                  borderRadius: 10,
                  background: "linear-gradient(90deg, #f6b45a, #d9491f)",
                  opacity: s.o,
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 16px",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.08,
              maxWidth: 940,
            }}
          >
            <span>The Supabase-compatible backend,</span>
            <span style={{ color: "#e8663d" }}>hosted in India.</span>
          </div>
          <div style={{ fontSize: 26, color: "#a9a29a", fontFamily: "monospace" }}>
            Postgres · Auth · Storage · Realtime · 100% India-hosted
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
