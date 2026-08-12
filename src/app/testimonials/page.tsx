import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients and students say about working with TriNetix.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]"><Leaf className="h-3 w-3" /> Testimonials</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">What people<br/><span className="font-normal italic text-[var(--foreground-tertiary)]">say about us.</span></h1>
        <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Real words from clients and students we’ve worked with.</p>
        <TestimonialsClient />
      </section>
    </div>
  );
}
