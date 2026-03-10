"use client";
import { motion } from "framer-motion";

export function EventCardSkeleton() {
  return (
    <div className="group relative bg-white flex flex-col h-full rounded-[24px] border border-primary/10 overflow-hidden shadow-sm">
      <div className="p-2 sm:p-2.5 pb-0">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-[18px] bg-neutral-200 animate-pulse" />
      </div>

      <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-1 bg-white">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="w-16 h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-20 h-3 bg-neutral-200 rounded-full animate-pulse" />
        </div>

        <div className="w-3/4 h-6 bg-neutral-200 rounded-lg mb-3 animate-pulse" />
        <div className="space-y-2 mb-5">
          <div className="w-full h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-5/6 h-3 bg-neutral-200 rounded-full animate-pulse" />
        </div>

        <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-neutral-200 animate-pulse" />
            <div className="w-24 h-3 bg-neutral-200 rounded-full animate-pulse" />
          </div>
          <div className="w-24 h-10 rounded-full bg-neutral-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm">
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200 animate-pulse" />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-200 animate-pulse" />
          <div className="w-16 h-3 bg-neutral-200 rounded-full animate-pulse" />
        </div>

        <div className="w-3/4 h-6 bg-neutral-200 rounded-lg mb-2 animate-pulse" />
        <div className="space-y-2 mb-5">
          <div className="w-full h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-5/6 h-3 bg-neutral-200 rounded-full animate-pulse" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
          <div className="w-20 h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-20 h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-20 h-3 bg-neutral-200 rounded-full animate-pulse" />
          <div className="w-20 h-3 bg-neutral-200 rounded-full animate-pulse" />
        </div>

        <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="w-10 h-2 bg-neutral-200 rounded-full animate-pulse" />
            <div className="w-16 h-6 bg-neutral-200 rounded-md animate-pulse" />
          </div>
          <div className="w-24 h-10 rounded-full bg-neutral-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
