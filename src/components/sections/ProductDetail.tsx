"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRODUCTS } from "@/lib/data";

interface ProductDetailProps {
  productId: string;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return null;

  const otherProducts = PRODUCTS.filter((p) => p.id !== productId);

  return (
    <>
      {/* Hero */}
      <section className="section-dark-accent noise-overlay relative overflow-hidden">
        <Container className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-text-on-dark-muted hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-3">
                Our Products
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-gold-300">{product.tagline}</p>
              <p className="mt-4 text-text-on-dark-muted leading-relaxed max-w-xl">
                {product.heroDescription}
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.keyProperties.map((prop) => (
                  <div
                    key={prop.label}
                    className="rounded-lg bg-white/5 border border-white/10 px-3.5 py-3 text-center"
                  >
                    <div className="text-xs text-text-on-dark-muted">{prop.label}</div>
                    <div className="text-base font-bold text-gold-400 mt-0.5">
                      {prop.value}
                      {prop.unit && (
                        <span className="text-xs font-normal text-text-on-dark-muted ml-0.5">
                          {prop.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* Features & Applications */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3">
                  Key Features
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                  Why Our {product.shortName}?
                </h2>
                <div className="space-y-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-text-secondary leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3">
                  Applications
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                  Industry Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-surface-secondary border border-border-light"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                      <span className="text-sm font-medium text-text-primary">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Available Specs */}
      {"specs" in product && product.specs && (
        <section className="py-section-sm lg:py-section bg-surface-secondary">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3">
                  Specifications
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  Available Grades & Sizes
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-2xl mx-auto">
                {Object.entries(product.specs).map(([key, values]) => (
                  <div key={key} className="mb-6 last:mb-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">
                      {key === "purity" ? "Purity" : key === "ppm" ? "PPM Level" : key === "sizes" ? "Available Sizes" : key === "grades" ? "Available Grades" : key}
                    </h3>
                    {Array.isArray(values) ? (
                      <div className="flex flex-wrap gap-2">
                        {(values as readonly string[]).map((val: string) => (
                          <span
                            key={val}
                            className="px-4 py-2.5 rounded-lg bg-white border border-border-light text-sm font-medium text-text-primary"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="px-4 py-2.5 rounded-lg bg-white border border-border-light text-sm font-medium text-text-primary inline-block">
                        {values as string}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* Other Products */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Explore More
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Other Products
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {otherProducts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.1}>
                <Link href={`/products/${p.id}`} className="group block">
                  <div className="relative rounded-xl overflow-hidden border border-border-light transition-all duration-300 hover:shadow-card-hover hover:border-gold-200">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">{p.name}</h3>
                        <p className="text-sm text-white/70 mt-1">{p.tagline}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-white flex items-center justify-between">
                      <span className="text-sm text-text-secondary">{p.description.slice(0, 80)}...</span>
                      <ArrowRight className="w-4 h-4 text-gold-500 shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
