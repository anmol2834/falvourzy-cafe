"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Leaf,
  Heart,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import { weeklyOffersData, weeklyFeaturesData } from "@/data/weekly-offers";

export function WeeklyOffers() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const nextOffer = () => {
    setActiveDayIndex((prev) => (prev + 1) % weeklyOffersData.length);
  };

  const prevOffer = () => {
    setActiveDayIndex(
      (prev) => (prev - 1 + weeklyOffersData.length) % weeklyOffersData.length
    );
  };

  const renderFeatureIcon = (icon: string) => {
    switch (icon) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-[#255E3D] stroke-[1.8]" />;
      case "chef":
        return <UtensilsCrossed className="w-5 h-5 text-[#255E3D] stroke-[1.8]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#255E3D] stroke-[1.8]" />;
      case "heart":
        return <Heart className="w-5 h-5 text-[#255E3D] stroke-[1.8]" />;
      default:
        return <Leaf className="w-5 h-5 text-[#255E3D]" />;
    }
  };

  return (
    <section id="offers" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* Section Header with Eyebrow, Heading, Subtitle & Badges */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8 sm:mb-12">
          
          {/* Left: Eyebrow, Heading, Subtitle */}
          <div className="max-w-2xl">
            <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-3">
              WEEKLY OFFERS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[50px] font-bold text-neutral-900 leading-[1.06] tracking-tight mb-4">
              Good Food
              <br />
              <span className="text-[#255E3D] relative inline-flex items-center">
                All Week Long
                {/* Radiant green spark lines matching screenshot */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-1.5 text-[#255E3D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="12" x2="1" y2="12" />
                  <line x1="6" y1="6" x2="3" y2="3" />
                  <line x1="6" y1="18" x2="3" y2="21" />
                </svg>
              </span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 leading-relaxed font-normal">
              New flavours. Special offers. More reasons to visit.
              <br className="hidden sm:block" />
              Something delicious for every day of the week!
            </p>
          </div>

          {/* Right Header Group: Script & Circular Seal */}
          <div className="flex items-center gap-6 sm:gap-8 self-start lg:self-center">
            {/* Handwritten Script */}
            <div className="text-right">
              <span className="font-script text-2xl sm:text-3xl lg:text-[34px] text-neutral-800 -rotate-6 inline-block leading-tight font-medium drop-shadow-2xs">
                A New
                <br />
                Treat
                <br />
                Every Week ♡
              </span>
            </div>

            {/* Circular Seal matching screenshot */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#edf4ea] flex flex-col items-center justify-center text-center p-2.5 shadow-xs ring-1 ring-black/[0.03] select-none shrink-0">
              <Leaf className="w-4 h-4 text-[#255E3D] mb-1" />
              <span className="text-[10px] sm:text-[11px] font-serif font-bold text-neutral-800 leading-tight">
                Good Food
                <br />
                Brighter
                <br />
                Days ♡
              </span>
            </div>
          </div>

        </div>

        {/* Day Filter Pills (Visible on Mobile & Tablet) */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-6">
          {weeklyOffersData.map((item, idx) => {
            const isActive = idx === activeDayIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveDayIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#153424] text-white shadow-xs"
                    : "bg-white text-neutral-600 border border-neutral-200/70 hover:bg-neutral-50"
                }`}
              >
                {item.dayShort}
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* 7 Daily Offer Cards Section */}
        {/* ============================================================ */}
        <div className="relative my-4">
          
          {/* Desktop 7-Card Grid */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-3.5 items-stretch">
            {weeklyOffersData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl p-4 border border-neutral-200/70 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Day Tag & Badge Row */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-bold tracking-wider ${
                        item.dayColor === "terracotta"
                          ? "text-[#C85A32]"
                          : "text-neutral-800"
                      }`}
                    >
                      {item.dayShort}
                    </span>

                    {/* Circular Discount Badge */}
                    <div
                      className={`w-11 h-11 rounded-full flex flex-col items-center justify-center text-center p-0.5 text-white font-bold leading-none shadow-xs text-[9px] ${
                        item.badgeType === "terracotta"
                          ? "bg-[#C85A32]"
                          : "bg-[#255E3D]"
                      }`}
                    >
                      {item.badge.includes("Buy 1") ? (
                        <>
                          <span>Buy 1</span>
                          <span className="text-[8px] font-semibold">Get 1</span>
                        </>
                      ) : (
                        <span>{item.badge}</span>
                      )}
                    </div>
                  </div>

                  {/* Food Image in Soft Circle with burst accents */}
                  <div className="relative my-2 flex items-center justify-center">
                    {/* Decorative burst strokes */}
                    <div
                      className={`absolute top-0 left-1 w-4 h-4 pointer-events-none opacity-60 ${
                        item.badgeType === "terracotta"
                          ? "text-[#C85A32]"
                          : "text-[#255E3D]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="2" x2="12" y2="7" />
                        <line x1="4" y1="8" x2="8" y2="11" />
                      </svg>
                    </div>

                    <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-sm ring-1 ring-black/[0.04]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="120px"
                      />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-3">
                    <h3 className="font-bold text-sm text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-snug mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Order Now CTA */}
                <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center gap-1 text-[11.5px] font-bold text-neutral-900 group-hover:text-[#255E3D] transition-colors">
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile / Tablet Carousel (3 Cards at a time with Navigation Arrows) */}
          <div className="lg:hidden relative flex items-center justify-between">
            <button
              type="button"
              onClick={prevOffer}
              aria-label="Previous Day"
              className="absolute -left-2 sm:-left-4 z-30 w-9 h-9 rounded-full bg-[#153424] text-white flex items-center justify-center shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 3 cards visible on mobile / tablet */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full px-5 sm:px-6">
              {[0, 1, 2].map((offset) => {
                const item =
                  weeklyOffersData[
                    (activeDayIndex + offset) % weeklyOffersData.length
                  ];
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-neutral-200/70 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      {/* Day Tag & Badge Row */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[10px] sm:text-xs font-bold tracking-wider ${
                            item.dayColor === "terracotta"
                              ? "text-[#C85A32]"
                              : "text-neutral-800"
                          }`}
                        >
                          {item.dayShort}
                        </span>

                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex flex-col items-center justify-center text-center p-0.5 text-white font-bold leading-none shadow-xs text-[7.5px] sm:text-[8px] ${
                            item.badgeType === "terracotta"
                              ? "bg-[#C85A32]"
                              : "bg-[#255E3D]"
                          }`}
                        >
                          {item.badge.includes("Buy 1") ? (
                            <>
                              <span>Buy 1</span>
                              <span className="text-[7px]">Get 1</span>
                            </>
                          ) : (
                            <span>{item.badge}</span>
                          )}
                        </div>
                      </div>

                      {/* Food Image in Soft Circle */}
                      <div className="relative my-1 flex items-center justify-center">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-2xs">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="mt-2">
                        <h4 className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[9.5px] sm:text-[10.5px] text-neutral-500 leading-tight mt-0.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Order Now CTA */}
                    <div className="mt-3 pt-1.5 border-t border-neutral-100 flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-neutral-900">
                      <span>Order Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextOffer}
              aria-label="Next Day"
              className="absolute -right-2 sm:-right-4 z-30 w-9 h-9 rounded-full bg-[#153424] text-white flex items-center justify-center shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="lg:hidden flex items-center justify-center gap-1.5 my-4">
            {weeklyOffersData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeDayIndex ? "w-4 bg-[#153424]" : "bg-neutral-300"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* ============================================================ */}
        {/* Bottom Feature Strip & CTA matching screenshots */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-14 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left Feature Card (4 Values in elevated soft sage pill container) */}
          <div className="bg-[#edf4ea]/80 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-[#d8e8d3] flex items-center divide-x divide-[#cde0c7] shadow-xs w-full lg:w-auto overflow-x-auto no-scrollbar">
            {weeklyFeaturesData.map((feat) => (
              <div
                key={feat.id}
                className="flex items-center gap-2.5 px-3 sm:px-4.5 first:pl-1 last:pr-1 shrink-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-2xs shrink-0">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                    {feat.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium leading-snug">
                    {feat.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right CTA Button: View Full Menu */}
          <Link
            href="#menu"
            className="group shrink-0 bg-[#153424] hover:bg-[#1e4d35] text-white px-8 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all duration-200 inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Bottom Delicate Flourish Line & Subtitle */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3 w-full max-w-xs">
            <div className="h-px bg-neutral-300/80 flex-1" />
            <Leaf className="w-3.5 h-3.5 text-[#255E3D] fill-[#255E3D]/20" />
            <div className="h-px bg-neutral-300/80 flex-1" />
          </div>

          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase">
            GOOD FOOD &nbsp; GOOD PEOPLE &nbsp; BRIGHTER DAYS
          </span>
        </div>

      </div>
    </section>
  );
}
