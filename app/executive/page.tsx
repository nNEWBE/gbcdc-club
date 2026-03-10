"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Linkedin, 
  Facebook, 
  Mail, 
  Crown, 
  Star, 
  User,
  ArrowRight
} from "lucide-react";
import Badge from "@/components/Badge";

const executiveMembers = [
  {
    name: "Md. Rakibul Hasan",
    slug: "md-rakibul-hasan",
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
    slug: "fatima-akter",
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
    slug: "sadia-islam",
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
    slug: "tanvir-ahmed",
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
    slug: "nusrat-jahan",
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
    slug: "ariful-islam",
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
    slug: "mahmudul-haque",
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
    slug: "rafia-sultan",
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
  {
    name: "Ahsan Habib",
    slug: "ahsan-habib",
    position: "Executive Member",
    initials: "AH",
    department: "CSE",
    year: "2nd Year",
    bio: "Active contributor to technical initiatives and workshop coordination. Dedicated to building a strong tech culture within GBCDC.",
    achievements: [
      "Technical Lead for Career Fair",
      "Organized 5 coding workshops",
    ],
    social: { linkedin: "#", facebook: "#", email: "ahsan@gbcdc.edu.bd" },
    tier: "executive_member",
  },
  {
    name: "Tahmina Akter",
    slug: "tahmina-akter",
    position: "Executive Member",
    initials: "TA",
    department: "BBA",
    year: "2nd Year",
    bio: "Passionate about marketing strategies and student outreach. Plays a key role in member recruitment and club branding.",
    achievements: [
      "Led design for Annual Gala",
      "Recruited 100+ new members",
    ],
    social: { linkedin: "#", facebook: "#", email: "tahmina@gbcdc.edu.bd" },
    tier: "executive_member",
  },
  {
    name: "Maruf Hasan",
    slug: "maruf-hasan",
    position: "Executive Member",
    initials: "MH",
    department: "Law",
    year: "2nd Year",
    bio: "Ensures legal compliance and organizational transparency. Actively participates in policy-making and club ethics.",
    achievements: [
      "Drafted new club constitution",
      "Legal advisor for partnerships",
    ],
    social: { linkedin: "#", facebook: "#", email: "maruf@gbcdc.edu.bd" },
    tier: "executive_member",
  },
  {
    name: "Nishat Mazumder",
    slug: "nishat-mazumder",
    position: "Executive Member",
    initials: "NM",
    department: "Pharmacy",
    year: "2nd Year",
    bio: "Coordinates health and wellness programs for club members. Strong advocate for work-life balance in career growth.",
    achievements: [
      "Led university-wide health drive",
      "Wellness workshop coordinator",
    ],
    social: { linkedin: "#", facebook: "#", email: "nishat@gbcdc.edu.bd" },
    tier: "executive_member",
  },
  {
    name: "Sultan Ahmed",
    slug: "sultan-ahmed",
    position: "Executive Member",
    initials: "SA",
    department: "English",
    year: "2nd Year",
    bio: "Contributes to club documentation and editorial projects. Skilled in professional communication and report writing.",
    achievements: [
      "Chief Editor for Career Guide",
      "Managed annual report 2024",
    ],
    social: { linkedin: "#", facebook: "#", email: "sultan@gbcdc.edu.bd" },
    tier: "executive_member",
  },
];

export default function ExecutivePage() {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const config = {
    president: {
      color: "bg-primary",
      icon: Crown,
      badge: "President"
    },
    vp: {
      color: "bg-primary",
      icon: Crown,
      badge: "Vice President"
    },
    director: {
      color: "bg-primary/80",
      icon: Star,
      badge: "Director"
    },
    executive: {
      color: "bg-primary/70",
      icon: User,
      badge: "Executive"
    },
    executive_member: {
      color: "bg-primary/60",
      icon: User,
      badge: "Executive Member"
    }
  };

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
            <Badge label="Leadership" icon={Crown} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Executive Committee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Meet the dedicated student leaders driving GBCDC&apos;s mission to
            empower the next generation of professionals.
          </motion.p>
        </div>

        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 whitespace-nowrap">Board of Directors</h2>
            <div className="h-px w-full bg-primary/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executiveMembers.filter(m => m.tier !== "executive_member").map((member, i) => {
              const memberConfig = config[member.tier as keyof typeof config];
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {} }
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => router.push(`/executive/${member.slug}`)}
                  className="group flex flex-col items-center bg-white p-6 py-6 rounded-[2rem] border border-primary/50 hover:border-primary hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer text-center relative"
                >
                  <div className="relative mb-4">
                    <div className="p-1.5 border border-primary/5 rounded-full group-hover:border-primary/20 transition-colors duration-500">
                      <div className={`w-24 h-24 rounded-full ${memberConfig.color} flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-primary/10 group-hover:scale-105 transition-transform duration-500`}>
                        {member.initials}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                        <memberConfig.icon size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-[17px] font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300 leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-1.5">
                      {member.position}
                    </p>
                    <div className="text-[11px] text-neutral-400 font-medium leading-tight">
                      {member.department}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 mt-4">
                    <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Linkedin size={14} />
                    </a>
                    <a href={member.social.facebook} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Facebook size={14} />
                    </a>
                    <a href={`mailto:${member.social.email}`} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Mail size={14} />
                    </a>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-neutral-100 w-full group-hover:border-primary/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-primary/70 group-hover:text-primary uppercase tracking-widest">
                      Profile <ArrowRight size={10} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 whitespace-nowrap">Executive Members</h2>
            <div className="h-px w-full bg-primary/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executiveMembers.filter(m => m.tier === "executive_member").map((member, i) => {
              const memberConfig = config[member.tier as keyof typeof config];
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {} }
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => router.push(`/executive/${member.slug}`)}
                  className="group flex flex-col items-center bg-white p-6 py-6 rounded-[2rem] border border-primary/50 hover:border-primary hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer text-center relative"
                >
                  <div className="relative mb-4">
                    <div className="p-1 border border-primary/5 rounded-full group-hover:border-primary/20 transition-colors duration-500">
                      <div className={`w-24 h-24 rounded-full ${memberConfig.color} flex items-center justify-center text-white text-2xl font-bold shadow-xl shadow-primary/10 group-hover:scale-105 transition-transform duration-500`}>
                        {member.initials}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                        <memberConfig.icon size={12} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center flex-1">
                    <h3 className="text-[17px] font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300 leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-1.5">
                      {member.position}
                    </p>
                    <div className="text-[11px] text-neutral-400 font-medium leading-tight line-clamp-2">
                      {member.department}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 mt-4">
                    <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Linkedin size={14} />
                    </a>
                    <a href={member.social.facebook} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Facebook size={14} />
                    </a>
                    <a href={`mailto:${member.social.email}`} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-xl bg-primary/5 border border-primary/50 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-300">
                      <Mail size={14} />
                    </a>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-neutral-100 w-full group-hover:border-primary/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-primary/70 group-hover:text-primary uppercase tracking-widest">
                      Profile <ArrowRight size={10} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
