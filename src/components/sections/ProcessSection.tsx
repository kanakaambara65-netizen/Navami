"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { MessageSquare, Compass, Layers, Eye, HardHat, Key, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: MessageSquare,
    description:
      "We begin with an in-depth discovery session to understand your family vision, site specifics, budget and timeline.",
  },
  {
    number: "02",
    title: "Architectural Planning",
    icon: Compass,
    description:
      "Our architects develop tailored floor plans, spatial circulation, natural light orientation and regulatory approvals.",
  },
  {
    number: "03",
    title: "Structural Design",
    icon: Layers,
    description:
      "Our licensed engineers formulate the structural framework ensuring your home is earthquake-resilient and built to last.",
  },
  {
    number: "04",
    title: "3D Visualisation",
    icon: Eye,
    description:
      "Walk through your villa in photorealistic 3D visualisations and cinematic rendering before ground is even broken.",
  },
  {
    number: "05",
    title: "Construction Execution",
    icon: HardHat,
    description:
      "Our dedicated on-site construction supervisors execute with certified materials, milestone checks and transparent reporting.",
  },
  {
    number: "06",
    title: "Final Handover",
    icon: Key,
    description:
      "We complete a comprehensive 120-point quality audit, finish all detailing, and hand over the keys to your new legacy home.",
  },
];

export default function ProcessSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="process"
      ref={ref}
      className={`py-20 px-6 md:px-12 transition-colors duration-500 ${
        isDark ? "bg-[#050e1b]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Matching Template) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-white/10 text-[#10243E] dark:text-gold flex items-center justify-center shadow-sm">
              <Home size={22} />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className={`font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] tracking-tight ${
                isDark ? "text-white" : "text-[#10243E]"
              }`}
            >
              The Easiest Method to Build
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-xs sm:text-sm max-w-md mx-auto ${isDark ? "text-gray-400" : "text-[#718096]"}`}
          >
            From conceptual blueprints to key delivery, our structured process makes building your dream home effortless and transparent.
          </motion.p>
        </div>

        {/* 6 Clean Rounded Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-[24px] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
                  isDark
                    ? "bg-[#0d1e33] border border-white/8 shadow-black/30"
                    : "bg-[#F8FAFC] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-navy flex items-center justify-center text-gold shadow-sm group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono font-bold text-sm text-gold/80 bg-gold/10 px-2.5 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                <h3
                  className={`font-sans font-bold text-lg mb-2 group-hover:text-gold transition-colors ${
                    isDark ? "text-white" : "text-[#142D50]"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-gray-400" : "text-muted"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
