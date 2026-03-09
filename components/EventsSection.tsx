"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  Bell,
  Timer,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";
const events = [
  {
    title: "Career Bootcamp 2025",
    date: "March 15, 2025",
    location: "Main Auditorium",
    description:
      "A comprehensive 3-day bootcamp covering resume building, mock interviews, and personal branding strategies.",
    image: "/gallery-1.png",
    status: "Upcoming",
  },
  {
    title: "Industry Leader Talk Series",
    date: "February 28, 2025",
    location: "Conference Hall B",
    description:
      "Monthly talk series featuring successful industry leaders sharing their career journey and insights.",
    image: "/gallery-2.png",
    status: "Upcoming",
  },
  {
    title: "Digital Skills Workshop",
    date: "February 10, 2025",
    location: "Computer Lab 3",
    description:
      "Hands-on workshop on digital marketing, data analysis, and web development fundamentals.",
    image: "/gallery-5.png",
    status: "Completed",
  },
  {
    title: "Networking Night 2025",
    date: "January 20, 2025",
    location: "University Garden",
    description:
      "An evening of professional networking with alumni, faculty, and local business professionals.",
    image: "/gallery-4.png",
    status: "Completed",
  },
];
export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="events" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <Badge label="Events" icon={Bell} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Upcoming & Recent Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Stay updated with our latest events and never miss an opportunity to
            grow and connect.
          </motion.p>
        </div>
        {}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500"
            >
              {}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {}
                <div className="absolute top-4 right-4 scale-90 origin-top-right">
                  <Badge
                    label={event.status}
                    icon={event.status === "Upcoming" ? Timer : CheckCircle2}
                    variant={event.status === "Upcoming" ? "primary" : "ghost"}
                    className={
                      event.status === "Upcoming"
                        ? "bg-primary text-white border-transparent"
                        : ""
                    }
                  />
                </div>
              </div>
              {}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-neutral-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {event.description}
                </p>
                <button className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-black hover:text-neutral-600 transition-colors">
                  View Details
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
