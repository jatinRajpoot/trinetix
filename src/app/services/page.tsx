import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/features",
  "Website, Web App & Android Development Services",
  "Explore TriNetix business websites, custom web apps, Android apps and student project support.",
);

export default function ServicesPage() {
  redirect("/features");
}
