import { notices } from "@/lib/notices";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, Home, ChevronRight, Bell, FileText, Info, Users, MonitorPlay, Lightbulb, CalendarDays, BookOpen, Heart } from "lucide-react";
import Badge from "@/components/Badge";

const categoryColors: Record<string, string> = {
  General: "bg-primary/10 text-primary border-primary/20",
  Membership: "bg-amber-50 text-amber-600 border-amber-200",
  Workshop: "bg-blue-50 text-blue-600 border-blue-200",
  Opportunity: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Event: "bg-purple-50 text-purple-600 border-purple-200",
  Resource: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Volunteer: "bg-rose-50 text-rose-600 border-rose-200",
};

const categoryIcons: Record<string, any> = {
  General: Info,
  Membership: Users,
  Workshop: MonitorPlay,
  Opportunity: Lightbulb,
  Event: CalendarDays,
  Resource: BookOpen,
  Volunteer: Heart,
};

export function generateStaticParams() {
  return notices.map((n) => ({
    slug: n.slug,
  }));
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const notice = notices.find((n) => n.slug === slug);

  if (!notice) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-40 pb-24 selection:bg-primary/20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mb-10 overflow-x-auto whitespace-nowrap pb-2 select-none">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors">
              <Home size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold">Home</span>
          </Link>
          
          <ChevronRight size={16} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <Link
            href="/notices"
            className="flex items-center gap-2.5 text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors">
              <Bell size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold">Notices</span>
          </Link>
          
          <ChevronRight size={16} strokeWidth={2.5} className="text-neutral-300 mx-1 shrink-0" />
          
          <div className="flex items-center gap-2.5 text-primary">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10">
              <FileText size={15} strokeWidth={2.5} />
            </div>
            <span className="text-[14px] font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">{notice.title}</span>
          </div>
        </nav>

        <article className="bg-[#FAFAFA] rounded-[32px] border border-neutral-200/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Header section */}
          <header className="p-8 md:p-14 border-b border-neutral-200/60 bg-white relative">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold border ${categoryColors[notice.category]}`}>
                {(() => {
                  const Icon = categoryIcons[notice.category] || Info;
                  return <Icon size={16} />;
                })()}
                {notice.category}
              </span>
              {notice.priority === "high" && (
                <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-red-50 text-red-600 border border-red-200 flex items-center gap-1.5">
                  <Clock size={16} strokeWidth={2.5} />
                  High Priority
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-10">
              {notice.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Calendar size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                    Date Published
                  </div>
                  <div className="text-[15px] font-bold text-neutral-900">
                    {notice.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0">
                  <User size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                    Written By
                  </div>
                  <div className="text-[15px] font-bold text-neutral-900">
                    {notice.author}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Detailed Content */}
          <div className="p-8 md:p-14 bg-[#FAFAFA]">
            <div 
              className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-neutral-900 prose-a:text-primary hover:prose-a:underline prose-p:leading-relaxed prose-p:text-neutral-500 prose-li:text-neutral-500"
              dangerouslySetInnerHTML={{ __html: notice.content }}
            />
          </div>
          
          {/* Footer Action */}
          <div className="p-8 md:p-14 bg-white border-t border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-neutral-900 mb-2">Need further assistance?</h4>
              <p className="text-neutral-500 text-base">If you have questions regarding this notice, please contact the club office.</p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-bold rounded-full hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              Contact Support
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
