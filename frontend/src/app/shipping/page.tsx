import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Shipping Policy", description: "Digital delivery policy for TriNetix." };
export default function ShippingPage(){
  return (
    <LegalLayout title="Shipping Policy" updated="August 7, 2026">
      <p>All TriNetix deliverables are digital. No physical shipment is involved.</p>
      <h2>Delivery method</h2><p>Files and reports are delivered via email and/or a private download link. Source repos are shared via Git or archive.</p>
      <h2>Timelines</h2><p>See your proposal for exact dates. WordPress 3–5 days; academic standard 5–7 days; Express 24–48h.</p>
      <h2>Access issues</h2><p>If you cannot access a delivery, email Support@trinetix.in — we reissue within 24 hours.</p>
    </LegalLayout>
  );
}
