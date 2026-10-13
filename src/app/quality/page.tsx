import type { Metadata } from "next";
import { Shield, Microscope, CheckCircle, Beaker, Scale, Magnet, FileCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { QUALITY_TESTS } from "@/lib/data";

const testIcons = [Microscope, Scale, Beaker, Scale, Magnet, FileCheck];

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Rigorous quality control at every stage — from raw material selection to final dispatch. XRF analysis, sieve testing, moisture analysis, and batch-wise quality reports for every shipment.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        label="Quality Assurance"
        title="Tested. Trusted. Delivered."
        description="Quality is not just a process, it's our commitment. We follow stringent quality control at every stage to ensure consistency, reliability and customer satisfaction."
      />

      {/* QC Process */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="right">
              <div>
                <SectionHeading
                  label="Our Process"
                  title="Stringent Quality Control at Every Stage"
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  {[
                    { title: "Chemical Analysis", desc: "Advanced laboratory analysis to determine chemical composition and purity level for every batch." },
                    { title: "Size Analysis", desc: "Accurate sieve analysis and particle size distribution to ensure product meets required specifications." },
                    { title: "Low Impurities", desc: "Strict control on Fe₂O₃, SiO₂, Alkali & moisture to ensure high purity and superior performance." },
                    { title: "Laboratory Tested", desc: "Each batch is tested in our in-house laboratory using modern instruments and methodologies." },
                    { title: "Batch-wise QC", desc: "Every batch is monitored and recorded to maintain consistent quality and full traceability." },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-gold-600">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="rounded-2xl bg-surface-secondary border border-border-light p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-gold-500" />
                  <h3 className="text-lg font-bold text-text-primary">Quality Promise</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Consistent quality in every batch, every time",
                    "Bulk supply assurance with high production capacity",
                    "Customized specifications per client requirements",
                    "On-time delivery with efficient logistics",
                    "Customer satisfaction through transparent practices",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Testing Facilities */}
      <section className="section-dark-accent noise-overlay py-section-sm lg:py-section relative">
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              label="Testing Facilities"
              title="State-of-the-Art Quality Testing"
              description="Our in-house laboratory is equipped with modern instruments to ensure every shipment meets the highest international standards."
              dark
            />
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUALITY_TESTS.map((test, i) => {
              const Icon = testIcons[i];
              return (
                <ScrollReveal key={test.name} delay={i * 0.08}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-gold-500/20 h-full">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{test.name}</h3>
                    <p className="text-sm text-text-on-dark-muted">{test.description}</p>
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
