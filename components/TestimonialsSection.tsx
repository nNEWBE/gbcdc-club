"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Activity } from "lucide-react";
import Badge from "./Badge";
import Image from "next/image";

const testimonials = [
  {
    name: "Aminul Islam",
    role: "Computer Science, Batch 2023",
    quote:
      "GBCDC transformed my career outlook. The workshops helped me build skills I couldn't learn in the classroom. I landed my first internship thanks to the networking events!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tasnia Rahman",
    role: "Business Administration, Batch 2024",
    quote:
      "Joining GBCDC was the best decision of my university life. The leadership opportunities and career guidance helped me discover my true potential and professional direction.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mahmudul Hasan",
    role: "Electrical Engineering, Batch 2022",
    quote:
      "The skill development programs at GBCDC gave me a competitive edge. The industry connections I made through the club opened doors I never imagined possible.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Rima Akter",
    role: "English Literature, Batch 2024",
    quote:
      "GBCDC's resume writing workshop and mock interviews prepared me for the real world. The supportive community and mentorship made all the difference in my confidence.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Shafiqur Rahman",
    role: "Economics, Batch 2023",
    quote:
      "Through GBCDC, I developed public speaking, teamwork, and project management skills that employers truly value. I'm grateful for every opportunity the club provided.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];
export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden"
      ref={ref}
    >
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge label="Impact" icon={Activity} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Real stories from students whose university journeys were
            transformed through the GBCDC community.
          </motion.p>
        </div>

        <div className="relative group max-w-[1400px] mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary/50 bg-white flex items-center justify-center text-primary hover:bg-neutral-50 transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20">
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary/50 bg-white flex items-center justify-center text-primary hover:bg-neutral-50 transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <motion.div
            className="grid gap-6 xl:grid-cols-3 max-w-4xl xl:max-w-none mx-auto"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x < -40 || velocity.x < -300) {
                next();
              } else if (offset.x > 40 || velocity.x > 300) {
                prev();
              }
            }}
          >
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + testimonials.length) %
                testimonials.length;
              const testimonial = testimonials[index];
              const isCenter = offset === 0;

              return (
                <div
                  key={`card-slot-${offset}`}
                  className={`relative flex-col h-full rounded-[24px] p-8 lg:p-10 xl:p-8 2xl:p-10 transition-all duration-500 border overflow-hidden
                    ${!isCenter ? "hidden xl:flex" : "flex"}
                    ${
                      isCenter
                        ? "bg-white border-primary/40 opacity-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-10"
                        : "bg-neutral-50/50 border-transparent opacity-50"
                    }
                  `}
                >
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                    custom={direction}
                  >
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      initial={
                        isCenter
                          ? { opacity: 0, x: direction > 0 ? 30 : -30 }
                          : { opacity: 0 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      exit={
                        isCenter
                          ? { opacity: 0, x: direction > 0 ? -30 : 30 }
                          : { opacity: 0 }
                      }
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex flex-col h-full w-full"
                    >
                      <div className="mb-8 w-full">
                        {isCenter ? (
                          <div className="flex items-center justify-center gap-4 w-full">
                            <div className="h-[1px] flex-1 bg-primary/40" />
                            <div className="text-primary font-black text-xl tracking-tighter italic"></div>
                            <div className="h-[1px] flex-1 bg-primary/40" />
                          </div>
                        ) : (
                          <div className="flex justify-center w-full">
                            <div className="text-primary font-black text-xl tracking-tighter italic"></div>
                          </div>
                        )}
                      </div>

                      <p
                        className={`text-base md:text-lg font-medium leading-relaxed mb-10 text-left ${
                          isCenter ? "text-neutral-900" : "text-neutral-500"
                        }`}
                      >
                        {testimonial.quote}
                      </p>

                      <div className="mt-auto flex items-center gap-4 text-left">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-primary font-bold text-lg mb-0.5">
                            {testimonial.name}
                          </h4>
                          <p className="text-neutral-500 text-sm font-medium">
                            {testimonial.role.split(",")[0]}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
