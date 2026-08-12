import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Zap, Code2, Smartphone, Globe, GraduationCap, Check, ArrowRight, Leaf, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "What We Do",
  description: "What we do — fast sites, safe apps, WordPress, Android and student projects. Simple, clear and reliable.",
};

const features = [
  { icon: Zap, title: "Fast and light", desc: "Clean code, fast loading, and no lag. Your site feels quick on any device." },
  { icon: Shield, title: "Safe and reliable", desc: "Secure login, good data care, and regular checks for safety." },
  { icon: Globe, title: "WordPress made simple", desc: "Custom design, easy to edit, and no heavy plugins." },
  { icon: Smartphone, title: "Android apps", desc: "Simple apps that work offline and are ready for Play Store." },
  { icon: GraduationCap, title: "Help for students", desc: "Working code, full report, diagrams and viva help — ready to submit." },
  { icon: Code2, title: "Easy handover", desc: "Clear docs and 30 days of help. You own everything." },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> What We Do</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">All you need,<br/><span className="font-normal italic text-[var(--foreground-tertiary)]">made simple.</span></h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">We focus on a few things and do them well — so you get quality that lasts.</p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)] text-[var(--accent)]">
              <f.icon className="h-4 w-4" aria-hidden />
            </span>
            <h2 className="mt-4 text-[14.5px] font-semibold tracking-[-0.015em]">{f.title}</h2>
            <p className="mt-1.5 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="card p-6 sm:p-7">
          <h3 className="text-[15px] font-semibold flex items-center gap-2"><Sparkles className="h-4 w-4 text-[var(--gold)]" /> How we compare</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-[var(--border-subtle)] text-[13px]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-[var(--accent-soft)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--foreground-quaternary)]">
              <span>Feature</span><span>Us</span><span>Others</span>
            </div>
            {[
              ["Direct support", "Included", "Manager"],
              ["WordPress site", "from ₹3,999", "₹15k+"],
              ["Preview time", "48 hours", "1–2 weeks"],
              ["You own the code", "Yes, 100%", "No"],
            ].map((row) => (
              <div key={row[0]} className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-[var(--border-subtle)] px-4 py-3">
                <span className="font-medium text-[var(--foreground-secondary)]">{row[0]}</span>
                <span className="inline-flex items-center gap-1 text-[var(--accent)] font-medium"><Check className="h-3.5 w-3.5" aria-hidden /> {row[1]}</span>
                <span className="text-[var(--foreground-tertiary)]">{row[2]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Tools We Use</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Next.js 15", "React 19", "Tailwind 4", "Flask", "PostgreSQL", "WordPress", "Kotlin / Flutter"].map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[var(--accent)] p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" aria-hidden />
            <div className="relative">
              <h3 className="text-[15px] font-semibold">Want to see it live?</h3>
              <p className="mt-1 text-[13px] leading-6 text-white/70">Get a preview link in 48 hours — not just a talk.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)]">
                Contact us <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
