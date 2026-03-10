"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MessageCircle } from "lucide-react";
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
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const isDark = isHome && !scrolled;
  const showSolid = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          backgroundColor: showSolid 
            ? "rgba(255, 255, 255, 0.9)" 
            : "rgba(255, 255, 255, 0)",
          backdropFilter: showSolid 
            ? "blur(16px)" 
            : "blur(0px)",
          borderColor: showSolid 
            ? "rgba(var(--primary-rgb), 0.5)" 
            : "rgba(255, 255, 255, 0)",
          boxShadow: showSolid
            ? "0 10px 15px -3px rgba(var(--primary-rgb), 0.03)"
            : "0 0px 0px 0px rgba(0, 0, 0, 0)"
        }}
        transition={{ 
          y: { duration: 0.6 },
          default: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b will-change-[transform,backdrop-filter]"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[96px]">

            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Logo className="h-20 w-20 sm:h-24 sm:w-24 transform transition-all duration-500 group-hover:scale-105" />
            </Link>
            <div className={`hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1.5 border transition-colors duration-500 ${
              showSolid 
                ? "bg-primary/[0.02] border-primary/50" 
                : "bg-black/[0.03] border-white/10"
            }`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`relative px-4 py-2 text-[13px] font-bold rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? showSolid
                          ? "text-white"
                          : isDark
                            ? "text-white"
                            : "text-primary"
                        : showSolid
                          ? "text-neutral-500 hover:text-primary"
                          : isDark
                            ? "text-white/65 hover:text-white"
                            : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className={`absolute inset-0 rounded-full -z-10 ${
                          showSolid
                            ? "bg-primary shadow-[0_4px_12px_rgba(var(--primary-rgb),0.2)]"
                            : isDark
                              ? "bg-white/15 shadow-inner"
                              : "bg-white shadow-sm shadow-black/[0.06]"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="group hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-[15px] font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <MessageCircle
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Contact
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                  isDark
                    ? "bg-white/10 text-white border border-white/15 hover:bg-white/20 shadow-lg shadow-black/10"
                    : "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20"
                }`}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-5 h-4 flex flex-col items-center justify-center">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    className={`absolute w-full h-[1.5px] rounded-full ${
                      isDark ? "bg-white" : "bg-primary"
                    }`}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    className={`absolute w-full h-[1.5px] scale-x-75 origin-right rounded-full ${
                      isDark ? "bg-white" : "bg-primary"
                    }`}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    className={`absolute w-full h-[1.5px] rounded-full ${
                      isDark ? "bg-white" : "bg-primary"
                    }`}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 sm:px-8 h-[96px] shrink-0">
              <div className="flex items-center justify-center origin-left">
                <Logo className="h-20 w-20 sm:h-24 sm:w-24" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer border border-primary/50"
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 px-6 sm:px-8 py-4 space-y-1.5 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3.5 rounded-xl text-[16px] tracking-tight transition-all duration-300 cursor-pointer border ${
                        isActive
                          ? "bg-primary/10 border-primary/50 text-primary font-semibold"
                          : "border-transparent text-neutral-600 font-medium hover:text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="px-6 sm:px-8 py-6 pb-8 border-t border-neutral-100/50 shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl text-[16px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                >
                  <MessageCircle size={20} />
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
