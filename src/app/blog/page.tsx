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
        <p className="section-kicker justify-center">Ideas & advice</p>
        <h1 className="mt-3 text-[36px] font-semibold leading-[1.04] tracking-[-.055em] text-[var(--foreground)] sm:text-[48px]">Ideas for making<br/><span className="text-[var(--accent)]">digital work better.</span></h1>
        <p className="mx-auto mt-4 max-w-[56ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Practical notes on business websites, web apps and student projects—written in plain language.</p>
        <BlogClient />
      </section>
    </div>
  );
}
