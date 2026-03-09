"use client";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface BadgeProps {
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "success" | "secondary" | "outline" | "ghost";
  className?: string;
}
export default function Badge({
  label,
  icon: Icon,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    secondary: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    outline:
      "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500",
    ghost: "bg-white/5 text-slate-400 border-white/10",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all duration-300",
        variants[variant],
        className,
      )}
    >
      {Icon && <Icon size={12} strokeWidth={2.5} className="shrink-0" />}
      <span>{label}</span>
    </div>
  );
}
