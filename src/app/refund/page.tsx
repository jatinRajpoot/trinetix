import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Refund Policy", description: "TriNetix refund terms." };
export default function RefundPage(){
  return (
    <LegalLayout title="Refund Policy" updated="August 7, 2026">
      <p>We aim for clarity before payment. Our refund terms are simple.</p>
      <h2>WordPress & apps</h2><p>Full refund if work hasn’t started. After kickoff, refunds are prorated by work completed.</p>
      <h2>Academic projects</h2><p>Reports and code are prepared per your topic. Refunds available only before drafting begins (typically 12 hours after payment confirmation).</p>
      <h2>How to request</h2><p>Email Support@trinetix.in with order details within 7 days of payment. We respond within 2 business days.</p>
    </LegalLayout>
  );
}
