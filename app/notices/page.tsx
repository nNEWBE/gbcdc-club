"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Pin, Clock, ChevronRight, FileText, AlertCircle, Calendar, Megaphone } from "lucide-react";

const pinnedNotices = [
  {
    title: "Annual General Meeting 2026",
    date: "March 25, 2026",
    category: "General",
    priority: "high",
    description:
      "All members are invited to attend the Annual General Meeting. Agenda includes election of the new executive body, annual report presentation, budget review, and future planning. Attendance is mandatory for all active members.",
  },
  {
    title: "Membership Renewal Deadline Extended",
    date: "March 20, 2026",
    category: "Membership",
    priority: "high",
    description:
      "The deadline for membership renewal has been extended to April 15, 2026. Members who fail to renew will lose access to club events, workshops, and exclusive resources. Renew through the club office or online portal.",
  },
];

const recentNotices = [
  {
    title: "New Workshop Series: Professional Communication",
    date: "March 12, 2026",
    category: "Workshop",
    description:
      "A 4-week workshop series on professional communication skills starting April 1st. Covers business writing, presentation skills, email etiquette, and negotiation techniques.",
  },
  {
    title: "Summer Internship Opportunities",
    date: "March 10, 2026",
    category: "Opportunity",
    description:
      "GBCDC has partnered with 12 leading organizations for exclusive summer internship placements. Applications are now open for all department members.",
  },
  {
    title: "Photography Contest Results Announced",
    date: "March 8, 2026",
    category: "Event",
    description:
      "Congratulations to the winners of our 'Campus Life' photography contest. The winning entries will be featured in the annual club magazine.",
  },
  {
    title: "New Library Resources Available",
    date: "March 5, 2026",
    category: "Resource",
    description:
      "The GBCDC resource library has been updated with over 50 new career development books, interview guides, and industry certification study materials.",
  },
  {
    title: "Volunteer Registration Open for Career Fair",
    date: "March 2, 2026",
    category: "Volunteer",
    description:
      "We need 40 volunteers for the upcoming Career Fair 2026. Volunteers receive a certificate of appreciation and priority networking sessions with employers.",
  },
  {
    title: "Club Room Schedule Update",
    date: "February 28, 2026",
    category: "General",
    description:
      "The GBCDC club room will now operate from 9:00 AM to 6:00 PM on weekdays and 10:00 AM to 2:00 PM on Saturdays. Closed on Sundays and public holidays.",
  },
];

const categoryColors: Record<string, string> = {
  General: "bg-primary/10 text-primary",
  Membership: "bg-amber-50 text-amber-600",
  Workshop: "bg-blue-50 text-blue-600",
  Opportunity: "bg-emerald-50 text-emerald-600",
  Event: "bg-purple-50 text-purple-600",
  Resource: "bg-cyan-50 text-cyan-600",
  Volunteer: "bg-rose-50 text-rose-600",
};

export default function NoticesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen pt-28 pb-20 bg-neutral-50" ref={ref}>
      <div className="section-container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            <Bell size={14} />
            Announcements
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Notices & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stay informed with the latest announcements, important deadlines,
            and official updates from GBCDC.
          </motion.p>
        </div>

        {/* Pinned Notices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Pin size={18} className="text-primary" />
            <h2 className="text-lg font-bold text-black">Pinned Notices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pinnedNotices.map((notice, i) => (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative bg-white rounded-2xl border-2 border-primary/20 p-6 md:p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-4 right-4">
                  <AlertCircle size={20} className="text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[notice.category]}`}>
                    {notice.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-neutral-400 font-medium">
                    <Clock size={12} />
                    {notice.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                  {notice.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {notice.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Read full notice</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Notices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Megaphone size={18} className="text-neutral-600" />
            <h2 className="text-lg font-bold text-black">Recent Notices</h2>
          </div>
          <div className="space-y-4">
            {recentNotices.map((notice, i) => (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="group bg-white rounded-xl border border-neutral-200/80 p-6 hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5 transition-all duration-400 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-neutral-100 text-neutral-500 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[notice.category]}`}>
                        {notice.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-400">
                        <Calendar size={12} />
                        {notice.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {notice.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                  <ChevronRight size={20} className="hidden sm:block shrink-0 text-neutral-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
