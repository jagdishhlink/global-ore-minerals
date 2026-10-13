"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm hover:shadow-md active:bg-gold-600",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-sm hover:shadow-md",
  outline:
    "border border-border-medium text-text-primary hover:border-gold-500 hover:text-gold-600 bg-transparent",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-secondary bg-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 whitespace-nowrap",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
