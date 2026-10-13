"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";

export function WhatsAppButton() {
  const phone = COMPANY.phones[0].replace(/[+\s]/g, "");
  const message = encodeURIComponent(
    "Hello, I'm interested in your mineral products. Can you share pricing details?"
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
