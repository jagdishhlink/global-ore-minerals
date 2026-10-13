import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Shield, Users, Award, Gem } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Global Ore & Minerals is a trusted industrial minerals company based in Gujarat, India. 10+ years of expertise in mining, processing and exporting Silica Sand, Bauxite Ore, and Calcined Bauxite.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Trusted Partner in Industrial Minerals"
        description="With over a decade of expertise, we deliver premium quality minerals to industries across the globe."
      />

      <StatsBar />

      {/* Company Story */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                  Building Trust Through{" "}
                  <span className="text-gold-500">Quality & Integrity</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    {COMPANY.description}
                  </p>
                  <p>
                    We specialize in <strong className="text-text-primary">Silica Sand, Bauxite Ore, and Calcined Bauxite</strong> that
                    cater to a wide range of industries including glass, foundry, refractory,
                    ceramics, water filtration, and construction.
                  </p>
                  <p>
                    With a strong commitment to quality, ethical business practices, and
                    timely delivery, we aim to build long-term relationships with our clients
                    based on trust and mutual growth.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/calcined-bauxite-plant.jpeg"
                    alt="Global Ore & Minerals processing facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-full border-2 border-gold-500/20 hidden lg:block" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-section-sm lg:py-section bg-surface-secondary">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <ScrollReveal delay={0}>
              <div className="rounded-2xl bg-white border border-border-light p-7 lg:p-9 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">{COMPANY.vision}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-white border border-border-light p-7 lg:p-9 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">{COMPANY.mission}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <ScrollReveal>
            <SectionHeading
              label="Core Values"
              title="What Drives Us"
              description="Our values define who we are and how we conduct business with our partners around the world."
            />
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Gem, title: "Premium Quality", description: "High-grade minerals processed under strict quality standards to deliver consistent performance." },
              { icon: Users, title: "Customer Focus", description: "Building long-term relationships through trust, transparency, and reliability in every transaction." },
              { icon: Shield, title: "Integrity", description: "Ethical business practices and transparent communication form the foundation of our operations." },
              { icon: Award, title: "Excellence", description: "Continuous improvement in mining, processing, and delivery to exceed client expectations." },
              { icon: Target, title: "Reliability", description: "On-time delivery and consistent supply chain management you can depend on." },
              { icon: Eye, title: "Sustainability", description: "Responsible mining practices with environmental consciousness and sustainable production." },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <div className="group rounded-xl border border-border-light bg-white p-6 transition-all duration-300 hover:shadow-card-hover hover:border-gold-200 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-100">
                    <value.icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
