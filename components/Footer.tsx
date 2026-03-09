"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
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
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="section-container pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                <Image
                  src="/GBCDC logo Icon.png"
                  alt="GBCDC Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">GBCDC</span>
                <span className="block text-[10px] font-medium text-neutral-400 tracking-wider uppercase">
                  Gono Bishwabidyalay Career Development Club
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-6">
              Empowering students with skills, leadership, and career
              opportunities for a brighter future. Building the next generation
              of professionals at Gono Bishwabidyalay.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const id = link.href.replace("#", "");
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-neutral-500 mt-0.5">📍</span>
                <span>Gono Bishwabidyalay, Savar, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-500 mt-0.5">📧</span>
                <a
                  href="mailto:info@gbcdc.edu.bd"
                  className="hover:text-white transition-colors"
                >
                  info@gbcdc.edu.bd
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-500 mt-0.5">📞</span>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-white transition-colors"
                >
                  +880-1234-567890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} GBCDC — Gono Bishwabidyalay Career
            Development Club. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
