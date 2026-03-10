"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { EventCardSkeleton } from "@/components/SkeletonCard";
import {
  Filter,
  Calendar,
  Search,
  ArrowRight,
  Users,
  Mic2,
  Laptop,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import EventCard from "@/components/EventCard";
import Badge from "@/components/Badge";
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
function StatCard({ stat, index, isInView }: { stat: any, index: number, isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {} }
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="relative group p-5 rounded-[1.5rem] border border-primary/50 bg-white transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.15] text-primary group-hover:opacity-[0.25] transition-all group-hover:scale-110 duration-700 hidden sm:block">
        <stat.icon size={64} strokeWidth={1.5} />
      </div>
      
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left relative z-10">
        <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary mb-3 group-hover:scale-105 group-hover:rotate-6 transition-all duration-500">
          <stat.icon size={18} strokeWidth={2.5} />
        </div>
        
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-none mb-1">
            {count.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] leading-tight">
            {stat.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const filteredEvents = allEvents.filter((event) => {
    const matchesFilter = filter === "all" || event.status.toLowerCase() === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-36 pb-20 bg-white" ref={ref}>
      <div className="section-container">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="Events" icon={Calendar} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From career bootcamps to industry talks, explore our events designed
            to accelerate your professional growth.
          </motion.p>
        </div>
        
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Events", value: 50, suffix: "+", icon: Calendar },
            { label: "Participants", value: 2500, suffix: "+", icon: Users },
            { label: "Expert Speakers", value: 80, suffix: "+", icon: Mic2 },
            { label: "Workshops", value: 30, suffix: "+", icon: Laptop },
          ].map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 md:pl-6 border border-primary/50 md:rounded-full rounded-2xl bg-white overflow-hidden">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 mr-2 text-neutral-400 font-bold text-[10px] uppercase tracking-widest px-2 md:px-0">
                <Filter size={14} />
                Status
              </div>
              {(["all", "upcoming", "completed"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    filter === f
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-neutral-500 border-primary/50 hover:border-primary/80"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center w-full lg:w-auto p-2 md:p-0">
              <div className="relative group w-full">
                <div className="absolute inset-y-0 left-4 flex items-center text-primary pointer-events-none">
                  <Search size={16} strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  placeholder="Find an event..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-6 py-3 bg-white border border-primary/50 rounded-full focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm font-medium w-full sm:w-72 transition-all placeholder:text-neutral-400 text-neutral-800"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full"
            >
              {isSearching ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <EventCardSkeleton key={i} />
                  ))}
                </div>
              ) : filteredEvents.length > 0 ? (
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
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-24 px-8 bg-white/50 backdrop-blur-md rounded-[3rem] border border-primary/50 text-center w-full shadow-2xl shadow-black/[0.02] relative overflow-hidden"
                >
                  
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  
                  
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse" />
                    <div className="relative w-28 h-28 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-xl shadow-primary/5">
                      <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/20 animate-[spin_8s_linear_infinite]" />
                      <Search size={40} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-neutral-900 mb-5 tracking-tight">No Events Found</h3>
                  <p className="text-neutral-500 max-w-lg mx-auto leading-relaxed text-base mb-12">
                    We couldn&apos;t find any matches for <span className="text-primary font-bold">&quot;{searchQuery}&quot;</span>. 
                    Try exploring other statuses or clearing your search to find the perfect event.
                  </p>

                  <button 
                    onClick={() => {
                      setFilter("all");
                      setSearchQuery("");
                    }}
                    className="px-10 py-3 border border-primary/40 text-primary rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-[0.98] cursor-pointer group/btn shadow-lg shadow-black/[0.01]"
                  >
                    Reset all filters
                    <ArrowRight size={14} className="-rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
