"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CourseCardSkeleton } from "@/components/SkeletonCard";
import Image from "next/image";
import {
  BookOpen,
  Clock,
  Users,
  ArrowRight,
  Monitor,
  PenTool,
  TrendingUp,
  Code,
  Briefcase,
  BarChart3,
  Filter,
  Search,
  Globe,
  FileText,
} from "lucide-react";
import Badge from "@/components/Badge";

const categories = ["All", "Tech", "Business", "Design", "Marketing"];

const courses = [
  {
    id: "1",
    icon: Monitor,
    title: "Digital Marketing Fundamentals",
    instructor: "Prof. Rahman Ahmed",
    duration: "8 weeks",
    students: "1.2k",
    lessons: 24,
    hours: 18,
    language: "English",
    level: "Beginner",
    rating: 4.8,
    category: "Marketing",
    description: "Master the essentials of SEO, social media, and content strategy with real-world campaigns.",
    modules: [
      "Social Media Strategy",
      "SEO Optimization",
      "Content Marketing",
      "Google Analytics",
    ],
    image: "/gallery-5.png",
  },
  {
    id: "2",
    icon: Code,
    title: "Web Development Bootcamp",
    instructor: "Eng. Tanvir Hossain",
    duration: "12 weeks",
    students: "850",
    lessons: 48,
    hours: 36,
    language: "English",
    level: "Intermediate",
    rating: 4.9,
    category: "Tech",
    description: "Full-stack development with React, Node.js and modern database architecture.",
    modules: [
      "HTML & CSS Mastery",
      "JavaScript ES6+",
      "React & Next.js",
      "Node.js Backend",
    ],
    image: "/gallery-3.png",
  },
  {
    id: "3",
    icon: TrendingUp,
    title: "Financial Literacy & Investment",
    instructor: "Dr. Nusrat Sultana",
    duration: "6 weeks",
    students: "2.1k",
    lessons: 18,
    hours: 12,
    language: "English",
    level: "Beginner",
    rating: 4.7,
    category: "Business",
    description: "Master personal finance, portfolio management and stock market investment basics.",
    modules: [
      "Personal Finance 101",
      "Stock Market Basics",
      "Investment Strategies",
      "Risk Management",
    ],
    image: "/gallery-2.png",
  },
  {
    id: "4",
    icon: PenTool,
    title: "UI/UX Design Thinking",
    instructor: "Arifa Khan",
    duration: "10 weeks",
    students: "920",
    lessons: 32,
    hours: 24,
    language: "English",
    level: "Intermediate",
    rating: 4.8,
    category: "Design",
    description: "Build user-centric products using modern design thinking and Figma prototyping.",
    modules: [
      "Design Thinking Process",
      "Wireframing & Prototyping",
      "Figma Advanced Tools",
      "Usability Testing",
    ],
    image: "/gallery-1.png",
  },
  {
    id: "5",
    icon: Briefcase,
    title: "Professional Communication",
    instructor: "Dr. Fatima Begum",
    duration: "4 weeks",
    students: "1.5k",
    lessons: 12,
    hours: 8,
    language: "English",
    level: "All Levels",
    rating: 4.6,
    category: "Business",
    description: "Master public speaking, negotiation and business writing for corporate success.",
    modules: [
      "Business Writing",
      "Presentation Skills",
      "Public Speaking",
      "Negotiation Tactics",
    ],
    image: "/gallery-4.png",
  },
  {
    id: "6",
    icon: BarChart3,
    title: "Data Analysis with Python",
    instructor: "Eng. Saiful Islam",
    duration: "8 weeks",
    students: "650",
    lessons: 28,
    hours: 20,
    language: "English",
    level: "Intermediate",
    rating: 4.9,
    category: "Tech",
    description: "In-depth data processing and visualization using Pandas, NumPy and Matplotlib.",
    modules: [
      "Python Fundamentals",
      "Pandas & NumPy",
      "Data Visualization",
      "Statistical Analysis",
    ],
    image: "/gallery-5.png",
  },
];

export default function CoursesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white" ref={ref}>
      
      <div className="section-container mb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge label="Learning Center" icon={BookOpen} variant="primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-6"
          >
            Elevate Your <span className="text-primary">Skills</span> With Industry Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed"
          >
            Our specialized programs are designed to bridge the gap between academic theory and real-world professional excellence.
          </motion.p>
        </div>
      </div>

      
      <div className="section-container mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 md:pl-6 border border-primary/50 md:rounded-full rounded-2xl bg-white overflow-hidden">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 mr-2 text-neutral-400 font-bold text-[10px] uppercase tracking-widest px-2 md:px-0">
              <Filter size={14} />
              Filter by
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-neutral-500 border-primary/50 hover:border-primary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center w-full lg:w-auto p-2 md:p-0">
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-4 flex items-center text-primary pointer-events-none">
                <Search size={16} strokeWidth={2.5} />
              </div>
              <input 
                type="text" 
                placeholder="Find a course..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-6 py-3 bg-white border border-primary/50 rounded-full focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm font-medium w-full sm:w-72 transition-all placeholder:text-neutral-400 text-neutral-800"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="section-container min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {isSearching ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <CourseCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group flex flex-col h-full bg-white rounded-3xl border border-primary/50 hover:shadow-2xl hover:shadow-black/5 transition-all overflow-hidden"
                  >
                    
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <Badge label={course.category} variant="glass" className="backdrop-blur-md" />
                      </div>
                    </div>

                    
                    <div className="p-5 flex flex-col flex-1">
                      
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                          <course.icon size={15} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{course.level}</span>
                      </div>

                      
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                        {course.title}
                      </h3>

                      
                      <p className="text-[13px] text-neutral-500 mb-5 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-primary/70" />
                          <span className="text-[11px] font-semibold text-neutral-600">{course.students}+ Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-primary/70" />
                          <span className="text-[11px] font-semibold text-neutral-600">{course.lessons} Lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-primary/70" />
                          <span className="text-[11px] font-semibold text-neutral-600">{course.hours} Hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe size={14} className="text-primary/70" />
                          <span className="text-[11px] font-semibold text-neutral-600">{course.language}</span>
                        </div>
                      </div>

                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.2em] leading-none mb-1">Access</span>
                          <span className="text-xl font-bold text-primary leading-tight">Free</span>
                        </div>
                        
                        <button className="px-7 py-2.5 border border-primary/40 text-primary rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-[0.98] cursor-pointer group/btn">
                          Enroll
                          <ArrowRight size={13} className="-rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-24 px-8 bg-white/50 backdrop-blur-md rounded-[3rem] border border-primary/50 text-center w-full shadow-2xl shadow-black/[0.02] relative overflow-hidden"
              >
                
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse" />
                  <div className="relative w-28 h-28 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-xl shadow-primary/5">
                    <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/20 animate-[spin_8s_linear_infinite]" />
                    <Search size={40} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-neutral-900 mb-5 tracking-tight">No Results Found</h3>
                <p className="text-neutral-500 max-w-lg mx-auto leading-relaxed text-base mb-12">
                  We couldn&apos;t find any matches for <span className="text-primary font-bold">&quot;{searchQuery}&quot;</span>. 
                  Try exploring other categories or clearing your search to find the perfect course.
                </p>

                <button 
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-10 py-3 border border-primary/40 text-primary rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-[0.98] cursor-pointer group/btn shadow-lg shadow-black/[0.01]"
                >
                  Reset all filters
                  <ArrowRight size={14} className="-rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
