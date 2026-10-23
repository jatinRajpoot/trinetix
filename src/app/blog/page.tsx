import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Ideas & advice",
  description: "Practical notes on websites, web apps and student projects from the TriNetix team.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.62fr] lg:items-end lg:px-12 lg:py-20">
          <div><p className="section-kicker !text-[#ef8b6e]">The journal · ideas in plain English</p><h1 className="mt-5 max-w-[760px] text-[44px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">A few useful thoughts for the next thing you build.</h1></div>
          <p className="max-w-[440px] text-[13px] leading-7 text-white/65 sm:text-[14px]">Advice on making business websites clearer, choosing the right tools and planning student projects without the jargon.</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><BlogClient/></section>
    </div>
  );
}
