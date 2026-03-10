"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Mail,
  Facebook,
  GraduationCap,
  Quote,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import Badge from "@/components/Badge";

const advisoryPanel = [
  {
    name: "Professor Dr. Md. Abul Hossain",
    title: "Chief Advisor",
    designation: "Vice Chancellor, Gono Bishwabidyalay",
    initials: "AH",
    department: "Institutional Leadership",
    type: "advisor",
    isChairman: true,
    expertise: ["University Policy", "Academic Strategy"],
    social: { linkedin: "#", facebook: "#", email: "vc@gbc.edu.bd" },
    profileUrl: "#",
    gradient: "from-primary to-emerald-400",
  },
  {
    name: "Prof. Dr. Nasreen Akhter",
    title: "Academic Advisor",
    designation: "Dean, Faculty of Business Studies",
    initials: "NA",
    department: "Business Administration",
    type: "advisor",
    expertise: ["Business Strategy", "Entrepreneurship"],
    social: { linkedin: "#", facebook: "#", email: "dean.bus@gbc.edu.bd" },
    profileUrl: "#",
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    name: "Mr. Ashraf Uddin",
    title: "Industry Mentor",
    designation: "CEO, TechBridge Solutions",
    initials: "AU",
    department: "Corporate Tech",
    type: "mentor",
    expertise: ["Technology", "Startups"],
    social: { linkedin: "#", facebook: "#", email: "ceo@techbridge.com" },
    profileUrl: "#",
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    name: "Dr. Mohammad Karim",
    title: "Policy Advisor",
    designation: "Former Director, Bangladesh Bank",
    initials: "MK",
    department: "Finance & Economy",
    type: "advisor",
    expertise: ["Banking", "Governance"],
    social: { linkedin: "#", facebook: "#", email: "karim@bank.org" },
    profileUrl: "#",
    gradient: "from-amber-600 to-orange-400",
  },
  {
    name: "Dr. Farhana Rahman",
    title: "Industry Mentor",
    designation: "CTO, NextGen IT",
    initials: "FR",
    department: "Software Engineering",
    type: "mentor",
    expertise: ["Development", "AI"],
    social: { linkedin: "#", facebook: "#", email: "cto@nextgen.it" },
    profileUrl: "#",
    gradient: "from-rose-600 to-red-400",
  },
  {
    name: "Prof. Shamima Begum",
    title: "Research Advisor",
    designation: "Head of Sociology Department",
    initials: "SB",
    department: "Social Research",
    type: "advisor",
    expertise: ["Research", "Sociology"],
    social: { linkedin: "#", facebook: "#", email: "sh.begum@gbc.edu.bd" },
    profileUrl: "#",
    gradient: "from-purple-600 to-pink-400",
  },
];

export default function AdvisoryPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const renderCard = (member: any, i: number) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {} }
      transition={{ duration: 0.4, delay: i * 0.05 }}
      onClick={() => window.open(member.profileUrl, '_blank')}
      className="group flex flex-col items-center bg-white p-6 py-6 rounded-[2rem] border border-primary/50 hover:border-primary hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer text-center relative"
    >
      <div className="relative mb-5">
        <div className="p-1.5 border border-primary/5 rounded-full group-hover:border-primary/20 transition-colors duration-500">
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-primary/10 group-hover:scale-105 transition-transform duration-500`}>
            {member.initials}
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[10px]">
            {member.type === 'mentor' ? <Zap size={10} /> : <GraduationCap size={10} />}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center flex-1">
        <h3 className="text-[17px] font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300 leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-1.5">
          {member.title}
        </p>
        <div className="text-[11px] text-neutral-400 font-medium leading-tight mb-3">
          {member.designation}
        </div>
        
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {member.expertise.map((exp: string) => (
            <span key={exp} className="px-2.5 py-1 bg-neutral-50 border border-neutral-100 rounded-lg text-[9px] font-bold text-neutral-500 uppercase tracking-tighter">
              {exp}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2.5 mt-auto">
        <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
          <Linkedin size={14} />
        </a>
        <a href={member.social.facebook} onClick={(e) => e.stopPropagation()} target="_blank" className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
          <Facebook size={14} />
        </a>
        <a href={`mailto:${member.social.email}`} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
          <Mail size={14} />
        </a>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen pt-36 pb-20 bg-neutral-50" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="Advisory" icon={ShieldCheck} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Advisory Council
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Distinguished experts from academia and industry who provide 
            strategic guidance and professional mentorship.
          </motion.p>
        </div>

        {/* Chairman Highlight Card */}
        <div className="mb-20">
          {advisoryPanel.filter(m => m.isChairman).map((chairman, i) => (
            <motion.div
              key={chairman.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {} }
              transition={{ duration: 0.6 }}
              onClick={() => window.open(chairman.profileUrl, '_blank')}
              className="relative max-w-4xl mx-auto bg-[#0f141e] rounded-[3rem] p-8 md:p-12 overflow-hidden border border-white/5 shadow-2xl cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className={`w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${chairman.gradient} flex items-center justify-center text-white text-5xl font-black shadow-2xl border-4 border-white/10 shrink-0`}>
                  {chairman.initials}
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/30">
                    <Quote size={10} /> Vice Chancellor
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{chairman.name}</h2>
                  <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">{chairman.title}</p>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 italic">
                    "GBCDC represents the future of student-led career development. The dedication 
                    of these young leaders inspire us all to contribute more to institutional excellence."
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <a href={chairman.social.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href={chairman.social.facebook} onClick={(e) => e.stopPropagation()} target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all">
                      <Facebook size={18} />
                    </a>
                    <a href={`mailto:${chairman.social.email}`} onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section: Academic Advisors */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 whitespace-nowrap">Academic Advisors</h2>
            <div className="h-px w-full bg-primary/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryPanel.filter(m => m.type === 'advisor' && !m.isChairman).map((member, i) => renderCard(member, i))}
          </div>
        </div>

        {/* Section: Industry Mentors */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 whitespace-nowrap">Industry Mentors</h2>
            <div className="h-px w-full bg-primary/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryPanel.filter(m => m.type === 'mentor').map((member, i) => renderCard(member, i))}
          </div>
        </div>
      </div>
    </main>
  );
}
