import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TriNetix — Make it easy for customers to choose you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#f4f1ea", position: "relative", color: "#20241f" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", width: 42, height: 42, alignItems: "center", justifyContent: "center", border: "1px solid #20241f", fontSize: 19, fontWeight: 800, letterSpacing: -2 }}>tn</div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 21, fontWeight: 700, letterSpacing: -1 }}>trinetix<span style={{ marginTop: 4, fontSize: 9, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#72766d" }}>Digital studio</span></div>
          </div>
          <div style={{ display: "flex", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#cf452e" }}>WEB DESIGN · DEVELOPMENT · GROWTH</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", width: 34, height: 3, background: "#cf452e", marginBottom: 22 }} />
          <div style={{ display: "flex", fontSize: 72, fontWeight: 650, lineHeight: 1, letterSpacing: -5 }}>Make it easy for customers</div>
          <div style={{ display: "flex", marginTop: 6, fontSize: 75, fontWeight: 400, lineHeight: 1, letterSpacing: -5, color: "#cf452e", fontStyle: "italic", fontFamily: "Georgia" }}>to choose you.</div>
          <div style={{ display: "flex", marginTop: 24, maxWidth: 730, fontSize: 19, lineHeight: 1.45, color: "#72766d" }}>Clear, useful websites and apps for real businesses. Transparent pricing. Direct support from the people building your project.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #d8d4ca", paddingTop: 18 }}>
          <div style={{ display: "flex", fontSize: 14, fontWeight: 600 }}>Websites from INR 3,999</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#cf452e", color: "white", padding: "12px 18px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>TRINETIX.IN <span style={{ fontSize: 18 }}>↗</span></div>
        </div>
      </div>
    ),
    size
  );
}
