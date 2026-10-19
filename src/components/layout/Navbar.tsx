"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-18 lg:h-20" aria-label="Main navigation">
          <Link href="/" className="relative flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt={COMPANY.name}
              width={48}
              height={48}
              className={cn(
                "h-10 w-auto lg:h-12 rounded-sm transition-all",
                !scrolled && "mix-blend-screen brightness-110"
              )}
              priority
            />
            <div className="hidden sm:block">
              <span
                className={cn(
                  "block text-base font-bold leading-tight tracking-tight transition-colors",
                  scrolled ? "text-navy-900" : "text-white"
                )}
              >
                Global Ore & Minerals
              </span>
              <span
                className={cn(
                  "block text-[10px] font-medium uppercase tracking-[0.18em] transition-colors",
                  scrolled ? "text-gold-600" : "text-gold-300"
                )}
              >
                Quality Is Our Pride
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? scrolled
                        ? "text-gold-600 bg-gold-50"
                        : "text-gold-300 bg-white/10"
                      : scrolled
                        ? "text-text-secondary hover:text-text-primary hover:bg-surface-secondary"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled ? "text-text-secondary hover:text-gold-600" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phones[0]}
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-navy-900 hover:bg-surface-secondary" : "text-white hover:bg-white/10"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-border-light overflow-hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        isActive
                          ? "text-gold-600 bg-gold-50"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-secondary"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-border-light space-y-3">
                  <a
                    href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-2 px-4 py-3 text-base font-medium text-text-secondary hover:text-gold-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {COMPANY.phones[0]}
                  </a>
                  <Button href="/contact" variant="primary" size="lg" className="w-full">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
