import type { Metadata } from "next";
import PricingPage from "../pricing/page";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "TriNetix services and transparent pricing — WordPress, custom apps, Android, and academic projects.",
  alternates: { canonical: "/pricing" },
};

export default function ServicesPage() {
  return <PricingPage />;
}
