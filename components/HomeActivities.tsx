"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Briefcase,
  BookOpen,
  Users,
  Mic2,
  Lightbulb,
  Award,
  ArrowRight,
  Rocket,
} from "lucide-react";
import Badge from "./Badge";
const activities = [
  {
    icon: Briefcase,
    title: "Career Workshops",
    description:
      "Resume writing, interview preparation, and professional etiquette.",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description:
      "Leadership, communication, digital skills, and project management.",
  },
  {
    icon: Users,
    title: "Networking Events",
    description: "Connect with industry professionals, alumni, and peers.",
  },
  {
    icon: Mic2,
    title: "Industry Talks",
    description:
      "Guest lectures from industry experts sharing career insights.",
  },
  {
    icon: Lightbulb,
    title: "Training Sessions",
    description: "Emerging technologies, entrepreneurship, and certifications.",
  },
  {
    icon: Award,
    title: "Competitions",
    description: "Case studies, hackathons, and inter-university competitions.",
  },
];
export default function HomeActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="What We Do" icon={Rocket} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Programs designed to equip students with skills and experience for
            professional excellence.
          </motion.p>
        </div>
        {}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group relative p-8 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                <activity.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {activity.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {activity.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-neutral-400 group-hover:text-primary transition-colors duration-300">
                <span>Learn more</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            Explore All Courses
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
