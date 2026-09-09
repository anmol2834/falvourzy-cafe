"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { Brands } from "@/components/landing/brands";
import { MoodMenu } from "@/components/landing/mood-menu";
import { Challenge } from "@/components/landing/challenge";
import { Benefits } from "@/components/landing/benefits";
import { Story } from "@/components/landing/story";
import { Footer } from "@/components/layout/footer";
import { BrandExperienceOverlay } from "@/components/landing/brand-experience-overlay";

export default function HomePage() {
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Brands onSelectBrand={(brandId) => setActiveBrandId(brandId)} />
        <MoodMenu />
        <Challenge onOpenExperience={() => setActiveBrandId("21-day-challenge")} />
        <Benefits />
        <Story />
      </main>
      <Footer />

      {/* Immersive Brand Experience Overlay */}
      <BrandExperienceOverlay
        activeBrandId={activeBrandId}
        onClose={() => setActiveBrandId(null)}
        onSelectBrand={(id) => setActiveBrandId(id)}
      />
    </>
  );
}
