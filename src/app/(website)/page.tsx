'use client';
import FeaturesSection from "@/components/global/website-sections/features-section";
import Footer from "@/components/global/website-sections/footer";
import GradientHero from "@/components/global/website-sections/hero-section";
import Header2 from "@/components/global/website-sections/header";
import PricingSection from "@/components/global/website-sections/pricing-section";

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