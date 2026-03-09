"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Target, Eye, Rocket, GraduationCap } from "lucide-react";
const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between academic learning and professional excellence by providing career-focused resources and experiences.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a community of skilled, confident, and career-ready graduates who lead with purpose and integrity.",
  },
  {
    icon: Rocket,
    title: "Our Goal",
    description:
      "To equip every member with practical skills, industry knowledge, and networking opportunities for career success.",
  },
  {
    icon: GraduationCap,
    title: "Why It Matters",
    description:
      "Career development is essential for students to transition from academia to the professional world with confidence.",
  },
];
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            GBCDC is the premier career development organization at Gono
            Bishwabidyalay, dedicated to shaping future leaders.
          </motion.p>
        </div>
        {}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {}
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
            {}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-border rounded-2xl -z-10" />
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Building Tomorrow&apos;s Leaders Today
            </h3>
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
                Founded with a vision to empower students beyond the classroom,
                GBCDC organizes workshops, seminars, networking events, and
                skill development programs that prepare students for the
                competitive job market.
              </p>
              <p>
                Our club serves as a bridge between academic knowledge and
                real-world professional skills, helping students discover their
                potential and chart their career paths with confidence.
              </p>
            </div>
            {}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "5+", label: "Years Active" },
                { num: "500+", label: "Members" },
                { num: "100+", label: "Programs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-neutral-50 rounded-xl"
                >
                  <div className="text-2xl font-bold text-black">
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
              className="group p-6 bg-neutral-50 rounded-2xl hover:bg-primary hover:text-white transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-white group-hover:bg-white group-hover:text-primary flex items-center justify-center mb-4 transition-all duration-500">
                <item.icon size={22} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors duration-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
