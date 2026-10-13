"use client";

import { Shield, Clock, Globe, FlaskConical, HandCoins, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHY_CHOOSE_US } from "@/lib/data";

const icons = [Shield, HandCoins, BadgeCheck, Globe, Clock, FlaskConical];

export function WhyChooseUs() {
  return (
    <section className="section-dark-accent noise-overlay py-section-sm lg:py-section relative">
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            label="Why Choose Us"
            title="Your Trusted Partner in Quality Minerals"
            description="We are committed to delivering premium quality minerals with consistency, reliability and value for our global clients."
            dark
          />
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group relative rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7 transition-all duration-300 hover:bg-white/[0.06] hover:border-gold-500/20 card-shine h-full">
                  <div className="w-11 h-11 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-500/15">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-text-on-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
