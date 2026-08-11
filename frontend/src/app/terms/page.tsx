import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Terms of Service", description: "Terms governing use of TriNetix services." };
export default function TermsPage(){
  return (
    <LegalLayout title="Terms of Service" updated="August 7, 2026">
      <p>By using trinetix.in or engaging TriNetix Laboratory, you agree to these terms.</p>
      <h2>Services & pricing</h2><p>Fixed prices listed (e.g. WordPress ₹3,999) cover the stated scope. Custom work is scoped and quoted before start.</p>
      <h2>Timelines</h2><p>Estimates are provided in good faith. Delays due to client feedback or third-party services are not counted.</p>
      <h2>Intellectual property</h2><p>Upon full payment you own deliverables. We may showcase anonymized work unless you opt out in writing.</p>
      <h2>Limitation of liability</h2><p>Services are provided as-is. Liability is limited to fees paid for the specific project.</p>
      <h2>Contact</h2><p>Support@trinetix.in</p>
    </LegalLayout>
  );
}
