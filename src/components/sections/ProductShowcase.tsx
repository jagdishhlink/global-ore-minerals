"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCTS } from "@/lib/data";

export function ProductShowcase() {
  return (
    <section className="py-section-sm lg:py-section">
      <Container>
        <ScrollReveal>
          <SectionHeading
            label="Our Products"
            title="Premium Quality Industrial Minerals"
            description="We offer a wide range of industrial minerals that meet international quality standards and cater to diverse industrial applications."
          />
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.12}>
              <Link
                href={`/products/${product.id}`}
                className="group block h-full"
              >
                <article className="relative h-full rounded-2xl border border-border-light overflow-hidden bg-white transition-all duration-300 hover:shadow-card-hover hover:border-gold-200 card-shine">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

                    {/* Product number */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold-500 text-navy-950 text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-sm text-white/70 mt-0.5">{product.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key specs */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {product.keyProperties.slice(0, 4).map((prop) => (
                        <div
                          key={prop.label}
                          className="px-3 py-2 rounded-lg bg-surface-secondary text-center"
                        >
                          <div className="text-xs text-text-tertiary">{prop.label}</div>
                          <div className="text-sm font-semibold text-navy-900 mt-0.5">
                            {prop.value}
                            {prop.unit && (
                              <span className="text-text-tertiary font-normal text-xs ml-0.5">
                                {prop.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:text-gold-500 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
