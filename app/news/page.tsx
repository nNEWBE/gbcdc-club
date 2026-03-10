"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Newspaper,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  Calendar,
  ArrowRight,
  User,
} from "lucide-react";
import Badge from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";
const featuredNews = {
  title: "GBCDC Hosts Largest Career Fair in University History",
  date: "March 8, 2026",
  category: "Achievement",
  description:
    "Over 500 students and 30 leading employers participated in GBCDC's annual Career Fair, making it the most successful career event in the history of Gono Bishwabidyalay. The event featured live interviews, resume workshops, and exclusive networking sessions.",
  image: "/gallery-3.png",
  readTime: "5 min read",
};
const newsArticles = [
  {
    title: "GBCDC Members Secure Top Internships at Leading Tech Firms",
    date: "March 5, 2026",
    category: "Member Success",
    description:
      "15 GBCDC members have secured competitive summer internships at top technology companies including Google, Samsung, and local unicorn startups through the club's industry partnership program.",
    image: "/gallery-1.png",
    readTime: "3 min read",
  },
  {
    title: "New Partnership with Bangladesh Youth Leadership Forum",
    date: "March 1, 2026",
    category: "Partnership",
    description:
      "GBCDC announced a strategic partnership with BYLF to offer exclusive leadership training, mentorship programs, and conference access to all active members.",
    image: "/gallery-2.png",
    readTime: "4 min read",
  },
  {
    title: "Workshop Series Reaches 1000 Participant Milestone",
    date: "February 25, 2026",
    category: "Milestone",
    description:
      "Our continuous skill development workshops have now trained over 1,000 students across programming, design thinking, financial literacy, and professional communication tracks.",
    image: "/gallery-5.png",
    readTime: "3 min read",
  },
  {
    title: "GBCDC Recognized as Best University Club 2025",
    date: "February 18, 2026",
    category: "Award",
    description:
      "The National University Clubs Association has awarded GBCDC the 'Best Career Development Club 2025' recognition for outstanding contribution to student professional growth.",
    image: "/gallery-4.png",
    readTime: "4 min read",
  },
  {
    title: "Alumni Mentorship Program Launches Second Cohort",
    date: "February 10, 2026",
    category: "Program",
    description:
      "Following the success of the first cohort, the Alumni Mentorship Program launches with 25 industry-experienced mentors and 75 mentees paired by career interest and expertise areas.",
    image: "/gallery-1.png",
    readTime: "3 min read",
  },
  {
    title: "Digital Transformation Initiative for Club Operations",
    date: "February 1, 2026",
    category: "Innovation",
    description:
      "GBCDC introduces a new digital platform for event management, member communications, and resource sharing, streamlining all club operations for better engagement.",
    image: "/gallery-2.png",
    readTime: "2 min read",
  },
];
const categoryIcon: Record<string, typeof Award> = {
  Achievement: TrendingUp,
  "Member Success": Users,
  Partnership: Users,
  Milestone: Award,
  Award: Award,
  Program: BookOpen,
  Innovation: TrendingUp,
};
export default function NewsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <main className="min-h-screen pt-36 pb-20 bg-white" ref={ref}>
      <div className="section-container">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="News" icon={Newspaper} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Catch up on achievements, milestones, and stories from the GBCDC
            community.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {} }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-white rounded-[2.5rem] border border-primary/50 overflow-hidden mb-12 cursor-pointer"
        >
          <div className="grid lg:grid-cols-12 gap-0">
            
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] overflow-hidden">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
              
              
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Featured Story
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {featuredNews.category}
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium">
                  <Clock size={14} className="opacity-70" />
                  {featuredNews.readTime}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-3 leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500">
                {featuredNews.title}
              </h2>
              
              <p className="text-base text-neutral-500 leading-relaxed mb-4 line-clamp-3 font-medium">
                {featuredNews.description}
              </p>

              <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Published on</span>
                  <span className="text-sm text-neutral-900 font-bold">{featuredNews.date}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 ring-4 ring-transparent group-hover:ring-primary/10">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, i) => {
            const Icon = categoryIcon[article.category] || Newspaper;
            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {} }
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="group flex flex-col h-full bg-white rounded-3xl border border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge label={article.category} variant="glass" className="text-[10px] font-black" />
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary/60" />
                      {article.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-200" />
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="text-primary/60" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-[14px] text-neutral-500 line-clamp-2 mb-6 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-neutral-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={12} className="text-primary" />
                      </div>
                      <span className="text-xs font-bold text-neutral-600">
                        Admin
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="text-[11px] font-black uppercase tracking-widest">
                        Read News
                      </span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
