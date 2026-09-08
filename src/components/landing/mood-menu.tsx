"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { menuCategoriesData } from "@/data/categories";

export function MoodMenu() {
  return (
    <section id="menu" className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-7 sm:mb-9">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-neutral-900 tracking-tight">
            What&apos;s Your Mood Today?
          </h2>

          <Link
            href="#menu"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-emerald-900 transition-colors"
          >
            <span className="hidden sm:inline">Explore Full Menu</span>
            <span className="sm:hidden">Explore Menu</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Categories Horizontal Row / Mobile Scroll */}
        <div className="flex items-start justify-between gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {menuCategoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group flex flex-col items-center shrink-0 cursor-pointer"
            >
              {/* Circular Food Image Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 rounded-full overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_6px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] group-hover:ring-[#255E3D]/30 transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-108"
                  sizes="110px"
                />
              </div>

              {/* Category Name */}
              <span className="mt-2.5 text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-[#255E3D] transition-colors tracking-tight text-center">
                {category.name}
              </span>
            </motion.div>
          ))}

          {/* 8th Item: "More" Circular Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 7 * 0.04 }}
            className="group flex flex-col items-center shrink-0 cursor-pointer"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-26 lg:h-26 rounded-full bg-neutral-100/90 ring-1 ring-black/[0.06] shadow-[0_6px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-neutral-800 group-hover:bg-[#153424] group-hover:text-white transition-all duration-300">
              <div className="grid grid-cols-2 gap-1.5 p-2">
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="w-2 h-2 rounded-full bg-current" />
              </div>
            </div>

            <span className="mt-2.5 text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-[#255E3D] transition-colors tracking-tight text-center">
              More
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
