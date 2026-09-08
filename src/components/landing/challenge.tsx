"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Dumbbell, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Challenge() {
  return (
    <section id="challenge" className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#EFF4EC] via-[#F4F7F0] to-[#FAF8F3] border border-[#DCE7D9] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
        >
          {/* Decorative background leaves */}
          <div className="absolute top-4 right-1/3 w-10 h-10 opacity-35 pointer-events-none">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-1/3 w-8 h-8 opacity-30 pointer-events-none rotate-45">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Copy & CTA */}
            <div className="lg:col-span-4 flex flex-col items-start z-10">
              <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-600 uppercase mb-2">
                A Healthier You
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 leading-[1.12] tracking-tight mb-3">
                21 Day<br className="hidden sm:inline" /> Challenge
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-sm leading-relaxed">
                Real food. Real habits.
                <br />
                A healthier, happier you.
              </p>

              <Button
                variant="primary"
                size="md"
                href="#story"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#153424] hover:bg-[#1f4b34] text-white px-6 py-3 font-semibold text-xs sm:text-sm shadow-xs"
              >
                Know More
              </Button>
            </div>

            {/* Center Column: Healthy Buddha Bowl Visual with Floating Leaf Accents */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-2 sm:py-4">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_15px_35px_rgba(37,94,61,0.15)] ring-4 ring-white">
                <Image
                  src="/images/challenge/challenge_bowl.jpg"
                  alt="21 Day Challenge nutritious Buddha bowl with avocado, kale and chickpeas"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 250px, 320px"
                />
              </div>

              {/* Floating leaf graphics around bowl */}
              <div className="absolute -bottom-2 -left-2 sm:left-4 w-9 h-9 opacity-80 pointer-events-none">
                <svg viewBox="0 0 24 24" fill="#367C4F">
                  <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
                </svg>
              </div>
              <div className="absolute -top-3 right-4 sm:right-6 w-9 h-9 opacity-75 pointer-events-none -rotate-45">
                <svg viewBox="0 0 24 24" fill="#255E3D">
                  <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
                </svg>
              </div>
            </div>

            {/* Right Column: Handwritten Script & 3 Feature Badges */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-center z-10">
              {/* Handwritten script: Better Food Happier You */}
              <div className="mb-6 self-center lg:self-center">
                <span className="font-script text-3xl sm:text-4xl text-neutral-800 -rotate-3 inline-block font-medium drop-shadow-xs">
                  Better Food<br />Happier You ♡
                </span>
              </div>

              {/* 3 Benefit Icons Row on Desktop / Stack on Mobile */}
              <div className="flex items-center justify-center lg:justify-end gap-5 sm:gap-6 w-full">
                {/* Benefit 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E3EFE1] text-[#255E3D] flex items-center justify-center shadow-xs mb-2">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-800 leading-tight max-w-[80px]">
                    Nutritious Meals
                  </span>
                </div>

                {/* Benefit 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E3EFE1] text-[#255E3D] flex items-center justify-center shadow-xs mb-2">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-800 leading-tight max-w-[80px]">
                    Build Better Habits
                  </span>
                </div>

                {/* Benefit 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E3EFE1] text-[#255E3D] flex items-center justify-center shadow-xs mb-2">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-800 leading-tight max-w-[80px]">
                    Feel More Energetic
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
