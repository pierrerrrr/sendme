'use client';

import FeaturesSection from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <section className="min-h-screen text-foreground">
      <HeroSection />
      <Pricing />
      <FeaturesSection />
      <FooterSection />
    </section>
  );
}