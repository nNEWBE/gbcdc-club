"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bell } from "lucide-react";
import Badge from "./Badge";
import ActionLink from "./ActionLink";
import EventCard from "./EventCard";
const upcomingEvents = [
  {
    title: "Career Bootcamp 2026",
    date: "April 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    attendees: 250,
    description: "A 3-day bootcamp covering resume building, mock interviews, and personal branding.",
    image: "/gallery-1.png",
    status: "Upcoming",
  },
  {
    title: "Industry Leader Talk: Tech Careers",
    date: "April 5, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Conference Hall B",
    attendees: 180,
    description: "Insights from top tech industry leaders on navigating modern tech careers.",
    image: "/gallery-2.png",
    status: "Upcoming",
  },
  {
    title: "Entrepreneurship Summit 2026",
    date: "March 28-29, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Business Faculty Hall",
    attendees: 320,
    description: "Two-day summit with startup founders, VCs, and pitch competitions.",
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
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge label="Upcoming" icon={Bell} variant="primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
            >
              Upcoming Events
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, i) => (
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
