import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact TriNetix — WordPress, Android & student projects. We reply within 2–4 hours.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pb-16">
      <section className="mx-auto max-w-[720px] pt-10 text-center sm:pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Contact Us</p>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.035em] leading-[0.92] text-[var(--foreground)] sm:text-[44px]">Let’s make<br/><span className="font-normal italic text-[var(--foreground-tertiary)]">something great.</span></h1>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-[var(--foreground-tertiary)]">Have a question or want to start a project? Send a message — we reply in 2–4 hours.</p>
      </section>
      <ContactClient />
    </div>
  );
}
