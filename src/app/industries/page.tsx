import type { Metadata } from "next";
import {
  Factory,
  Building2,
  Flame,
  Droplets,
  Hammer,
  HardHat,
  FlaskConical,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { INDUSTRIES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  factory: Factory,
  building: Building2,
  flame: Flame,
  droplets: Droplets,
  anvil: Hammer,
  hardHat: HardHat,
  flask: FlaskConical,
  globe: Globe,
};

const productLinks: Record<string, string[]> = {
  "Glass Manufacturing": ["Silica Sand"],
  "Cement Industry": ["Bauxite Ore", "Calcined Bauxite"],
  "Refractory & Ceramics": ["Calcined Bauxite", "Silica Sand"],
  "Water Filtration": ["Silica Sand"],
  "Foundry Industry": ["Silica Sand"],
  "Construction": ["Silica Sand"],
  "Chemical Industry": ["Silica Sand", "Bauxite Ore"],
  "Export & Trading": ["Silica Sand", "Bauxite Ore", "Calcined Bauxite"],
};

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Global Ore & Minerals serves glass manufacturing, cement, refractory, ceramics, water filtration, foundry, construction, and chemical industries worldwide with premium quality minerals.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries We Serve"
        title="Powering High-Performance Industries"
        description="Our minerals are trusted by industries worldwide for their purity, consistency and performance in demanding applications."
      />

      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid gap-6 lg:gap-8">
            {INDUSTRIES.map((industry, i) => {
              const Icon = iconMap[industry.icon] || Factory;
              const products = productLinks[industry.name] || [];
              return (
                <ScrollReveal key={industry.name} delay={i * 0.06}>
                  <div className="group rounded-2xl bg-white border border-border-light p-6 lg:p-8 transition-all duration-300 hover:shadow-card-hover hover:border-gold-200">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold-50">
                        <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary mb-2">
                          {industry.name}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {industry.description}
                        </p>
                        {products.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {products.map((p) => (
                              <span
                                key={p}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-gold-50 text-gold-700 border border-gold-200"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
