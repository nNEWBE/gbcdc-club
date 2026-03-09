"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Mail,
  GraduationCap,
  Building2,
  Globe,
  BookOpen,
  Award,
  Quote,
} from "lucide-react";
const advisors = [
  {
    name: "Prof. Dr. Abdur Rashid",
    title: "Chairman, Advisory Committee",
    designation: "Vice Chancellor, Gono Bishwabidyalay",
    initials: "AR",
    expertise: [
      "University Leadership",
      "Academic Policy",
      "Institutional Development",
    ],
    message:
      "GBCDC represents the future of student-led career development. The dedication and vision of these young leaders inspire us all to contribute more to institutional excellence.",
    gradient: "from-primary to-emerald-400",
  },
  {
    name: "Prof. Dr. Nasreen Akhter",
    title: "Academic Advisor",
    designation: "Dean, Faculty of Business Studies",
    initials: "NA",
    expertise: ["Business Strategy", "Entrepreneurship", "Market Research"],
    message:
      "Career readiness is not just about skills—it's about building the confidence and mindset to navigate professional challenges. GBCDC bridges this gap beautifully.",
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    name: "Dr. Mohammad Karim",
    title: "Industry Liaison Advisor",
    designation: "Former Director, Bangladesh Bank",
    initials: "MK",
    expertise: ["Banking & Finance", "Policy Making", "Corporate Governance"],
    message:
      "Having served in the industry for three decades, I can confidently say that GBCDC's approach to career development is exactly what students need in today's competitive market.",
    gradient: "from-amber-600 to-orange-400",
  },
  {
    name: "Prof. Shamima Begum",
    title: "Research Advisor",
    designation: "Head of Department, Sociology",
    initials: "SB",
    expertise: ["Social Research", "Community Development", "Gender Studies"],
    message:
      "The club's focus on inclusive career development, ensuring equal opportunities regardless of background, aligns perfectly with the ethos of progressive education.",
    gradient: "from-purple-600 to-pink-400",
  },
  {
    name: "Mr. Ashraf Uddin",
    title: "Corporate Advisor",
    designation: "CEO, TechBridge Solutions",
    initials: "AU",
    expertise: ["Technology", "Startup Ecosystem", "Digital Transformation"],
    message:
      "As an alumni and now an industry leader, I'm proud to guide the next generation. The quality of GBCDC members we've hired has been consistently outstanding.",
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    name: "Dr. Farhana Rahman",
    title: "Curriculum Advisor",
    designation: "Professor, Department of English",
    initials: "FR",
    expertise: [
      "Communication Skills",
      "Academic Writing",
      "Professional Development",
    ],
    message:
      "Effective communication is the cornerstone of career success. I'm honored to help shape GBCDC's training programs that develop these essential competencies.",
    gradient: "from-rose-600 to-red-400",
  },
];
export default function AdvisoryPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <main className="min-h-screen pt-28 pb-20 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            <GraduationCap size={14} />
            Advisors
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Advisory Committee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Distinguished academics and industry leaders who provide strategic
            guidance, mentorship, and vision for GBCDC&apos;s growth.
          </motion.p>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-12"
        >
          <div className="group relative bg-neutral-50 rounded-3xl border border-border p-8 md:p-12 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
            {}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${advisors[0].gradient} flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-primary/20 mb-4`}
                >
                  {advisors[0].initials}
                </div>
                <h3 className="text-xl font-bold text-black">
                  {advisors[0].name}
                </h3>
                <p className="text-sm font-semibold text-primary mt-1">
                  {advisors[0].title}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  {advisors[0].designation}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white border border-border hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label={`${advisors[0].name}'s LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white border border-border hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label={`Email ${advisors[0].name}`}
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Quote size={20} className="text-primary/30" />
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Chairman&apos;s Message
                  </span>
                </div>
                <p className="text-neutral-600 text-lg leading-relaxed italic mb-6">
                  &ldquo;{advisors[0].message}&rdquo;
                </p>
                <div className="flex flex-wrap gap-2">
                  {advisors[0].expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1.5 bg-white border border-border rounded-full text-xs font-medium text-neutral-600"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.slice(1).map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="group bg-white rounded-2xl border border-border p-6 md:p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative"
            >
              {}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advisor.gradient}`}
              />
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${advisor.gradient} flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  {advisor.initials}
                </div>
                <h3 className="text-base font-bold text-black">
                  {advisor.name}
                </h3>
                <p className="text-xs font-semibold text-primary mt-1">
                  {advisor.title}
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {advisor.designation}
                </p>
                <p className="text-sm text-neutral-500 mt-4 leading-relaxed italic">
                  &ldquo;{advisor.message}&rdquo;
                </p>
                {}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {advisor.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-2 py-1 bg-neutral-50 rounded-full text-xs text-neutral-500 font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                {}
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label={`${advisor.name}'s LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label={`Email ${advisor.name}`}
                  >
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
