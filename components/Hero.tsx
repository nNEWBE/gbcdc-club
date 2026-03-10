"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ChevronLeft, ChevronRight, BellRing } from "lucide-react";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Badge from "./Badge";
const slides = [
  {
    image: "/hero-bg.png",
    subtitle: "Empowering Future Leaders",
    title: "Gono Bishwabidyalay",
    highlight: "Career Development Club",
    description:
      "Empowering students with skills, leadership, and career opportunities for a brighter future.",
    cta: { label: "Join the Club", href: "/contact" },
    ctaSecondary: { label: "Explore Courses", href: "/courses" },
  },
  {
    image: "/gallery-1.png",
    subtitle: "Workshops & Training",
    title: "Learn From the",
    highlight: "Industry Experts",
    description:
      "Hands-on workshops, bootcamps, and training sessions designed to build real-world professional skills.",
    cta: { label: "View Courses", href: "/courses" },
    ctaSecondary: { label: "See Events", href: "/events" },
  },
  {
    image: "/gallery-4.png",
    subtitle: "Events & Seminars",
    title: "Connect, Grow &",
    highlight: "Build Your Network",
    description:
      "Networking events, career fairs, and seminars with industry leaders and successful alumni.",
    cta: { label: "Upcoming Events", href: "/events" },
    ctaSecondary: { label: "About Us", href: "/about-us" },
  },
  {
    image: "/gallery-2.png",
    subtitle: "Community & Impact",
    title: "500+ Members",
    highlight: "One Mission",
    description:
      "A thriving community of ambitious students committed to professional growth and mutual success.",
    cta: { label: "Join GBCDC", href: "/contact" },
    ctaSecondary: { label: "Meet Our Team", href: "/executive" },
  },
];

const notices = [
  "Registration for Career Bootcamp 2026 is now open! Limited seats available.",
  "Upcoming Talk: 'Tech Careers' by Industry Experts on April 5, 2026.",
  "Entrepreneurship Summit 2026: Pitch your ideas and win exciting prizes!",
  "New Member Orientation session scheduled for next Sunday at 10:00 AM.",
  "Digital Skills Workshop: Certificates will be provided to all attendees.",
];
const kenBurns = [
  {
    initial: { scale: 1.15, x: "2%", y: "2%" },
    animate: { scale: 1, x: "-1%", y: "-1%" },
  },
  {
    initial: { scale: 1.2, x: "-2%", y: "1%" },
    animate: { scale: 1.05, x: "1%", y: "-1%" },
  },
  {
    initial: { scale: 1.1, x: "1%", y: "-2%" },
    animate: { scale: 1.18, x: "-1%", y: "1%" },
  },
  {
    initial: { scale: 1.18, x: "-1%", y: "-1%" },
    animate: { scale: 1.05, x: "2%", y: "2%" },
  },
];
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);
  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      resetTimer();
    },
    [current, resetTimer],
  );
  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  }, [resetTimer]);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  }, [resetTimer]);
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);
  const slide = slides[current];
  const kb = kenBurns[current];
  const bgVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
  };

  const contentContainer = {
    enter: ,
    center: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 as const },
    },
  };

  const contentChild = {
    enter: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      scale: 0.98,
    },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
      scale: 1.02,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          
          <motion.div
            initial={kb.initial}
            animate={kb.animate}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.highlight}
              fill
              sizes="100vw"
              className="object-cover"
              priority={current === 0}
              quality={90}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]">
          <defs>
            <pattern
              id="heroGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      
      <div className="relative z-10 section-container text-center">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={contentContainer}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            
            <motion.div variants={contentChild} className="mb-8">
              <Badge
                label={slide.subtitle}
                icon={Compass}
                variant="primary"
                className="bg-primary/20 backdrop-blur-md border-primary/30 text-white animate-pulse-slow"
              />
            </motion.div>
            
            <motion.h1
              variants={contentChild}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto"
            >
              {slide.title}
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                {slide.highlight}
              </span>
            </motion.h1>
            
            <motion.p
              variants={contentChild}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              {slide.description}
            </motion.p>
            
            <motion.div
              variants={contentChild}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={slide.cta.href}
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-95 cursor-pointer"
              >
                {slide.cta.label}
                <ArrowRight
                  size={18}
                  className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                {slide.ctaSecondary.label}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pb-16"
        >
          {[
            { value: "500+", label: "Members" },
            { value: "50+", label: "Events" },
            { value: "30+", label: "Workshops" },
            { value: "100%", label: "Impact" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/70 flex items-center justify-center hover:bg-black/40 hover:text-white transition-all duration-200 cursor-pointer active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/70 flex items-center justify-center hover:bg-black/40 hover:text-white transition-all duration-200 cursor-pointer active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto select-none overflow-hidden">
        <div className="bg-white/5 backdrop-blur-md border-t border-white/10 py-3.5 relative">
          
          <div className="absolute left-0 top-0 bottom-0 z-30 flex items-center bg-primary px-4 md:px-6 shadow-[10px_0_20px_rgba(0,0,0,0.3)]">
            <BellRing size={16} className="text-white mr-2.5 animate-bounce-slow" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">
              Recent Notices
            </span>
          </div>
          
          
          <motion.div 
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap pl-[140px] md:pl-[180px]"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {[...notices, ...notices].map((notice, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 group/notice cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/notice:scale-150 transition-transform duration-300" />
                <span className="text-[13px] md:text-[14px] font-bold text-white/90 group-hover/notice:text-white transition-colors duration-300">
                  {notice}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}
