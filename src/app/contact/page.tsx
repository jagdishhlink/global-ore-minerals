"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY, PRODUCTS } from "@/lib/data";

const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `New Inquiry - ${formData.get("product")} | Global Ore & Minerals`);
    formData.append("from_name", "Global Ore & Minerals Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or contact us directly.");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border-medium bg-white text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all text-sm";

  return (
    <>
      {/* Hero */}
      <section className="section-dark-accent noise-overlay relative overflow-hidden">
        <Container className="relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance max-w-3xl">
              Let&apos;s Build a Partnership Based on Trust
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-text-on-dark-muted max-w-2xl">
              Get in touch for competitive pricing, product specifications, or to discuss your mineral supply requirements.
            </p>
          </motion.div>
        </Container>
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* Contact Form + Info */}
      <section className="py-section-sm lg:py-section">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="rounded-xl sm:rounded-2xl bg-white border border-border-light p-5 sm:p-8 lg:p-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">Request a Quote</h2>
                  <p className="text-text-secondary text-sm mb-6 sm:mb-7">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10 sm:py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-teal-500" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          Thank You!
                        </h3>
                        <p className="text-text-secondary mb-6">
                          We&apos;ve received your inquiry and will respond within 24 hours.
                        </p>
                        <button
                          onClick={() => setStatus("idle")}
                          className="text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors"
                        >
                          Send another inquiry
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-4 sm:space-y-5"
                      >
                        <input type="hidden" name="replyto" value={COMPANY.email} />

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                              Full Name *
                            </label>
                            <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                              Company Name
                            </label>
                            <input id="company" name="company" type="text" placeholder="Your company" className={inputClass} />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                              Email Address *
                            </label>
                            <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                              Phone Number
                            </label>
                            <input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" className={inputClass} />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-1.5">
                            Interested Product *
                          </label>
                          <select id="product" name="product" required defaultValue="" className={inputClass}>
                            <option value="" disabled>Select a product</option>
                            {PRODUCTS.map((p) => (
                              <option key={p.id} value={p.name}>{p.name}</option>
                            ))}
                            <option value="Multiple Products">Multiple Products</option>
                          </select>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                          <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1.5">
                              Required Quantity
                            </label>
                            <input id="quantity" name="quantity" type="text" placeholder="e.g. 100 MT" className={inputClass} />
                          </div>
                          <div>
                            <label htmlFor="destination" className="block text-sm font-medium text-text-primary mb-1.5">
                              Destination Country
                            </label>
                            <input id="destination" name="destination" type="text" placeholder="e.g. UAE" className={inputClass} />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                            Message
                          </label>
                          <textarea id="message" name="message" rows={4} placeholder="Tell us about your requirements..." className={`${inputClass} resize-none`} />
                        </div>

                        {status === "error" && (
                          <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                            {errorMsg}
                          </div>
                        )}

                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full sm:w-auto"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Inquiry
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="space-y-4 sm:space-y-5">
                  <div className="rounded-xl bg-surface-secondary border border-border-light p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1">Office Address</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {COMPANY.address.street},<br />
                          {COMPANY.address.city} &ndash; {COMPANY.address.zip},<br />
                          {COMPANY.address.state}, {COMPANY.address.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-secondary border border-border-light p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1">Phone</h3>
                        {COMPANY.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-sm text-text-secondary hover:text-gold-600 transition-colors py-0.5"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-secondary border border-border-light p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1">Email</h3>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-sm text-text-secondary hover:text-gold-600 transition-colors break-all"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-surface-secondary border border-border-light p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-1">Business Hours</h3>
                        <p className="text-sm text-text-secondary">
                          Mon – Sat: 9:00 AM – 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="rounded-xl section-dark p-4 sm:p-5 border border-navy-700">
                    <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">
                      Quick Contact
                    </h3>
                    <div className="space-y-2.5">
                      <a
                        href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gold-500 text-navy-950 font-semibold text-sm hover:bg-gold-400 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </a>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Send Email
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
