import type { Metadata } from "next";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Premium quality Silica Sand, Bauxite Ore, and Calcined Bauxite for industrial applications. Meeting international quality standards for glass, cement, refractory, and construction industries.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Our Products"
        title="Premium Quality Industrial Minerals"
        description="We offer a wide range of industrial minerals that meet international quality standards and cater to diverse industrial applications."
      />
      <ProductShowcase />
      <CTABanner />
    </>
  );
}
