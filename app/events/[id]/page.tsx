"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Timer,
  Users,
  Share2,
  Ticket,
  Clock,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import Badge from "@/components/Badge";

const eventDetails = {
  title: "Career Bootcamp 2026",
  status: "Upcoming",
  date: "April 15-17, 2026",
  time: "10:00 AM - 4:00 PM",
  location: "Main Auditorium, Gono Bishwabidyalay",
  capacity: "500 Seats",
  price: "Free",
  image: "/gallery-1.png",
  description: `Join us for our flagship Career Bootcamp 2026! This comprehensive 3-day intensive program is designed specifically to bridge the gap between academic knowledge and industry expectations. 

Over the course of three days, you will have the unique opportunity to learn directly from leading industry professionals, participate in hands-on workshops, and fundamentally transform your professional profile. We will cover advanced resume optimization techniques that beat modern Applicant Tracking Systems (ATS), conduct live mock interviews with real hiring managers, and explore strategies to build a compelling personal brand on platforms like LinkedIn.

Whether you're looking for your first internship or preparing to launch your full-time career, this bootcamp will provide you with the actionable insights and confidence necessary to stand out in today's competitive job market.`,
  agenda: [
    { day: "Day 1", title: "Personal Branding & Resume Optimization" },
    { day: "Day 2", title: "Mock Interviews & Communication Skills" },
    { day: "Day 3", title: "Networking & Industry Expert Panel" },
  ],
};

export default function EventDetails({ params }: { params: { id: string } }) {

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 selection:bg-primary/20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <nav className="flex items-center gap-2 mb-10 overflow-x-auto whitespace-nowrap pb-2 select-none">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors">
              <Home size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold">Home</span>
          </Link>
          
          <ChevronRight size={16} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <Link
            href="/events"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors">
              <Calendar size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold">Events</span>
          </Link>
          
          <ChevronRight size={16} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <div className="flex items-center gap-2.5 text-primary">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10">
              <Timer size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">{eventDetails.title}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <Badge
              label={eventDetails.status}
              icon={Timer}
              variant="primary"
              className="mb-6"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight mb-6 leading-[1.1]">
              {eventDetails.title}
            </h1>
            <p className="text-xl text-neutral-500 font-medium mb-10 leading-relaxed max-w-lg">
              Level up your professional skills with three days of intensive
              training and exclusive industry networking.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Calendar size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                    Date
                  </div>
                  <div className="text-[15px] font-bold text-neutral-900">
                    {eventDetails.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                  <Clock size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                    Time
                  </div>
                  <div className="text-[15px] font-bold text-neutral-900">
                    {eventDetails.time}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-base font-bold rounded-full hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group">
                <Ticket
                  size={20}
                  className="group-hover:-rotate-12 transition-transform"
                />
                Register Now
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-600 border border-neutral-200 text-base font-bold rounded-full hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-neutral-200/60 bg-neutral-100">
              <Image
                src={eventDetails.image}
                alt={eventDetails.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[24px] bg-white/90 backdrop-blur-xl border border-white shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wide">
                      Location
                    </div>
                    <div className="text-sm font-bold text-neutral-900">
                      {eventDetails.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200/60 pt-20" />

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
              About This Event
            </h2>
            <div className="prose prose-lg prose-neutral max-w-none text-neutral-500 leading-relaxed whitespace-pre-wrap">
              {eventDetails.description}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-neutral-50 rounded-[32px] p-8 md:p-10 border border-primary/50">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-8">
                Event Agenda
              </h2>
              <div className="space-y-6">
                {eventDetails.agenda.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-start gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-primary/50 flex items-center justify-center shadow-sm text-primary font-bold z-10 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        {idx + 1}
                      </div>
                      {idx !== eventDetails.agenda.length - 1 && (
                        <div className="w-px h-full min-h-[40px] bg-primary/50 my-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-bold text-primary mb-1">
                        {item.day}
                      </div>
                      <div className="text-[17px] font-bold text-neutral-900 leading-snug">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-primary/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Capacity
                    </div>
                    <div className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                      <Users size={20} className="text-neutral-400" />
                      {eventDetails.capacity}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Price
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {eventDetails.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
