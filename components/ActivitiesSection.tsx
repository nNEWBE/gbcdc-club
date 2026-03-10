"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  BookOpen,
  Users,
  Mic2,
  Lightbulb,
  Award,
  Rocket,
} from "lucide-react";
import Badge from "./Badge";
const activities = [
  {
    icon: Briefcase,
    title: "Career Workshops",
    description:
      "Hands-on workshops covering resume writing, interview preparation, and professional etiquette for career success.",
    color: "bg-primary",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description:
      "Comprehensive programs in leadership, communication, digital skills, and project management for holistic growth.",
    color: "bg-primary/90",
  },
  {
    icon: Users,
    title: "Networking Events",
    description:
      "Connect with industry professionals, alumni, and peers through structured networking sessions and meetups.",
    color: "bg-primary/80",
  },
  {
    icon: Mic2,
    title: "Industry Talks",
    description:
      "Guest lectures and panel discussions featuring industry experts sharing insights and career guidance.",
    color: "bg-primary",
  },
  {
    icon: Lightbulb,
    title: "Training Sessions",
    description:
      "Specialized training in emerging technologies, entrepreneurship, and professional certifications.",
    color: "bg-primary/90",
  },
  {
    icon: Award,
    title: "Competitions",
    description:
      "Participate in case studies, hackathons, and inter-university competitions to showcase your skills.",
    color: "bg-primary/80",
  },
];
export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="activities" className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <Badge label="What We Do" icon={Rocket} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            We offer a diverse range of programs designed to equip students with
            the skills and experience needed for professional excellence.
          </motion.p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              
              <div
                className={`w-14 h-14 rounded-2xl ${activity.color} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
              >
                <activity.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-neutral-800">
                {activity.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {activity.description}
              </p>
              
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-primary transition-colors duration-300">
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
