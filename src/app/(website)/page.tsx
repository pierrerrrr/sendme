'use client';
import FeaturesSection from "@/components/mvpblocks/features";
import Footer from "@/components/mvpblocks/footer";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import Header2 from "@/components/mvpblocks/header-2";
import PricingSection from "@/components/mvpblocks/pricing-5";

export default function Home() {
  return (
    <section className="min-h-screen text-foreground">
      <Header2 />
      <GradientHero />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </section>
  );
}