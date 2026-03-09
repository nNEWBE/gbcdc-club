"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/notices", label: "Notices" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/courses", label: "Courses" },
  { href: "/executive", label: "Executive" },
  { href: "/advisory", label: "Advisory" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={handleNavClick}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  pathname === link.href
                    ? scrolled || pathname !== "/" ? "text-black" : "text-white"
                    : scrolled || pathname !== "/" ? "text-neutral-500 hover:text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute inset-0 rounded-full -z-10 ${scrolled || pathname !== "/" ? "bg-neutral-100" : "bg-white/10"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Join GBCDC
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${scrolled || pathname !== "/" ? "hover:bg-neutral-100 text-black" : "hover:bg-white/10 text-white"}`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                >
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      pathname === link.href
                        ? "bg-neutral-100 text-black"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="block text-center w-full px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all"
                >
                  Join GBCDC
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
