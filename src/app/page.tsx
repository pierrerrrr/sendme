import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Pricing />
      <FeaturesSection />
    </section>
  );
}
