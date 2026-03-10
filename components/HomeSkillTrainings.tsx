"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Target, Users, Rocket } from "lucide-react";
import Badge from "./Badge";

export default function HomeSkillTrainings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative" ref={ref}>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#3aa869 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {} }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4">
              <Badge label="Skill Development Trainings" icon={GraduationCap} variant="primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
              Accelerate Your Path to a Successful Career
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/50 flex items-center justify-center text-primary shadow-sm">
                    <Target size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">Expert Mentorship</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-base">
                  Personalized guidance to shape your future.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/50 flex items-center justify-center text-primary shadow-sm">
                    <Users size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">Industry Network</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-base">
                  Connect with leaders and peers.
                </p>
              </div>
            </div>

            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              View All Courses
              <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {} }
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/2] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="/gallery-5.png"
                alt="Skill Development Session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {} }
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-5 rounded-2xl shadow-2xl border border-primary/50 flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-neutral-900">12+</div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                  Expert Courses
                </div>
              </div>
            </motion.div>

            
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-3xl rotate-12" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
