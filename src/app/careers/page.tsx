import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Find out about future collaboration opportunities with TriNetix.",
};

export default function CareersPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"><p className="section-kicker !text-[#ef8b6e]">Careers & collaboration</p><h1 className="mt-5 max-w-[790px] text-[44px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">Good work happens between good people.</h1><p className="mt-4 max-w-[570px] text-[13px] leading-7 text-white/65 sm:text-[14px]">We’re not hiring for a full-time role right now. We do welcome conversations with independent designers and developers whose work is thoughtful and dependable.</p></div></section>
      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:px-8 sm:py-16 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-12 lg:py-20"><div><p className="section-kicker">Working together</p><h2 className="mt-3 max-w-[370px] text-[30px] font-medium leading-[1.03] tracking-[-.06em] sm:text-[39px]">Small, focused collaborations.</h2></div><div><p className="max-w-[690px] text-[14px] leading-7 text-[var(--foreground-secondary)]">When a project needs a specialist, we work with independent collaborators who communicate clearly, care about the details and follow through on their part of the work.</p><div className="mt-6 border-t border-[var(--border)]">{[{n:"01",t:"Show us what you make",d:"Send a short portfolio or a link to a project you’re proud of."},{n:"02",t:"Tell us how you work",d:"Share your focus, availability and the kinds of projects you enjoy."},{n:"03",t:"We’ll be in touch when there’s a fit",d:"There’s no open role at the moment, but we keep good introductions in mind."}].map((item)=><div key={item.n} className="grid grid-cols-[42px_1fr] gap-3 border-b border-[var(--border)] py-4"><span className="text-[9px] font-semibold text-[var(--accent)]">{item.n}</span><div><h3 className="text-[13px] font-semibold">{item.t}</h3><p className="mt-1 text-[11px] leading-5 text-[var(--foreground-tertiary)]">{item.d}</p></div></div>)}</div><a href="mailto:Support@trinetix.in?subject=TriNetix%20collaboration" className="group mt-6 inline-flex items-center gap-3 bg-[var(--foreground)] px-4 py-3 text-[9px] font-semibold uppercase tracking-[.09em] text-white hover:bg-[var(--accent)]"><Mail className="h-3.5 w-3.5"/>Send your introduction <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a></div></section>
      <section className="mx-5 mb-14 bg-[#e9e4da] sm:mx-8 lg:mx-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"><p className="max-w-[560px] text-[13px] font-medium">Looking for a web partner rather than a role? We’d be glad to hear about your project.</p><Link href="/contact" className="group inline-flex w-fit items-center gap-3 border-b border-[var(--accent)] pb-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[var(--accent)]">Start a project <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"/></Link></div></section>
    </div>
  );
}
