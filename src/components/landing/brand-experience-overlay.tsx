"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Leaf, Heart, ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logos";
import { Logo } from "@/components/ui/logo";
import { brandsData } from "@/data/brands";

interface BrandExperienceOverlayProps {
  activeBrandId: string | null;
  onClose: () => void;
  onSelectBrand: (brandId: string) => void;
}

interface BrandExperienceDetail {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  bgHex: string;
  accentHex: string;
  scriptText?: string;
  badges?: Array<{ title: string; icon: "leaf" | "clover" | "heart" }>;
  floatingProduct?: { title: string; subtitle: string; price: string };
  logoType: "flavourzy" | "challenge" | "dr-amit" | "dr-amit-vegan" | "handi-chaa" | "soup-salad";
}

const brandDetails: Record<string, BrandExperienceDetail> = {
  "flavourzy-cafe": {
    id: "flavourzy-cafe",
    name: "Flavourzy Café",
    eyebrow: "ALL DAY DINING",
    title: "Good Food.\nGood Mood.",
    description:
      "Great food, refreshing drinks and a space that feels like home. Where every bite makes your day better.",
    image: "/images/hero/hero-bg.png",
    bgHex: "#FBF7F0",
    accentHex: "#153424",
    scriptText: "Good Food\nGood Mood ♡",
    floatingProduct: {
      title: "Pasta",
      subtitle: "Comfort in every bite",
      price: "₹ 249",
    },
    logoType: "flavourzy",
  },
  "21-day-challenge": {
    id: "21-day-challenge",
    name: "21 Day Challenge",
    eyebrow: "A HEALTHIER YOU",
    title: "21 Day\nChallenge",
    description:
      "Real food. Real habits. A healthier, happier you. Better food, better habits, happier days.",
    image: "/images/challenge/challenge_bowl.jpg",
    bgHex: "#edf4ea",
    accentHex: "#255E3D",
    scriptText: "Better Food\nHappier You ♡",
    badges: [
      { title: "Nutritious\nMeals", icon: "leaf" },
      { title: "Build Better\nHabits", icon: "clover" },
      { title: "Feel More\nEnergetic", icon: "heart" },
    ],
    logoType: "challenge",
  },
  "dr-amit-kitchen": {
    id: "dr-amit-kitchen",
    name: "Dr. Amit Kitchen",
    eyebrow: "SIMPLE FOOD • BETTER LIVING",
    title: "Simple Food.\nBetter Living.",
    description:
      "Thoughtfully prepared food made for everyday living. Wholesome recipes and mindful cooking that nurture wellness from within.",
    image: "/images/categories/pasta.jpg",
    bgHex: "#F5F2EB",
    accentHex: "#181D19",
    logoType: "dr-amit",
  },
  "dr-amit-vegan-kitchen": {
    id: "dr-amit-vegan-kitchen",
    name: "Dr. Amit Vegan Kitchen",
    eyebrow: "PLANT GOODNESS EVERYDAY",
    title: "Plant Goodness.\nEveryday.",
    description:
      "Fresh, thoughtful and completely plant-focused. Discover delicious botanical cuisine bursting with vibrant nutrients and vitality.",
    image: "/images/categories/salad.jpg",
    bgHex: "#EBF3E8",
    accentHex: "#255E3D",
    scriptText: "100% Plant Based ♡",
    badges: [
      { title: "Clean\nIngredients", icon: "leaf" },
      { title: "Dairy\nFree", icon: "clover" },
      { title: "Heart\nHealthy", icon: "heart" },
    ],
    logoType: "dr-amit-vegan",
  },
  "handi-chaa": {
    id: "handi-chaa",
    name: "Handi Chaa",
    eyebrow: "TRADITIONAL TASTE • MODERN VIBES",
    title: "Traditional Taste.\nModern Vibes.",
    description:
      "Old-school Indian warmth served with a modern Flavourzy twist. Rich slow-brewed aromatic spiced tea poured steaming hot in rustic clay kulhads.",
    image: "/images/categories/handi_chaa.jpg",
    bgHex: "#F7EFE9",
    accentHex: "#7C3B1B",
    scriptText: "Garam Kulhad Chai ♡",
    logoType: "handi-chaa",
  },
  "soup-salad-smoothies": {
    id: "soup-salad-smoothies",
    name: "Soup • Salad • Smoothies",
    eyebrow: "CLEAN EATS • HAPPY DAYS",
    title: "Clean Eats.\nHappy Days.",
    description:
      "Fresh garden bowls, nourishing soups and feel-good chilled fruit smoothies crafted to revitalize your everyday energy.",
    image: "/images/categories/smoothie.jpg",
    bgHex: "#F3F7F2",
    accentHex: "#255E3D",
    scriptText: "Fresh & Nourishing ♡",
    badges: [
      { title: "Fresh\nFruits", icon: "leaf" },
      { title: "Zero\nPreservatives", icon: "clover" },
      { title: "Rich in\nAntioxidants", icon: "heart" },
    ],
    logoType: "soup-salad",
  },
};

export function BrandExperienceOverlay({
  activeBrandId,
  onClose,
  onSelectBrand,
}: BrandExperienceOverlayProps) {
  const currentBrand = activeBrandId ? brandDetails[activeBrandId] || brandDetails["21-day-challenge"] : null;

  // Handle ESC key to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (activeBrandId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeBrandId, handleKeyDown]);

  if (!currentBrand) return null;

  return (
    <AnimatePresence>
      {activeBrandId && (
        <motion.div
          key="brand-experience-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] overflow-y-auto lg:overflow-hidden flex flex-col justify-between"
          style={{ backgroundColor: currentBrand.bgHex }}
        >
          {/* Top Bar */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="text-neutral-400 hidden sm:inline">&bull;</span>
              <button
                type="button"
                onClick={onClose}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Brands</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close brand experience"
              className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Brand World Container */}
          <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-4 lg:py-6 relative z-10">
            <motion.div
              key={currentBrand.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full relative rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 overflow-hidden"
              style={{ backgroundColor: currentBrand.bgHex }}
            >
              {/* Floating leaves decorations */}
              <div className="absolute top-10 left-[35%] w-7 h-7 pointer-events-none select-none opacity-80 hidden sm:block -rotate-12">
                <svg viewBox="0 0 24 24" fill={currentBrand.accentHex}>
                  <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
                </svg>
              </div>
              <div className="absolute top-6 right-[38%] w-6 h-6 pointer-events-none select-none opacity-75 hidden sm:block rotate-45">
                <svg viewBox="0 0 24 24" fill={currentBrand.accentHex}>
                  <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
                </svg>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                {/* Left Column: Brand Typography & CTA */}
                <div className="lg:col-span-4 flex flex-col items-start z-10">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase mb-3">
                    {currentBrand.eyebrow}
                  </span>

                  <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-neutral-900 leading-[1.08] tracking-tight mb-4 whitespace-pre-line">
                    {currentBrand.title}
                  </h2>

                  <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 mb-8 max-w-sm leading-relaxed font-normal">
                    {currentBrand.description}
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="group bg-[#153424] hover:bg-[#1c4530] text-white px-7 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 inline-flex items-center gap-2 cursor-pointer hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span>Explore Brand</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Center Column: Circular Visual Disc with White Frame */}
                <div className="lg:col-span-4 relative flex items-center justify-center py-2 lg:py-0 z-10">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[320px] lg:h-[320px] rounded-full p-2.5 sm:p-3 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={currentBrand.image}
                        alt={currentBrand.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="320px"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Script & Badges */}
                <div className="lg:col-span-4 flex flex-col lg:items-end justify-center z-10">
                  {currentBrand.scriptText && (
                    <div className="mb-6 lg:mb-8 self-center lg:self-end">
                      <span className="font-script text-3xl sm:text-4xl lg:text-[42px] text-neutral-800 -rotate-2 inline-block font-medium drop-shadow-xs leading-[1.1] whitespace-pre-line text-center lg:text-right">
                        {currentBrand.scriptText}
                      </span>
                    </div>
                  )}

                  {currentBrand.badges && (
                    <div className="flex items-center justify-center lg:justify-end gap-5 sm:gap-6 w-full">
                      {currentBrand.badges.map((badge, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#dbeada]/70 text-[#255E3D] flex items-center justify-center shadow-xs mb-2.5">
                            {badge.icon === "leaf" && <Leaf className="w-5 h-5 stroke-[1.8]" />}
                            {badge.icon === "clover" && (
                              <svg className="w-5 h-5 text-[#255E3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="8" cy="8" r="3.5" />
                                <circle cx="16" cy="8" r="3.5" />
                                <circle cx="8" cy="16" r="3.5" />
                                <circle cx="16" cy="16" r="3.5" />
                              </svg>
                            )}
                            {badge.icon === "heart" && <Heart className="w-5 h-5 stroke-[1.8]" />}
                          </div>
                          <span className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-tight whitespace-pre-line max-w-[80px]">
                            {badge.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentBrand.floatingProduct && (
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-md border border-white/80 flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-neutral-900 leading-tight">
                          {currentBrand.floatingProduct.title}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-medium leading-tight">
                          {currentBrand.floatingProduct.subtitle}
                        </span>
                        <span className="text-xs font-extrabold text-neutral-900 mt-0.5">
                          {currentBrand.floatingProduct.price}
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#153424] text-white flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Minimal Brand Navigator */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 pt-2 z-20">
            <div className="flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar py-2">
              {brandsData.map((brand, idx) => {
                const isActive = brand.id === currentBrand.id;
                return (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => onSelectBrand(brand.id)}
                    className={`shrink-0 flex items-center gap-2 py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#153424] text-white shadow-xs font-bold"
                        : "bg-white/60 hover:bg-white text-neutral-700 hover:text-neutral-950"
                    }`}
                  >
                    <span className={isActive ? "text-emerald-300 font-bold" : "text-neutral-400"}>
                      0{idx + 1}
                    </span>
                    <span>{brand.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
