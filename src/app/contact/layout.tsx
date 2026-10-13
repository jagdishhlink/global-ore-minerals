import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Global Ore & Minerals for competitive pricing on Silica Sand, Bauxite Ore, and Calcined Bauxite. Request a quote or call us at +91 90162 94608.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
