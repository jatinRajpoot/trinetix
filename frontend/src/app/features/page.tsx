import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Zap, Code2, Smartphone, Globe, GraduationCap, Check, ArrowRight, Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "What TriNetix delivers — performance, SEO, security, and a calm handover. Built with Next.js, Flask, and WordPress.",
};

const features = [
  { icon: Zap, title: "Performance by default", desc: "Lighthouse 95+ — optimized images, fonts with display=swap, and no layout shift." },
  { icon: Shield, title: "Security & stability", desc: "Auth, roles, and hardened APIs. Code reviewed by founders, not juniors." },
  { icon: Globe, title: "WordPress that scales", desc: "Custom themes, CPTs, and caching — without plugin bloat." },
  { icon: Smartphone, title: "Android that feels native", desc: "Material 3, offline support, push, and Play Store packaging." },
  { icon: GraduationCap, title: "Academic completeness", desc: "Runnable code, IEEE report, diagrams, and viva prep — defensible in review." },
  { icon: Code2, title: "Clean handover", desc: "Docs, setup scripts, and a 30-day support window. You own the code." },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Features</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Everything you need to ship.</h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">A focused set of capabilities — no feature theatre. We do fewer things with higher quality.</p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]">
              <f.icon className="h-4.5 w-4.5 text-[var(--foreground-secondary)]" aria-hidden />
            </span>
            <h2 className="mt-4 text-[14.5px] font-semibold tracking-[-0.015em]">{f.title}</h2>
            <p className="mt-1.5 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="card p-6 sm:p-7">
          <h3 className="text-[15px] font-semibold">How we compare</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border-subtle)] text-[13px]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-[var(--surface-subtle)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-quaternary)]">
              <span>Capability</span><span>TriNetix</span><span>Typical agency</span>
            </div>
            {[
              ["Direct founder access", "Included", "Account manager"],
              ["Fixed-price WordPress", "₹3,999", "₹15k+ / custom quote"],
              ["Time to preview", "48 hours", "1–2 weeks"],
              ["Code ownership", "100% yours", "Licensed / retained"],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-[var(--border-subtle)] px-4 py-3">
                <span className="font-medium text-[var(--foreground-secondary)]">{row[0]}</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium"><Check className="h-3.5 w-3.5" aria-hidden /> {row[1]}</span>
                <span className="text-[var(--foreground-tertiary)]">{row[2]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "Tailwind 4", "Flask", "PostgreSQL", "WordPress", "Kotlin / Flutter"].map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#1d1d1f] p-6 text-white">
            <h3 className="text-[15px] font-semibold">Ready to see it live?</h3>
            <p className="mt-1 text-[13px] leading-6 text-white/70">Get a staging link in 48 hours, not a slide deck.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1d1d1f] hover:bg-white/90">
              Talk to founders <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
