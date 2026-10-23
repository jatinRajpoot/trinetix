import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Careers", description: "Learn how TriNetix works and get in touch about future freelance collaborations." };

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 lg:px-8 pb-16">
      <section className="pt-10 sm:pt-12">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> Careers</p>
        <h1 className="mt-3 text-[34px] font-semibold leading-[1.04] tracking-[-.055em] text-[var(--foreground)] sm:text-[48px]">Work with a small, focused digital team.</h1>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
          We aren’t hiring for a full-time position right now, but we’re open to hearing from skilled independent designers and developers.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-7">
        <h2 className="text-[14px] font-semibold flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-[var(--gold)]" /> What matters to us</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
          <li>One clear owner for each project.</li>
          <li>Clear price, clear timeline, live preview.</li>
          <li>Clean work and 30 days of support after launch.</li>
        </ul>
        <div className="mt-6 rounded-xl bg-[var(--accent-soft)] border border-[var(--accent-muted)] p-4 text-[13px] leading-6 text-[var(--foreground-secondary)]">
          <p className="font-medium text-[var(--accent)]">Want to work with us in future?</p>
          <p className="text-[var(--foreground-tertiary)]">Send your portfolio to <a href="mailto:Support@trinetix.in" className="font-medium underline underline-offset-4 text-[var(--accent)]">Support@trinetix.in</a> with subject “Collaborator”.</p>
        </div>
      </section>

      <div className="mt-6 rounded-2xl bg-[var(--accent)] p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" aria-hidden />
        <div className="relative"><h3 className="text-[14px] font-semibold">No open positions right now</h3><p className="text-[13px] text-white/70">We’ll post here when that changes.</p></div>
        <Link href="/contact" className="relative inline-flex rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)]">Contact us</Link>
      </div>
    </div>
  );
}
