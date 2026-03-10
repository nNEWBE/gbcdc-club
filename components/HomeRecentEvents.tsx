"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, History } from "lucide-react";
import Badge from "./Badge";
import ActionLink from "./ActionLink";
import EventCard from "./EventCard";

const recentEvents = [
  {
    title: "Digital Skills Workshop",
    date: "March 10, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Computer Lab 3",
    attendees: 60,
    description: "Hands-on workshop on digital marketing, data analysis, and web development fundamentals.",
    image: "/gallery-5.png",
    status: "Completed",
    category: "Workshop",
  },
  {
    title: "Networking Night 2026",
    date: "February 20, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "University Garden",
    attendees: 150,
    description: "An evening of professional networking with alumni, faculty, and local business professionals.",
    image: "/gallery-4.png",
    status: "Completed",
    category: "Networking",
  },
  {
    title: "Resume Writing Masterclass",
    date: "February 5, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Room 301, Faculty Building",
    attendees: 85,
    description: "Expert-led session on crafting compelling resumes, covering ATS optimization and industry formatting.",
    image: "/gallery-1.png",
    status: "Completed",
    category: "Workshop",
  },
];

export default function HomeRecentEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge label="Past Highlights" icon={History} variant="primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
            >
              Recent Events
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ActionLink href="/events" className="text-sm font-semibold group">
              Explore History
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ActionLink>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEvents.map((event, i) => (
            <EventCard
              key={event.title}
              event={event}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
