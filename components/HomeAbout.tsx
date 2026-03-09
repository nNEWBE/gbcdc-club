"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/about.png"
                alt="GBCDC Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-8 bg-white rounded-xl shadow-xl shadow-black/10 p-4 border border-border"
            >
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                Years Active
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
              Building Tomorrow&apos;s{" "}
              <span className="text-primary">Leaders</span> Today
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                The <strong className="text-black">Gono Bishwabidyalay Career Development Club (GBCDC)</strong> is
                a student-led organization committed to fostering professional
                growth and career readiness.
              </p>
              <p>
                We organize workshops, seminars, networking events, and skill
                development programs that bridge the gap between academic
                knowledge and real-world professional success.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-6 space-y-3">
              {[
                "Industry-aligned skill development programs",
                "Professional networking opportunities",
                "Career guidance and mentorship",
                "Hands-on workshops and bootcamps",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Learn More About Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
