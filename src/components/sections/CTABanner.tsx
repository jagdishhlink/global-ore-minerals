"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/data";

export function CTABanner() {
  return (
    <section className="py-section-sm lg:py-section">
      <Container>
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/calcined-bauxite-plant.jpeg"
                alt="Mining operations"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-950/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-5 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20">
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
                  Ready to Partner?
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                  Your Growth Is Our Business.{" "}
                  <span className="gradient-text">Together, We Build Success.</span>
                </h2>
                <p className="mt-5 text-lg text-text-on-dark-muted leading-relaxed max-w-xl">
                  Get competitive pricing on premium quality minerals with reliable supply and
                  on-time delivery to your destination worldwide.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <a
                    href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
