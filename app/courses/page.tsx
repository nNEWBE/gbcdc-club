"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  Monitor,
  PenTool,
  TrendingUp,
  Code,
  Briefcase,
  BarChart3,
  ChevronRight,
  Award,
  CheckCircle2,
} from "lucide-react";
const courses = [
  {
    icon: Monitor,
    title: "Digital Marketing Fundamentals",
    instructor: "Prof. Rahman Ahmed",
    duration: "8 weeks",
    students: 120,
    level: "Beginner",
    rating: 4.8,
    description:
      "Master the essentials of digital marketing including SEO, social media marketing, Google Ads, content strategy, and analytics. Includes hands-on projects with real campaigns.",
    modules: [
      "Social Media Strategy",
      "SEO Optimization",
      "Content Marketing",
      "Google Analytics",
      "Paid Advertising",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Code,
    title: "Web Development Bootcamp",
    instructor: "Eng. Tanvir Hossain",
    duration: "12 weeks",
    students: 85,
    level: "Intermediate",
    rating: 4.9,
    description:
      "Build modern web applications from scratch. Learn HTML, CSS, JavaScript, React, and backend development with Node.js. Capstone project included.",
    modules: [
      "HTML & CSS Mastery",
      "JavaScript ES6+",
      "React & Next.js",
      "Backend with Node.js",
      "Database & Deployment",
    ],
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "Financial Literacy & Investment",
    instructor: "Dr. Nusrat Sultana",
    duration: "6 weeks",
    students: 200,
    level: "Beginner",
    rating: 4.7,
    description:
      "Understand personal finance, investment strategies, stock market basics, and financial planning. Practical workshops on budgeting and portfolio management.",
    modules: [
      "Personal Finance 101",
      "Stock Market Basics",
      "Investment Strategies",
      "Risk Management",
      "Financial Planning",
    ],
    color: "bg-emerald-500",
  },
  {
    icon: PenTool,
    title: "UI/UX Design Thinking",
    instructor: "Arifa Khan",
    duration: "10 weeks",
    students: 75,
    level: "Intermediate",
    rating: 4.8,
    description:
      "Learn design thinking methodology, prototyping with Figma, user research techniques, and accessibility best practices. Portfolio-ready projects at completion.",
    modules: [
      "Design Thinking Process",
      "User Research",
      "Wireframing & Prototyping",
      "Figma Mastery",
      "Usability Testing",
    ],
    color: "bg-purple-500",
  },
  {
    icon: Briefcase,
    title: "Professional Communication Skills",
    instructor: "Dr. Fatima Begum",
    duration: "4 weeks",
    students: 180,
    level: "All Levels",
    rating: 4.6,
    description:
      "Enhance your business communication through workshops on presentation skills, email etiquette, negotiation, public speaking, and professional networking.",
    modules: [
      "Business Writing",
      "Presentation Skills",
      "Public Speaking",
      "Negotiation Tactics",
      "Email Etiquette",
    ],
    color: "bg-amber-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis with Python",
    instructor: "Eng. Saiful Islam",
    duration: "8 weeks",
    students: 65,
    level: "Intermediate",
    rating: 4.9,
    description:
      "Master data analysis using Python, Pandas, and visualization libraries. Real-world datasets and projects from industry partners included.",
    modules: [
      "Python Fundamentals",
      "Pandas & NumPy",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning Intro",
    ],
    color: "bg-rose-500",
  },
];
const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-600",
  Intermediate: "bg-blue-50 text-blue-600",
  "All Levels": "bg-amber-50 text-amber-600",
};
export default function CoursesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  return (
    <main className="min-h-screen pt-28 pb-20 bg-white" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            <BookOpen size={14} />
            Learning
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
          >
            Courses & Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Industry-aligned courses taught by experienced professionals to
            prepare you for real-world challenges.
          </motion.p>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { icon: BookOpen, label: "Active Courses", value: "12" },
            { icon: Users, label: "Enrolled Students", value: "725+" },
            { icon: Award, label: "Certified Graduates", value: "400+" },
            { icon: Star, label: "Average Rating", value: "4.8" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 bg-neutral-50 rounded-2xl border border-border"
            >
              <stat.icon size={22} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <div className="text-xs font-medium text-neutral-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {}
              <div
                className={`${course.color} p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <course.icon size={28} strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mt-3 leading-snug">
                    {course.title}
                  </h3>
                </div>
              </div>
              {}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${levelColors[course.level]}`}
                  >
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-black">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                {}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center p-2 bg-neutral-50 rounded-lg">
                    <Clock
                      size={14}
                      className="text-neutral-400 mx-auto mb-1"
                    />
                    <span className="text-xs font-medium text-neutral-600">
                      {course.duration}
                    </span>
                  </div>
                  <div className="text-center p-2 bg-neutral-50 rounded-lg">
                    <Users
                      size={14}
                      className="text-neutral-400 mx-auto mb-1"
                    />
                    <span className="text-xs font-medium text-neutral-600">
                      {course.students} students
                    </span>
                  </div>
                  <div className="text-center p-2 bg-neutral-50 rounded-lg">
                    <Award
                      size={14}
                      className="text-neutral-400 mx-auto mb-1"
                    />
                    <span className="text-xs font-medium text-neutral-600">
                      Certificate
                    </span>
                  </div>
                </div>
                {}
                <div className="text-xs text-neutral-400 mb-4">
                  Instructor:{" "}
                  <span className="font-semibold text-neutral-600">
                    {course.instructor}
                  </span>
                </div>
                {}
                <button
                  onClick={() =>
                    setExpandedCourse(
                      expandedCourse === course.title ? null : course.title,
                    )
                  }
                  className="w-full flex items-center justify-between text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200 mb-3 cursor-pointer"
                >
                  <span>Course Modules</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      expandedCourse === course.title ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {expandedCourse === course.title && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2 mb-4"
                  >
                    {course.modules.map((mod) => (
                      <li
                        key={mod}
                        className="flex items-center gap-2 text-sm text-neutral-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-primary shrink-0"
                        />
                        {mod}
                      </li>
                    ))}
                  </motion.ul>
                )}
                {}
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                  Enroll Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
