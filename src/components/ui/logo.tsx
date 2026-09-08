import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  showTagline?: boolean;
}

export function Logo({
  className,
  size = "md",
  inverted = false,
  showTagline = false,
}: LogoProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const leafSizes = {
    sm: "w-4 h-4 -top-3 -right-3",
    md: "w-6 h-6 -top-4 -right-4",
    lg: "w-7 h-7 -top-4.5 -right-4.5",
  };

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col items-center select-none transition-transform duration-200 active:scale-98",
        className
      )}
      aria-label="Flavourzy Café Home"
    >
      <div className="relative inline-flex items-center">
        <span
          className={cn(
            "font-extrabold tracking-[-0.02em] font-sans transition-colors",
            textSizes[size],
            inverted ? "text-white" : "text-neutral-900"
          )}
        >
          FLAVOURZ
        </span>
        <span
          className={cn(
            "font-extrabold tracking-[-0.02em] font-sans relative transition-colors",
            textSizes[size],
            inverted ? "text-white" : "text-neutral-900"
          )}
        >
          Y
          {/* Sprouting Leaves over Y */}
          <svg
            className={cn("absolute pointer-events-none drop-shadow-xs", leafSizes[size])}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C7 3 4 8 5 13C6 14 7 14 8 13C12 9 13 4 12 2Z"
              fill={inverted ? "#4ADE80" : "#255E3D"}
            />
            <path
              d="M13 8C16 8 20 11 19 16C18 17 17 17 16 16C13 13 13 10 13 8Z"
              fill={inverted ? "#86EFAC" : "#367C4F"}
            />
          </svg>
        </span>
      </div>

      <div
        className={cn(
          "flex items-center gap-2 font-semibold tracking-[0.26em] uppercase -mt-0.5",
          size === "sm" ? "text-[8px]" : size === "lg" ? "text-[12px]" : "text-[10px]",
          inverted ? "text-neutral-200" : "text-neutral-700"
        )}
      >
        <span
          className={cn(
            "h-[1px] w-3 transition-colors",
            inverted ? "bg-neutral-300/40" : "bg-neutral-400"
          )}
        />
        <span>CAFÉ</span>
        <span
          className={cn(
            "h-[1px] w-3 transition-colors",
            inverted ? "bg-neutral-300/40" : "bg-neutral-400"
          )}
        />
      </div>

      {showTagline && (
        <div
          className={cn(
            "tracking-[0.2em] font-medium uppercase mt-0.5",
            size === "sm" ? "text-[6.5px]" : size === "lg" ? "text-[9px]" : "text-[8px]",
            inverted ? "text-neutral-300/80" : "text-neutral-500"
          )}
        >
          GOOD FOOD &bull; GOOD MOOD
        </div>
      )}
    </Link>
  );
}
