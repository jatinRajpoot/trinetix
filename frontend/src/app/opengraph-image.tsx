import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TriNetix — Websites and apps that actually ship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#fbfbfd",
        }}
      >
        <div style={{ display: "flex", fontSize: 14, letterSpacing: 4, color: "#86868b", fontWeight: 600 }}>TRINETIX LABORATORY</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 54, fontWeight: 700, color: "#1d1d1f", letterSpacing: -2 }}>Websites and apps</div>
        <div style={{ display: "flex", fontSize: 54, fontWeight: 400, color: "#6e6e73", letterSpacing: -2, marginTop: 4 }}>that actually ship.</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 18, color: "#424245" }}>WordPress 3999 · Android from 15k · Academic 3000</div>
        <div style={{ display: "flex", marginTop: 28, gap: 12 }}>
          <div style={{ display: "flex", background: "#1d1d1f", color: "white", padding: "10px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}>trinetix.in</div>
          <div style={{ display: "flex", border: "1px solid #d2d2d7", padding: "10px 22px", borderRadius: 999, fontSize: 14, color: "#1d1d1f" }}>Trusted by founders & students</div>
        </div>
      </div>
    ),
    size
  );
}
