"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/918123943351?text=Hello%20Navami%20Reality%2C%20I%20would%20like%20to%20enquire%20about%20a%20project";

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Pill on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center gap-2 bg-[#2f3d4d] text-white px-3.5 py-2 rounded-full shadow-xl border border-[#dbd0be]/40 text-xs font-semibold tracking-wide whitespace-nowrap pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp (+91 8123943351)</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circular Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Direct WhatsApp Message to Navami Reality (+91 8123943351)"
        className="group relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
      >
        {/* Subtle breathing radar ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110 drop-shadow-sm"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.275-.101-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.783-1.676-2.084-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.501.101-.201.05-.376-.025-.527-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.802.376s-1.054 1.029-1.054 2.508c0 1.479 1.079 2.908 1.23 3.109.15.201 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.03-1.429.25-.702.25-1.304.175-1.429-.075-.125-.276-.201-.577-.351zm-5.467 7.618a9.93 9.93 0 0 1-5.074-1.388l-.364-.216-3.771.989 1.006-3.676-.237-.377a9.92 9.92 0 0 1-1.521-5.32c0-5.487 4.469-9.956 9.963-9.956 2.661 0 5.161 1.037 7.042 2.92a9.88 9.88 0 0 1 2.915 7.039c0 5.489-4.469 9.96-9.954 9.96z" />
        </svg>
      </a>
    </aside>
  );
}
