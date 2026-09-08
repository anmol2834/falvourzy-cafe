"use client";

import { motion } from "motion/react";
import { Coffee, Leaf, Users, Smile } from "lucide-react";
import { brandBenefitsData } from "@/data/benefits";

export function Benefits() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "coffee":
        return <Coffee className="w-5 h-5 stroke-[1.8]" />;
      case "leaf":
        return <Leaf className="w-5 h-5 stroke-[1.8]" />;
      case "users":
        return <Users className="w-5 h-5 stroke-[1.8]" />;
      case "smile":
        return <Smile className="w-5 h-5 stroke-[1.8]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-8 sm:py-12 border-y border-neutral-200/60 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/50">
          {brandBenefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-3 text-center sm:text-left px-2 sm:px-4 pt-4 sm:pt-0"
            >
              {/* Circular Icon Frame */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EDE8DE]/60 text-neutral-800 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(benefit.icon)}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug">
                  {benefit.title}
                </span>
                {benefit.subtitle && (
                  <span className="text-[11px] text-neutral-500 font-medium leading-snug">
                    {benefit.subtitle}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
