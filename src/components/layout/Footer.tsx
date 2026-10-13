"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, PRODUCTS } from "@/lib/data";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="section-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <Container className="pt-16 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpeg"
                alt={COMPANY.name}
                width={44}
                height={44}
                className="h-10 w-auto rounded-sm"
              />
              <div>
                <span className="block text-base font-bold text-white">Global Ore & Minerals</span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-gold-400">
                  Quality Is Our Pride
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-text-on-dark-muted max-w-xs">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Our Products
            </h3>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-sm text-text-on-dark-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {product.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span className="text-sm text-text-on-dark-muted">
                  {COMPANY.address.street},<br />
                  {COMPANY.address.city} &ndash; {COMPANY.address.zip},<br />
                  {COMPANY.address.state}, {COMPANY.address.country}
                </span>
              </li>
              <li>
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex gap-3 text-sm text-text-on-dark-muted hover:text-white transition-colors py-0.5"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                    {phone}
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex gap-3 text-sm text-text-on-dark-muted hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-on-dark-muted">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-text-on-dark-muted hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-text-on-dark-muted hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
