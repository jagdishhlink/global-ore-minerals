import type { Metadata } from "next";
import { Package, Truck, Ship, FileText, MapPin, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { PACKAGING, EXPORT_COUNTRIES, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packaging & Logistics",
  description:
    "Safe packaging in 25 KG, 50 KG, Jumbo Bags & bulk loading. FOB Mundra Port and CIF worldwide. Container loading with 20 FT (18-22 MT) and 40 FT (24-28 MT) capacity.",
};

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        label="Packaging & Logistics"
        title="Safe Packaging. Secure Transport. On-Time Delivery."
        description="We ensure our products are packaged with utmost care and delivered to our valuable customers across the globe safely and on time."
      />

      {/* Packaging */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="Packaging Options"
              title="Professional Packaging for Every Need"
              description="From small bags to bulk loading, we offer flexible packaging options to suit your requirements."
            />
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGING.map((pkg, i) => (
              <ScrollReveal key={pkg.type} delay={i * 0.08}>
                <div className="rounded-xl bg-white border border-border-light p-6 text-center transition-all duration-300 hover:shadow-card-hover hover:border-gold-200 h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{pkg.type}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{pkg.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Container Loading */}
      <section className="py-section-sm lg:py-section bg-surface-secondary">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="Container Loading"
              title="Efficient Loading & Shipping"
            />
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { type: "20 FT Container", capacity: "18 – 22 MT", desc: "Standard container for regular shipments" },
              { type: "40 FT Container", capacity: "24 – 28 MT", desc: "Large container for bulk orders" },
              { type: "Truck Loading", capacity: "Flexible", desc: "Regional and local deliveries" },
            ].map((item, i) => (
              <ScrollReveal key={item.type} delay={i * 0.1}>
                <div className="rounded-xl bg-white border border-border-light p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mx-auto mb-4">
                    {i < 2 ? <Ship className="w-6 h-6 text-gold-600" /> : <Truck className="w-6 h-6 text-gold-600" />}
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{item.type}</h3>
                  <div className="text-2xl font-bold text-gold-500 mt-2">{item.capacity}</div>
                  <p className="text-sm text-text-secondary mt-2">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Export & MOQ */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="right">
              <div>
                <SectionHeading
                  label="Export Details"
                  title="Worldwide Export Support"
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Ship, title: "FOB Mundra", desc: "Competitive pricing with FOB Mundra Port." },
                    { icon: FileText, title: "CIF Available", desc: "CIF service available on request as per destination." },
                    { icon: MapPin, title: "Worldwide Export", desc: "Complete export documentation support for global markets." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                        <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="rounded-2xl bg-surface-secondary border border-border-light p-6 lg:p-8">
                <h3 className="text-lg font-bold text-text-primary mb-5">
                  Minimum Order Quantity (MOQ)
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "25 KG / 50 KG Bags", value: "20 MT" },
                    { label: "Jumbo Bag (1 MT)", value: "20 MT" },
                    { label: "Bulk Orders", value: "100 MT" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-4 py-3.5 rounded-lg bg-white border border-border-light"
                    >
                      <span className="text-sm text-text-secondary">{item.label}</span>
                      <span className="text-base font-bold text-navy-900">{item.value}</span>
                    </div>
                  ))}
                  <p className="text-xs text-text-tertiary mt-2">
                    * Subject to product type and destination
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border-light">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">We Supply To</h4>
                  <div className="flex flex-wrap gap-2">
                    {EXPORT_COUNTRIES.map((country) => (
                      <span
                        key={country}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-border-light"
                      >
                        <CheckCircle className="w-3 h-3 text-teal-500" />
                        {country}
                      </span>
                    ))}
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gold-50 text-gold-700 border border-gold-200">
                      & Many More
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
