import type { Metadata } from "next";
import Link from "next/link";
import { Check, Globe, Smartphone, Code2, GraduationCap, Clock, Sparkles, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing — WordPress from ₹3,999, custom sites from ₹8k, Android from ₹15k, student projects from ₹3,000. Clear and honest.",
};

const pro = [
  {
    title: "WordPress Website",
    price: "₹3,999",
    note: "from",
    badge: "Popular",
    icon: Globe,
    features: ["Custom design & layout", "Fast loading & SEO ready", "Contact & social links", "Training + 30 days support"],
    cta: "Get started",
    href: "/contact?service=WordPress",
    primary: true,
  },
  {
    title: "Custom Website",
    price: "₹8,000",
    note: "from",
    icon: Code2,
    features: ["Next.js + Flask", "Database & API setup", "Login, roles, integrations", "Built exactly for your needs"],
    cta: "Work with us",
    href: "/contact?service=CustomProject",
    primary: false,
  },
  {
    title: "Android App",
    price: "₹15,000",
    note: "from",
    icon: Smartphone,
    features: ["Simple, clean app design", "Works offline & push alerts", "Play Store ready", "Support included"],
    cta: "Start app",
    href: "/contact?service=AndroidApp",
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> Pricing</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">Simple pricing.<br/>No surprises.</h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Choose what you need. Same good quality for every plan.</p>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent-muted)]" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--gold-strong)]">Our Plans</p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent-muted)]" aria-hidden />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {pro.map((p) => (
            <div key={p.title} className={`card p-6 flex flex-col ${p.primary ? "ring-1 ring-[var(--accent)] shadow-[0_12px_32px_rgba(27,67,48,0.10)] !bg-gradient-to-b from-white to-[var(--accent-soft)]" : ""}`}>
              <div className="flex items-start justify-between">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${p.primary ? "bg-[var(--accent)] text-white shadow-sm" : "border border-[var(--border-subtle)] bg-[var(--surface-subtle)] text-[var(--accent)]"}`}>
                  <p.icon className="h-4 w-4" aria-hidden />
                </span>
                {p.badge && <span className="badge-premium !text-[10px]">{p.badge}</span>}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">{p.title}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[28px] font-semibold tracking-[-0.02em] text-[var(--accent)]">{p.price}</span>
                <span className="text-[11px] font-medium tracking-[0.02em] text-[var(--foreground-quaternary)]">{p.note}</span>
              </div>
              <ul className="mt-4 space-y-2 border-t border-[var(--border-subtle)] pt-4 text-[13.5px] leading-5 text-[var(--foreground-secondary)]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden /><span>{f}</span></li>
                ))}
              </ul>
              <Link href={p.href} className={`${p.primary ? "btn-primary" : "btn-secondary"} mt-6 w-full justify-center`}>{p.cta}</Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[12.5px] leading-5 text-[var(--foreground-quaternary)]">Every plan includes full docs and easy handover. <br className="hidden sm:block" /><span className="inline-flex items-center gap-1"><Sparkles className="h-3 w-3 text-[var(--gold)]" /> Premium look, simple to manage.</span></p>
      </section>

      <section id="students" className="mt-12 scroll-mt-20">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent)] text-white shadow-sm"><GraduationCap className="h-4 w-4" aria-hidden /></span>
          <h2 className="text-[15px] font-semibold tracking-[-0.01em]">For Students — College Projects</h2>
          <span className="ml-auto badge-accent">B.Tech · BCA · MCA</span>
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="card p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Standard</p>
            <h3 className="mt-1 text-[16px] font-semibold">Project + Report</h3>
            <div className="mt-2 flex items-baseline gap-2"><span className="text-[28px] font-semibold tracking-[-0.02em] text-[var(--accent)]">₹3,000</span></div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Working code, easy to run", "Full report for your college", "Diagrams & database design", "Setup guide & viva help"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="card p-6 bg-[var(--accent-soft)] border-[var(--accent-muted)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--gold-strong)] flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Fast Track</p>
            <h3 className="mt-1 text-[16px] font-semibold">24–48h Fast Delivery</h3>
            <div className="mt-2 flex items-baseline gap-2"><span className="text-[28px] font-semibold tracking-[-0.02em] text-[var(--accent)]">+ ₹1,000</span></div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Ready in 24–48 hours", "Priority support", "Help to set up on your PC"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/contact?type=student" className="btn-primary">Get student project</Link>
        </div>
      </section>

      <div className="mt-10 rounded-2xl bg-[var(--accent)] p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none" aria-hidden />
        <div className="relative">
          <p className="text-[13px] font-medium text-white/90">Need something custom?</p>
          <p className="text-[12.5px] text-white/60">Tell us what you need — we’ll make a simple plan.</p>
        </div>
        <Link href="/contact" className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors">Contact us →</Link>
      </div>
    </div>
  );
}
