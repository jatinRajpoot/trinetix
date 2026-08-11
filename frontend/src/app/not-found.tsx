import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-6 lg:px-8 flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">404 — Not found</p>
      <h1 className="mt-3 text-[56px] font-semibold tracking-[-0.04em] leading-none text-[#1d1d1f]">404</h1>
      <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.015em]">This page doesn’t exist.</h2>
      <p className="mx-auto mt-2 max-w-[44ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">The link may have moved. Try a search or head back to safety.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary"><Home className="h-4 w-4" aria-hidden /> Go home</Link>
        <Link href="/pricing" className="btn-secondary">Browse pricing</Link>
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 text-left">
        {[
          { t: "Pricing", d: "Fixed & custom packages", href: "/pricing" },
          { t: "Documentation", d: "Setup & deployment", href: "/docs" },
          { t: "Contact", d: "Talk to founders", href: "/contact" },
        ].map((c) => (
          <Link key={c.href} href={c.href} className="card p-4 hover:border-[var(--border)] transition-colors">
            <p className="text-[13px] font-semibold flex items-center gap-1">{c.t} <ArrowRight className="h-3 w-3 text-[var(--foreground-quaternary)]" aria-hidden /></p>
            <p className="text-[12px] text-[var(--foreground-tertiary)]">{c.d}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
