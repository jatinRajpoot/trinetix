import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Careers", description: "Join TriNetix Laboratory — small team, high craft. Future openings." };

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-[800px] px-6 lg:px-8 pb-16">
      <section className="pt-10 sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Careers</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">We’re small by design.</h1>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">
          TriNetix is currently a two-founder laboratory. We aren’t actively hiring — but we keep a bench of freelancers for focused collaborations.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--border-subtle)] bg-white p-6 sm:p-7">
        <h2 className="text-[14px] font-semibold">How we work with collaborators</h2>
        <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">
          <li>Single-threaded ownership — one project, one owner.</li>
          <li>Fixed scope, fixed price, and a live preview — no timesheets.</li>
          <li>Clean commits, documentation, and a 30-day support handover.</li>
        </ul>
        <div className="mt-6 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border-subtle)] p-4 text-[13px] leading-6 text-[var(--foreground-secondary)]">
          <p className="font-medium">Open to future roles?</p>
          <p className="text-[var(--foreground-tertiary)]">Send a portfolio and a note on what you shipped recently to <a href="mailto:Support@trinetix.in" className="font-medium underline underline-offset-4">Support@trinetix.in</a> with subject “Collaborator”.</p>
        </div>
      </section>

      <div className="mt-6 rounded-2xl bg-[#1d1d1f] p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div><h3 className="text-[14px] font-semibold">No open positions right now</h3><p className="text-[13px] text-white/70">We’ll post here when that changes.</p></div>
        <Link href="/contact" className="inline-flex rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1d1d1f] hover:bg-white/90">Get in touch</Link>
      </div>
    </div>
  );
}
