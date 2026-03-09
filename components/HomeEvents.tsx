"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight, Sparkles, Timer } from "lucide-react";
import Badge from "./Badge";
const upcomingEvents = [
  {
    title: "Career Bootcamp 2026",
    date: "April 15-17, 2026",
    location: "Main Auditorium",
    description:
      "A 3-day bootcamp covering resume building, mock interviews, and personal branding.",
    image: "/gallery-1.png",
    status: "Upcoming",
  },
  {
    title: "Industry Leader Talk: Tech Careers",
    date: "April 5, 2026",
    location: "Conference Hall B",
    description:
      "Insights from top tech industry leaders on navigating modern tech careers.",
    image: "/gallery-2.png",
    status: "Upcoming",
  },
  {
    title: "Entrepreneurship Summit 2026",
    date: "March 28-29, 2026",
    location: "Business Faculty Hall",
    description:
      "Two-day summit with startup founders, VCs, and pitch competitions.",
    image: "/gallery-3.png",
    status: "Upcoming",
  },
];
export default function HomeEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge label="Upcoming" icon={Sparkles} variant="primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
            >
              Upcoming Events
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              View All Events
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
        {}
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 right-3 scale-90 origin-top-right">
                  <Badge
                    label={event.status}
                    icon={Timer}
                    variant="primary"
                    className="bg-primary text-white border-transparent"
                  />
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-black flex items-center gap-1.5">
                  <Calendar size={12} />
                  {event.date}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                  <MapPin size={12} />
                  {event.location}
                </div>
                <h3 className="text-base font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
