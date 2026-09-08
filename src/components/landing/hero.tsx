"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Calendar, ArrowRight, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate w-full min-h-[100dvh] lg:h-[100dvh] lg:min-h-[580px] lg:max-h-[1080px] flex flex-col justify-between lg:justify-center lg:items-center pt-20 sm:pt-24 lg:pt-16 pb-6 sm:pb-8 lg:pb-6 overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {/* Mobile Phone Hero Background (< lg) */}
        <div className="relative w-full h-full lg:hidden">
          <Image
            src="/images/hero/hero-mobile-bg.png"
            alt="Flavourzy Café Mobile Table"
            fill
            priority
            quality={95}
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Subtle top blend for header legibility */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FBF8F3]/60 to-transparent pointer-events-none" />
          {/* Subtle bottom blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FBF8F3]/30 to-transparent pointer-events-none" />
        </div>

        {/* Desktop Hero Background (>= lg) */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/images/hero/hero-bg.png"
            alt="Flavourzy Café Gourmet Table"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Seamless left fade into the page background color */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F3] via-[#FBF8F3]/60 to-transparent w-1/2 pointer-events-none" />
          {/* Bottom subtle edge blend */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#FBF8F3] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Content Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between lg:justify-center">
        
        {/* Top/Left Content Block */}
        <div className="max-w-xl lg:max-w-2xl pt-2 sm:pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 mb-2 sm:mb-2.5 px-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32] fill-[#C85A32]/20" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-800 uppercase">
                Charni Road, Mumbai
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-[42px] sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold text-neutral-900 leading-[1.04] tracking-tight mb-3 sm:mb-4">
              <span>Good Food</span>
              <br />
              <span className="text-[#255E3D] relative inline-flex items-center">
                Brighter Days
                {/* Decorative sparkle burst */}
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 text-[#255E3D] ml-2 shrink-0 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 3v3" />
                  <path d="M18.36 5.64l-2.12 2.12" />
                  <path d="M21 12h-3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-neutral-700 sm:text-neutral-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-md lg:max-w-lg mb-4 sm:mb-5 font-normal">
              Great food, refreshing drinks and a space that feels like home.
              Welcome to Flavourzy – where every bite makes your day better.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5 w-full sm:w-auto max-w-[280px] sm:max-w-none">
              <Button
                variant="primary"
                size="md"
                href="#menu"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto bg-[#153424] hover:bg-[#1c4530] text-white shadow-md text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 justify-center"
              >
                <span className="flex items-center gap-2">
                  <Bike className="w-4 h-4 text-emerald-300" />
                  <span>Order Now</span>
                </span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#story"
                icon={<Calendar className="w-4 h-4 text-neutral-700" />}
                iconPosition="left"
                className="w-full sm:w-auto text-neutral-900 border border-neutral-800/80 bg-white/75 backdrop-blur-xs hover:bg-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 justify-center"
              >
                Book a Table
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-0">
              <div className="flex items-center -space-x-2">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-[#FBF8F3] overflow-hidden shadow-xs">
                  <Image
                    src="/images/avatars/user1.jpg"
                    alt="Customer avatar"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-[#FBF8F3] overflow-hidden shadow-xs">
                  <Image
                    src="/images/avatars/user2.jpg"
                    alt="Customer avatar"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-[#FBF8F3] overflow-hidden shadow-xs">
                  <Image
                    src="/images/avatars/user3.jpg"
                    alt="Customer avatar"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-[#FBF8F3] overflow-hidden shadow-xs bg-[#255E3D] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  +10k
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                  10K+ Happy Foodies
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-600 sm:text-neutral-500 font-medium">
                  in Mumbai
                </span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Mobile-Only Floating Card & Bottom Indicators */}
        <div className="lg:hidden w-full flex flex-col pt-4 pb-2">
          {/* Mobile Floating Card over the pasta dish */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="self-start bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.14)] border border-white/80 flex items-center justify-between gap-3 w-full max-w-[270px] mb-6"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5 shadow-xs">
                <Image
                  src="/images/categories/pasta.jpg"
                  alt="Pasta"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-neutral-900 leading-tight font-sans">
                  Pasta
                </span>
                <span className="text-[10px] text-neutral-500 font-medium leading-tight">
                  Comfort in every bite
                </span>
                <span className="text-xs font-extrabold text-neutral-900 mt-0.5">
                  ₹ 249
                </span>
              </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-[#153424] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Mobile Bottom Footer Line (SAME FOOD DIFFERENT MOODS + SCROLL indicator) */}
          <div className="flex items-end justify-between w-full">
            <div className="text-[9.5px] font-bold tracking-[0.2em] text-white uppercase drop-shadow-md leading-tight">
              SAME FOOD<br />DIFFERENT MOODS 🍃
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] h-7 bg-white/75 rounded-full relative overflow-hidden">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
              </div>
              <span className="text-[8.5px] font-bold tracking-[0.22em] text-white uppercase drop-shadow-md">
                SCROLL
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Desktop-Only Floating Product Card (Pasta ₹249) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden lg:flex absolute bottom-6 lg:bottom-10 right-[32%] lg:right-[33%] xl:right-[35%] bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-white/70 items-center gap-3 z-20 group cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <div className="flex flex-col">
          <span className="text-xs sm:text-[13px] font-bold text-neutral-900 font-sans leading-tight">
            Pasta
          </span>
          <span className="text-[10px] text-neutral-500 font-medium leading-tight">
            Comfort in every bite
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-xs sm:text-sm font-extrabold text-neutral-900">
              ₹ 249
            </span>
          </div>
        </div>

        {/* Circular Action Arrow */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[#153424]">
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
      </motion.div>

      {/* Desktop-Only Carousel Indicator Dots at bottom right */}
      <div className="absolute bottom-6 right-6 lg:right-12 hidden lg:flex items-center gap-1.5 z-20 select-none">
        <span className="w-5 h-1.5 rounded-full bg-neutral-800/85 shadow-xs" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400/80 shadow-xs" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400/80 shadow-xs" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400/80 shadow-xs" />
      </div>

    </section>
  );
}
