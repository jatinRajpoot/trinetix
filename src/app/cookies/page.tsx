import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
export const metadata: Metadata = { title: "Cookie Policy", description: "How TriNetix uses cookies." };
export default function CookiePage(){
  return (
    <LegalLayout title="Cookie Policy" updated="August 7, 2026">
      <p>We use only essential cookies and, with consent, lightweight analytics.</p>
      <h2>Essential</h2><p>Needed for the site to function (e.g. form CSRF, preferences). Always on.</p>
      <h2>Analytics (optional)</h2><p>Helps us measure performance. Disabled by default — you can opt in via the banner.</p>
      <h2>Managing cookies</h2><p>Use your browser settings to block or delete cookies. Blocking essential cookies may affect forms.</p>
    </LegalLayout>
  );
}
