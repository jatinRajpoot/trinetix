import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Globe, Smartphone, Code2, GraduationCap, Shield, Zap, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[var(--background)]">
      {/* ── HERO — editorial two-column (avoids centered eyebrow+2CTAs trope) ── */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 pb-10 lg:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-white px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#0071e3] animate-pulse" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-secondary)]">TriNetix Laboratory — Est. 2024</span>
            </div>

            <h1 className="mt-6 text-[36px] font-semibold leading-[0.95] tracking-[-0.03em] text-[#1d1d1f] sm:text-[48px] lg:text-[56px]">
              Websites and apps
              <span className="block font-normal text-[var(--foreground-tertiary)]">that actually ship.</span>
            </h1>

            <p className="mt-5 max-w-[52ch] text-[16px] leading-7 text-[var(--foreground-tertiary)] sm:text-[17px]">
              We design and build high-performance WordPress sites, Android apps, and academic systems. No templates. No hidden fees. Direct access to founders.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/pricing" className="btn-primary">
                View pricing <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/features" className="btn-secondary">
                Explore features
              </Link>
              <span className="hidden items-center gap-2 text-[12.5px] text-[var(--foreground-quaternary)] sm:inline-flex">
                <Shield className="h-3.5 w-3.5" aria-hidden /> Enterprise-grade quality
              </span>
            </div>

            {/* Logos / trust — minimal */}
            <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Trusted for production & academic work</p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-[var(--foreground-tertiary)]">
                <span>WordPress — ₹3,999 flat</span>
                <span className="text-[var(--border)]">·</span>
                <span>Android — from ₹15k</span>
                <span className="text-[var(--border)]">·</span>
                <span>College project — ₹3,000</span>
              </div>
            </div>
          </div>

          {/* Visual — clean device stack, not a stock photo with overlay */}
          <div className="rise delay-100 lg:pl-6">
            <div className="card-elevated overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" aria-hidden />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" aria-hidden />
                <span className="ml-3 hidden text-[11px] font-medium text-[var(--foreground-quaternary)] sm:inline">trinetix.in — Preview</span>
                <span className="ml-auto badge">Live preview</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-5">
                <div className="sm:col-span-3 space-y-3">
                  <div className="h-28 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border-subtle)] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">Project timeline</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-[13px]"><span className="text-[var(--foreground-tertiary)]">Setup & deploy</span><span className="font-medium">48h</span></div>
                      <div className="h-1.5 rounded-full bg-white border border-[var(--border-subtle)] overflow-hidden"><span className="block h-full w-[72%] bg-[#1d1d1f]" /></div>
                      <div className="flex gap-2 text-[11px]"><span className="badge !py-1">Next.js</span><span className="badge !py-1">Flask API</span></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-white p-3">
                      <p className="text-[11px] text-[var(--foreground-quaternary)]">Lighthouse</p>
                      <p className="text-[22px] font-semibold tracking-[-0.02em]">98</p>
                      <p className="text-[11px] text-emerald-700">Performance</p>
                    </div>
                    <div className="rounded-xl border border-[var(--border-subtle)] bg-[#1d1d1f] p-3 text-white">
                      <p className="text-[11px] text-white/60">Build</p>
                      <p className="text-[13px] font-medium leading-tight">trinetix.in ready to ship</p>
                      <p className="mt-2 text-[11px] text-white/60">2.4s · cached</p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2 rounded-xl bg-[#1d1d1f] p-4 text-white flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-white/60">Founders</p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#1d1d1f]">JR</span>
                      <div><p className="text-[13px] font-medium leading-none">Jatin Rajput</p><p className="text-[11px] text-white/60">Architecture & APIs</p></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/20 text-[11px] font-bold">BS</span>
                      <div><p className="text-[13px] font-medium leading-none">Bharti Singh</p><p className="text-[11px] text-white/60">Product & WordPress</p></div>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-auto inline-flex items-center gap-1 text-[12px] font-medium text-white hover:text-white/80 pt-6">
                    Talk to founders <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-[var(--foreground-quaternary)]">Preview rendered from the actual Next.js + Flask stack.</p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / STATS — single quiet strip, not a 4-card glow grid ── */}
      <section className="border-y border-[var(--border-subtle)] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 text-[13px]">
          <div className="flex items-center gap-8">
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">120+</span><span className="text-[var(--foreground-tertiary)]">Projects delivered</span></div>
            <div className="hidden h-10 w-px bg-[var(--border-subtle)] sm:block" aria-hidden />
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">&lt;1s</span><span className="text-[var(--foreground-tertiary)]">Avg load time</span></div>
            <div className="hidden h-10 w-px bg-[var(--border-subtle)] sm:block" aria-hidden />
            <div><span className="block text-[22px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">4.9/5</span><span className="text-[var(--foreground-tertiary)]">Average rating</span></div>
          </div>
          <Link href="/testimonials" className="text-[13px] font-medium text-[var(--accent)] hover:underline underline-offset-4 inline-flex items-center gap-1">
            What clients say <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ── SERVICES — distinct rows, not identical 3-card icon squares ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.025em] text-[#1d1d1f] sm:text-[32px]">Build with the right scope</h2>
            <p className="mt-2 max-w-[60ch] text-[14.5px] leading-6 text-[var(--foreground-tertiary)]">Pick a fixed-price package or a custom build. No agency overhead.</p>
          </div>
          <Link href="/pricing" className="btn-secondary">See full pricing →</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Featured */}
          <div className="card lg:col-span-1 p-6 flex flex-col">
            <div className="flex items-start justify-between">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Globe className="h-4.5 w-4.5" aria-hidden /></span>
              <span className="badge-accent">Most chosen</span>
            </div>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">WordPress Website</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Custom theme, CMS training, SEO & speed included.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[28px] font-semibold tracking-[-0.02em]">₹3,999</span><span className="text-[12px] text-[var(--foreground-quaternary)]">fixed · delivered in 3–5 days</span>
            </div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Custom theme — no template lock-in", "Core Web Vitals tuned", "Contact & WhatsApp integration", "1-month support"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=WordPress" className="btn-primary mt-6 w-full justify-center">Order WordPress site</Link>
          </div>

          <div className="card p-6 flex flex-col">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1d1d1f] text-white"><Code2 className="h-4.5 w-4.5" /></span>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">Custom Web Apps</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Next.js frontend + Flask APIs + DB design.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[28px] font-semibold tracking-[-0.02em]">₹8k</span><span className="text-[12px] text-[var(--foreground-quaternary)]">starting · scoped to features</span>
            </div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Auth, roles & dashboards", "REST APIs & integrations", "Scalable & secure by default"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground-quaternary)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=CustomProject" className="btn-secondary mt-6 w-full justify-center">Scope my project</Link>
          </div>

          <div className="card p-6 flex flex-col">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-white"><Smartphone className="h-4.5 w-4.5" /></span>
            <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.015em]">Android Apps</h3>
            <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Native-feel apps, Play Store ready.</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[28px] font-semibold tracking-[-0.02em]">₹15k</span><span className="text-[12px] text-[var(--foreground-quaternary)]">starting · incl. backend sync</span>
            </div>
            <ul className="mt-4 space-y-2 text-[13.5px] text-[var(--foreground-secondary)]">
              {["Material & iOS-style UI", "Push & offline support", "Backend & deployment help"].map((f) => (
                <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground-quaternary)]" aria-hidden /><span>{f}</span></li>
              ))}
            </ul>
            <Link href="/contact?service=AndroidApp" className="btn-secondary mt-6 w-full justify-center">Order Android app</Link>
          </div>
        </div>

        {/* Student callout — distinct horizontal, not another card in grid */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-subtle)] border border-[var(--border-subtle)] sm:inline-flex"><GraduationCap className="h-5 w-5" aria-hidden /></span>
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em]">College project + full report — ₹3,000</h3>
              <p className="mt-1 max-w-[62ch] text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">Source code, IEEE report, ER diagrams, setup guide, and viva prep. Express 24–48h delivery available (+₹1,000).</p>
            </div>
          </div>
          <Link href="/pricing#students" className="btn-secondary shrink-0">Explore student pack →</Link>
        </div>
      </section>

      {/* ── PROCESS — clean stepped list, not a bento ── */}
      <section className="border-y border-[var(--border-subtle)] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--foreground-quaternary)]">How we work</p>
              <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">A calm, linear process</h2>
              <p className="mt-2 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">No weekly status theatre. You get a clear scope, a working preview, and direct founder access until launch.</p>
              <Link href="/about" className="mt-5 inline-flex text-[13.5px] font-medium text-[#1d1d1f] hover:underline underline-offset-4">Meet the founders →</Link>
            </div>
            <ol className="grid gap-0 divide-y divide-[var(--border-subtle)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden bg-[var(--surface-subtle)]">
              {[
                { n: "01", t: "Scope & proposal", d: "We map features, timeline, and fixed price in a 1-page proposal.", icon: Zap },
                { n: "02", t: "Build & preview", d: "You get a live staging link — not screenshots.", icon: Code2 },
                { n: "03", t: "Launch & handover", d: "Deploy, train your team, and hand over clean code & docs.", icon: Clock },
              ].map((s) => (
                <li key={s.n} className="flex gap-5 bg-white p-6">
                  <span className="text-[12px] font-semibold tracking-[0.06em] text-[var(--foreground-quaternary)]">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[14.5px] font-semibold">{s.t}</h3>
                    <p className="mt-1 text-[13.5px] leading-5 text-[var(--foreground-tertiary)]">{s.d}</p>
                  </div>
                  <s.icon className="hidden h-5 w-5 text-[var(--foreground-quaternary)] sm:block" aria-hidden />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA — restrained, not a dark image with gradient ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="rounded-2xl bg-[#1d1d1f] px-8 py-10 text-white sm:px-10 sm:py-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.02em] sm:text-[28px]">Ready to start?</h2>
            <p className="mt-2 max-w-[52ch] text-[14px] leading-6 text-white/70">Tell us what you need — website, app, or academic project — and get a proposal within hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1d1d1f] hover:bg-white/90 transition-colors">
              Get free consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/10 transition-colors">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
