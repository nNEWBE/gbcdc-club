"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Filter,
  Calendar,
} from "lucide-react";
import EventCard from "@/components/EventCard";
const allEvents = [
  {
    title: "Career Bootcamp 2026",
    date: "April 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    attendees: 250,
    description:
      "A comprehensive 3-day bootcamp covering resume building, mock interviews, personal branding, and LinkedIn optimization. Industry mentors will provide one-on-one feedback sessions.",
    image: "/gallery-1.png",
    status: "Upcoming",
    category: "Bootcamp",
  },
  {
    title: "Industry Leader Talk: Tech Careers",
    date: "April 5, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Conference Hall B",
    attendees: 180,
    description:
      "Monthly talk series featuring CTO of TechBD sharing insights on navigating tech careers, emerging technologies, and building relevant skill sets for the industry.",
    image: "/gallery-2.png",
    status: "Upcoming",
    category: "Talk",
  },
  {
    title: "Entrepreneurship Summit 2026",
    date: "March 28-29, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Business Faculty Hall",
    attendees: 320,
    description:
      "Two-day summit featuring startup founders, venture capitalists, and business leaders. Includes pitch competitions, mentoring sessions, and networking opportunities.",
    image: "/gallery-3.png",
    status: "Upcoming",
    category: "Summit",
  },
  {
    title: "Digital Skills Workshop",
    date: "March 10, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Computer Lab 3",
    attendees: 60,
    description:
      "Hands-on workshop on digital marketing, data analysis, and web development fundamentals. Participants received certificates upon completion.",
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
    description:
      "An evening of professional networking with alumni, faculty, and local business professionals. Featured speed networking sessions and panel discussions.",
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
    description:
      "Expert-led session on crafting compelling resumes, covering ATS optimization, action verbs, quantifiable achievements, and industry-specific formatting.",
    image: "/gallery-1.png",
    status: "Completed",
    category: "Workshop",
  },
];
export default function EventsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");
  const filteredEvents =
    filter === "all"
      ? allEvents
      : allEvents.filter((e) => e.status.toLowerCase() === filter);
  return (
    <main className="min-h-screen pt-28 pb-20 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            <Calendar size={14} />
            Events
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From career bootcamps to industry talks, explore our events designed
            to accelerate your professional growth.
          </motion.p>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Events", value: "50+" },
            { label: "Participants", value: "2,500+" },
            { label: "Speakers", value: "80+" },
            { label: "Workshops", value: "30+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 bg-neutral-50 rounded-2xl border border-border"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-neutral-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-neutral-400" />
            {(["all", "upcoming", "completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <span className="text-sm text-neutral-400">
            Showing {filteredEvents.length} event
            {filteredEvents.length !== 1 ? "s" : ""}
          </span>
        </motion.div>
        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, i) => (
            <EventCard
              key={event.title}
              event={event}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
