"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--border-subtle)] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-medium text-[var(--foreground)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            <span>{f.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-[var(--accent)]/50 transition-transform ${open === i ? "rotate-180" : ""}`} aria-hidden />
          </button>
          {open === i && <div className="px-5 pb-4 text-[13.5px] leading-6 text-[var(--foreground-tertiary)]">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}
