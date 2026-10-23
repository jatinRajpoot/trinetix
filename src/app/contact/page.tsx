import type { Metadata } from "next";
import { ArrowDown, MessageCircle } from "lucide-react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell TriNetix what you’re planning. Get clear advice, pricing and a practical next step for your website or app.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="bg-[#20241f] text-[#f4f1ea]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <p className="section-kicker !text-[#ef8b6e]"><MessageCircle className="h-3.5 w-3.5"/>Let’s talk about it</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end"><h1 className="max-w-[800px] text-[45px] font-medium leading-[.98] tracking-[-.075em] sm:text-[62px]">Start with the thing you’re trying to fix.</h1><p className="max-w-[480px] text-[13px] leading-7 text-white/65 sm:text-[15px]">A few lines about your project are enough. We’ll ask the useful questions and help you figure out the next step—no polished brief required.</p></div>
          <a href="#project-brief" className="mt-6 inline-flex items-center gap-3 border-b border-[#ef8b6e] pb-1 text-[9px] font-semibold uppercase tracking-[.12em] text-white">Share a short brief <ArrowDown className="h-3 w-3 text-[#ef8b6e]"/></a>
        </div>
      </section>
      <div id="project-brief" className="scroll-mt-24"><ContactClient/></div>
    </div>
  );
}
