'use client';

import Cta from "@/components/global/website-sections/cta";
import FeaturesSection from "@/components/global/website-sections/features";
import FooterSection from "@/components/global/website-sections/footer";
import HeroSection from "@/components/global/website-sections/hero-section";
import Pricing from "@/components/global/website-sections/pricing";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import Header2 from "@/components/mvpblocks/header-2";
import PricingSection from "@/components/mvpblocks/pricing-5";

export default function Home() {
  return (
    <section className="min-h-screen text-foreground">
      <Header2 />
      <GradientHero />
      {/* <PricingSection /> */}
      {/* <Pricing /> */}
      <FeaturesSection />
      <Cta />
      <FooterSection />
    </section>
  );
}