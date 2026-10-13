"use client";

import { MapPin, Ship, Package, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXPORT_COUNTRIES, COMPANY } from "@/lib/data";

export function GlobalPresence() {
  return (
    <section className="py-section-sm lg:py-section">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="right">
            <div>
              <SectionHeading
                label="Global Reach"
                title="Exporting Premium Minerals Worldwide"
                description="From our mines in Gujarat, India to industries across the globe — we deliver quality minerals with complete export documentation and reliable logistics."
                align="left"
              />

              <div className="mt-8 space-y-4">
                {[
                  { icon: Ship, text: "FOB Mundra Port & CIF available worldwide" },
                  { icon: Package, text: "25 KG to Jumbo Bags & Bulk loading options" },
                  { icon: MapPin, text: "Complete export documentation support" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed pt-1.5">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="bg-surface-secondary rounded-2xl border border-border-light p-6 lg:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-600 mb-5">
                We Supply To
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {EXPORT_COUNTRIES.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white border border-border-light"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="text-sm font-medium text-text-primary">{country}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-gold-50 border border-gold-200">
                  <span className="text-sm font-medium text-gold-600">& Many More</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border-light">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Export Port</div>
                    <div className="text-sm text-text-secondary">{COMPANY.exportPort}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
