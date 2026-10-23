import type { Metadata } from "next";
import { ArrowDown, CheckCircle2, MessageCircle } from "lucide-react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Get a Project Quote",
  description: "Tell TriNetix what you’re planning. Get clear advice, pricing and a practical next step for your website, app or student project.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)] pb-16 sm:pb-20">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-12 sm:px-7 sm:pb-12 sm:pt-16 lg:px-10">
          <p className="section-kicker"><MessageCircle className="h-4 w-4" /> Start a conversation</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h1 className="max-w-[760px] text-[40px] font-semibold leading-[1.04] tracking-[-.06em] sm:text-[54px]">Tell us what you’re looking to build.</h1>
            <div className="max-w-[500px]">
              <p className="text-[14px] leading-7 text-[var(--foreground-tertiary)] sm:text-[15px]">A few details are enough to get started. We’ll ask the right questions, suggest a clear next step and give you a price before any work begins.</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11.5px] text-[var(--foreground-tertiary)]"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#16805c]" /> No pressure to proceed</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#16805c]" /> Clear pricing</span></div>
            </div>
          </div>
          <a href="#project-form" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--accent)] hover:underline">Share your project details <ArrowDown className="h-3.5 w-3.5" /></a>
        </div>
      </section>
      <div id="project-form" className="mx-auto max-w-[1280px] scroll-mt-24 px-5 sm:px-7 lg:px-10">
        <ContactClient />
      </div>
    </div>
  );
}
