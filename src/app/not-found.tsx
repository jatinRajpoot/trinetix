import Link from "next/link";
import { Home, ArrowRight, Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="state-page flex flex-col items-center justify-center text-center">
      <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> 404 — Not found</p>
      <h1 className="mt-3 text-[56px] font-semibold tracking-[-0.04em] leading-none text-[var(--foreground)]">404</h1>
      <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.015em]">This page doesn’t exist.</h2>
      <p className="mx-auto mt-2 max-w-[44ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">The link may have moved. Return home.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary"><Home className="h-4 w-4" aria-hidden /> Back to home</Link>
        <Link href="/pricing" className="btn-secondary">See pricing</Link>
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 text-left">
        {[
          { t: "Pricing", d: "Simple plans", href: "/pricing" },
          { t: "Our clients", d: "Their live websites", href: "/#clients" },
          { t: "Contact Us", d: "Work with us", href: "/contact" },
        ].map((c) => (
          <Link key={c.href} href={c.href} className="card p-4 hover:border-[var(--accent-muted)] transition-colors">
            <p className="text-[13px] font-semibold flex items-center gap-1">{c.t} <ArrowRight className="h-3 w-3 text-[var(--accent)]/60" aria-hidden /></p>
            <p className="text-[12px] text-[var(--foreground-tertiary)]">{c.d}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
