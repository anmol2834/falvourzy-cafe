"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Heart,
  Coffee,
  Sparkles,
  ShieldCheck,
  Activity,
  Droplet,
  Sprout,
  Zap,
  Flame,
  Apple,
  Shield,
  Utensils,
} from "lucide-react";

export interface BrandSlide {
  id: string;
  brandName: string;
  eyebrow: string;
  title: string;
  description: string;
  scriptText: string;
  buttonText: string;
  buttonHref: string;
  bgColor: string;
  buttonBg: string;
  buttonHoverBg: string;
  badgeBg: string;
  badgeColor: string;
  floatingColor: string;
  image: string;
  imageAlt: string;
  badges: Array<{
    id: string;
    icon: "leaf" | "clover" | "heart" | "coffee" | "pizza" | "sparkles" | "shield" | "activity" | "droplet" | "sprout" | "zap" | "flame" | "apple";
    label: string;
  }>;
}

export const brandSlides: BrandSlide[] = [
  {
    id: "21-day-challenge",
    brandName: "21 Day Challenge",
    eyebrow: "A HEALTHIER YOU",
    title: "21 Day\nChallenge",
    description: "Real food. Real habits.\nA healthier, happier you.",
    scriptText: "Better Food\nHappier You ♡",
    buttonText: "Explore Challenge",
    buttonHref: "#menu",
    bgColor: "#edf4ea", // Soft Sage Green
    buttonBg: "#153424",
    buttonHoverBg: "#1e4d35",
    badgeBg: "bg-[#dbeada]/70",
    badgeColor: "text-[#255E3D]",
    floatingColor: "#255E3D",
    image: "/images/challenge/challenge_bowl.jpg",
    imageAlt: "21 Day Challenge nutritious Buddha bowl with avocado and quinoa",
    badges: [
      { id: "b1", icon: "leaf", label: "Nutritious\nMeals" },
      { id: "b2", icon: "clover", label: "Build Better\nHabits" },
      { id: "b3", icon: "heart", label: "Feel More\nEnergetic" },
    ],
  },
  {
    id: "flavourzy-cafe",
    brandName: "Flavourzy Café",
    eyebrow: "ALL DAY DINING",
    title: "Flavourzy\nCafé",
    description: "Artisan sourdough pizza, creamy pastas,\nand signature roasted coffee in cozy vibes.",
    scriptText: "Good Food\nGood Mood ♡",
    buttonText: "Explore Café",
    buttonHref: "#menu",
    bgColor: "#fbf3ea", // Warm Tuscan Cream
    buttonBg: "#4a2810",
    buttonHoverBg: "#633716",
    badgeBg: "bg-[#f2dfcc]/75",
    badgeColor: "text-[#8c4b18]",
    floatingColor: "#b86b32",
    image: "/images/categories/pizza.jpg",
    imageAlt: "Flavourzy handcrafted artisanal pizza with fresh herbs",
    badges: [
      { id: "b1", icon: "coffee", label: "Fresh Roast\nCoffee" },
      { id: "b2", icon: "pizza", label: "Stone Baked\nCrust" },
      { id: "b3", icon: "sparkles", label: "Cozy Warm\nVibes" },
    ],
  },
  {
    id: "dr-amit-kitchen",
    brandName: "Dr. Amit Kitchen",
    eyebrow: "HEALTH & WELLNESS",
    title: "Dr. Amit\nKitchen",
    description: "Gut-friendly nutrition, cold-pressed oils,\nand doctor-designed wholesome plates.",
    scriptText: "Food As\nMedicine ♡",
    buttonText: "View Nutrition",
    buttonHref: "#menu",
    bgColor: "#eef4f8", // Crisp Slate Sky
    buttonBg: "#12374e",
    buttonHoverBg: "#1a4e6e",
    badgeBg: "bg-[#d8e8f2]/80",
    badgeColor: "text-[#1b6288]",
    floatingColor: "#2a7ba8",
    image: "/images/categories/salad.jpg",
    imageAlt: "Nutrient-dense superfood salad curated by Dr. Amit",
    badges: [
      { id: "b1", icon: "shield", label: "Doctor\nApproved" },
      { id: "b2", icon: "activity", label: "Balanced\nMacros" },
      { id: "b3", icon: "droplet", label: "Zero Refined\nOils" },
    ],
  },
  {
    id: "dr-amit-vegan-kitchen",
    brandName: "Dr. Amit Vegan Kitchen",
    eyebrow: "100% PLANT POWER",
    title: "Dr. Amit Vegan\nKitchen",
    description: "Pure plant vitality, dairy-free delights,\nand high-protein superfood nourishment.",
    scriptText: "Pure Plant\nVitality ♡",
    buttonText: "Explore Vegan",
    buttonHref: "#menu",
    bgColor: "#eaf5ec", // Fresh Mint Green
    buttonBg: "#0f3e23",
    buttonHoverBg: "#165832",
    badgeBg: "bg-[#cee8d3]/80",
    badgeColor: "text-[#186b3a]",
    floatingColor: "#228b4d",
    image: "/images/challenge/challenge_bowl.jpg",
    imageAlt: "Vibrant 100% vegan plant bowl with crispy chickpeas and fresh greens",
    badges: [
      { id: "b1", icon: "sprout", label: "100% Pure\nVegan" },
      { id: "b2", icon: "zap", label: "High Clean\nProtein" },
      { id: "b3", icon: "heart", label: "Dairy & Guilt\nFree" },
    ],
  },
  {
    id: "handi-chaa",
    brandName: "Handi Chaa",
    eyebrow: "DESI HERITAGE",
    title: "Handi\nChaa",
    description: "Slow-cooked earthen pot chai infused\nwith 7 aromatic whole mountain spices.",
    scriptText: "Sukoon In\nEvery Sip ♡",
    buttonText: "Taste Sukoon",
    buttonHref: "#menu",
    bgColor: "#fbf0e6", // Earthen Terracotta Cream
    buttonBg: "#4a1c0d",
    buttonHoverBg: "#632713",
    badgeBg: "bg-[#f5d9c7]/80",
    badgeColor: "text-[#873418]",
    floatingColor: "#af4824",
    image: "/images/categories/handi_chaa.jpg",
    imageAlt: "Authentic Handi Chaa in traditional clay kulhad cups",
    badges: [
      { id: "b1", icon: "flame", label: "Slow Clay\nSimmered" },
      { id: "b2", icon: "sparkles", label: "7 Royal\nSpices" },
      { id: "b3", icon: "coffee", label: "Kulhad\nServed" },
    ],
  },
  {
    id: "soup-salad-smoothies",
    brandName: "Soup • Salad • Smoothies",
    eyebrow: "CLEAN EATS • HAPPY DAYS",
    title: "Soup • Salad\n• Smoothies",
    description: "Cold-pressed antioxidant smoothies, farm-fresh\nsalads, and soothing slow-simmered broths.",
    scriptText: "Glow From\nWithin ♡",
    buttonText: "Order Fresh",
    buttonHref: "#menu",
    bgColor: "#faf6e4", // Sunlit Citrus Glow
    buttonBg: "#343d0e",
    buttonHoverBg: "#4a5714",
    badgeBg: "bg-[#ece7b5]/80",
    badgeColor: "text-[#5e6d15]",
    floatingColor: "#7e8f19",
    image: "/images/categories/smoothie.jpg",
    imageAlt: "Fresh detox cold-pressed booster smoothie",
    badges: [
      { id: "b1", icon: "sparkles", label: "Cold-Pressed\nPure" },
      { id: "b2", icon: "apple", label: "Farm Fresh\nOrganic" },
      { id: "b3", icon: "shield", label: "Zero Added\nSugars" },
    ],
  },
];

interface ChallengeProps {
  externalIndex?: number | null;
}

export function Challenge({ externalIndex }: ChallengeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Allow external control if triggered from "Our Brands"
  useEffect(() => {
    if (typeof externalIndex === "number" && externalIndex >= 0 && externalIndex < brandSlides.length) {
      setCurrentIndex(externalIndex);
    }
  }, [externalIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % brandSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + brandSlides.length) % brandSlides.length);
  }, []);

  // Continuous auto slideshow: guaranteed exact 5.0 seconds per slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isPaused, nextSlide]);

  const slide = brandSlides[currentIndex];

  const renderBadgeIcon = (icon: BrandSlide["badges"][0]["icon"]) => {
    switch (icon) {
      case "leaf":
        return <Leaf className="w-5 h-5 stroke-[1.8]" />;
      case "clover":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="3.5" />
            <circle cx="16" cy="8" r="3.5" />
            <circle cx="8" cy="16" r="3.5" />
            <circle cx="16" cy="16" r="3.5" />
          </svg>
        );
      case "heart":
        return <Heart className="w-5 h-5 stroke-[1.8]" />;
      case "coffee":
        return <Coffee className="w-5 h-5 stroke-[1.8]" />;
      case "pizza":
        return <Utensils className="w-5 h-5 stroke-[1.8]" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 stroke-[1.8]" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 stroke-[1.8]" />;
      case "activity":
        return <Activity className="w-5 h-5 stroke-[1.8]" />;
      case "droplet":
        return <Droplet className="w-5 h-5 stroke-[1.8]" />;
      case "sprout":
        return <Sprout className="w-5 h-5 stroke-[1.8]" />;
      case "zap":
        return <Zap className="w-5 h-5 stroke-[1.8]" />;
      case "flame":
        return <Flame className="w-5 h-5 stroke-[1.8]" />;
      case "apple":
        return <Apple className="w-5 h-5 stroke-[1.8]" />;
      default:
        return <Sparkles className="w-5 h-5 stroke-[1.8]" />;
    }
  };

  return (
    <section id="challenge" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Card Container with animated background color */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-[32px] sm:rounded-[44px] p-6 sm:p-12 lg:p-16 overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.04)] transition-colors duration-700 ease-out select-none"
          style={{ backgroundColor: slide.bgColor }}
        >
          {/* Top 5-second slide progress bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-black/[0.04] overflow-hidden pointer-events-none">
            <motion.div
              key={`${currentIndex}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-neutral-800/30"
            />
          </div>

          {/* Floating Themed Motifs */}
          <div
            className="absolute top-12 left-[36%] w-7 h-7 pointer-events-none opacity-75 hidden sm:block -rotate-12 transition-colors duration-700"
            style={{ color: slide.floatingColor }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div
            className="absolute top-8 right-[38%] w-6 h-6 pointer-events-none opacity-70 hidden sm:block rotate-45 transition-colors duration-700"
            style={{ color: slide.floatingColor }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div
            className="absolute top-14 right-[34%] w-5 h-5 pointer-events-none opacity-60 hidden md:block rotate-12 transition-colors duration-700"
            style={{ color: slide.floatingColor }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div
            className="absolute bottom-16 left-[36%] w-7 h-7 pointer-events-none opacity-75 hidden sm:block rotate-40 transition-colors duration-700"
            style={{ color: slide.floatingColor }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          <div
            className="absolute bottom-12 right-[42%] w-5 h-5 pointer-events-none opacity-65 hidden sm:block rotate-20 transition-colors duration-700"
            style={{ color: slide.floatingColor }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10"
            >
              {/* Left Column: Eyebrow, Title, Description, Desktop Button */}
              <div className="lg:col-span-4 flex flex-col items-start w-full">
                {/* Mobile Top Row (< lg): Eyebrow on left, CTA Button cleanly on top right */}
                <div className="lg:hidden flex items-center justify-between gap-3 w-full mb-3">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="text-[10.5px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase truncate"
                  >
                    {slide.eyebrow}
                  </motion.span>

                  <Link
                    href={slide.buttonHref}
                    className="shrink-0 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-[11px] sm:text-xs shadow-xs transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
                    style={{ backgroundColor: slide.buttonBg }}
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Desktop Eyebrow (>= lg) */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="hidden lg:block text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3"
                >
                  {slide.eyebrow}
                </motion.span>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-neutral-900 leading-[1.06] tracking-tight mb-3 sm:mb-4 whitespace-pre-line"
                >
                  {slide.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 mb-6 sm:mb-8 max-w-sm leading-relaxed font-normal whitespace-pre-line"
                >
                  {slide.description}
                </motion.p>

                {/* Desktop CTA Button (>= lg) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="hidden lg:block"
                >
                  <Link
                    href={slide.buttonHref}
                    className="group text-white px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:shadow-md hover:-translate-y-0.5"
                    style={{ backgroundColor: slide.buttonBg }}
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Center Column: Circular Food Imagery Frame */}
              <div className="lg:col-span-4 relative flex items-center justify-center py-4 lg:py-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[330px] lg:h-[330px] rounded-full p-2.5 sm:p-3 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 260px, 340px"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Handwritten Script & 3 Feature Badges */}
              <div className="lg:col-span-4 flex flex-col lg:items-end justify-center">
                {/* Handwritten script */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-8 lg:mb-10 self-center lg:self-end"
                >
                  <span className="font-script text-3xl sm:text-4xl lg:text-[44px] text-neutral-800 -rotate-2 inline-block font-medium drop-shadow-xs leading-[1.08] text-center lg:text-right">
                    {slide.scriptText.split("\n").map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </motion.div>

                {/* 3 Benefit Badges Row */}
                <div className="flex items-center justify-center lg:justify-end gap-5 sm:gap-6 w-full">
                  {slide.badges.map((badge, bIdx) => (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + bIdx * 0.06 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${slide.badgeBg} ${slide.badgeColor} flex items-center justify-center shadow-xs mb-2.5 transition-transform hover:scale-105`}
                      >
                        {renderBadgeIcon(badge.icon)}
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-tight whitespace-pre-line max-w-[80px]">
                        {badge.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Bar: Brand Indicator Pills & Progress Slider */}
          <div className="mt-8 sm:mt-12 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20">
            {/* Slide Navigation Dots / Brand Pills */}
            <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2">
              {brandSlides.map((b, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={b.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-neutral-900 text-white shadow-xs scale-105"
                        : "bg-black/[0.05] hover:bg-black/[0.1] text-neutral-600"
                    }`}
                  >
                    {b.brandName}
                  </button>
                );
              })}
            </div>

            {/* Manual Controls & 2-sec indicator */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-500 uppercase">
                {isPaused ? "Paused" : "Auto 5s"}
              </span>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Brand"
                  className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center shadow-xs transition-all hover:scale-105 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Brand"
                  className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center shadow-xs transition-all hover:scale-105 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
