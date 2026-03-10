"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Newspaper, Calendar, Clock, User } from "lucide-react";
import Badge from "./Badge";
import ActionLink from "./ActionLink";

const latestNews = [
  {
    title: "GBCDC Awarded Best Club of the Year 2025",
    date: "March 5, 2026",
    author: "Admin GBCDC",
    description: "Our club has been recognized for its outstanding contribution to student career development and leadership excellence.",
    image: "/gallery-5.png",
    category: "Achievement",
  },
  {
    title: "New Strategic Partnership with Tech Giants",
    date: "February 28, 2026",
    author: "Career Desk",
    description: "We are thrilled to announce a new collaboration that will provide our members with exclusive internship opportunities.",
    image: "/gallery-3.png",
    category: "Partnership",
  },
  {
    title: "Student Spotlight: Success in National Pitch",
    date: "February 15, 2026",
    author: "Member Stories",
    description: "Hear from our member Sarah on how GBCDC's mentorship helped her win the national entrepreneurship challenge.",
    image: "/gallery-4.png",
    category: "Success Story",
  }
];

export default function HomeNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge label="Newsletter" icon={Newspaper} variant="primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
            >
              Latest News & Updates
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ActionLink href="/news" className="text-sm font-semibold group">
              More News
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </ActionLink>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news, i) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-3xl border border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <Badge label={news.category} variant="glass" className="text-[10px] font-black" />
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary/60" />
                    {news.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-[14px] text-neutral-500 line-clamp-2 mb-6 leading-relaxed">
                  {news.description}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <User size={12} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-neutral-600 truncate max-w-[100px]">
                      {news.author}
                    </span>
                  </div>
                  <Link 
                    href={`/news/${news.title.toLowerCase().replace(/ /g, '-')}`}
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest">
                      Read News
                    </span>
                    <ArrowUpRight 
                      size={14} 
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" 
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
