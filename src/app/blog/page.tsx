import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Simple notes on websites, apps and student work from TriNetix.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Blog</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">Notes and<br/><span className="font-normal italic text-[var(--foreground-tertiary)]">simple tips.</span></h1>
        <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Simple tips on websites, apps and student projects.</p>
        <BlogClient />
      </section>
    </div>
  );
}
