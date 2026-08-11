import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on performance, WordPress, mobile, and academic work from TriNetix founders.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Insights</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Notes on building for the web.</h1>
        <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Practical writing on performance, WordPress, mobile, and academic work.</p>
        <BlogClient />
      </section>
    </div>
  );
}
