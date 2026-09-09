"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Heart } from "lucide-react";

interface ChallengeProps {
  onOpenExperience?: () => void;
}

export function Challenge({ onOpenExperience }: ChallengeProps) {
  return (
    <section id="challenge" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[44px] bg-[#edf4ea] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_10px_40px_rgba(37,94,61,0.04)]"
        >
          {/* Scattered Organic Floating Leaves matching the reference screenshot */}
          {/* Leaf 1 - top left of bowl */}
          <div className="absolute top-12 left-[36%] w-7 h-7 pointer-events-none select-none opacity-80 hidden sm:block -rotate-12">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Leaf 2 - top right of bowl */}
          <div className="absolute top-8 right-[38%] w-6 h-6 pointer-events-none select-none opacity-75 hidden sm:block rotate-45">
            <svg viewBox="0 0 24 24" fill="#367C4F">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Leaf 3 - top far right */}
          <div className="absolute top-14 right-[34%] w-5 h-5 pointer-events-none select-none opacity-60 hidden md:block rotate-12">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Leaf 4 - bottom left below bowl */}
          <div className="absolute bottom-14 left-[36%] w-7 h-7 pointer-events-none select-none opacity-80 hidden sm:block rotate-40">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Leaf 5 - bottom far left */}
          <div className="absolute bottom-8 left-[33%] w-5 h-5 pointer-events-none select-none opacity-65 hidden md:block -rotate-30">
            <svg viewBox="0 0 24 24" fill="#367C4F">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Leaf 6 - bottom right below bowl */}
          <div className="absolute bottom-10 right-[42%] w-5 h-5 pointer-events-none select-none opacity-70 hidden sm:block rotate-20">
            <svg viewBox="0 0 24 24" fill="#255E3D">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Column: Eyebrow, Title, Description, CTA */}
            <div className="lg:col-span-4 flex flex-col items-start z-10">
              <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3">
                A Healthier You
              </span>
              
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-neutral-900 leading-[1.06] tracking-tight mb-4">
                21 Day<br />Challenge
              </h2>

              <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 mb-8 max-w-sm leading-relaxed font-normal">
                Real food. Real habits.
                <br />
                A healthier, happier you.
              </p>

              <button
                type="button"
                onClick={onOpenExperience}
                className="group bg-[#153424] hover:bg-[#1c4530] text-white px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Center Column: Healthy Buddha Bowl in Circular White Disc Frame */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-4 lg:py-0 z-10">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[330px] lg:h-[330px] rounded-full p-2.5 sm:p-3 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/challenge/challenge_bowl.jpg"
                    alt="21 Day Challenge nutritious Buddha bowl with avocado, kale and chickpeas"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 260px, 340px"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Handwritten Script & 3 Feature Badges */}
            <div className="lg:col-span-4 flex flex-col lg:items-end justify-center z-10">
              {/* Handwritten script: Better Food Happier You ♡ */}
              <div className="mb-8 lg:mb-10 self-center lg:self-end">
                <span className="font-script text-3xl sm:text-4xl lg:text-[44px] text-neutral-800 -rotate-2 inline-block font-medium drop-shadow-xs leading-[1.08]">
                  Better Food<br />Happier You ♡
                </span>
              </div>

              {/* 3 Benefit Icons Row */}
              <div className="flex items-center justify-center lg:justify-end gap-5 sm:gap-6 w-full">
                {/* Badge 1: Nutritious Meals */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#dbeada]/70 text-[#255E3D] flex items-center justify-center shadow-xs mb-2.5 transition-transform hover:scale-105">
                    <Leaf className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-tight whitespace-pre-line max-w-[80px]">
                    Nutritious{"\n"}Meals
                  </span>
                </div>

                {/* Badge 2: Build Better Habits (Clover/Habits Icon) */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#dbeada]/70 text-[#255E3D] flex items-center justify-center shadow-xs mb-2.5 transition-transform hover:scale-105">
                    <svg className="w-5 h-5 text-[#255E3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {/* 4-leaf clover habit icon matching screenshot */}
                      <circle cx="8" cy="8" r="3.5" />
                      <circle cx="16" cy="8" r="3.5" />
                      <circle cx="8" cy="16" r="3.5" />
                      <circle cx="16" cy="16" r="3.5" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-tight whitespace-pre-line max-w-[80px]">
                    Build Better{"\n"}Habits
                  </span>
                </div>

                {/* Badge 3: Feel More Energetic */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#dbeada]/70 text-[#255E3D] flex items-center justify-center shadow-xs mb-2.5 transition-transform hover:scale-105">
                    <Heart className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-tight whitespace-pre-line max-w-[80px]">
                    Feel More{"\n"}Energetic
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
