"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const HERO_SLIDES = [
  { src: "/images/silica-sand-processing.jpeg", alt: "Silica sand processing facility", label: "Silica Sand Processing" },
  { src: "/images/calcined-bauxite-plant.jpeg", alt: "Calcined bauxite rotary kiln plant", label: "Calcined Bauxite Plant" },
  { src: "/images/silica-sand-mountain.jpeg", alt: "Silica sand stockpile operations", label: "Sand Stockpile Operations" },
  { src: "/images/mining-quarry.jpeg", alt: "Open pit mineral mining quarry", label: "Mining Quarry" },
  { src: "/images/kaolin-clay-stockpile.jpg", alt: "Kaolin clay raw material stockpile", label: "Kaolin Clay Stockpile" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/silica-sand-mountain.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/operations-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/30" />
      </div>

      <Container className="relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                Trusted Mineral Exporter Since 2014
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-[1.1] tracking-tight text-balance"
            >
              Premium Industrial{" "}
              <span className="gradient-text">Minerals</span>{" "}
              for Global Markets
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg lg:text-xl text-text-on-dark-muted leading-relaxed max-w-xl"
            >
              High-purity Silica Sand, Bauxite Ore, and Calcined Bauxite — mined, processed, and
              exported from India to industries across the globe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/products" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white">
                Explore Products
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-none"
            >
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Countries Served", value: "7+" },
                { label: "Export Port", value: "Mundra" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gold-400">{item.value}</div>
                  <div className="text-[10px] sm:text-xs text-text-on-dark-muted mt-1 leading-tight">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side image slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_SLIDES[current].src}
                      alt={HERO_SLIDES[current].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0vw, 40vw"
                      priority={current === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                {/* Slider controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <div>
                    <div className="text-sm font-semibold text-white">{HERO_SLIDES[current].label}</div>
                    <div className="text-xs text-white/60 mt-0.5">{current + 1} / {HERO_SLIDES.length}</div>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={prev}
                      className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={next}
                      className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Progress dots */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-gold-400" : "w-1.5 bg-white/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-gold-500/20" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
