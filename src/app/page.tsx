import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductShowcase />
      <WhyChooseUs />
      <IndustriesGrid />
      <GlobalPresence />
      <CTABanner />
    </>
  );
}
