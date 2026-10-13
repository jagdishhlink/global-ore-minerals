"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("section-dark-accent noise-overlay relative overflow-hidden", className)}>
      <Container className="relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {label && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
              {label}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-text-on-dark-muted leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </Container>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/[0.03] blur-[100px]" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  );
}
