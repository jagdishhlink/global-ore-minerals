"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
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

          {/* Right side image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-white/10">
                <Image
                  src="/images/silica-sand-processing.jpeg"
                  alt="Silica sand processing facility with conveyor belt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-elevated border border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center">
                    <Play className="w-5 h-5 text-gold-600 fill-gold-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">Mining Operations</div>
                    <div className="text-xs text-text-tertiary">Gujarat, India</div>
                  </div>
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
