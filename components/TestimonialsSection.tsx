"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aminul Islam",
    role: "Computer Science, Batch 2023",
    quote:
      "GBCDC transformed my career outlook. The workshops helped me build skills I couldn't learn in the classroom. I landed my first internship thanks to the networking events!",
    rating: 5,
  },
  {
    name: "Tasnia Rahman",
    role: "Business Administration, Batch 2024",
    quote:
      "Joining GBCDC was the best decision of my university life. The leadership opportunities and career guidance helped me discover my true potential and professional direction.",
    rating: 5,
  },
  {
    name: "Mahmudul Hasan",
    role: "Electrical Engineering, Batch 2022",
    quote:
      "The skill development programs at GBCDC gave me a competitive edge. The industry connections I made through the club opened doors I never imagined possible.",
    rating: 5,
  },
  {
    name: "Rima Akter",
    role: "English Literature, Batch 2024",
    quote:
      "GBCDC's resume writing workshop and mock interviews prepared me for the real world. The supportive community and mentorship made all the difference in my confidence.",
    rating: 5,
  },
  {
    name: "Shafiqur Rahman",
    role: "Economics, Batch 2023",
    quote:
      "Through GBCDC, I developed public speaking, teamwork, and project management skills that employers truly value. I'm grateful for every opportunity the club provided.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#020617] text-white"
      ref={ref}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Real stories from students whose lives have been transformed through
            GBCDC.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Quote size={20} className="text-primary" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
