import Image from "next/image";
import Link from "next/link";
import { Mail, Heart, ArrowUpRight, GraduationCap, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003342] pt-16 pb-12 relative overflow-hidden text-slate-200">
      {/* Geometric decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A5CF]/30 to-transparent" />
      <div className="geo-circle w-[600px] h-[600px] -top-80 -right-32 opacity-30" style={{ borderWidth: '1px' }} />
      <div className="geo-circle w-[300px] h-[300px] bottom-0 left-10 opacity-20" style={{ borderWidth: '1px' }} />
      <div className="geo-dot-grid inset-0 opacity-[0.03] w-full h-full" />

      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00A5CF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#9FFFCB]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00212a] border-2 border-[#00A5CF]/50 p-1 flex items-center justify-center shadow-lg shadow-[#00A5CF]/20 group-hover:border-[#9FFFCB] group-hover:scale-105 transition-all duration-300 overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="TriNetix Symbol"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover object-left scale-150"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-0.5" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>
                  <span className="text-[#9FFFCB] font-extrabold">त्रि</span>
                  <span className="purple-text-gradient">Netix</span>
                </span>
                <span className="text-[11px] sm:text-xs text-[#90cdd9] tracking-widest uppercase font-bold">
                  Web Development Solutions
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premier web development agency crafting high-performance WordPress sites, native Android applications, custom enterprise projects, and dedicated college academic solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Github className="w-4 h-4" />, label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#9FFFCB] hover:border-[#25A18E]/50 hover:bg-[#25A18E]/10 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Company</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Tech Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#9FFFCB] transition-colors flex items-center gap-1 group w-fit">
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-px left-0 w-0 group-hover:w-full h-px bg-[#9FFFCB]/50 transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Offerings */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Services & Pricing</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-[#9FFFCB] transition-colors">
                  WordPress Websites <span className="text-xs text-[#9FFFCB] font-semibold">(₹3,999)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#9FFFCB] transition-colors">
                  Android Apps <span className="text-xs text-[#9FFFCB] font-semibold">(From ₹15k)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#9FFFCB] transition-colors">
                  Custom Projects <span className="text-xs text-[#9FFFCB] font-semibold">(From ₹8k)</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/services#student-section" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25A18E]/20 border border-[#25A18E]/40 text-[#9FFFCB] text-xs font-semibold hover:bg-[#25A18E]/30 hover:scale-105 transition-all duration-200">
                  <GraduationCap className="w-3.5 h-3.5 text-[#9FFFCB]" />
                  <span>College Projects (₹3k)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Founders & Leadership */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide" style={{ fontFamily: "var(--font-syne, sans-serif)" }}>Founders & Leadership</h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#25A18E]/40 hover:bg-white/8 transition-all duration-200">
                <p className="font-semibold text-white">Mr. Jatin Rajput</p>
                <p className="text-xs text-[#9FFFCB]">Co-Founder & Tech Lead</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#25A18E]/40 hover:bg-white/8 transition-all duration-200">
                <p className="font-semibold text-white">Ms. Bharti Singh</p>
                <p className="text-xs text-[#9FFFCB]">Co-Founder & Creative Director</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#9FFFCB] shrink-0" />
                <a href="mailto:Support@trinetix.in" className="hover:text-[#9FFFCB] transition-colors">Support@trinetix.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col items-center sm:flex-row sm:justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} त्रिNetix. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#00A5CF] fill-[#00A5CF]" />
            <span>by त्रिNetix Team</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#9FFFCB] transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-px left-0 w-0 group-hover:w-full h-px bg-[#9FFFCB]/40 transition-all duration-300" />
            </a>
            <a href="#" className="hover:text-[#9FFFCB] transition-colors relative group">
              Terms of Service
              <span className="absolute -bottom-px left-0 w-0 group-hover:w-full h-px bg-[#9FFFCB]/40 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
