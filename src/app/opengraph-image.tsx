import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TriNetix Atelier — Bespoke Websites & Apps, Crafted to Endure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return await new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#f9fbf8",
          position: "relative",
        }}
      >
        {/* subtle gold hairline */}
        <div style={{ display: "flex", position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #dccfb2, transparent)", opacity: 0.8 }} />
        <div style={{ display: "flex", fontSize: 13, letterSpacing: 4, color: "#1b4330", fontWeight: 600 }}>TRINETIX ATELIER — EST. 2024</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 54, fontWeight: 700, color: "#122019", letterSpacing: -2 }}>Bespoke websites</div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 300, color: "#5a6e60", letterSpacing: -2, marginTop: 2, fontStyle: "italic" }}>& apps, crafted to endure.</div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 13, color: "#1b4330", letterSpacing: 1, fontWeight: 600 }}>QUIETLY PREMIUM · FOUNDER-LED · NOT THE CHEAPEST — THE MOST CONSIDERED</div>
        <div style={{ display: "flex", marginTop: 28, gap: 12 }}>
          <div style={{ display: "flex", background: "#1b4330", color: "white", padding: "10px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600 }}>trinetix.in</div>
          <div style={{ display: "flex", border: "1px solid #d2ddd2", padding: "10px 22px", borderRadius: 999, fontSize: 13, color: "#1b4330", background: "white" }}>Sage · Forest · Ivory</div>
        </div>
      </div>
    ),
    size
  );
}
