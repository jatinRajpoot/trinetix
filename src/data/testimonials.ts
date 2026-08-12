export interface Testimonial {
  id: number;
  name: string;
  role: string;
  type: string;
  comment: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rohan Sharma", role: "Shop Owner", type: "Client", comment: "Our WordPress site is fast and clean. Sales up 40% in weeks.", rating: 5 },
  { id: 2, name: "Priya Verma", role: "B.Tech Student", type: "Student", comment: "Got my project in 48 hours — full code, report and A+.", rating: 5 },
  { id: 3, name: "Vikramaditya Singh", role: "App Client", type: "Client", comment: "Android app is fast and ready for Play Store. Works well.", rating: 5 },
  { id: 4, name: "Aman Gupta", role: "BCA Final Year", type: "Student", comment: "Got full code, diagrams, and viva prep — all ready.", rating: 5 },
];
