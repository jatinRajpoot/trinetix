import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { absoluteUrl, jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

const path = "/services/business-websites";

export const metadata = pageMetadata(
  path,
  "Business Website Design in India — From ₹3,999",
  "Business website design and development in India from ₹3,999. Get responsive pages, enquiry options, SEO-ready structure, handover and 30 days of support.",
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(path)}#service`,
  name: "Business website design and development",
  serviceType: "Website design and development",
  url: absoluteUrl(path),
  provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
  areaServed: { "@type": "Country", name: "India" },
  description: "Custom business websites from ₹3,999, with scope and third-party costs agreed separately before work starts.",
};

export default function BusinessWebsitesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
      <PageHeading
        label="Web design & development · India"
        title="Business website design, built around your customers."
        description="A clear home for your services, your work and your next enquiry. TriNetix business websites start at ₹3,999, with a written scope and a price agreed before we build."
        action={{ label: "Discuss your website", href: "/contact?service=WordPress" }}
      />
      <section className="site-container journal-article-layout">
        <article className="journal-article">
          <div className="journal-article-body">
            <h2>A useful website for a service business</h2>
            <p>If you run a clinic, consultancy, local service or growing company, your website should help people understand what you offer and how to reach you. We organise your services, business information and genuine examples of your work around those decisions.</p>
            <p>Start with what a visitor needs to know: who you help, what you do, where you work and how to ask a question. We agree on the pages and content with you, then design a responsive website that works across phones and larger screens.</p>

            <h2>What your website project includes</h2>
            <ul>
              <li>Custom website design shaped around your business and content.</li>
              <li>Responsive pages with clear navigation and calls to action.</li>
              <li>Contact and WhatsApp options, with maps or forms as agreed.</li>
              <li>SEO-ready page structure for your service information.</li>
              <li>A handover walkthrough and 30 days of support after launch.</li>
            </ul>
            <p>Your quote confirms the page count, features and delivery details. Domains, hosting, paid software and other third-party costs are quoted separately. Read our <Link href="/blog/business-website-cost-india">guide to planning a business website budget</Link> for the questions to ask before you commit.</p>

            <h2>WordPress or a custom website?</h2>
            <p>If your team needs to publish articles or edit service information regularly, we can discuss a WordPress website. If the project needs a tailored interface or specific integrations, a custom build may fit better. We choose the approach around your content, features and who will maintain the site.</p>
            <p>For customer accounts, private dashboards or complex booking workflows, explore our <Link href="/features#custom-web-apps">custom web application service</Link>. Describing those needs early helps us quote the right kind of project.</p>

            <h2>From your brief to launch</h2>
            <ol>
              <li>Share your business, audience, existing website and goals.</li>
              <li>Agree on the pages, features, content, written price and timeline.</li>
              <li>Review the design and working pages with us.</li>
              <li>Launch with a walkthrough and the agreed support.</li>
            </ol>
            <p>A typical small business website takes around 3–5 days once the content is ready. Larger scopes take longer; we agree on a realistic schedule before starting. Bring your logo, service descriptions, approved images and contact details, or tell us where you need help.</p>

            <h2>Will a new website bring enquiries from Google?</h2>
            <p>A clear website gives people useful answers and a direct way to enquire. Search traffic also depends on your content, competition and ongoing work after launch. We include SEO-ready structure, and we discuss what that covers in your scope. Rankings and a particular number of enquiries are not guaranteed.</p>
            <p>See <Link href="/#clients">examples of our work</Link>, compare <Link href="/pricing#business-site">website starting prices and inclusions</Link>, or read the <Link href="/faq">answers about ownership, timelines and support</Link> before you send a brief.</p>
          </div>
        </article>
        <aside className="journal-article-aside">
          <p className="section-label">Business websites</p>
          <h2>From ₹3,999</h2>
          <p>Tell us the pages and features you need. We will confirm the scope, timeline and final quote with you.</p>
          <Link href="/contact?service=WordPress" className="button button-purple">Plan your website <ArrowUpRight size={17} /></Link>
          <p><Link href="/pricing">View all starting prices</Link></p>
        </aside>
      </section>
    </div>
  );
}
