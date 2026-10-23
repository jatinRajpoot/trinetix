import type { Metadata } from "next";
import Link from "next/link";
import FaqClient from "./FaqClient";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Answers about TriNetix project timelines, pricing, website ownership, support and student projects.",
};

const faqs = [
  { q: "What does a business website cost?", a: "Business websites start at ₹3,999. We’ll confirm the pages, features, timeline and final price with you before any work begins." },
  { q: "How long will a website take?", a: "A typical small business website takes around 3–5 days once we have the content. Custom apps and larger sites take longer; we’ll agree on the timing up front." },
  { q: "Will I own the website and its content?", a: "Yes. We hand over the website files and agreed project assets, along with notes to help you manage the work. Any third-party subscriptions or licences are explained separately." },
  { q: "Can I update the website myself?", a: "Yes. We build with everyday updates in mind and walk you through the controls during handover." },
  { q: "What happens after I contact you?", a: "We’ll read your brief, ask follow-up questions if needed, then send a clear proposal with scope, price and timeline. You choose whether to proceed." },
  { q: "Do you help with college projects?", a: "We support students with runnable code, project documentation, diagrams and setup guidance. Contact us with your course requirements and deadline so we can confirm what’s feasible." },
  { q: "Is support included after launch?", a: "Website projects include 30 days of post-launch support. The exact support for apps and custom projects is described in your proposal." },
];

const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function FaqPage() {
  return (
    <div className="bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <section className="bg-[#20241f] text-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"><p className="section-kicker !text-[#ef8b6e]">Before you get started</p><h1 className="mt-5 max-w-[800px] text-[44px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">Good questions deserve straight answers.</h1><p className="mt-4 max-w-[600px] text-[13px] leading-7 text-white/65 sm:text-[14px]">A few things people ask when they’re choosing a team for their website or app.</p></div></section>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[.58fr_1.42fr] lg:gap-16 lg:px-12 lg:py-20"><div><p className="section-kicker">Still deciding?</p><h2 className="mt-3 text-[29px] font-medium leading-[1.02] tracking-[-.06em] sm:text-[37px]">We’ll help you figure out what to ask.</h2><p className="mt-3 max-w-[340px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">Every business is different. Tell us what you’re working on and we’ll give you a direct answer.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-[10px] font-semibold uppercase tracking-[.09em] text-[var(--accent)]">Ask us directly <ArrowRight className="h-3.5 w-3.5"/></Link></div><FaqClient faqs={faqs}/></section>
    </div>
  );
}
