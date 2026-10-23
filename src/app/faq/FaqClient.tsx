"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-[var(--border)]">
      {faqs.map((faq, index) => <div key={faq.q} className="border-b border-[var(--border)]">
        <button type="button" onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index} className="flex w-full items-center justify-between gap-5 py-4 text-left text-[13px] font-medium tracking-[-.02em] sm:py-5"><span>{faq.q}</span><ChevronDown className={`h-4 w-4 shrink-0 text-[var(--accent)] transition-transform ${open===index?"rotate-180":""}`}/></button>
        {open===index&&<p className="max-w-[690px] pb-5 pr-8 text-[11px] leading-6 text-[var(--foreground-tertiary)]">{faq.a}</p>}
      </div>)}
    </div>
  );
}
