"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Bell,
  Pin,
  Clock,
  ChevronRight,
  FileText,
  AlertCircle,
  Calendar,
  Megaphone,
  ArrowRight,
  Info,
  Users,
  MonitorPlay,
  Lightbulb,
  CalendarDays,
  BookOpen,
  Heart
} from "lucide-react";
import Badge from "@/components/Badge";
import { pinnedNotices, recentNotices } from "@/lib/notices";

const categoryColors: Record<string, string> = {
  General: "bg-primary/10 text-primary border-primary/20",
  Membership: "bg-amber-50 text-amber-600 border-amber-200",
  Workshop: "bg-blue-50 text-blue-600 border-blue-200",
  Opportunity: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Event: "bg-purple-50 text-purple-600 border-purple-200",
  Resource: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Volunteer: "bg-rose-50 text-rose-600 border-rose-200",
};

const categoryIcons: Record<string, any> = {
  General: Info,
  Membership: Users,
  Workshop: MonitorPlay,
  Opportunity: Lightbulb,
  Event: CalendarDays,
  Resource: BookOpen,
  Volunteer: Heart,
};

export default function NoticesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen pt-32 pb-20 bg-neutral-50" ref={ref}>
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 flex justify-center"
            >
              <Badge label="Announcements" icon={Bell} variant="primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6"
            >
              Notices & Updates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-500 text-lg md:text-xl leading-relaxed"
            >
              Stay informed with the latest announcements, important deadlines,
              and official updates from GBCDC.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Pinned Notices Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Pin size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-black tracking-tight">Pinned Notices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            {pinnedNotices.map((notice, i) => (
              <motion.div
                key={notice.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="block h-full"
              >
                <Link
                  href={`/notices/${notice.slug}`}
                  className="group relative flex flex-col h-full bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer overflow-hidden border border-primary/20 hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                {/* Decorative highlight corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent -z-10 rounded-tr-2xl group-hover:scale-110 transition-transform duration-500" />
                
                <div className="absolute top-6 right-6 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <AlertCircle size={16} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5 pr-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[notice.category]}`}>
                    {(() => {
                      const Icon = categoryIcons[notice.category] || Info;
                      return <Icon size={14} />;
                    })()}
                    {notice.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Clock size={14} />
                    {notice.date}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {notice.title}
                </h3>
                
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
                  {notice.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="relative">
                    Read full notice
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Notices Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-neutral-200/60 flex items-center justify-center">
              <Megaphone size={20} className="text-neutral-700" />
            </div>
            <h2 className="text-2xl font-bold text-black tracking-tight">Recent Notices</h2>
          </div>
          
          <div className="bg-white rounded-3xl border border-border p-2 md:p-4 shadow-sm">
            <div className="flex flex-col gap-2">
              {recentNotices.map((notice, i) => (
                <motion.div
                  key={notice.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="block"
                >
                  <Link
                    href={`/notices/${notice.slug}`}
                    className="group relative flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 p-4 md:p-6 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20">
                    <FileText size={22} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${categoryColors[notice.category]}`}>
                        {(() => {
                          const Icon = categoryIcons[notice.category] || Info;
                          return <Icon size={14} />;
                        })()}
                        {notice.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                        <Calendar size={14} />
                        {notice.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300">
                      {notice.title}
                    </h3>
                    
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-4xl line-clamp-2">
                      {notice.description}
                    </p>
                  </div>
                  
                  <div className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full bg-white border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 mt-2">
                    <ChevronRight
                      size={18}
                      className="text-neutral-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
