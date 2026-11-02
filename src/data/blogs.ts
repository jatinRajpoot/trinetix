export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readTime: string;
  content: string[];
  sections?: { id: string; title: string; paragraphs: string[] }[];
  relatedLinks?: { href: string; label: string }[];
}

export const BLOGS: BlogPost[] = [
  {
    id: "business-website-cost-india",
    title: "Business website cost in India: how to plan your budget",
    excerpt: "TriNetix business websites start at ₹3,999. See what shapes the quote, which recurring costs to allow for and what to ask before you commit.",
    category: "Web Design",
    date: "Nov 03, 2026",
    publishedAt: "2026-11-03",
    author: "TriNetix Team",
    readTime: "4 min",
    content: [
      "At TriNetix, a business website starts at ₹3,999. That is a starting price for an agreed project scope, rather than a promise that every website will cost the same. The useful budget is the one that covers what your customers need to do, the content you need to publish and the work needed to launch it.",
      "This guide explains our pricing approach. These are TriNetix starting prices, not an average of agencies across India. Use the questions below to compare written proposals and separate the initial build from the costs of keeping your website running.",
    ],
    sections: [
      {
        id: "website-or-web-app",
        title: "1. Decide whether you need a website or a web app",
        paragraphs: [
          "A service business usually needs visitors to understand its offer, see credible work and contact the team. A website with service information, an about page and clear enquiry options can meet that need. Start by listing those customer tasks before deciding how many pages to commission.",
          "If customers must sign in, manage bookings or view private records, describe those flows separately. They may require a custom web app. Our custom web apps start at ₹8,000; Android apps start at ₹15,000. Those are different scopes, so compare the deliverables as well as the starting price.",
        ],
      },
      {
        id: "included-work",
        title: "2. Confirm what the website quote includes",
        paragraphs: [
          "Our business website offering includes custom design, a responsive layout, contact and WhatsApp options, SEO-ready page structure, a handover walkthrough and 30 days of launch support. The written quote confirms how many pages and which features are included in your project.",
          "Content makes a difference to the work. Supplying approved service descriptions, a logo and images is different from asking the team to write copy, migrate an old website or organise a large catalogue. Tell us what is ready and what you need help preparing so the quote covers the full job.",
        ],
      },
      {
        id: "recurring-costs",
        title: "3. Budget for domains, hosting and paid tools",
        paragraphs: [
          "The build price is separate from the services that keep a website online. Your domain is its address; hosting serves its pages. Paid plugins, business email, booking software and payment services may add charges depending on the tools you choose. TriNetix quotes third-party charges separately.",
          "Ask for the first payment, the renewal amount, who owns each account and who handles renewal. For payments, ask about transaction fees as well as setup. A useful first-year budget combines the build quote, the selected third-party services and any ongoing maintenance you agree to purchase.",
        ],
      },
      {
        id: "compare-quotes",
        title: "4. Compare deliverables before comparing totals",
        paragraphs: [
          "Send each studio the same brief: your business, intended audience, page list, required actions, available content and preferred launch date. Ask them to identify exclusions, revision arrangements, ownership, support and recurring charges. Two quotes with the same total can cover very different work.",
          "Request examples you can open and use. Check a service page and try the contact route on your phone. Ask what the handover contains and how you will update your content. These checks tell you more about the fit than an unqualified promise of a premium or SEO-friendly website.",
        ],
      },
      {
        id: "launch-and-search",
        title: "5. Plan for launch and search visibility",
        paragraphs: [
          "A typical small business website takes around 3–5 days once its content is ready; the actual schedule is agreed for your scope. Collect the copy, images, contact details and account access before the build starts. If you are replacing a site, share its existing URLs so changes to important pages can be planned.",
          "Search visibility also needs attention after launch. Useful service information, working links and accurate page details give search engines and customers a clearer picture of your business. SEO-ready structure does not guarantee rankings or enquiries. Review which searches bring relevant visitors and improve pages around the questions those customers actually ask.",
        ],
      },
      {
        id: "prepare-your-brief",
        title: "What to send us for a clear quote",
        paragraphs: [
          "Send a short description of your business, the pages you expect, two or three websites you like, any must-have features and your intended launch date. Include what content you already have and whether you own a domain. We will use that information to agree a practical scope and a written price before work begins.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/services/business-websites", label: "Business website design and development" },
      { href: "/pricing", label: "Compare TriNetix website and app starting prices" },
      { href: "/blog/wordpress-conversion-tips", label: "Make your website easier to enquire from" },
    ],
  },
  {
    id: "nextjs-flask-architecture",
    title: "Next.js and Flask: when this stack makes sense",
    excerpt: "A practical look at pairing a modern web interface with a focused Python API.",
    category: "Architecture",
    date: "Aug 01, 2026",
    publishedAt: "2026-08-01",
    author: "Jatin Rajput",
    readTime: "5 min",
    content: [
      "The right technology is the technology that fits the job. Next.js can be a good choice for fast, responsive websites and web applications. Flask is a small Python framework that can provide an API when your product needs one.",
      "Together, the two can keep responsibilities easy to understand: the web app handles the experience people use, and the API handles the data and business logic. That can be useful for a dashboard, a customer portal or an app with integrations.",
      "This stack is not automatically the best option for every project. A simple business website may need far less. Start with the outcome, choose the simplest tools that can deliver it, and make sure the people who maintain the project can work comfortably with those tools.",
    ],
  },
  {
    id: "wordpress-conversion-tips",
    title: "5 details that help a business website turn visits into enquiries",
    excerpt: "Clear messaging, mobile usability and a simple next step make a website easier to act on.",
    category: "Web Design",
    date: "Jul 28, 2026",
    publishedAt: "2026-07-28",
    author: "Bharti Singh",
    readTime: "4 min",
    content: [
      "A business website should help visitors answer three questions quickly: what do you offer, is it right for me, and how do I get started? Clear page structure is often more useful than adding another animation or section.",
      "Make the main action easy to see. If you want calls, show a phone number. If you want enquiries, make the form short and set expectations about what happens after it is submitted.",
      "Check the site on a phone, use real examples and explain your services in plain language. Add useful proof—such as live work, genuine reviews or clear pricing—where it helps visitors make a decision.",
    ],
  },
  {
    id: "student-project-guide",
    title: "Planning your final-year project: a practical checklist",
    excerpt: "A straightforward way to scope, document and prepare to explain your academic project.",
    category: "Students",
    date: "Jul 20, 2026",
    publishedAt: "2026-07-20",
    author: "Jatin Rajput",
    readTime: "6 min",
    content: [
      "Start with the problem your project is meant to solve. Write down who will use it, what they need to do and which features are essential. Keeping the scope focused makes implementation and documentation easier to manage.",
      "As you work, record your assumptions and decisions. Keep diagrams aligned with the actual system, and make sure the project can be set up from a fresh copy using clear instructions.",
      "Before presenting, practice explaining how the key parts work and why you made your design choices. A project you understand is easier to demonstrate and improve.",
    ],
  },
];

export function getBlogById(id: string): BlogPost | undefined {
  return BLOGS.find((b) => b.id === id);
}
