"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Facebook, Mail, Shield, Crown, Star } from "lucide-react";
import Badge from "@/components/Badge";
const executiveMembers = [
  {
    name: "Md. Rakibul Hasan",
    position: "President",
    initials: "RH",
    department: "Business Administration",
    year: "4th Year",
    bio: "Leading GBCDC's vision for student career development and organizational growth. Passionate about creating opportunities for every student to discover their professional potential.",
    achievements: [
      "Founded mentorship program",
      "Secured 5 industry partnerships",
      "Organized 30+ events",
    ],
    social: { linkedin: "#", facebook: "#", email: "president@gbcdc.edu.bd" },
    tier: "president",
  },
  {
    name: "Fatima Akter",
    position: "Vice President",
    initials: "FA",
    department: "CSE",
    year: "3rd Year",
    bio: "Coordinating club operations and ensuring program excellence across all departments. Drives innovation in event planning and member engagement strategies.",
    achievements: [
      "Increased member engagement by 40%",
      "Led digital transformation",
      "Mentored 20+ juniors",
    ],
    social: { linkedin: "#", facebook: "#", email: "vp@gbcdc.edu.bd" },
    tier: "vp",
  },
  {
    name: "Sadia Islam",
    position: "General Secretary",
    initials: "SI",
    department: "English",
    year: "3rd Year",
    bio: "Managing organizational activities, documentation, and member communications with precision and dedication to club excellence.",
    achievements: [
      "Streamlined communication systems",
      "Managed 500+ member database",
      "Organized annual report",
    ],
    social: { linkedin: "#", facebook: "#", email: "secretary@gbcdc.edu.bd" },
    tier: "executive",
  },
  {
    name: "Tanvir Ahmed",
    position: "Treasurer",
    initials: "TA",
    department: "Accounting",
    year: "3rd Year",
    bio: "Overseeing financial planning, budgeting, and resource allocation ensuring transparency and efficiency in all club financial operations.",
    achievements: [
      "30% budget optimization",
      "Introduced digital payments",
      "Secured sponsorships worth ৳500K+",
    ],
    social: { linkedin: "#", facebook: "#", email: "treasurer@gbcdc.edu.bd" },
    tier: "executive",
  },
  {
    name: "Nusrat Jahan",
    position: "Director of Events",
    initials: "NJ",
    department: "Marketing",
    year: "3rd Year",
    bio: "Planning and executing impactful events, workshops, and seminars that deliver real value to every member and participant.",
    achievements: [
      "Organized Career Fair 2025",
      "50+ successful events",
      "Built event management framework",
    ],
    social: { linkedin: "#", facebook: "#", email: "events@gbcdc.edu.bd" },
    tier: "director",
  },
  {
    name: "Ariful Islam",
    position: "Director of Marketing",
    initials: "AI",
    department: "Mass Communication",
    year: "2nd Year",
    bio: "Building the club's brand presence through creative marketing, social media strategy, and visual storytelling.",
    achievements: [
      "5K+ social media followers",
      "Created brand guidelines",
      "Led 3 viral campaigns",
    ],
    social: { linkedin: "#", facebook: "#", email: "marketing@gbcdc.edu.bd" },
    tier: "director",
  },
  {
    name: "Mahmudul Haque",
    position: "Director of Training",
    initials: "MH",
    department: "BBA",
    year: "3rd Year",
    bio: "Designing and delivering comprehensive training programs that prepare members with real-world professional skills.",
    achievements: [
      "Launched 6 training tracks",
      "Trained 300+ students",
      "Industry curriculum alignment",
    ],
    social: { linkedin: "#", facebook: "#", email: "training@gbcdc.edu.bd" },
    tier: "director",
  },
  {
    name: "Rafia Sultan",
    position: "Director of PR",
    initials: "RS",
    department: "Journalism",
    year: "2nd Year",
    bio: "Managing public relations, media partnerships, and external communications to enhance GBCDC's visibility and reputation.",
    achievements: [
      "Secured 10+ media features",
      "Built alumni network",
      "Organized press conferences",
    ],
    social: { linkedin: "#", facebook: "#", email: "pr@gbcdc.edu.bd" },
    tier: "director",
  },
];
const tierConfig = {
  president: {
    gradient: "from-primary to-emerald-400",
    ring: "border-primary/30",
    badge: "President",
  },
  vp: {
    gradient: "from-neutral-800 to-neutral-600",
    ring: "border-neutral-400/30",
    badge: "Vice President",
  },
  executive: {
    gradient: "from-neutral-700 to-neutral-500",
    ring: "border-neutral-300/30",
    badge: null,
  },
  director: {
    gradient: "from-neutral-600 to-neutral-400",
    ring: "border-neutral-300/20",
    badge: null,
  },
};
export default function ExecutivePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <main className="min-h-screen pt-36 pb-20 bg-neutral-50" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge label="Leadership" icon={Crown} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Executive Committee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Meet the dedicated student leaders driving GBCDC&apos;s mission to
            empower the next generation of professionals.
          </motion.p>
        </div>
        {}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {executiveMembers.slice(0, 2).map((member, i) => {
            const config = tierConfig[member.tier as keyof typeof tierConfig];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="group relative bg-white rounded-2xl border border-border p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
              >
                {}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${config.gradient} opacity-5 rounded-bl-full`}
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  {}
                  <div
                    className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-3xl font-bold mb-5 group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-black/10`}
                  >
                    {member.initials}
                    <div
                      className={`absolute inset-0 rounded-full border-2 ${config.ring} scale-[1.15]`}
                    />
                    {member.tier === "president" && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Crown size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1 uppercase tracking-wider">
                    {member.position}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {member.department} | {member.year}
                  </p>
                  <p className="text-sm text-neutral-500 mt-4 leading-relaxed max-w-sm">
                    {member.bio}
                  </p>
                  {}
                  <div className="mt-5 w-full">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {member.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <Star
                            size={12}
                            className="text-primary shrink-0 fill-primary"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {}
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executiveMembers.slice(2).map((member, i) => {
            const config = tierConfig[member.tier as keyof typeof tierConfig];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="group bg-white rounded-2xl p-6 md:p-7 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10`}
                  >
                    {member.initials}
                    <div
                      className={`absolute inset-0 rounded-full border-2 ${config.ring} scale-110`}
                    />
                  </div>
                  <h3 className="text-base font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mt-1 uppercase tracking-wider">
                    {member.position}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {member.department} | {member.year}
                  </p>
                  <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                  {}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.achievements.slice(0, 2).map((a) => (
                      <Badge key={a} label={a} variant="ghost" className="bg-neutral-50 border-neutral-100 text-[10px] py-1" />
                    ))}
                  </div>
                  {}
                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook size={14} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
