import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client feedback",
  description: "Words from clients and students who have worked with TriNetix.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]"><div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"><p className="section-kicker !text-[#ef8b6e]">Client feedback · In their words</p><h1 className="mt-5 max-w-[780px] text-[44px] font-medium leading-[.97] tracking-[-.075em] sm:text-[62px]">Good work should feel good to work on.</h1><p className="mt-4 max-w-[560px] text-[13px] leading-7 text-white/65 sm:text-[14px]">A few notes from people who have worked with us on websites, apps and student projects.</p></div></section>
      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-12"><TestimonialsClient/></section>
    </div>
  );
}
