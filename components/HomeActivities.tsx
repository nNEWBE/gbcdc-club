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
  Compass,
  GraduationCap,
} from "lucide-react";
import Badge from "./Badge";
import ActionLink from "./ActionLink";
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
  {
    icon: Compass,
    title: "Mentorship",
    description: "One-on-one guidance from senior members and alumni.",
  },
  {
    icon: GraduationCap,
    title: "Alumni Connect",
    description: "Exclusive sessions and networking with successful graduates.",
  },
];
export default function HomeActivities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="py-12 md:py-16 bg-neutral-50" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="What We Do" icon={Rocket} variant="primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black"
          >
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-neutral-500 text-base max-w-xl mx-auto"
          >
            Programs designed to equip students with skills and experience for
            professional excellence.
          </motion.p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 grid-flow-row-dense">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.21, 1.02, 0.73, 1],
              }}
              className={`group relative overflow-hidden flex flex-col p-6 rounded-[24px] border border-primary/50 bg-white hover:-translate-y-[2px] cursor-pointer hover:border-primary/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ${
                [
                  "md:col-span-2 lg:col-span-2 lg:row-span-1",
                  "md:col-span-1 lg:col-span-1 lg:row-span-1",
                  "md:col-span-1 lg:col-span-1 lg:row-span-2",
                  "md:col-span-1 lg:col-span-1 lg:row-span-1",
                  "md:col-span-1 lg:col-span-1 lg:row-span-1",
                  "md:col-span-1 lg:col-span-1 lg:row-span-1",
                  "md:col-span-1 lg:col-span-2 lg:row-span-1",
                  "md:col-span-2 lg:col-span-2 lg:row-span-1",
                ][i % 8]
              }`}
            >
              <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none group-hover:scale-110 group-hover:-rotate-[-10deg] transform origin-center text-primary">
                <activity.icon size={130} strokeWidth={1} />
              </div>

              <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-primary/50 rounded-full blur-[60px]  transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-[48px] h-[48px] rounded-[14px] shadow-sm border flex items-center justify-center mb-5 shrink-0 transition-all duration-500 group-hover:scale-[1.1] group-hover:rotate-3 group-hover:shadow-md bg-primary/20 border-primary/50 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white">
                  <activity.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2 transition-colors duration-300 text-neutral-900 group-hover:text-primary">
                  {activity.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1 pr-2 text-neutral-500">
                  {activity.description}
                </p>
                <div className="mt-auto flex items-center gap-1.5 text-[0.8rem] font-bold transition-colors duration-300 text-neutral-400 text-primary">
                  <span className="uppercase tracking-wider">Learn more</span>
                  <ArrowRight
                    size={12}
                    className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-[2px] transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8"
        >
          <ActionLink
            href="/events"
            className="text-xs font-bold uppercase tracking-wide group"
          >
            View All Events
            <ArrowRight
              size={14}
              className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </ActionLink>
        </motion.div>
      </div>
    </section>
  );
}
