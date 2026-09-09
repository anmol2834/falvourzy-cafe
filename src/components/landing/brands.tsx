"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { brandsData } from "@/data/brands";
import { BrandLogo } from "@/components/ui/brand-logos";

interface BrandsProps {
  onSelectBrand?: (index: number) => void;
}

export function Brands({ onSelectBrand }: BrandsProps) {
  return (
    <section id="brands" className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-neutral-900 tracking-tight">
              Our Brands
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
              Different flavours. Same happiness.
            </p>
          </div>

          <Link
            href="#challenge"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-emerald-900 transition-colors"
          >
            <span className="hidden sm:inline">Explore All Brands</span>
            <span className="sm:hidden">View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Brand Cards Grid / Mobile Carousel */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => {
                onSelectBrand?.(index);
                const el = document.getElementById("challenge");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group shrink-0 w-[145px] sm:w-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between text-center border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 min-h-[165px] sm:min-h-[185px] cursor-pointer"
            >
              {/* Logo / Brand Mark */}
              <div className="flex items-center justify-center flex-1 w-full py-1">
                <BrandLogo type={brand.logoType} />
              </div>

              {/* Descriptor */}
              <div className="mt-1 text-[11px] sm:text-[11.5px] leading-tight text-neutral-500 group-hover:text-neutral-700 transition-colors font-medium whitespace-pre-line">
                {brand.descriptor}
              </div>

              {/* View Brand Action */}
              <div className="mt-2.5 pt-1.5 border-t border-neutral-100 w-full flex items-center justify-center gap-1 text-[11px] font-semibold text-[#153424] group-hover:text-[#255E3D] transition-colors">
                <span>View Brand</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
