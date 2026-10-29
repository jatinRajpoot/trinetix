import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Ideas & advice",
  description: "Practical notes on websites, web apps and student projects from the TriNetix team.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--background)]">
      <PageHeading label="The studio journal" title={<>A little thought.<br/>A better next step.</>} description="Ideas on making business websites clearer, choosing the right tools, and planning student projects. From the people who build them."/>
      <section className="site-container"><BlogClient/></section>
    </div>
  );
}
