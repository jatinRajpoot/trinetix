import type { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Documentation", description: "Practical notes on setup, content updates and project handover from TriNetix." };

const notes = [
  { id: "getting-started", title: "Your project, properly handed over.", body: "Every delivery includes a guide to your project: the files, accounts, features, and details you need to take ownership. We walk through it together so you know where everything lives." },
  { id: "local-setup", title: "Get up and running.", body: "Your project README explains the requirements, installation steps, and local development commands for your website or app. Any required environment settings are documented as part of the handover." },
  { id: "deployment", title: "Ready for the real world.", body: "We explain where your project is hosted, how updates are published, and which domains or third-party subscriptions need renewing. Deployment instructions are tailored to your project." },
  { id: "wordpress-guide", title: "Keep your website fresh.", body: "For WordPress projects, we cover editing pages, adding content, updating menus, and managing access. Your team gets a walkthrough of the parts they’ll use day to day." },
  { id: "academic-report", title: "Understand what you’ve built.", body: "Student project support includes runnable source code, setup instructions, a structured report, and system diagrams. We help you understand the decisions and explain how the pieces work together." },
];

export default function DocsPage() {
  return <div><PageHeading label="The handover matters" title={<>Built with care.<br/>Yours to take forward.</>} description="A great project shouldn’t leave you guessing. Practical documentation, clear walkthroughs, and a little help with what happens next."/><div className="site-container docs-content"><div className="docs-grid">{notes.map(note=><section id={note.id} key={note.id}><h2>{note.title}</h2><p>{note.body}</p></section>)}</div><p className="docs-contact">Need something specific? <Link href="/contact" className="text-link">Ask us about your handover</Link></p></div></div>;
}
