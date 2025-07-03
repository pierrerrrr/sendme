'use client';

import Cta from "@/components/global/website-sections/cta";
import FeaturesSection from "@/components/global/website-sections/features";
import FooterSection from "@/components/global/website-sections/footer";
import HeroSection from "@/components/global/website-sections/hero-section";
import Pricing from "@/components/global/website-sections/pricing";

export default function Home() {
  return (
    <section className="min-h-screen text-foreground">
      <HeroSection />
      <Pricing />
      <FeaturesSection />
      <Cta />
      <FooterSection />
    </section>
  );
}