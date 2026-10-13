"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATS } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="relative -mt-1 z-20">
      <Container>
        <ScrollReveal>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-elevated border border-border-light p-5 sm:p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    i < STATS.length - 1
                      ? "lg:border-r lg:border-border-light"
                      : ""
                  }`}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-navy-900">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
