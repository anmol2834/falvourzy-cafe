import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  type: "flavourzy" | "challenge" | "dr-amit" | "dr-amit-vegan" | "handi-chaa" | "soup-salad";
  className?: string;
}

export function BrandLogo({ type, className }: BrandLogoProps) {
  switch (type) {
    case "flavourzy":
      return (
        <div className={cn("flex flex-col items-center select-none", className)}>
          <div className="relative inline-flex items-center">
            <span className="font-extrabold tracking-tight text-xl text-neutral-900 font-sans">
              FLAVOURZ
            </span>
            <span className="font-extrabold tracking-tight text-xl text-neutral-900 font-sans relative">
              Y
              {/* Sprouting green leaves on top of Y */}
              <svg
                className="absolute -top-3.5 -right-3.5 w-5 h-5 text-emerald-700 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z"
                  fill="#255E3D"
                />
                <path
                  d="M13 8C16 8 20 11 19 16C18 17 17 17 16 16C13 13 13 10 13 8Z"
                  fill="#367C4F"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.25em] text-neutral-600 font-semibold mt-0.5">
            <span className="h-[1px] w-2.5 bg-neutral-400"></span>
            <span>CAFÉ</span>
            <span className="h-[1px] w-2.5 bg-neutral-400"></span>
          </div>
          <div className="text-[7.5px] tracking-[0.2em] text-neutral-400 font-medium mt-0.5 uppercase">
            GOOD FOOD &bull; GOOD MOOD
          </div>
        </div>
      );

    case "challenge":
      return (
        <div className={cn("flex flex-col items-center select-none text-center", className)}>
          {/* Twin leaves icon */}
          <div className="mb-1 text-emerald-800">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4C8 5 5 9 6 14C7 15 8 15 9 14C12 11 13 6 12 4Z"
                fill="#255E3D"
              />
              <path
                d="M13 9C17 9 20 12 19 17C18 18 17 18 16 17C13 14 13 11 13 9Z"
                fill="#2F6A44"
              />
            </svg>
          </div>
          <div className="font-extrabold text-lg tracking-tight leading-tight text-neutral-900 font-sans">
            21 DAY
          </div>
          <div className="font-bold text-xs tracking-wider text-neutral-800 uppercase">
            CHALLENGE
          </div>
        </div>
      );

    case "dr-amit":
      return (
        <div className={cn("flex flex-col items-center select-none text-center", className)}>
          {/* Chef Hat outline */}
          <div className="mb-1 text-neutral-800">
            <svg className="w-7 h-7 stroke-neutral-800" viewBox="0 0 24 24" fill="none" strokeWidth="1.75">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V18H6Z" />
              <path d="M6 18h12v2H6z" fill="currentColor" stroke="none" />
              <path d="M9 14v4" />
              <path d="M12 14v4" />
              <path d="M15 14v4" />
            </svg>
          </div>
          <div className="font-serif italic font-bold text-base text-neutral-900 tracking-tight">
            Dr. Amit
          </div>
          <div className="font-extrabold text-xs tracking-wider text-neutral-900 uppercase font-sans">
            KITCHEN
          </div>
        </div>
      );

    case "dr-amit-vegan":
      return (
        <div className={cn("flex flex-col items-center select-none text-center", className)}>
          {/* Twin green leaves */}
          <div className="mb-1 text-emerald-700">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4C8 5 5 9 6 14C7 15 8 15 9 14C12 11 13 6 12 4Z"
                fill="#255E3D"
              />
              <path
                d="M13 8C17 8 20 11 19 16C18 17 17 17 16 16C13 13 13 10 13 8Z"
                fill="#367C4F"
              />
            </svg>
          </div>
          <div className="font-serif italic font-bold text-base text-neutral-900 tracking-tight">
            Dr. Amit
          </div>
          <div className="font-extrabold text-xs tracking-wider text-emerald-800 uppercase font-sans">
            VEGAN KITCHEN
          </div>
        </div>
      );

    case "handi-chaa":
      return (
        <div className={cn("flex flex-col items-center select-none text-center", className)}>
          {/* Clay cup / kulhad icon */}
          <div className="mb-1">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              {/* Cup body */}
              <path
                d="M6 9H18L16.5 19C16.3 20.1 15.4 21 14.3 21H9.7C8.6 21 7.7 20.1 7.5 19L6 9Z"
                fill="#A3542E"
              />
              <ellipse cx="12" cy="9" rx="6" ry="1.5" fill="#7C3B1B" />
              {/* Steam waves */}
              <path
                d="M10 5.5C9.5 4.5 10.5 3.5 10 2.5"
                stroke="#C27A52"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 6C13.5 4.8 14.5 3.8 14 2.8"
                stroke="#C27A52"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="font-extrabold text-sm tracking-wide text-[#7C3B1B] uppercase font-sans">
            HANDI CHAA
          </div>
        </div>
      );

    case "soup-salad":
      return (
        <div className={cn("flex flex-col items-center select-none text-center", className)}>
          {/* Salad bowl with sprouts */}
          <div className="mb-1">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              {/* Bowl */}
              <path
                d="M4 11C4 16.5 7.5 20 12 20C16.5 20 20 16.5 20 11H4Z"
                fill="#255E3D"
              />
              {/* Vegetables & leaves */}
              <path
                d="M7 11C7 9 9 7 11 8C11 6.5 13 6 14 7.5C15.5 7 17 8.5 17 11H7Z"
                fill="#367C4F"
              />
              <circle cx="9" cy="9.5" r="1.5" fill="#E85D04" />
              <circle cx="14" cy="9" r="1.5" fill="#F48C06" />
            </svg>
          </div>
          <div className="font-black text-[13px] tracking-tight text-neutral-900 leading-tight uppercase font-sans">
            SOUP &bull; SALAD
          </div>
          <div className="font-bold text-[11px] tracking-wide text-neutral-700 uppercase font-sans">
            SMOOTHIES
          </div>
        </div>
      );

    default:
      return null;
  }
}
