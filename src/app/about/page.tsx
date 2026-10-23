import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, HeartHandshake, MessageSquareText, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "About TriNetix",
  description: "Meet TriNetix, a digital studio building practical websites, apps and digital products with clear communication and dependable support.",
};

const values = [
  { icon: MessageSquareText, title: "Plain, direct communication", body: "We explain the options without jargon, keep you in the loop and make it easy to ask questions." },
  { icon: Target, title: "Focused on what matters", body: "Every feature should make the experience clearer, help someone take action or solve a real problem." },
  { icon: ShieldCheck, title: "Built to be yours", body: "You get a useful handover and control of the finished work. No mystery systems or unnecessary lock-in." },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] pb-16 sm:pb-20">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-14 pt-12 sm:px-7 sm:pb-16 sm:pt-16 lg:px-10">
          <p className="section-kicker"><HeartHandshake className="h-4 w-4" /> About TriNetix</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_.8fr] lg:items-end">
            <h1 className="max-w-[800px] text-[40px] font-semibold leading-[1.04] tracking-[-.06em] sm:text-[54px]">Good digital work should feel clear from the very first conversation.</h1>
            <p className="max-w-[510px] text-[14px] leading-7 text-[var(--foreground-tertiary)] sm:text-[15px]">TriNetix helps businesses, teams and students turn ideas into practical websites, apps and digital projects. We keep the process human, the decisions clear and the finished work easy to use.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-8 px-5 pt-10 sm:px-7 sm:pt-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:px-10">
        <div className="rounded-[24px] bg-[#10233d] p-7 text-white sm:p-9">
          <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/10 text-[#b8cbff]"><Sparkles className="h-5 w-5" /></span>
          <h2 className="mt-6 text-[26px] font-semibold leading-tight tracking-[-.05em] sm:text-[32px]">Technology should make your work easier—not more confusing.</h2>
          <p className="mt-4 text-[13px] leading-6 text-white/65">That idea shapes the way we work: ask the right questions, make a useful plan, build with care and leave you confident about what comes next.</p>
          <Link href="/previous-work" className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white hover:text-[#b8cbff]">See what we’ve built <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-3">
          {values.map((value, i) => <article key={value.title} className="flex gap-4 rounded-[19px] border border-[var(--border-subtle)] bg-white p-5 sm:p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]"><value.icon className="h-[18px] w-[18px]" /></span><div><p className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--accent)]">0{i + 1}</p><h3 className="mt-1 text-[15px] font-semibold tracking-[-.02em]">{value.title}</h3><p className="mt-1.5 text-[12.5px] leading-5 text-[var(--foreground-tertiary)]">{value.body}</p></div></article>)}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1280px] px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="section-kicker"><Workflow className="h-4 w-4" /> How we work</p><h2 className="mt-3 text-[30px] font-semibold tracking-[-.05em] sm:text-[38px]">A process you can follow.</h2></div>
          <p className="max-w-[430px] text-[13px] leading-6 text-[var(--foreground-tertiary)]">You’ll always know what we’re working on, what we need from you and what happens next.</p>
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {[
            { n: "01", title: "Understand your goal", text: "We talk about what you need, who it’s for and what a good outcome looks like." },
            { n: "02", title: "Plan and build", text: "You get an agreed scope, price and timeline. We share progress and make room for feedback." },
            { n: "03", title: "Launch with confidence", text: "We test, launch and walk you through how to use and manage your project." },
          ].map((step) => <div key={step.n} className="rounded-[19px] border border-[var(--border-subtle)] bg-white p-6"><span className="text-[12px] font-bold tracking-[.1em] text-[var(--accent)]">{step.n}</span><h3 className="mt-4 text-[16px] font-semibold">{step.title}</h3><p className="mt-2 text-[12.5px] leading-6 text-[var(--foreground-tertiary)]">{step.text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-[1280px] px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col gap-5 rounded-[22px] border border-[var(--border-subtle)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div><h2 className="text-[20px] font-semibold tracking-[-.04em]">Need a practical partner for your next project?</h2><p className="mt-1 text-[13px] text-[var(--foreground-tertiary)]">Tell us what you want to make. We’ll help you work out the next step.</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11.5px] text-[var(--foreground-tertiary)]">{["Clear scope", "Honest pricing", "Direct support"].map((item) => <span key={item} className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-[#16805c]" />{item}</span>)}</div></div>
          <Link href="/contact" className="btn-primary shrink-0">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
