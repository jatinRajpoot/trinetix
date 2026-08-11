import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TriNetix founders directly — WordPress, Android, academic projects. Response within 2–4 hours.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--foreground-quaternary)]">Contact</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.03em] leading-[0.95] text-[#1d1d1f] sm:text-[44px]">Let’s build something precise.</h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Direct line to founders. We reply within 2–4 hours.</p>
      </section>
      <ContactClient />
    </div>
  );
}
