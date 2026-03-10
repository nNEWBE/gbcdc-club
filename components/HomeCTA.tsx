"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Calendar, BookOpen, Rocket } from "lucide-react";
import Badge from "./Badge";
export default function HomeCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-[#020617] p-12 md:p-20"
        >
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
          
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-[0.03]">
              <defs>
                <pattern
                  id="ctaGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative z-10 text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <Badge
                label="Start Your Journey"
                icon={Rocket}
                variant="primary"
                className="bg-primary/10 backdrop-blur-sm border-primary/20 text-primary"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5"
            >
              Ready to Shape Your{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Future?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Join 500+ students who are building the skills, network, and
              confidence for a successful career. Your journey starts here.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
            >
              {[
                { icon: Users, label: "500+ Active Members" },
                { icon: Calendar, label: "50+ Events Yearly" },
                { icon: BookOpen, label: "12 Active Courses" },
              ].map((item) => (
                <Badge
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  variant="ghost"
                  className="bg-white/5 text-neutral-300 border-white/10 py-2.5 px-5"
                />
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-semibold rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Join GBCDC Now
                <ArrowRight
                  size={18}
                  className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
              <Link
                href="/executive"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-neutral-300 text-base font-medium rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
