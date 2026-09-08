"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section id="story" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] sm:rounded-[40px] bg-[#0F281B] text-white overflow-hidden shadow-[0_20px_60px_rgba(15,40,27,0.3)] grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Story Editorial Copy & White CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#86EFAC]/80 uppercase block mb-3">
                Our Story
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5">
                More Than a Café,
                <br />
                A State of Mind.
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md font-normal mb-8">
                Flavourzy started with a simple idea – good food can make
                everyday life a little brighter. From indulgent favourites to
                healthy choices, we&apos;re here to serve food that makes you feel
                good, inside and out.
              </p>
            </div>

            <div>
              <Button
                variant="white"
                size="lg"
                href="#story"
                icon={<ArrowRight className="w-4 h-4 text-[#0F281B]" />}
                className="bg-white hover:bg-neutral-100 text-[#0F281B] font-bold px-7 py-3.5 shadow-md rounded-full text-sm sm:text-base"
              >
                Read Our Story
              </Button>
            </div>
          </div>

          {/* Right Column: Café Interior with Neon Sign & Handwritten Quote */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full flex items-center">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px]">
              <Image
                src="/images/story/cafe_interior.jpg"
                alt="Flavourzy Café cozy interior with Good Food Good Mood neon sign"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Gradient vignette on left to merge with dark green background on desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F281B] via-transparent to-transparent hidden lg:block opacity-60 pointer-events-none" />

              {/* Handwritten Quote Banner on Right (Desktop) */}
              <div className="absolute bottom-6 right-6 z-20 hidden sm:flex flex-col items-end">
                <span className="font-script text-2xl sm:text-3xl text-emerald-200 drop-shadow-md -rotate-6 font-medium">
                  Same Food<br />Different Moods ♡
                </span>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 mt-4 select-none">
                  <span className="w-5 h-1.5 rounded-full bg-white shadow-xs" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-xs" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-xs" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
