"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Leaf,
  Users,
  Coffee,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { teamMembersData } from "@/data/team";

export function Story() {
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);

  const nextTeam = () => {
    setMobileTeamIndex((prev) => (prev + 1) % teamMembersData.length);
  };

  const prevTeam = () => {
    setMobileTeamIndex(
      (prev) => (prev - 1 + teamMembersData.length) % teamMembersData.length
    );
  };

  const currentTeam = teamMembersData[mobileTeamIndex];
  const nextTeamMember =
    teamMembersData[(mobileTeamIndex + 1) % teamMembersData.length];

  return (
    <section id="story" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* PART 1: OUR STORY (Founder, Story Copy & 4 Core Value Cards) */}
        {/* ============================================================ */}
        <div className="mb-16 lg:mb-24">
          
          {/* Top Story Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
            
            {/* Left Column on Desktop (Right on Mobile): Founder Visual */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
              
              {/* Floating Chalkboard Script on Left */}
              <div className="absolute -top-6 -left-2 sm:-left-6 z-20 hidden sm:block">
                <span className="font-script text-2xl sm:text-3xl text-neutral-800 -rotate-12 inline-block font-medium drop-shadow-xs">
                  Good Food
                  <br />
                  Good People
                  <br />
                  Always ♡
                </span>
              </div>

              {/* Founder Image Container */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
                <Image
                  src="/images/story/rohan_founder.jpg"
                  alt="Rohan Mehta, Founder & Owner of Flavourzy Café"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Leaf Motif */}
                <div className="absolute top-4 right-4 w-7 h-7 text-[#255E3D] opacity-80 rotate-45 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
                  </svg>
                </div>

                {/* Founder Info Badge matching screenshot */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-lg border border-neutral-100 z-20">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm sm:text-base leading-tight">
                        Rohan Mehta
                      </h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-neutral-500">
                        Founder &amp; Owner
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#edf4ea] flex items-center justify-center text-[#255E3D]">
                      <Leaf className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-neutral-600 font-medium italic mt-2 leading-snug">
                    &ldquo;Food has always been my way of bringing people closer.&rdquo;
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column on Desktop: Story Headline & Editorial Text */}
            <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
              
              <span className="text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-3">
                OUR STORY
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-bold text-neutral-900 leading-[1.08] tracking-tight mb-5">
                A Café Built on
                <br />
                Passion, People &amp;
                <br />
                <span className="text-[#255E3D] relative inline-flex items-center">
                  Better Days
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

              <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-600 leading-relaxed font-normal mb-8 max-w-xl">
                Flavourzy Café started with a simple idea — great food can make
                everyday life a little brighter. What began as a dream to create a
                warm, welcoming space has grown into a place where delicious food,
                refreshing drinks and happy people come together.
              </p>

              {/* 4 Pillars / Core Values Cards matching reference */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full">
                {/* 1. People First */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 border border-neutral-200/70 shadow-2xs flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#fcedeb] text-[#C85A32] flex items-center justify-center mb-2.5 shadow-2xs">
                    <Heart className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight mb-1">
                    People First
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-neutral-500 leading-tight">
                    Our guests, our biggest inspiration.
                  </p>
                </div>

                {/* 2. Fresh Always */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 border border-neutral-200/70 shadow-2xs flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#edf4ea] text-[#255E3D] flex items-center justify-center mb-2.5 shadow-2xs">
                    <Leaf className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight mb-1">
                    Fresh Always
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-neutral-500 leading-tight">
                    Quality ingredients. Better food.
                  </p>
                </div>

                {/* 3. A Happier Community */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 border border-neutral-200/70 shadow-2xs flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#edf4ea] text-[#255E3D] flex items-center justify-center mb-2.5 shadow-2xs">
                    <Users className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight mb-1">
                    A Happier Community
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-neutral-500 leading-tight">
                    Good food brings people together.
                  </p>
                </div>

                {/* 4. More Than a Café */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-4.5 border border-neutral-200/70 shadow-2xs flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#edf4ea] text-[#255E3D] flex items-center justify-center mb-2.5 shadow-2xs">
                    <Coffee className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight mb-1">
                    More Than a Café
                  </h4>
                  <p className="text-[10.5px] sm:text-[11px] text-neutral-500 leading-tight">
                    A place to eat, work, connect and unwind.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* PART 2: MEET OUR TEAM (Card Container with 6 Team Members) */}
        {/* ============================================================ */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#edf4ea] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_12px_45px_rgba(37,94,61,0.04)]">
          
          {/* Floating Leaves */}
          <div className="absolute top-8 right-[28%] w-8 h-8 pointer-events-none opacity-70 hidden sm:block rotate-45 text-[#255E3D]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>
          <div className="absolute bottom-6 right-8 w-7 h-7 pointer-events-none opacity-60 hidden md:block -rotate-12 text-[#367C4F]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z" />
            </svg>
          </div>

          {/* Desktop Team Section Header */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center mb-8">
            <div className="lg:col-span-8">
              <span className="text-[10.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-2">
                MEET OUR TEAM
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                The People Behind Your{" "}
                <span className="text-[#255E3D]">Favourite Moments</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-1.5 max-w-xl">
                A passionate team, working every day to bring you great food,
                warm service and memorable experiences.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end items-center">
              <Link
                href="#menu"
                className="group bg-[#153424] hover:bg-[#1e4d35] text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xs transition-all duration-200 inline-flex items-center gap-2 hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Our People, Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Desktop Team Grid (6 members row) */}
          <div className="hidden lg:flex items-start justify-between gap-4 relative z-10 pt-2">
            {teamMembersData.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center flex-1 max-w-[155px]"
              >
                {/* Circular Portrait with thick white ring */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden p-1 bg-white shadow-md ring-1 ring-black/[0.04] mb-3 transition-transform hover:scale-105">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-tight mb-0.5">
                  {member.name}
                </h4>
                <span className="text-[10.5px] font-medium text-neutral-500 mb-2 leading-tight">
                  {member.role}
                </span>
                <p className="text-[10px] text-neutral-600 font-medium italic leading-snug">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            ))}

            {/* Handwritten script on right: Great People Great Food ♡ */}
            <div className="self-center shrink-0 pl-2">
              <span className="font-script text-xl sm:text-2xl text-neutral-800 -rotate-6 inline-block leading-tight font-medium">
                Great People
                <br />
                Great Food ♡
              </span>
            </div>
          </div>

          {/* Mobile Phone Team View (< lg) */}
          <div className="lg:hidden flex flex-col items-start w-full">
            
            <div className="flex items-start justify-between w-full mb-3">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-1">
                  MEET OUR TEAM
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                  The People Behind Your{" "}
                  <span className="text-[#255E3D]">Favourite Moments</span>
                </h3>
              </div>

              <span className="font-script text-xl text-neutral-800 -rotate-6 shrink-0 leading-tight">
                Same Team
                <br />
                Brighter Days ♡
              </span>
            </div>

            <p className="text-xs text-neutral-600 font-normal mb-6">
              A passionate team, working every day to bring you great food, warm
              service and memorable experiences.
            </p>

            {/* Mobile Carousel with Arrows */}
            <div className="relative w-full flex items-center justify-between gap-2 my-2">
              <button
                type="button"
                onClick={prevTeam}
                aria-label="Previous Team Member"
                className="w-8 h-8 rounded-full bg-[#153424] text-white flex items-center justify-center shadow-xs shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 2 Team Cards shown in mobile view */}
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {/* Member 1 */}
                <div className="bg-white/90 rounded-2xl p-3 flex flex-col items-center text-center shadow-2xs">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-white ring-1 ring-neutral-200 mb-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={currentTeam.image}
                        alt={currentTeam.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="text-[11.5px] font-bold text-neutral-900 leading-tight">
                    {currentTeam.name}
                  </h4>
                  <span className="text-[10px] text-neutral-500 mb-1">
                    {currentTeam.role}
                  </span>
                  <p className="text-[9.5px] text-neutral-600 italic leading-snug line-clamp-2">
                    &ldquo;{currentTeam.quote}&rdquo;
                  </p>
                </div>

                {/* Member 2 */}
                <div className="bg-white/90 rounded-2xl p-3 flex flex-col items-center text-center shadow-2xs">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden p-0.5 bg-white ring-1 ring-neutral-200 mb-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={nextTeamMember.image}
                        alt={nextTeamMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="text-[11.5px] font-bold text-neutral-900 leading-tight">
                    {nextTeamMember.name}
                  </h4>
                  <span className="text-[10px] text-neutral-500 mb-1">
                    {nextTeamMember.role}
                  </span>
                  <p className="text-[9.5px] text-neutral-600 italic leading-snug line-clamp-2">
                    &ldquo;{nextTeamMember.quote}&rdquo;
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={nextTeam}
                aria-label="Next Team Member"
                className="w-8 h-8 rounded-full bg-[#153424] text-white flex items-center justify-center shadow-xs shrink-0 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 w-full my-4">
              {teamMembersData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileTeamIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === mobileTeamIndex
                      ? "w-4 bg-[#153424]"
                      : "bg-neutral-300"
                  }`}
                  aria-label={`Team member ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="w-full flex justify-center mt-2">
              <Link
                href="#menu"
                className="group bg-[#153424] hover:bg-[#1e4d35] text-white px-7 py-3 rounded-full font-semibold text-xs shadow-xs transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Our People, Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Bottom Strip on Mobile: Latte Art Cup + Parchment Note */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] w-full flex items-center justify-between gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-xs shrink-0">
                <Image
                  src="/images/testimonials/latte_cup.jpg"
                  alt="Flavourzy Latte"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#fcf7ed] border border-[#e6dbc8] rounded-xl p-2.5 shadow-2xs -rotate-2 text-center flex-1">
                <span className="font-script text-xs sm:text-sm text-neutral-800 leading-tight block">
                  Great People Great Food
                  <br />
                  Brighter Days ♡
                </span>
              </div>

              <span className="text-[8px] font-bold tracking-widest text-neutral-400 uppercase text-right leading-tight shrink-0 max-w-[80px]">
                GOOD FOOD GOOD PEOPLE
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
