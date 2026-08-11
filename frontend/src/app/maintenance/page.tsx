import type { Metadata } from "next";
import Link from "next/link";
import { Wrench } from "lucide-react";

export const metadata = { title: "Maintenance", robots: { index: false, follow: false } } as Metadata;

export default function MaintenancePage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 lg:px-8 flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)]"><Wrench className="h-5 w-5 text-[var(--foreground-tertiary)]" aria-hidden /></span>
      <h1 className="mt-4 text-[28px] font-semibold tracking-[-0.02em] text-[#1d1d1f]">We’re doing a quick tune-up.</h1>
      <p className="mx-auto mt-2 max-w-[48ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">TriNetix will be back shortly. If you need urgent help, email Support@trinetix.in.</p>
      <div className="mt-6 flex gap-3">
        <a href="mailto:Support@trinetix.in" className="btn-primary">Email support</a>
        <Link href="/" className="btn-secondary">Back to home</Link>
      </div>
    </div>
  );
}
