import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Kaolin Clay (China Clay) | High Purity Fine Quality",
  description:
    "Premium Kaolin Clay (China Clay) with high whiteness, fine particle size, and chemical stability. Ideal for ceramics, paints, paper, rubber, and construction industries. Export quality from India.",
};

export default function KaolinClayPage() {
  return (
    <>
      <ProductDetail productId="kaolin-clay" />
      <CTABanner />
    </>
  );
}
