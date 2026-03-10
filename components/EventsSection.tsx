"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell } from "lucide-react";
import Badge from "./Badge";
import EventCard from "./EventCard";
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
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <Badge label="Events" icon={Bell} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Upcoming & Recent Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Stay updated with our latest events and never miss an opportunity to
            grow and connect.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
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
