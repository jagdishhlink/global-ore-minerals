import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Calcined Bauxite | High Strength Refractory Grade",
  description:
    "Premium Calcined Bauxite with high alumina content, low iron and excellent thermal stability. Available in 0-5mm, 5-25mm, 25-50mm sizes. For refractory, steel, cement and foundry industries.",
};

export default function CalcinedBauxitePage() {
  return (
    <>
      <ProductDetail productId="calcined-bauxite" />
      <CTABanner />
    </>
  );
}
