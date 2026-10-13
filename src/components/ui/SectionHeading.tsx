"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4",
            dark ? "text-gold-400" : "text-gold-600"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-[2.75rem] font-bold leading-tight text-balance",
          dark ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed",
            dark ? "text-text-on-dark-muted" : "text-text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
