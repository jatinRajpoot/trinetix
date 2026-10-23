import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About TriNetix",
  description: "Meet TriNetix: a digital studio helping businesses turn their ideas into clear, useful websites and apps.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-12 lg:py-20">
          <div><p className="section-kicker !text-[#ef8b6e]">A little about us</p><h1 className="mt-5 max-w-[780px] text-[44px] font-medium leading-[.98] tracking-[-.075em] sm:text-[62px]">We make digital work feel more human.</h1><p className="mt-5 max-w-[540px] text-[13px] leading-7 text-white/65 sm:text-[15px]">TriNetix is a web studio for people who need a thoughtful website or app—and want the process to make sense. We listen first, keep decisions clear and build around real needs.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-4 border-b border-[#ef8b6e] pb-1.5 text-[10px] font-semibold uppercase tracking-[.1em] text-white">Talk to our team <ArrowUpRight className="h-3.5 w-3.5 text-[#ef8b6e]"/></Link></div>
          <div className="relative aspect-[1.2/1] overflow-hidden bg-[#5a5a52]"><Image src="/images/digital-workspace.jpg" alt="A quiet workspace with a digital product on screen" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/><p className="absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[.13em] text-white/80">Good work starts with a good question.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><p className="section-kicker">What we believe</p><h2 className="mt-4 max-w-[380px] text-[34px] font-medium leading-[1.03] tracking-[-.065em] sm:text-[44px]">Technology is only useful when people can use it.</h2></div><div><p className="max-w-[720px] text-[15px] leading-7 text-[var(--foreground-secondary)]">A beautiful page is a good start. But the real work is understanding why it exists: what a customer needs to know, what a team needs to do, and what will make the next step feel obvious.</p><div className="mt-7 border-t border-[var(--border)]">{[{n:"01",t:"Start with people",d:"We ask who the work is for and what they’re trying to accomplish."},{n:"02",t:"Make the complicated clear",d:"We turn a rough idea into a manageable plan with plain-language decisions."},{n:"03",t:"Leave you in control",d:"We build for day-to-day use, explain the handover and stay available for support."}].map((item)=><div key={item.n} className="grid grid-cols-[42px_1fr] gap-3 border-b border-[var(--border)] py-4 sm:grid-cols-[58px_1fr] sm:gap-5"><span className="pt-1 text-[9px] font-semibold tracking-[.1em] text-[var(--accent)]">{item.n}</span><div><h3 className="text-[14px] font-semibold">{item.t}</h3><p className="mt-1 text-[11px] leading-5 text-[var(--foreground-tertiary)]">{item.d}</p></div></div>)}</div></div></div>
      </section>

      <section className="border-y border-[#d5d0c6] bg-[#ebe7de]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><p className="section-kicker">The way we work</p><h2 className="mt-4 max-w-[410px] text-[34px] font-medium leading-[1.03] tracking-[-.065em] sm:text-[44px]">No black box. No big reveal.</h2><p className="mt-3 max-w-[370px] text-[12px] leading-6 text-[var(--foreground-tertiary)]">You see the plan, understand the trade-offs and know who to ask. The process should be as considered as the finished website.</p></div><div className="grid gap-0 border-t border-[#cfc9bd] sm:grid-cols-2">{[{n:"01",t:"A useful brief",d:"We get clear on the goal, audience and constraints."},{n:"02",t:"A real plan",d:"You get scope, price and timing before we build."},{n:"03",t:"Progress you can see",d:"We share the work early, so feedback is useful."},{n:"04",t:"A proper handover",d:"You get time to learn the controls and ask questions."}].map((item,i)=><div key={item.n} className={`grid grid-cols-[32px_1fr] gap-3 border-b border-[#cfc9bd] py-5 ${i%2===0?"sm:pr-6 sm:border-r sm:border-[#cfc9bd]":"sm:pl-6"}`}><span className="text-[9px] font-semibold text-[var(--accent)]">{item.n}</span><div><h3 className="text-[13px] font-semibold">{item.t}</h3><p className="mt-1 text-[11px] leading-5 text-[var(--foreground-tertiary)]">{item.d}</p></div></div>)}</div></div></div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="flex flex-col gap-5 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="section-kicker">Have something in mind?</p><h2 className="mt-2 text-[27px] font-medium tracking-[-.055em] sm:text-[34px]">Let’s work out the right next step.</h2><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[.05em] text-[var(--foreground-tertiary)]">{["Clear scope", "Honest pricing", "Direct support"].map((item)=><span key={item} className="inline-flex items-center gap-1.5"><Check className="h-3 w-3 text-[var(--accent)]"/>{item}</span>)}</div></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="btn-primary">Start a conversation <ArrowRight className="h-4 w-4"/></Link><Link href="/previous-work" className="btn-secondary">See recent work <ArrowUpRight className="h-4 w-4"/></Link></div></div></section>
    </div>
  );
}
