import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Bauxite Ore | Multi-Grade Industrial Supplier",
  description:
    "High quality Bauxite Ore available in Cement Grade, Laterite Bauxite, and High Grade Bauxite. Natural strength for cement, refractory, chemical and aluminum industries. Bulk export from India.",
};

export default function BauxiteOrePage() {
  return (
    <>
      <ProductDetail productId="bauxite-ore" />
      <CTABanner />
    </>
  );
}
