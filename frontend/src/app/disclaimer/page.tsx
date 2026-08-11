import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Disclaimer", description: "Disclaimer for TriNetix content and services." };
export default function DisclaimerPage(){
  return (
    <LegalLayout title="Disclaimer" updated="August 7, 2026">
      <p>Information on this site is for general guidance. We work to keep it accurate but do not warrant completeness.</p>
      <h2>Academic use</h2><p>Student projects and reports are learning aids. Use them to understand and present your own work — adhere to your institution’s integrity policy.</p>
      <h2>No professional advice</h2><p>Nothing on this site constitutes legal, financial, or academic certification advice.</p>
    </LegalLayout>
  );
}
