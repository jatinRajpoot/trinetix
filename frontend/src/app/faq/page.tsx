import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about TriNetix pricing, timelines, academic projects, and support.",
};

const faqs = [
  { q: "What does the ₹3,999 WordPress site include?", a: "Custom theme setup, responsive design, sub-1s speed tuning, SEO basics, contact & social integration, and admin training with 1-month support." },
  { q: "How fast is delivery?", a: "WordPress in 3–5 days. Custom apps scoped to features — preview in 48h. Student standard in 5–7 days; Express in 24–48h." },
  { q: "What do students receive for ₹3,000?", a: "Runnable source code, IEEE/university report, ERDs/DFDs, schema & setup guide, plus viva questions and guidance." },
  { q: "Do I own the code?", a: "Yes — 100% yours. We hand over repos, docs, and deployment notes. No lock-in." },
  { q: "What about revisions and support?", a: "Two revision rounds during build and 30 days of email/WhatsApp support after handover." },
  { q: "How do we start?", a: "Send scope via Contact. You’ll get a 1-page proposal with fixed price and timeline within hours." },
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">FAQ</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Questions, answered clearly.</h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">If you don’t see your question, contact founders directly.</p>
      </section>
      <div className="mt-8">
        <FaqClient faqs={faqs} />
      </div>
    </div>
  );
}
