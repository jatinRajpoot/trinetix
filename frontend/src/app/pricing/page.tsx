import type { Metadata } from "next";
import Link from "next/link";
import { Check, Globe, Smartphone, Code2, GraduationCap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for WordPress sites (₹3,999), custom web apps (from ₹8k), Android apps (from ₹15k), and college projects (₹3,000). No hidden fees.",
};

const pro = [
  {
    title: "WordPress Website",
    price: "₹3,999",
    note: "fixed price",
    badge: "Most chosen",
    icon: Globe,
    features: ["Custom theme & responsive layout", "SEO & <1s load", "Contact & social integration", "Admin training & 1-month support"],
    cta: "Order WordPress site",
    href: "/contact?service=WordPress",
    primary: true,
  },
  {
    title: "Custom Web App",
    price: "₹8,000",
    note: "starting",
    icon: Code2,
    features: ["Next.js + Flask architecture", "Database & API design", "Auth, roles, integrations", "Scoped to your requirements"],
    cta: "Scope project",
    href: "/contact?service=CustomProject",
    primary: false,
  },
  {
    title: "Android App",
    price: "₹15,000",
    note: "starting",
    icon: Smartphone,
    features: ["Native-feel UI", "Backend sync & push", "Play Store deployment", "Maintenance included"],
    cta: "Order Android app",
    href: "/contact?service=AndroidApp",
    primary: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Pricing</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Clear pricing. No hidden costs.</h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Choose a fixed package or a custom scope. Every tier gets the same build quality.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Professional</h2>
        <div className="mt-3 grid gap-6 lg:grid-cols-3">
          {pro.map((p) => (
            <div key={p.title} className={`card p-6 flex flex-col ${p.primary ? "ring-1 ring-[#1d1d1f] shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : ""}`}>
              <div className="flex items-start justify-between">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${p.primary ? "bg-[#1d1d1f] text-white" : "border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"}`}>
                  <p.icon className="h-4 w-4" aria-hidden />
                </span>
                {p.badge && <span className="rounded-full bg-[#1d1d1f] px-2.5 py-1 text-[11px] font-semibold text-white">{p.badge}</span>}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">{p.title}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[28px] font-semibold tracking-[-0.02em]">{p.price}</span>
                <span className="text-[12px] text-[var(--foreground-quaternary)]">{p.note}</span>
              </div>
              <ul className="mt-4 space-y-2 border-t border-[var(--border-subtle)] pt-4 text-[13.5px] leading-5 text-[var(--foreground-secondary)]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden /><span>{f}</span></li>
                ))}
              </ul>
              <Link href={p.href} className={`${p.primary ? "btn-primary" : "btn-secondary"} mt-6 w-full justify-center`}>{p.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="students" className="mt-12 scroll-mt-20">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-subtle)] border border-[var(--border-subtle)]"><GraduationCap className="h-4 w-4" aria-hidden /></span>
          <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Academic — College Projects</h2>
          <span className="ml-auto badge">For B.Tech / BCA / MCA</span>
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="card p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Standard</p>
            <h3 className="mt-1 text-[16px] font-semibold">Project + Detailed Report</h3>
            <div className="mt-2 flex items-baseline gap-2"><span className="text-[28px] font-semibold tracking-[-0.02em]">₹3,000</span><span className="text-[12px] text-[var(--foreground-quaternary)]">all inclusive</span></div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Executable source code", "IEEE / university report", "DFDs, ERDs, schema", "Setup guide & viva prep"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="card p-6 bg-[var(--surface-subtle)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)] flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Express add-on</p>
            <h3 className="mt-1 text-[16px] font-semibold">24–48h delivery</h3>
            <div className="mt-2 flex items-baseline gap-2"><span className="text-[28px] font-semibold tracking-[-0.02em]">+ ₹1,000</span><span className="text-[12px] text-[var(--foreground-quaternary)]">priority</span></div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Guaranteed 24–48h turnaround", "Priority developer", "Remote setup via AnyDesk"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground-quaternary)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/contact?type=student" className="btn-primary">Order college project</Link>
        </div>
      </section>

      <p className="mt-8 text-center text-[12px] text-[var(--foreground-quaternary)]">Need something custom? <Link href="/contact" className="font-medium text-[var(--foreground-secondary)] underline underline-offset-4 hover:text-[var(--foreground)]">Tell us your scope</Link></p>
    </div>
  );
}
