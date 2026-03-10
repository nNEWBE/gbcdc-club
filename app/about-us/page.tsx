"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Rocket,
  GraduationCap,
  Users,
  Calendar,
  Trophy,
  Heart,
  ArrowRight,
  CheckCircle2,
  Globe,
  BookOpen,
  Lightbulb,
  Shield,
} from "lucide-react";
const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between academic learning and professional excellence by providing career-focused resources, mentorship, and real-world experiences.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a community of skilled, confident, and career-ready graduates who lead with purpose, integrity, and a passion for continuous growth.",
  },
  {
    icon: Rocket,
    title: "Our Goal",
    description:
      "To equip every member with practical skills, industry knowledge, networking opportunities, and the confidence to thrive in their chosen career.",
  },
  {
    icon: GraduationCap,
    title: "Why Join",
    description:
      "Career development is essential for students to transition from academia to the professional world. GBCDC makes that transition seamless and empowering.",
  },
];
const milestones = [
  {
    year: "2021",
    title: "Club Founded",
    description:
      "GBCDC was established by a group of passionate students with a vision for career empowerment.",
  },
  {
    year: "2022",
    title: "First Career Fair",
    description:
      "Successfully organized the first Career Fair with 15 employers and 200+ attendees.",
  },
  {
    year: "2023",
    title: "500 Members Milestone",
    description:
      "The club reached 500 active members across 12 departments of the university.",
  },
  {
    year: "2024",
    title: "Industry Partnerships",
    description:
      "Established partnerships with 10 leading organizations for internship and mentorship programs.",
  },
  {
    year: "2025",
    title: "Best Club Award",
    description:
      "Recognized as the Best Career Development Club by the National University Clubs Association.",
  },
  {
    year: "2026",
    title: "Digital Expansion",
    description:
      "Launched online learning platform, alumni network portal, and expanded to cross-university collaborations.",
  },
];
const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "We believe in empowering every student to reach their full potential.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all operations.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Every student, regardless of background, has equal access to opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously evolve our programs to stay relevant in a changing world.",
  },
  {
    icon: Globe,
    title: "Community",
    description:
      "We foster a strong sense of belonging and mutual support among members.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "We promote lifelong learning as the foundation for professional success.",
  },
];
export default function AboutUsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <main className="min-h-screen pt-28 pb-20" ref={ref}>
      {}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
            >
              <GraduationCap size={14} />
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              GBCDC is the premier student-led career development organization
              at Gono Bishwabidyalay, dedicated to shaping future leaders
              through mentorship, skill-building, and real-world professional
              experiences.
            </motion.p>
          </div>
          {}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/about.png"
                  alt="GBCDC Team Discussion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Building Tomorrow&apos;s Leaders Today
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  The{" "}
                  <strong className="text-black">
                    Gono Bishwabidyalay Career Development Club (GBCDC)
                  </strong>{" "}
                  is a student-led organization committed to fostering
                  professional growth and career readiness among university
                  students.
                </p>
                <p>
                  Founded with a vision to empower students beyond the
                  classroom, GBCDC organizes workshops, seminars, networking
                  events, and skill development programs that prepare students
                  for the competitive job market.
                </p>
                <p>
                  Our club serves as a bridge between academic knowledge and
                  real-world professional skills, helping students discover
                  their potential and chart their career paths with confidence
                  and purpose.
                </p>
              </div>
              {}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { num: "5+", label: "Years Active" },
                  { num: "500+", label: "Members" },
                  { num: "100+", label: "Programs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-neutral-50 rounded-xl border border-border"
                  >
                    <div className="text-2xl font-bold text-primary">
                      {stat.num}
                    </div>
                    <div className="text-xs font-medium text-neutral-500 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group p-6 bg-neutral-50 rounded-2xl border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white group-hover:bg-white group-hover:text-primary flex items-center justify-center mb-4 transition-all duration-500">
                  <item.icon size={22} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Core Values
            </h2>
            <p className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at GBCDC.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <value.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">{value.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Key Milestones
            </h2>
            <p className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto">
              A timeline of growth, achievements, and impact since our founding.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                {}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-lg shadow-primary/20">
                    {milestone.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-primary/20 mt-2" />
                  )}
                </div>
                {}
                <div className="pb-8">
                  <h4 className="text-lg font-bold text-black mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Join 500+ students who are building the skills and network for a
            successful career. Your journey starts here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Join GBCDC
              <ArrowRight
                size={16}
                className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/executive"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
