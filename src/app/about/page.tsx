import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Shield, Zap, Users, Cpu, Terminal, Layers, Sparkles, Leaf, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "TriNetix — we build simple, premium websites, Android apps and academic projects that are fast, reliable and easy to manage.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-14">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> About Us</p>
        <h1 className="mt-3 text-[34px] font-semibold leading-[0.92] tracking-[-0.035em] text-[var(--foreground)] sm:text-[44px]">
          Simple work,<br /><span className="font-normal italic text-[var(--foreground-tertiary)]">done well.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
          We build premium websites and apps that are clear, fast and easy to use. No confusing jargon, no hidden steps — just reliable work that helps you grow.
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--gold-strong)]"><Sparkles className="h-3.5 w-3.5" /> Premium quality, made simple.</p>
      </section>

      {/* Mission / Why */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card p-7">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-sm"><Zap className="h-4 w-4" aria-hidden /></span>
          <h2 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">What we do</h2>
          <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
            We make websites and apps that look good, load fast and are easy to manage — for businesses and students alike.
          </p>
        </div>
        <div className="card p-7">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]"><Shield className="h-4 w-4" aria-hidden /></span>
          <h2 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">Why work with us</h2>
          <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
            Clear pricing, quick previews, and helpful support. We keep things simple from start to finish.
          </p>
        </div>
      </section>

      {/* How we help */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em]">How we help you</h2>
          <span className="text-[12px] text-[var(--foreground-quaternary)]">Simple · Clear · Supportive</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Plan together", desc: "We listen, make a simple plan, and share a clear price and timeline.", icon: MessageCircle },
            { title: "Build with care", desc: "We build your site or app and share a live preview so you can see progress.", icon: Layers },
            { title: "Support after launch", desc: "We stay for 30 days to help, fix, and train you — no extra stress.", icon: Users },
          ].map((p) => (
            <div key={p.title} className="card p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-muted)] text-[var(--accent)]"><p.icon className="h-4 w-4" aria-hidden /></span>
              <h3 className="mt-4 text-[15px] font-semibold">{p.title}</h3>
              <p className="mt-1 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-12 rounded-2xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[16px] font-semibold tracking-[-0.015em]">What we use</h2>
          <span className="text-[12px] text-[var(--foreground-quaternary)]">Simple tools, used well.</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: "Next.js / React", s: "Fast websites", icon: Cpu },
            { n: "Python Flask", s: "Strong backend", icon: Terminal },
            { n: "WordPress", s: "Easy to manage", icon: Layers },
            { n: "Android · Flutter", s: "Mobile apps", icon: Users },
          ].map((t) => (
            <div key={t.n} className="rounded-xl border border-white bg-white p-4 shadow-sm">
              <t.icon className="h-5 w-5 text-[var(--accent)]" aria-hidden />
              <p className="mt-3 text-[13.5px] font-semibold tracking-[-0.01em]">{t.n}</p>
              <p className="text-[12px] text-[var(--foreground-quaternary)]">{t.s}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center gap-3">
        <Link href="/contact" className="btn-primary">
          Work with us <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/pricing" className="btn-secondary">See pricing</Link>
      </div>
    </div>
  );
}
