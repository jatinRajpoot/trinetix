import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Careers", description: "Find out about future collaboration opportunities with TriNetix." };

export default function CareersPage() {
  return <div><PageHeading label="Careers & collaboration" title={<>Good people.<br/>Better together.</>} description="We’re not hiring for a full-time role right now. We do welcome conversations with independent designers and developers who care about what they make."/><section className="site-container careers-content"><h2>A small team.<br/>Room for<br/>new perspectives.</h2><div><p>When a project needs a specialist, we work with independent collaborators who communicate clearly, care about the details, and follow through.</p><p className="mt-5">Send a short portfolio or a link to a project you’re proud of. Tell us what you focus on, when you’re available, and the kinds of projects you enjoy. We keep good introductions in mind for the right project.</p><a href="mailto:Support@trinetix.in?subject=TriNetix%20collaboration" className="text-link">Send your introduction <ArrowUpRight size={18}/></a></div></section></div>;
}
