import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Shield, Zap, Users, Cpu, Terminal, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About TriNetix",
  description: "TriNetix is a web development laboratory founded by Jatin Rajput and Bharti Singh — building WordPress sites, Android apps, and academic systems with enterprise quality.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">About TriNetix</p>
        <h1 className="mt-3 text-[34px] font-semibold leading-[0.95] tracking-[-0.03em] text-[#1d1d1f] sm:text-[44px]">
          A small laboratory with<br />a high bar for quality.
        </h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
          We are a two-founder team that treats every ₹3,999 site with the same rigor as a custom enterprise app — clean code, fast loads, and a calm handover.
        </p>
      </section>

      {/* Mission / Why — two minimal cards, not teal glass */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card p-7">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1d1d1f] text-white"><Zap className="h-4 w-4" aria-hidden /></span>
          <h2 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">Our mission</h2>
          <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
            Make production-grade web development accessible — from founders who need a fast WordPress launch to students who need a complete report that passes review.
          </p>
        </div>
        <div className="card p-7">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Shield className="h-4 w-4" aria-hidden /></span>
          <h2 className="mt-4 text-[16px] font-semibold tracking-[-0.015em]">Why we stand out</h2>
          <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
            No shortcuts. Every deliverable is audited for performance, security, and maintainability — regardless of budget tier.
          </p>
        </div>
      </section>

      {/* Founders — quiet, editorial */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
          <h2 className="text-[18px] font-semibold tracking-[-0.02em]">Founders</h2>
          <span className="text-[12px] text-[var(--foreground-quaternary)]">Direct access · No account managers</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            { initials: "JR", name: "Jatin Rajput", role: "Co-founder · Architecture & Backend", bio: "Leads system design, Flask APIs, Next.js integration, and security. Ensures every project holds up under load.", tags: ["Python · Flask", "Next.js", "PostgreSQL"] },
            { initials: "BS", name: "Bharti Singh", role: "Co-founder · Product & WordPress", bio: "Owns product design, WordPress customization, and academic delivery. Every interface ships polished.", tags: ["WordPress", "UI/UX", "Android UI"] },
          ].map((p) => (
            <div key={p.name} className="card p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1d1d1f] text-[13px] font-bold text-white">{p.initials}</span>
                <div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.01em]">{p.name}</h3>
                  <p className="text-[12px] text-[var(--foreground-quaternary)]">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{p.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="badge !text-[11px]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-12 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[16px] font-semibold tracking-[-0.015em]">Technologies we work with</h2>
          <span className="text-[12px] text-[var(--foreground-quaternary)]">We pick a focused stack and go deep.</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { n: "Next.js / React", s: "Frontend", icon: Cpu },
            { n: "Python Flask", s: "APIs & services", icon: Terminal },
            { n: "WordPress", s: "CMS & commerce", icon: Layers },
            { n: "Android · Flutter", s: "Mobile", icon: Users },
          ].map((t) => (
            <div key={t.n} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-4">
              <t.icon className="h-5 w-5 text-[var(--foreground-tertiary)]" aria-hidden />
              <p className="mt-3 text-[13.5px] font-semibold tracking-[-0.01em]">{t.n}</p>
              <p className="text-[12px] text-[var(--foreground-quaternary)]">{t.s}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center">
        <Link href="/contact" className="btn-primary">
          Work with founders <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
