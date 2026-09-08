"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ArrowRight, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/config/navigation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#FBF8F3]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {mainNavigation.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={cn(
                    "text-[13px] font-medium tracking-tight transition-colors duration-200 relative py-1",
                    isActive
                      ? "text-neutral-900 font-semibold"
                      : "text-neutral-600 hover:text-neutral-950"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-200/50 transition-colors cursor-pointer"
              aria-label="Search Flavourzy menu"
            >
              <Search className="w-[19px] h-[19px] stroke-[2.2]" />
            </button>

            {/* Shopping Cart with Badge */}
            <button
              type="button"
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-neutral-800 hover:bg-neutral-200/50 transition-colors cursor-pointer"
              aria-label="Shopping Cart with 0 items"
            >
              <ShoppingBag className="w-[19px] h-[19px] stroke-[2.2]" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#255E3D] text-white text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </button>

            {/* Desktop Order Now Button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                href="#menu"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="bg-[#153424] hover:bg-[#1e4832] text-white font-medium text-xs tracking-wide px-5 py-2.5 rounded-full shadow-xs"
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-neutral-900 hover:bg-neutral-200/50 transition-colors cursor-pointer ml-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown (interactive micro-interaction) */}
        {searchOpen && (
          <div className="mt-3 py-2 px-3 bg-white rounded-2xl shadow-lg border border-neutral-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                placeholder="Search pizzas, burgers, bowls, smoothies, handi chaa..."
                className="w-full text-xs sm:text-sm bg-transparent border-none outline-hidden text-neutral-900 placeholder:text-neutral-400 py-1.5"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs text-neutral-500 hover:text-neutral-800 px-2 py-1 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FBF8F3]/98 backdrop-blur-xl border-b border-neutral-200/80 shadow-2xl px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#255E3D] uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Charni Road, Mumbai</span>
            </div>

            <nav className="flex flex-col gap-2 pt-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 text-base font-semibold text-neutral-800 hover:text-emerald-800 border-b border-neutral-200/50 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="primary"
                href="#menu"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full py-3.5 justify-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </Button>
              <Button
                variant="secondary"
                href="#story"
                className="w-full py-3.5 justify-center text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Table
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
