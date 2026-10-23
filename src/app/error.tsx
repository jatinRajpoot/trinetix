"use client";

import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[720px] px-6 lg:px-8 flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600">500 — Something went wrong</p>
      <h1 className="mt-3 text-[28px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">We hit a snag.</h1>
      <p className="mx-auto mt-2 max-w-[48ch] text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">Something didn’t load as expected. Try again, or head back to the homepage.</p>
      {error?.digest && <p className="mt-2 text-[11px] font-mono text-[var(--foreground-quaternary)]">Ref: {error.digest}</p>}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="btn-primary"><RefreshCw className="h-4 w-4" aria-hidden /> Try again</button>
        <Link href="/" className="btn-secondary"><Home className="h-4 w-4" aria-hidden /> Back to home</Link>
      </div>
    </div>
  );
}
