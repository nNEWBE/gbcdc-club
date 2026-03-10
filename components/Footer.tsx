"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Users,
  BellRing,
  MessageSquare,
} from "lucide-react";
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
  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden border-t border-white/5">
      
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(58,168,105,0.1),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.05),transparent_40%)]"
        aria-hidden="true"
      />
      
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70"
        aria-hidden="true"
      />
      
      <div
        className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      
      <div className="section-container relative z-10 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start px-2">
            <Link
              href="/"
              className="mb-6 inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#020617] transition-all duration-300 hover:opacity-80"
              aria-label="GBCDC Home"
            >
              <img
                src="/GBCDC logo Icon.png"
                alt="GBCDC Logo"
                className="w-[120px] h-auto object-contain transition-transform duration-300"
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm mb-8 font-medium">
              Empowering students with skills and leadership for a brighter
              future. Building the next generation of professionals.
            </p>
            
            <form
              className="w-full max-w-[360px] relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="w-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-full py-3.5 pl-6 pr-[120px] text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-white/20 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
              >
                Join Now
              </button>
            </form>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-2">
              <Users size={16} className="text-primary/60" strokeWidth={2.5} />
              Club
            </h4>
            <ul className="space-y-1">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center py-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-4 mr-1 text-primary transition-all duration-200 group-hover:opacity-100 group-hover:ml-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-2">
              <BellRing
                size={16}
                className="text-primary/60"
                strokeWidth={2.5}
              />
              Updates
            </h4>
            <ul className="space-y-1">
              {activityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center py-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#020617] rounded-md cursor-pointer"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-4 mr-1 text-primary transition-all duration-200 group-hover:opacity-100 group-hover:ml-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 flex items-center gap-2">
              <MessageSquare
                size={16}
                className="text-primary/60"
                strokeWidth={2.5}
              />
              In Touch
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200"
                  aria-hidden="true"
                >
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <span className="mt-2.5 leading-relaxed text-slate-300">
                  Nolam, Savar, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200"
                  aria-hidden="true"
                >
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
                <div
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-colors duration-200"
                  aria-hidden="true"
                >
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
      
      <div className="relative z-10">
        <div className="section-container">
          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-slate-300 tracking-wide">GBCDC</span>. All
              rights reserved.
            </p>
            <div className="flex items-center">
              
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      strokeWidth={1.5}
                      className="sm:w-5 sm:h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
