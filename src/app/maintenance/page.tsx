import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Leaf } from "lucide-react";

export const metadata = { title: "Maintenance", robots: { index: false, follow: false } } as Metadata;

export default function MaintenancePage() {
  return (
    <div className="state-page flex flex-col items-center justify-center text-center">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent-muted)] bg-[var(--accent-soft)]"><Wrench className="h-5 w-5 text-[var(--accent)]" aria-hidden /></span>
      <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> Quick update</p>
      <h1 className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">We’ll be back soon.</h1>
      <p className="mx-auto mt-2 max-w-[48ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">We’re doing a quick update. Need help now? Just contact us.</p>
      <div className="mt-6 flex gap-3">
        <a href="mailto:Support@trinetix.in" className="btn-primary">Email us</a>
        <Link href="/" className="btn-secondary">Back to home</Link>
      </div>
    </div>
  );
}
