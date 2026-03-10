"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, MessageCircle } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const isDark = isHome && !scrolled;
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,box-shadow] duration-200 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] border-border/50"
            : isHome
              ? "bg-transparent border-transparent"
              : "bg-white/80 backdrop-blur-xl border-border/50"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[88px]">
            {}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Logo className="h-16 w-16 sm:h-20 sm:w-20" />
            </Link>
            {}
            <div className="hidden lg:flex items-center gap-0.5 bg-black/[0.03] backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/40">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? isDark
                          ? "text-white"
                          : "text-black"
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
                          isDark
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
            {}
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
              {}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isDark
                    ? "hover:bg-white/10 text-white"
                    : "hover:bg-neutral-100 text-black"
                }`}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      {}
      <AnimatePresence>
        {isOpen && (
          <>
            {}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            {}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl shadow-black/10 lg:hidden overflow-y-auto"
            >
              {}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Logo className="h-16 w-16" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>
              {}
              <div className="p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                      }`}
                    >
                      {link.label}
                      <ChevronRight
                        size={16}
                        className={`transition-all duration-200 ${
                          pathname === link.href
                            ? "text-primary"
                            : "text-neutral-300"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
              {}
              <div className="p-4 mt-2 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-white text-[15px] font-medium rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
                >
                  <MessageCircle
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
