"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight, Timer, Clock, Users, Hash, UserPlus } from "lucide-react";

export interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: string;
  time?: string;
  category?: string;
  attendees?: number;
}

interface EventCardProps {
  event: Event;
  index: number;
  isInView: boolean;
}

export default function EventCard({ event, index, isInView }: EventCardProps) {
  const slug = event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
      className="group relative bg-white flex flex-col h-full rounded-[24px] border border-primary/50 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
    >
      <div className="p-2 sm:p-2.5 pb-0">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[18px]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <Timer size={12} strokeWidth={2.5} />
            {event.status}
          </div>

          {event.category && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
              <Hash size={10} strokeWidth={2.5} />
              {event.category}
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 px-4 py-2.5 rounded-[12px] bg-white shadow-lg flex items-center gap-2 text-neutral-900 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
            <Calendar size={14} className="text-neutral-700" strokeWidth={2.5} />
            <span className="text-[13px] font-bold leading-none tracking-tight">
              {event.date}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-1 bg-white">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-neutral-400/90 tracking-tight mb-3">
          {event.time && (
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/50 flex items-center justify-center shrink-0">
                <Clock size={11} strokeWidth={2.5} className="text-primary/70" />
              </div>
              <span>{event.time}</span>
            </div>
          )}

          {event.attendees && (
            <div className="flex items-center gap-1.5 pl-3 border-l border-primary/50">
              <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/50 flex items-center justify-center shrink-0">
                <Users size={11} strokeWidth={2.5} className="text-primary/70" />
              </div>
              <span>{event.attendees}+ attending</span>
            </div>
          )}
        </div>

        <h3 className="text-[20px] md:text-[22px] font-bold text-neutral-900 tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-[14px] font-medium text-neutral-500 leading-relaxed line-clamp-2 mb-5">
          {event.description}
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/50 flex items-center justify-center shrink-0">
              <MapPin size={12} strokeWidth={2.5} className="text-primary" />
            </div>
            <span className="text-[12px] font-bold text-neutral-600 pr-1">{event.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mt-auto pt-2">
          <Link
            href={`/events/${slug}`}
            className="inline-flex items-center gap-2 text-[14px] font-bold text-primary group/btn"
          >
            View Details
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
          
          {event.status === "Upcoming" && (
            <button className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2 group/reg shadow-sm hover:shadow-primary/20">
              <UserPlus size={13} className="shrink-0 transition-transform duration-300 group-hover/reg:scale-110" />
              Register
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
