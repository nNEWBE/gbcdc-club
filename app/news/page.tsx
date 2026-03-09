"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Newspaper, Clock, ArrowUpRight, TrendingUp, Award, Users, BookOpen } from "lucide-react";
import Image from "next/image";

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
            <Newspaper size={14} />
            News
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Catch up on achievements, milestones, and stories from the GBCDC
            community.
          </motion.p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group relative bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-2xl hover:shadow-black/8 transition-all duration-500 mb-12 cursor-pointer"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-none" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                Featured
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {featuredNews.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-400 font-medium">
                  <Clock size={12} />
                  {featuredNews.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                {featuredNews.title}
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {featuredNews.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400">{featuredNews.date}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                  Read Article
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, i) => {
            const Icon = categoryIcon[article.category] || Newspaper;
            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:border-neutral-300 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-black backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-neutral-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <span>Read more</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
