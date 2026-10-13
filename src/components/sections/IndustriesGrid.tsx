"use client";

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
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
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

export function IndustriesGrid() {
  return (
    <section className="py-section-sm lg:py-section bg-surface-secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Industries We Serve"
            title="Powering Diverse Industries Worldwide"
            description="Our minerals are trusted by industries across the globe for their purity, consistency and performance."
          />
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Factory;
            return (
              <ScrollReveal key={industry.name} delay={i * 0.06}>
                <div className="group rounded-xl bg-white border border-border-light p-5 lg:p-6 transition-all duration-300 hover:shadow-card-hover hover:border-gold-200 h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-50">
                    <Icon className="w-5 h-5 text-navy-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-1.5">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button href="/industries" variant="outline" size="md">
              View All Industries
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
