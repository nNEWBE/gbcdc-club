"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Facebook, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Md. Rakibul Hasan",
    position: "President",
    image: null,
    initials: "RH",
    bio: "Leading GBCDC's vision for student career development and organizational growth.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "president@gbcdc.edu.bd",
    },
  },
  {
    name: "Fatima Akter",
    position: "Vice President",
    image: null,
    initials: "FA",
    bio: "Coordinating club operations and ensuring program excellence across all departments.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "vp@gbcdc.edu.bd",
    },
  },
  {
    name: "Sadia Islam",
    position: "General Secretary",
    image: null,
    initials: "SI",
    bio: "Managing organizational activities, documentation, and member communications.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "secretary@gbcdc.edu.bd",
    },
  },
  {
    name: "Tanvir Ahmed",
    position: "Treasurer",
    image: null,
    initials: "TA",
    bio: "Overseeing financial planning, budgeting, and resource allocation for club activities.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "treasurer@gbcdc.edu.bd",
    },
  },
  {
    name: "Nusrat Jahan",
    position: "Director of Events",
    image: null,
    initials: "NJ",
    bio: "Planning and executing impactful events, workshops, and seminars for members.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "events@gbcdc.edu.bd",
    },
  },
  {
    name: "Ariful Islam",
    position: "Director of Marketing",
    image: null,
    initials: "AI",
    bio: "Building the club's brand presence through creative marketing and social media strategies.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "marketing@gbcdc.edu.bd",
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-black text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Executive Committee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Meet the dedicated team behind GBCDC, working tirelessly to create
            opportunities for every member.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 text-center border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10">
                {member.initials}
                {/* Ring decoration */}
                <div className="absolute inset-0 rounded-full border-2 border-neutral-300/50 group-hover:border-black/20 transition-colors duration-500 scale-110" />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-black">{member.name}</h3>
              <p className="text-sm font-medium text-neutral-500 mt-1 uppercase tracking-wider">
                {member.position}
              </p>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <a
                  href={member.social.linkedin}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={member.social.facebook}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={`${member.name}'s Facebook`}
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
