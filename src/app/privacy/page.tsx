import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Privacy Policy", description: "How TriNetix collects and uses information." };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 7, 2026">
      <p>TriNetix Laboratory (“we”) respects your privacy. We collect only what we need to deliver projects and respond to enquiries.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you submit (name, email, phone, message, service type).</li>
        <li>Usage analytics if you opt into cookies (see Cookie Policy).</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries, scope work, and deliver projects.</li>
        <li>To improve site performance and reliability.</li>
      </ul>
      <h2>Retention & security</h2>
      <p>We retain enquiry records for up to 24 months and store them with access controls. We do not sell your data.</p>
      <h2>Your rights</h2>
      <p>Contact <a href="mailto:Support@trinetix.in">Support@trinetix.in</a> to access, correct, or delete your information.</p>
      <h2>Contact</h2>
      <p>Questions? Email Support@trinetix.in.</p>
    </LegalLayout>
  );
}
