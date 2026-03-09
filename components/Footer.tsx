"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, ArrowUp, MapPin, Phone, ChevronRight } from "lucide-react";
import Logo from "./Logo";

const aboutLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Executive", href: "/executive" },
  { label: "Advisory", href: "/advisory" },
];

const activityLinks = [
  { label: "Notices", href: "/notices" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Courses", href: "/courses" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:info@gbcdc.edu.bd", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] text-white border-t border-white/5 overflow-hidden">
      {/* Background Subtle Glows (Performance: opacity/transform only) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" aria-hidden="true" />

      {/* Main Footer */}
      <div className="section-container relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand - 5 cols */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
            <Link 
              href="/" 
              className="mb-8 inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617] transition-shadow duration-200"
              aria-label="GBCDC Home"
            >
              <Logo className="w-24 h-24 sm:w-32 sm:h-32" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 font-medium">
              Empowering students with skills, leadership, and career
              opportunities for a brighter future. Building the next generation
              of professionals at Gono Bishwabidyalay.
            </p>
            {/* Social Links - Touch target 44px minimum */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* About Links - 2 cols */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Club
            </h4>
            <ul className="space-y-1">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center w-full py-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer"
                  >
                    <ChevronRight size={16} className="opacity-0 -ml-4 mr-1 text-primary transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity Links - 2 cols */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Updates
            </h4>
            <ul className="space-y-1">
              {activityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center w-full py-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer"
                  >
                    <ChevronRight size={16} className="opacity-0 -ml-4 mr-1 text-primary transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 4 cols */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200" aria-hidden="true">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <span className="mt-2.5 leading-relaxed text-slate-300">Gono Bishwabidyalay, Savar, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200" aria-hidden="true">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <a
                  href="mailto:info@gbcdc.edu.bd"
                  className="mt-2.5 text-slate-300 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer block"
                >
                  info@gbcdc.edu.bd
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200" aria-hidden="true">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <a
                  href="tel:+8801234567890"
                  className="mt-2.5 text-slate-300 hover:text-primary transition-colors duration-200 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer block"
                >
                  +880-1234-567890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 bg-[#020617]/80 backdrop-blur-md">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-300 tracking-wide">GBCDC</span>. All rights reserved.
          </p>
          
          <div className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
              <Link href="#" className="hover:text-slate-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617] rounded-sm py-1 cursor-pointer">Privacy Policy</Link>
              <span className="w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
              <Link href="#" className="hover:text-slate-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617] rounded-sm py-1 cursor-pointer">Terms</Link>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-700 hover:border-slate-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
