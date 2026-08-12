import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Simple answers about pricing, delivery, student projects and support.",
};

const faqs = [
  { q: "What does the WordPress website include?", a: "Custom design, fast loading, SEO basics, contact forms, and simple training to manage your site. Support for 30 days." },
  { q: "How fast is delivery?", a: "WordPress in 3–5 days. Custom work depends on scope — you get a preview in 48 hours. Student projects in 5–7 days, or 24–48 hours with priority." },
  { q: "What do students get for ₹3,000?", a: "Working code, full report, diagrams, database design, setup guide and viva help." },
  { q: "Do I own the code?", a: "Yes, 100%. We give you all files, docs and setup notes. No lock-in." },
  { q: "Revisions and support?", a: "Two rounds of changes while we build, and 30 days of help after launch." },
  { q: "How do we start?", a: "Just contact us. We’ll send a simple plan with price and timeline within hours." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 lg:px-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pt-10 text-center sm:pt-12">
        <p className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> FAQ</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">Questions, <span className="font-normal italic text-[var(--foreground-tertiary)]">answered simply.</span></h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Can’t find your answer? Just contact us — we reply quickly.</p>
      </section>
      <div className="mt-8">
        <FaqClient faqs={faqs} />
      </div>
    </div>
  );
}
