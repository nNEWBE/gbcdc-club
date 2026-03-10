"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight, Bell, Timer } from "lucide-react";
import Badge from "./Badge";
import ActionLink from "./ActionLink";
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
              <Badge label="Upcoming" icon={Bell} variant="primary" />
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
            <ActionLink href="/events" className="text-sm font-semibold group">
              View All Events
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ActionLink>
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
              className="group relative bg-white flex flex-col h-full rounded-[24px] border border-primary/50 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="p-2 sm:p-2.5 pb-0">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[18px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest shadow-sm">
                    <Timer size={12} strokeWidth={2.5} />
                    {event.status}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 px-4 py-2.5 rounded-[12px] bg-white shadow-lg flex items-center gap-2 text-neutral-900 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                    <Calendar size={14} className="text-neutral-700" strokeWidth={2.5} />
                    <span className="text-[13px] font-bold leading-none tracking-tight">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-neutral-400 mb-3">
                  <MapPin size={14} strokeWidth={2.5} className="shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-neutral-900 tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-[15px] font-medium text-neutral-500 leading-relaxed line-clamp-2 mt-auto mb-6">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-primary group/btn"
                >
                  View Details
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
