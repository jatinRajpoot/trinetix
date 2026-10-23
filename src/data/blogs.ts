export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}

export const BLOGS: BlogPost[] = [
  {
    id: "nextjs-flask-architecture",
    title: "Next.js and Flask: when this stack makes sense",
    excerpt: "A practical look at pairing a modern web interface with a focused Python API.",
    category: "Architecture",
    date: "Aug 01, 2026",
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
