"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Leaf,
  Users,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { testimonialsData, testimonialStats } from "@/data/testimonials";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Indices for desktop 3-card presentation
  const count = testimonialsData.length;
  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  const currentFeatured = testimonialsData[activeIndex];
  const leftTestimonial = testimonialsData[prevIndex];
  const rightTestimonial = testimonialsData[nextIndex];

  const renderStatIcon = (icon: "coffee" | "leaf" | "users") => {
    switch (icon) {
      case "coffee":
        return <Coffee className="w-4 h-4 text-[#255E3D]" />;
      case "leaf":
        return <Leaf className="w-4 h-4 text-[#255E3D]" />;
      case "users":
        return <Users className="w-4 h-4 text-[#255E3D]" />;
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Floating Leaves Background Decoration */}
      <div className="absolute top-12 right-[8%] w-8 h-8 pointer-events-none opacity-80 select-none hidden lg:block rotate-12 text-[#255E3D]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
        </svg>
      </div>
      <div className="absolute top-28 right-[15%] w-6 h-6 pointer-events-none opacity-70 select-none hidden lg:block -rotate-45 text-[#367C4F]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-[4%] w-9 h-9 pointer-events-none opacity-70 select-none hidden md:block rotate-45 text-[#255E3D]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* Section Header with Eyebrow, Title, Stats & Handwritten Script */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10 sm:mb-14">
          
          {/* Left: Eyebrow, Main Heading, Subtitle */}
          <div className="max-w-xl">
            <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-3">
              TESTIMONIALS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-neutral-900 leading-[1.08] tracking-tight mb-3">
              Loved by Foodies,
              <br />
              Backed by{" "}
              <span className="text-[#255E3D] relative inline-flex items-center">
                Smiles
                {/* Radiant green spark lines matching screenshot */}
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-1 text-[#255E3D]"
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
              Real stories. Real flavours. Real happiness.
              <br className="hidden sm:block" />
              Here&apos;s what our happy customers have to say.
            </p>
          </div>

          {/* Center / Right Header Group: Stats & Handwritten Script */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
            {/* 3 Stats Card Row */}
            <div className="flex items-center bg-white/80 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-neutral-200/60 shadow-xs divide-x divide-neutral-200/60">
              {testimonialStats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center px-3 sm:px-4 first:pl-2 last:pr-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#edf4ea] flex items-center justify-center mb-1.5 shadow-2xs">
                    {renderStatIcon(stat.icon)}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-neutral-900 leading-none mb-0.5">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-neutral-500 font-medium whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Handwritten Script (Good Food Creates Happier People ♡) */}
            <div className="relative self-end sm:self-auto hidden md:block">
              <span className="font-script text-2xl sm:text-3xl lg:text-[32px] text-neutral-800 -rotate-6 inline-block leading-[1.1] font-medium drop-shadow-2xs">
                Good Food
                <br />
                Creates Happier
                <br />
                People ♡
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Testimonials Carousel Section */}
        {/* ============================================================ */}
        <div className="relative flex items-center justify-center my-6">
          
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-5 lg:-left-6 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#153424] hover:bg-[#1e4d35] text-white flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-5 lg:-right-6 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#153424] hover:bg-[#1e4d35] text-white flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Desktop Layout (3 Cards: Left Card + Featured Center Card + Right Card) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center w-full px-8">
            
            {/* Left Card: Clean White Review Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 border border-neutral-200/70 shadow-xs flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#edf4ea]">
                      <Image
                        src={leftTestimonial.avatar}
                        alt={leftTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-serif text-3xl font-bold text-neutral-300 leading-none">
                      “
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-4 font-normal mb-4">
                    &ldquo;{leftTestimonial.quote}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(leftTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                    {leftTestimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10.5px] text-neutral-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#255E3D]" />
                    <span>{leftTestimonial.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Featured Card: Dark Green with Food Photography & Badge */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatured.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl sm:rounded-[36px] bg-[#153825] text-white p-6 sm:p-8 overflow-hidden shadow-xl min-h-[330px] flex flex-col justify-between"
                >
                  <div className="grid grid-cols-12 gap-4 relative z-10">
                    {/* Left Column: Avatar, Quote, Stars, Name */}
                    <div className="col-span-7 flex flex-col justify-between pr-2">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/40">
                            <Image
                              src={currentFeatured.avatar}
                              alt={currentFeatured.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-serif text-3xl font-bold text-white/40 leading-none">
                            “
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal mb-5">
                          &ldquo;{currentFeatured.quote}&rdquo;
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(currentFeatured.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]"
                            />
                          ))}
                        </div>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {currentFeatured.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-300 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          <span>{currentFeatured.city}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Food Image & 21 Day Challenge Badge */}
                    <div className="col-span-5 relative flex items-center justify-center">
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md ring-1 ring-white/10">
                        <Image
                          src={
                            currentFeatured.foodImage ||
                            "/images/testimonials/featured_bowl.jpg"
                          }
                          alt="Nutritious food bowl"
                          fill
                          className="object-cover"
                        />
                        {/* 21 Day Challenge White Circular Badge matching screenshot */}
                        <div className="absolute bottom-2 right-2 bg-white text-neutral-900 rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md">
                          <Leaf className="w-3 h-3 text-[#255E3D]" />
                          <span className="text-[9px] font-bold tracking-tight">
                            {currentFeatured.brandTag || "21 DAY CHALLENGE"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Card: Clean White Review Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 border border-neutral-200/70 shadow-xs flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#edf4ea]">
                      <Image
                        src={rightTestimonial.avatar}
                        alt={rightTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-serif text-3xl font-bold text-neutral-300 leading-none">
                      “
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-4 font-normal mb-4">
                    &ldquo;{rightTestimonial.quote}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(rightTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight">
                    {rightTestimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10.5px] text-neutral-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#255E3D]" />
                    <span>{rightTestimonial.city}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Layout (Featured Card on top + Two Cards below side-by-side) */}
          <div className="lg:hidden w-full px-2 sm:px-4">
            {/* Top Featured Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeatured.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-[28px] bg-[#153825] text-white p-5 sm:p-6 overflow-hidden shadow-lg mb-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/40">
                        <Image
                          src={currentFeatured.avatar}
                          alt={currentFeatured.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-serif text-2xl font-bold text-white/40 leading-none">
                        “
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-neutral-200 leading-relaxed font-normal mb-3">
                      &ldquo;{currentFeatured.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(currentFeatured.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ))}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {currentFeatured.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[10.5px] text-neutral-300 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{currentFeatured.city}</span>
                    </div>
                  </div>

                  {/* Food Picture */}
                  <div className="relative w-full sm:w-44 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 shadow-xs">
                    <Image
                      src={
                        currentFeatured.foodImage ||
                        "/images/testimonials/featured_bowl.jpg"
                      }
                      alt="Food bowl"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-1.5 right-1.5 bg-white text-neutral-900 rounded-full px-2 py-0.5 flex items-center gap-1 shadow-xs">
                      <Leaf className="w-2.5 h-2.5 text-[#255E3D]" />
                      <span className="text-[8px] font-bold">
                        {currentFeatured.brandTag || "21 DAY CHALLENGE"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 my-3">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-5 bg-[#153424]"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Bottom Two Review Cards Side by Side */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {/* Card 1: Priya Sharma */}
              <div className="bg-white rounded-2xl p-3.5 border border-neutral-200/70 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-neutral-200">
                      <Image
                        src={leftTestimonial.avatar}
                        alt={leftTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-serif text-xl font-bold text-neutral-300">
                      “
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-snug line-clamp-3 mb-2 font-normal">
                    &ldquo;{leftTestimonial.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(leftTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <h5 className="text-[11px] font-bold text-neutral-900 leading-tight">
                    {leftTestimonial.name}
                  </h5>
                  <span className="text-[9.5px] text-neutral-500">
                    📍 {leftTestimonial.city}
                  </span>
                </div>
              </div>

              {/* Card 2: Ananya Singh */}
              <div className="bg-white rounded-2xl p-3.5 border border-neutral-200/70 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-neutral-200">
                      <Image
                        src={rightTestimonial.avatar}
                        alt={rightTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-serif text-xl font-bold text-neutral-300">
                      “
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-snug line-clamp-3 mb-2 font-normal">
                    &ldquo;{rightTestimonial.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(rightTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <h5 className="text-[11px] font-bold text-neutral-900 leading-tight">
                    {rightTestimonial.name}
                  </h5>
                  <span className="text-[9.5px] text-neutral-500">
                    📍 {rightTestimonial.city}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* Bottom Social Proof & Community Strip matching screenshots */}
        {/* ============================================================ */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/50 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left: Latte Art Cup + Tilted Note ("More Than a Café A Community ♡") */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Latte cup with roasted coffee beans */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md ring-2 ring-white shrink-0">
              <Image
                src="/images/testimonials/latte_cup.jpg"
                alt="Flavourzy Latte Art"
                fill
                className="object-cover"
              />
            </div>

            {/* Parchment Sticky Card rotated at angle */}
            <div className="bg-[#fcf7ed] border border-[#e6dbc8] rounded-xl p-3 sm:p-4 shadow-sm -rotate-3 text-center transition-transform hover:rotate-0">
              <span className="font-script text-base sm:text-lg lg:text-xl text-neutral-800 leading-tight block font-medium">
                More Than a Café
                <br />
                A Community ♡
              </span>
            </div>
          </div>

          {/* Center: Overlapping Avatars + Happy Foodies Script */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* 5 Avatar Stack + (+2k Pill) */}
            <div className="flex items-center -space-x-2.5">
              {[
                "/images/testimonials/rohan.jpg",
                "/images/testimonials/priya.jpg",
                "/images/testimonials/ananya.jpg",
                "/images/avatars/user1.jpg",
                "/images/avatars/user2.jpg",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white shadow-2xs"
                >
                  <Image src={src} alt="Customer" fill className="object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#edf4ea] text-[#255E3D] font-bold text-[10px] sm:text-xs flex items-center justify-center ring-2 ring-white shadow-2xs">
                +2k
              </div>
            </div>

            {/* Handwritten label */}
            <span className="font-script text-xl sm:text-2xl text-neutral-800 -rotate-2 font-medium">
              Happy Foodies ♡
            </span>
          </div>

          {/* Right: CTA Button & Subtitle */}
          <div className="flex flex-col items-center lg:items-end gap-1.5">
            <Link
              href="#menu"
              className="group bg-[#153424] hover:bg-[#1e4d35] text-white px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 inline-flex items-center gap-2 hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Read More Stories</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              GOOD FOOD &nbsp; GOOD PEOPLE &nbsp; BRIGHTER DAYS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
