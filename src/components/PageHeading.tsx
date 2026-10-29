import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export default function PageHeading({ label, title, description, tone = "lavender", action }: { label: string; title: ReactNode; description: string; tone?: "lavender" | "peach" | "lime"; action?: {label:string;href:string} }) {
  return <section className={`page-heading heading-${tone}`}><div className="site-container"><div><p className="section-label"><span/>{label}</p><h1>{title}</h1></div><div><p className="page-heading-description">{description}</p>{action&&<Link href={action.href} className="text-link">{action.label}<ArrowUpRight size={17}/></Link>}</div></div></section>;
}
