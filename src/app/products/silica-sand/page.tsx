import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Silica Sand | 99.5% Purity Industrial Grade",
  description:
    "Premium quality Silica Sand with 99.5% SiO₂ purity. Available in 8, 16, 24, 30 Mesh & Fine Powder. Ideal for glass, foundry, water filtration and construction industries. Export quality from India.",
};

export default function SilicaSandPage() {
  return (
    <>
      <ProductDetail productId="silica-sand" />
      <CTABanner />
    </>
  );
}
