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
    title: "Why Next.js + Flask is the atelier stack that endures",
    excerpt: "Server rendering + considered APIs — how the atelier keeps sites fast, quiet and lasting.",
    category: "Architecture",
    date: "Aug 01, 2026",
    author: "Jatin Rajput",
    readTime: "5 min",
    content: [
      "Speed and maintainability endure. Next.js gives server rendering, streaming & refined image/font craft; Flask gives a minimal, explicit API layer — quiet, precise, deployable.",
      "Python’s ecosystem handles the orbit — auth, pipelines & integrations — without heavy frameworks, keeping the atelier nimble.",
      "At TriNetix Atelier we compose Next.js + Flask for fast loads and clear boundaries. Code that is a pleasure to revisit.",
    ],
  },
  {
    id: "wordpress-conversion-tips",
    title: "5 atelier details of a WordPress site that converts",
    excerpt: "Rhythm, speed, and restraint — what actually earns trust.",
    category: "Web Design",
    date: "Jul 28, 2026",
    author: "Bharti Singh",
    readTime: "4 min",
    content: [
      "Templates don’t convert — restraint does. Hierarchy, whitespace & a single primary action outshine ornament.",
      "Start mobile-first, one family type scale, one CTA. Then obsess over LCP & CLS — quiet metrics that earn trust.",
      "Every TriNetix Atelier WordPress commission bakes this in — launch fast, measure immediately.",
    ],
  },
  {
    id: "student-project-guide",
    title: "How to earn an A+ — atelier notes for final-year",
    excerpt: "A calm checklist for SRS, diagrams, code quality, and viva grace.",
    category: "Students",
    date: "Jul 20, 2026",
    author: "Jatin Rajput",
    readTime: "6 min",
    content: [
      "Reviewers value clarity: crisp SRS, coherent diagrams, code you can defend. Begin there before features.",
      "Pick a focused scope, document assumptions, keep commits small. Clean modules & a reproducible setup outrank buzzwords.",
      "The Academic Atelier delivers complete IEEE reports & viva prep — defensible on day one, crafted to last.",
    ],
  },
];

export function getBlogById(id: string): BlogPost | undefined {
  return BLOGS.find((b) => b.id === id);
}
