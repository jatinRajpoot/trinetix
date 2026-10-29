import type { Metadata } from "next";
import Link from "next/link";
import FaqClient from "./FaqClient";
import { ArrowRight } from "lucide-react";
import PageHeading from "@/components/PageHeading";

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
      <PageHeading label="Before we make something together" title={<>Good questions.<br/>Straight answers.</>} description="A few things people ask when they’re choosing a team for their website or app. Timelines, pricing, ownership, and everything in between."/>
      <section className="site-container faq-content"><div><h2>Still figuring<br/>things out?</h2><p>Every business is different. Tell us what you’re working on and we’ll help you find a clear next step.</p><Link href="/contact" className="text-link">Ask us directly <ArrowRight size={17}/></Link></div><div className="faq-accordion"><FaqClient faqs={faqs}/></div></section>
    </div>
  );
}
