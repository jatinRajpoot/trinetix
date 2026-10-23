import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TriNetix — Websites that help your business grow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, background: "#f6f8fa", position: "relative" }}>
        <div style={{ display: "flex", position: "absolute", right: -100, top: -200, width: 620, height: 620, borderRadius: 999, background: "radial-gradient(circle, #dce8ff 0%, rgba(220,232,255,0) 68%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#2459d3", fontSize: 17, fontWeight: 700, letterSpacing: 2 }}>
          <div style={{ display: "flex", width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: 13, background: "#2459d3", color: "white", fontSize: 22, letterSpacing: -2 }}>TN</div>
          TRINETIX · DIGITAL STUDIO
        </div>
        <div style={{ display: "flex", marginTop: 38, maxWidth: 980, fontSize: 62, fontWeight: 700, lineHeight: 1.05, color: "#102033", letterSpacing: -3 }}>A website that earns attention and turns it into business.</div>
        <div style={{ display: "flex", marginTop: 26, maxWidth: 790, fontSize: 21, lineHeight: 1.5, color: "#5d6d80" }}>Thoughtful websites, apps and digital projects. Clear pricing, direct communication and support from planning to launch.</div>
        <div style={{ display: "flex", marginTop: 32, alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", background: "#2459d3", color: "white", padding: "13px 23px", borderRadius: 999, fontSize: 17, fontWeight: 600 }}>trinetix.in</div>
          <div style={{ display: "flex", border: "1px solid #d8e0e8", padding: "12px 22px", borderRadius: 999, fontSize: 16, color: "#2f4054", background: "white" }}>Websites from INR 3,999</div>
        </div>
      </div>
    ),
    size
  );
}
