"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FreeEstimationCtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const handleScrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 md:px-10 lg:px-16 overflow-hidden text-center text-white"
    >
      {/* Background Image with Deep Slate Navy Overlay `#2f3d4d` */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2f3d4d]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-px bg-[#dbd0be]" />
          <span className="text-[#dbd0be] text-[11px] font-bold tracking-[0.22em] uppercase">Estimation &amp; Consultation</span>
          <div className="w-8 h-px bg-[#dbd0be]" />
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-white font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-5 drop-shadow-md leading-[1.15]"
        >
          Contact Us Today for a FREE Estimation
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/85 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-normal"
        >
          Take advantage of our hassle-free, no-obligation estimates! Send us your project requirements, site dimensions, or drawings and we will prepare a detailed proposal.
        </motion.p>

        {/* Curvy Pill Button in Terracotta Orange `#c86931` */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center gap-3 sm:gap-4 px-7 sm:px-12 py-3.5 sm:py-5 rounded-full bg-[#c86931] hover:bg-[#b35924] text-white font-bold text-sm sm:text-base md:text-lg tracking-[0.14em] uppercase shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20 w-full sm:w-auto"
          >
            <span>Contact Us Now</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-[#c86931] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm shrink-0">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
