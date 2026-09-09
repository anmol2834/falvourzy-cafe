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
export default function HomePage() {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Brands onSelectBrand={(index) => setSelectedBrandIndex(index)} />
        <MoodMenu />
        <Challenge externalIndex={selectedBrandIndex} />
        <Benefits />
        <Story />
      </main>
      <Footer />
    </>
  );
}
