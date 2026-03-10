"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft,
  Mail,
  Phone,
  Bookmark,
  Home,
  ChevronRight,
  Users,
  User,
  Crown,
  GraduationCap,
  Facebook,
  Linkedin,
  Share2,
  Link2,
  Quote,
  Target,
  Award,
  Cpu,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  ClipboardList
} from "lucide-react";
import Link from "next/link";

const executiveMembers = [
  {
    name: "Md. Rakibul Hasan",
    slug: "md-rakibul-hasan",
    position: "President",
    initials: "RH",
    department: "Business Administration",
    year: "4th Year",
    bio: "As the President of GBCDC, Rakibul Hasan brings a strategic vision to student career development. With a background in Business Administration, he has been instrumental in bridging the gap between academic learning and industry requirements. His leadership focuses on creating sustainable ecosystems for mentorship and professional growth, ensuring that every member has the resources to excel in their chosen fields. Under his guidance, the club has expanded its industry network significantly, securing partnerships that provide real-world value to the student body.",
    responsibilities: [
      "Setting strategic club goals and roadmaps",
      "Leading executive board and departmental heads",
      "Managing relationships with university stakeholders",
      "Overseeing the club's organizational growth vision",
      "Ensuring alignment with GBCDC's core values",
      "Driving high-level industry partnerships"
    ],
    achievements: [
      "Launched Career Fair 2025",
      "Secured 10+ industry partners",
      "Grew membership by 200%"
    ],
    skills: ["Leadership", "Public Speaking", "Strategy", "Management", "Negotiation", "Networking"],
    social: { linkedin: "#", facebook: "#", email: "president@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "president",
  },
  {
    name: "Fatima Akter",
    slug: "fatima-akter",
    position: "Vice President",
    initials: "FA",
    department: "CSE",
    year: "3rd Year",
    bio: "Fatima Akter is a dedicated leader committed to operational excellence within GBCDC. With her technical background in CSE, she drives digital transformation and ensures that club operations are efficient and tech-forward. Her role involves coordinating between various departments, mentoring junior members, and spearheading member engagement strategies that have seen record-high participation rates. She is passionate about building a collaborative environment where innovation in event planning and execution becomes the standard for every program.",
    responsibilities: [
      "Coordinating daily operations between departments",
      "Leading departmental oversight and performance reviews",
      "Developing member engagement and retention strategies",
      "Managing internal club-wide communications",
      "Assisting the President in strategic decision making",
      "Spearheading digital transformation initiatives"
    ],
    achievements: [
      "Increased member engagement by 40%",
      "Led digital transformation",
      "Mentored 20+ juniors"
    ],
    skills: ["Operations", "Team Lead", "Project Management", "UI/UX", "Mentorship", "Innovation"],
    social: { linkedin: "#", facebook: "#", email: "vp@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "vp",
  },
  {
    name: "Sadia Islam",
    slug: "sadia-islam",
    position: "General Secretary",
    initials: "SI",
    department: "English",
    year: "3rd Year",
    bio: "Sadia Islam manages the organizational pulse of GBCDC with precision and dedication. Her role as General Secretary involves overseeing administrative documentation, member communications, and ensuring that all club activities align with professional standards. Her background in English contributes to the clarity and effectiveness of the club's external and internal messaging. She is recognized for her ability to manage complex databases and coordinate high-level meetings, ensuring that the club's operational records are impeccable and transparent.",
    responsibilities: [
      "Overseeing all administrative and club documentation",
      "Managing the central member database and records",
      "Handling general correspondence with external bodies",
      "Moderating official board and general meetings",
      "Ensuring meeting minutes and action items are tracked",
      "Maintaining the club's constitutional standards"
    ],
    achievements: [
      "Documented 50+ sessions",
      "Improved admin efficiency",
      "Grows club reputation"
    ],
    skills: ["Admin", "Writing", "Coordination", "Protocol", "Database", "Planning"],
    social: { linkedin: "#", facebook: "#", email: "secretary@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive",
  },
  {
    name: "Tanvir Ahmed",
    slug: "tanvir-ahmed",
    position: "Treasurer",
    initials: "TA",
    department: "Accounting",
    year: "3rd Year",
    bio: "Tanvir Ahmed oversees the financial health of GBCDC through meticulous planning and resource allocation. With a specialization in Accounting, he ensures that every BDT spent by the club provides maximum value for its members. His role includes budgeting for major events, managing sponsorship funds, and introducing digital payment systems to modernize the club's financial operations. His success in securing major corporate sponsorships has been vital in funding the club's ambitious career fairs and training programs while maintaining complete financial transparency.",
    responsibilities: [
      "Strategic budget planning for the fiscal year",
      "Precise tracking of all club expenses and income",
      "Managing sponsorship funds and corporate billing",
      "Providing detailed monthly financial reports",
      "Implementing digital financial tracking systems",
      "Overseeing grant and scholarship allocations"
    ],
    achievements: [
      "30% budget optimization",
      "Secured 500K+ BDT funding",
      "Audit transparency lead"
    ],
    skills: ["Finance", "Accounting", "Excel", "Analysis", "Budgeting", "Sponsorship"],
    social: { linkedin: "#", facebook: "#", email: "treasurer@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive",
  },
  {
    name: "Nusrat Jahan",
    slug: "nusrat-jahan",
    position: "Director of Events",
    initials: "NJ",
    department: "Marketing",
    year: "3rd Year",
    bio: "Nusrat Jahan is the creative force behind GBCDC's most successful initiatives. As Director of Events, she specializes in conceptualizing and executing high-impact workshops and seminars. Her background in Marketing allows her to design events that not only educate but also resonate deeply with the student body. From speaker management to complex logistics, she ensures every event runs seamlessly. Her leadership during Career Fair 2025 set a new benchmark for organizational excellence within the university, delivering unprecedented value to participants.",
    responsibilities: [
      "Conceptualizing flagship and seasonal club events",
      "Coordinating complex event logistics and venues",
      "Managing guest speakers and industry dignitaries",
      "Performing comprehensive post-event impact analysis",
      "Leading the event organizing committee and volunteers",
      "Ensuring event themes align with club branding"
    ],
    achievements: [
      "Led 50+ successful events",
      "Career Fair Lead 2025",
      "High satisfaction ratings"
    ],
    skills: ["Planning", "Execution", "Logistics", "Marketing", "Event Ops", "PR"],
    social: { linkedin: "#", facebook: "#", email: "events@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "director",
  },
  {
    name: "Ariful Islam",
    slug: "ariful-islam",
    position: "Director of Marketing",
    initials: "AI",
    department: "Mass Communication",
    year: "2nd Year",
    bio: "Ariful Islam drives GBCDC's brand presence through innovative marketing and visual storytelling. With a keen eye for design and a background in Mass Communication, he has revitalized the club's social media identity, leading to a significant increase in online engagement. His role involves crafting promotional campaigns that articulate the club's mission across various platforms. His ability to create viral content while maintaining brand consistency has established GBCDC as a recognizable and professional brand within the student community and beyond.",
    responsibilities: [
      "Maintaining brand consistency across all platforms",
      "Managing the club's official social media accounts",
      "Developing promotional campaigns for club events",
      "Crafting content strategies to increase engagement",
      "Liaising with the design team for visual assets",
      "Analyzing marketing metrics and ROI for campaigns"
    ],
    achievements: [
      "Grew followers by 5K+",
      "3 viral campaigns",
      "New brand guidelines"
    ],
    skills: ["Marketing", "Design", "Copywriting", "SEO", "Branding", "Social Media"],
    social: { linkedin: "#", facebook: "#", email: "marketing@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "director",
  },
  {
    name: "Mahmudul Haque",
    slug: "mahmudul-haque",
    position: "Director of Training",
    initials: "MH",
    department: "BBA",
    year: "3rd Year",
    bio: "Mahmudul Haque is committed to preparing GBCDC members for the professional world through comprehensive training tracks. Drawing from his BBA background, he designs curricula that align with industry standards, covering everything from soft skills to technical certifications. His workshops are known for their practical approach and hands-on learning experiences. By bringing in industry experts and setting up mentorship programs, he ensures that the level of skill development within GBCDC is consistent, measurable, and highly valuable for future career growth.",
    responsibilities: [
      "Designing professional training curricula",
      "Coordinating skills workshops and bootcamps",
      "Performing regular member skill assessments",
      "Aligning training modules with industry needs",
      "Managing the club's internal mentorship program",
      "Securing certifications and learning resources"
    ],
    achievements: [
      "Launched 6 tracks",
      "300+ students certified",
      "Mentorship setup"
    ],
    skills: ["Training", "HRM", "Curriculum", "Development", "Mentorship", "Corporate Prep"],
    social: { linkedin: "#", facebook: "#", email: "training@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "director",
  },
  {
    name: "Rafia Sultan",
    slug: "rafia-sultan",
    position: "Director of PR",
    initials: "RS",
    department: "Journalism",
    year: "2nd Year",
    bio: "Rafia Sultan manages the external reputation and public relations of GBCDC with a focus on visibility and impact. As a Journalism student, she excels in crafting compelling press releases and securing media coverage for the club's major initiatives. Her role involves building and maintaining partnerships with external organizations, media outlets, and alumni networks. Her efforts have significantly increased the club's national visibility, positioning GBCDC as a leader in student career development and professional training within the academic landscape.",
    responsibilities: [
      "Nurturing relationships with national media outlets",
      "Developing and executing public relations strategies",
      "Drafting and distributing official press releases",
      "Managing external partnerships and MOU signings",
      "Ensuring the club's positive public image",
      "Representing the club at external networking events"
    ],
    achievements: [
      "10+ national features",
      "Strong media network",
      "Brand visibility up 150%"
    ],
    skills: ["PR", "Media", "Blogging", "Networking", "Journalism", "Communication"],
    social: { linkedin: "#", facebook: "#", email: "pr@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "director",
  },
  {
    name: "Ahsan Habib",
    slug: "ahsan-habib",
    position: "Executive Member",
    initials: "AH",
    department: "CSE",
    year: "2nd Year",
    bio: "Ahsan Habib contributes to the technical backbone of GBCDC as an Executive Member. With a strong interest in technology and software development, he supports the club's digital projects and ensures the smooth technical execution of its events. He is particularly focused on building a tech-forward culture within the club, coordinating coding bootcamps and workshop sessions that empower members with technical literacy. His proactive approach to problem-solving and his dedication to digital innovation make him a key asset to the team.",
    responsibilities: [
      "Providing technical support for club projects",
      "Maintaining the club's official website and tools",
      "Assisting in the coordination of tech workshops",
      "Managing internal digital workspace tools",
      "Troubleshooting technical issues during events",
      "Contributing to the club's software development initiatives"
    ],
    achievements: ["Led Coding Camp", "Built Event Portal"],
    skills: ["Fullstack", "Python", "Cloud", "Agile", "DevOps", "Cyber"],
    social: { linkedin: "#", facebook: "#", email: "ahsan@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive_member",
  },
  {
    name: "Tahmina Akter",
    slug: "tahmina-akter",
    position: "Executive Member",
    initials: "TA",
    department: "BBA",
    year: "2nd Year",
    bio: "Tahmina Akter is a passionate student advocate and outreach specialist within GBCDC. Her role involves bridging the gap between the club's leadership and the student body, ensuring that club programs are accessible and inclusive. Her background in BBA helps her in strategizing outreach campaigns that effectively recruit new members and build campus-wide enthusiasm for GBCDC's activities. She is dedicated to fostering a supportive community where every student feels empowered to pursue their professional goals through the club's resources.",
    responsibilities: [
      "Leading student outreach and recruitment drives",
      "Assisting in social media content execution",
      "Promoting the GBCDC brand across the university",
      "Coordinating with student reps across departments",
      "Collecting and reporting on student feedback",
      "Supporting the marketing team during major events"
    ],
    achievements: ["Recruited 100+ members", "Influencer lead"],
    skills: ["Outreach", "Marketing", "Event Ops", "Recruitment", "Branding", "Social"],
    social: { linkedin: "#", facebook: "#", email: "tahmina@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive_member",
  },
  {
    name: "Maruf Hasan",
    slug: "maruf-hasan",
    position: "Executive Member",
    initials: "MH",
    department: "Law",
    year: "2nd Year",
    bio: "Maruf Hasan brings analytical rigor and organizational transparency to GBCDC as an Executive Member. With a focus on Law, he assists in drafting club policies and ensuring that all activities comply with recognized standards of practice. His involvement in policy-making helps maintain the club's ethical framework and operational integrity. He is a strong advocate for student rights and organizational ethics, working to ensure that GBCDC remains a transparent and fair environment for all its members to grow professionally.",
    responsibilities: [
      "Drafting and reviewing club internal policies",
      "Ensuring operational transparency across sectors",
      "Providing ethical and legal advisory to the board",
      "Documenting disciplinary and protocol procedures",
      "Monitoring compliance with university regulations",
      "Assisting in the drafting of MOUs and agreements"
    ],
    achievements: ["Revised constitution", "Legal audit"],
    skills: ["Law", "Ethics", "Documentation", "Policy", "Compliance", "Legal Admin"],
    social: { linkedin: "#", facebook: "#", email: "maruf@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive_member",
  },
  {
    name: "Nishat Mazumder",
    slug: "nishat-mazumder",
    position: "Executive Member",
    initials: "NM",
    department: "Pharmacy",
    year: "2nd Year",
    bio: "Nishat Mazumder advocates for a balanced approach to career development within GBCDC. Specializing in Pharmacy, she coordinates health and wellness initiatives that support the well-being of the club's members. She believes that professional success is built on a foundation of mental and physical health. Through wellness workshops and balanced lifestyle advocacy, she ensures that GBCDC members are not only preparing for their careers but are also maintaining the resilience and health necessary for long-term professional fulfillment.",
    responsibilities: [
      "Designing member wellness and health initiatives",
      "Organizing work-life balance workshops",
      "Advocating for mental health support in career growth",
      "Coordinating first-aid and medical support for events",
      "Leading focus groups on student professional well-being",
      "Integrating wellness practices into club routine"
    ],
    achievements: ["Campus health drive", "Wellness workshop"],
    skills: ["Healthcare", "Yoga", "Mindfulness", "Wellness", "Pharmacy", "Counseling"],
    social: { linkedin: "#", facebook: "#", email: "nishat@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive_member",
  },
  {
    name: "Sultan Ahmed",
    slug: "sultan-ahmed",
    position: "Executive Member",
    initials: "SA",
    department: "English",
    year: "2nd Year",
    bio: "Sultan Ahmed plays a vital role in GBCDC's editorial and communication projects. With a background in English literature, he brings a unique perspective to the club's documentation, ensuring that official reports and publications are of the highest professional quality. As an Executive Member, his focus on clear and effective communication helps articulate the club's vision to a wider audience. He is passionate about content creation and editorial management, consistently delivering high-quality reports that document the club's progress and impact throughout the year.",
    responsibilities: [
      "Managing the editorial lifecycle of club publications",
      "Crafting high-quality content for official reports",
      "Compiling and editing the GBCDC annual report",
      "Providing editorial oversight for external comms",
      "Leading the team in internal wiki documentation",
      "Standardizing the club's written professional tone"
    ],
    achievements: ["Chief Editor 2024", "Managed 5 reports", "Internal Wiki lead"],
    skills: ["Copywriting", "SEO", "Literature", "Edit", "Professional Writing", "Publishing"],
    social: { linkedin: "#", facebook: "#", email: "sultan@gbcdc.edu.bd", mobile: "017XXXXXXXX" },
    tier: "executive_member",
  },
];

export default function MemberProfilePage() {
  const params = useParams();
  const router = useRouter();
  const member = executiveMembers.find(m => m.slug === params.id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Member Not Found</h1>
          <Link href="/executive" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} />
            Back to Executive Committee
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-neutral-100/50">
      <div className="section-container max-w-5xl mx-auto px-6">
        
        <nav className="flex items-center gap-2 mb-10 overflow-x-auto whitespace-nowrap pb-2 select-none no-scrollbar">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-primary transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all shadow-sm">
              <Home size={15} strokeWidth={2.5} />
            </div>
            <span className="hidden sm:block text-[13px] font-bold">Home</span>
          </Link>
          
          <ChevronRight size={14} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <Link
            href="/executive"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-primary transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all shadow-sm">
              <Users size={15} strokeWidth={2.5} />
            </div>
            <span className="hidden sm:block text-[13px] font-bold">Committee</span>
          </Link>
          
          <ChevronRight size={14} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <div className="flex items-center gap-2.5 text-primary">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 shadow-sm shadow-primary/5">
              <User size={15} strokeWidth={2.5} />
            </div>
            <span className="hidden sm:block text-[13px] font-bold truncate max-w-[150px] sm:max-w-xs">{member.name}</span>
          </div>
        </nav>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row border border-primary/50 p-2 md:p-4 gap-3 md:gap-4"
        >
          
          <div className="relative w-full md:w-[40%] bg-[#0f141e] rounded-2xl md:rounded-[2rem] overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[480px]">
            
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[80px]" />
              <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[60px]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center p-2.5 mb-8 shadow-2xl relative group">
                
                <div className="absolute inset-0 rounded-full border border-primary/30 scale-[1.05] group-hover:scale-[1.12] transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.12] group-hover:scale-[1.25] transition-transform duration-700 delay-75 opacity-0 group-hover:opacity-100" />
                
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-5xl md:text-6xl font-black text-white shadow-inner overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  <span className="relative z-10 drop-shadow-md">{member.initials}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/70 hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg shadow-black/20">
                  <Linkedin size={18} />
                </a>
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/70 hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg shadow-black/20">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          
          <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white rounded-2xl md:rounded-[2rem]">
            
            <div className="absolute right-8 top-8 pointer-events-none opacity-[0.02] text-[180px] font-black leading-none -tracking-[0.05em] select-none text-right flex justify-end">
              {member.initials}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-widest mb-6 border border-primary/20 shadow-sm shadow-primary/5">
                <Crown size={12} strokeWidth={2.5} />
                {member.position}
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6 md:mb-10 tracking-tight">
                {member.name}
              </h1>

              <div className="space-y-6 md:space-y-8">
                
                <div className="flex items-start gap-4 md:gap-5 group cursor-default">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 shrink-0">
                    <GraduationCap size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="pt-0.5 md:pt-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-1 md:mb-1.5">Qualification</div>
                    <div className="text-neutral-800 font-semibold text-sm md:text-[15px]">{member.department}, {member.year}</div>
                  </div>
                </div>

                
                <a href={`tel:+88${member.social.mobile || '017XXXXXXXX'}`} className="flex items-start gap-4 md:gap-5 group cursor-pointer block">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 shrink-0">
                    <Phone size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="pt-0.5 md:pt-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-1 md:mb-1.5">Mobile Number</div>
                    <div className="text-neutral-800 font-semibold text-sm md:text-[15px] group-hover:text-primary transition-colors">+88 {member.social.mobile || '017XXXXXXXX'}</div>
                  </div>
                </a>

                
                <a href={`mailto:${member.social.email}`} className="flex items-start gap-4 md:gap-5 group cursor-pointer block">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 shrink-0">
                    <Mail size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="pt-0.5 md:pt-1">
                    <div className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-1 md:mb-1.5">Email Address</div>
                    <div className="text-neutral-800 font-semibold text-sm md:text-[15px] group-hover:text-primary transition-colors">{member.social.email}</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="bg-white/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-3xl border border-primary/50 shadow-sm transition-all overflow-hidden relative group">
            <Quote className="absolute -left-3 -top-3 text-primary/5 w-32 h-32 -rotate-12 pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/50 shadow-sm shadow-primary/5">
                <Bookmark size={18} />
              </div>
              <h2 className="text-xl font-bold text-[#2d3e50]">Professional Biography</h2>
            </div>

            <div className="relative z-10">
              <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10 relative overflow-hidden">
                <Quote className="absolute right-4 top-4 text-primary/10 w-16 h-16 -rotate-12 transition-transform group-hover:scale-110 duration-700" />
                
                <p className="text-[#455565] text-sm md:text-base leading-relaxed font-medium italic relative z-10 max-w-3xl">
                  "{member.bio}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-primary/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/50 shrink-0">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-xl font-bold text-[#2d3e50]">Specialized Skills</h2>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
              <div className="flex flex-wrap gap-2">
                {(member as any).skills?.map((skill: string, idx: number) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-neutral-100 rounded-xl text-xs font-bold text-neutral-600 border-primary/30  hover:bg-primary/5 hover:text-primary transition-all cursor-default uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="lg:col-span-2 bg-[#0f141e] p-7 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 md:mb-10 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                <ClipboardList size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-0.5 md:mb-1">
                  <span className="hidden md:inline">Functional </span>Responsibilities
                </h2>
                <p className="text-neutral-400 text-xs md:text-sm">Key areas of focus within the organizational framework</p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {(member as any).responsibilities?.map((resp: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 transition-all duration-300">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <p className="text-neutral-300 font-semibold text-sm leading-relaxed group-hover:text-white transition-colors">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
