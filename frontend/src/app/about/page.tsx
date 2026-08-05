import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight,
  GraduationCap,
  Terminal,
  Layers,
  Cpu
} from "lucide-react";

export const metadata = {
  title: "About Us | TriNetix Web Development & App Agency",
  description: "Learn about TriNetix, a leading web development agency founded by Mr. Jatin Rajput and Ms. Bharti Singh, specializing in high-performance WordPress sites, Android apps, custom tech stacks, and academic student solutions.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background glows */}
      <div className="purple-glow-bg top-20 right-10 opacity-20"></div>
      <div className="purple-glow-bg top-[800px] left-10 opacity-15"></div>
      {/* Geometric dot grid */}
      <div className="geo-dot-grid absolute top-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none" />

      {/* Hero Header */}
      <section className="text-center space-y-6 pt-8 max-w-4xl mx-auto">
        <div className="animate-fade-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
          <Building2 className="w-3.5 h-3.5" />
          <span>About TriNetix</span>
        </div>

        <h1 className="animate-fade-slide-up delay-100 text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
          Pioneering Excellence in <span className="purple-text-gradient">Web &amp; Software Solutions</span>
        </h1>

        <p className="animate-fade-slide-up delay-200 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          TriNetix is a modern digital engineering laboratory and web development agency committed to transforming ideas into robust digital products.
        </p>
      </section>

      {/* Company Story & Mission Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl space-y-4 card-lift animate-fade-slide-up">
          <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Our Mission</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At TriNetix, our mission is to make top-tier web development and mobile application engineering accessible to everyone — from ambitious startup founders needing production-ready WordPress sites to students requiring pristine academic projects with documentation.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl space-y-4 card-lift animate-fade-slide-up delay-100">
          <div className="w-12 h-12 rounded-2xl teal-icon-box flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Why We Stand Out</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We don't cut corners. Every line of code is written with scalability, security, and speed in mind. Whether it's a ₹3,999 WordPress build or a ₹15,000 Android app, we apply enterprise-grade quality standards to all deliverables.
          </p>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full label-pill">
            <Users className="w-3.5 h-3.5" />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
            Leadership &amp; <span className="purple-text-gradient">Core Team</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto">
            Meet the visionaries leading TriNetix forward with technical mastery and design precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mr. Jatin Rajput */}
          <div className="glass-card-purple p-8 rounded-3xl space-y-6 text-center card-lift group animate-fade-slide-up">
            <div className="relative w-24 h-24 mx-auto">
              {/* Hover glow behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 opacity-0 group-hover:opacity-40 blur-xl scale-125 transition-all duration-500" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-3xl font-extrabold border-2 border-teal-300 shadow-xl shadow-teal-200" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                JR
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Mr. Jatin Rajput</h3>
              <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mt-1">
                Co-Founder &amp; Tech Lead
              </p>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Mr. Jatin Rajput leads software architecture, Flask RESTful API development, Next.js fullstack integration, and database security at TriNetix. With deep domain knowledge in modern web stacks, he ensures every project performs effortlessly under load.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {["Python Flask", "Next.js", "Database Security"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium hover:bg-teal-100 hover:border-teal-300 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ms. Bharti Singh */}
          <div className="glass-card-purple p-8 rounded-3xl space-y-6 text-center card-lift group animate-fade-slide-up delay-100">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00A5CF] to-[#004E64] opacity-0 group-hover:opacity-40 blur-xl scale-125 transition-all duration-500" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#00A5CF] to-[#004E64] flex items-center justify-center text-white text-3xl font-extrabold border-2 border-[#9FFFCB] shadow-xl" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                BS
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Ms. Bharti Singh</h3>
              <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mt-1">
                Co-Founder &amp; Creative Director
              </p>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Ms. Bharti Singh oversees UI/UX aesthetics, WordPress ecosystem customization, mobile application design, and student project delivery. She ensures that every product has a classy, visually breathtaking user experience.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {["WordPress Specialist", "UI/UX Design", "Android UI"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium hover:bg-teal-100 hover:border-teal-300 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="glass-card p-8 sm:p-12 rounded-3xl space-y-8 relative overflow-hidden">
        <div className="geo-dot-grid absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none" />
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
            Technologies We <span className="purple-text-gradient">Master</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            We pick best-of-breed frameworks to build robust, modern digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Cpu className="w-8 h-8 text-teal-500 mx-auto" />, name: "Next.js / React", sub: "Frontend Engine" },
            { icon: <Terminal className="w-8 h-8 text-teal-500 mx-auto" />, name: "Python Flask", sub: "Backend APIs" },
            { icon: <Layers className="w-8 h-8 text-teal-500 mx-auto" />, name: "WordPress", sub: "CMS & E-Commerce" },
            { icon: <Zap className="w-8 h-8 text-teal-500 mx-auto" />, name: "Android / Flutter", sub: "Mobile Apps" },
          ].map((tech, idx) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl bg-teal-50 border border-teal-100 space-y-2 hover:border-teal-300 hover:bg-teal-50/80 hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-100 transition-all duration-300 cursor-default animate-fade-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {tech.icon}
              <p className="font-bold text-slate-900 text-base" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>{tech.name}</p>
              <p className="text-xs text-slate-500">{tech.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-8">
        <Link
          href="/contact"
          className="purple-btn-gradient px-8 py-4 rounded-full text-white font-bold text-base inline-flex items-center gap-2 shadow-lg group"
        >
          <span>Connect with Mr. Jatin &amp; Ms. Bharti</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
