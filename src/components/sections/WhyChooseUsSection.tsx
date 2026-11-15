"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Coins, Home, Award, Calendar, Lightbulb, Calculator, ShieldCheck, Sparkles,
} from "lucide-react";

const features = [
  { icon: Coins,       title: "No hidden cost, upfront pricing" },
  { icon: Home,        title: "100% family owned and operated" },
  { icon: Award,       title: "Fully licensed and accredited" },
  { icon: Calendar,    title: "Work around your schedules" },
  { icon: Lightbulb,   title: "FREE professional advice" },
  { icon: Calculator,  title: "No obligation estimations" },
  { icon: ShieldCheck, title: "Quality craftsmanship guaranteed" },
  { icon: Sparkles,    title: "We leave your premises clean & tidy" },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="bg-[#2f3d4d] py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#dbd0be]" />
            <span className="text-[#dbd0be] text-[11px] font-bold tracking-[0.22em] uppercase">The Navami Standard</span>
            <div className="w-8 h-px bg-[#dbd0be]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight"
          >
            Why Choose Us
          </motion.h2>
        </div>

        {/* 8-Grid in Noguchi Curvy Style */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-[#dbd0be]/30 flex items-center justify-center text-[#dbd0be] group-hover:bg-[#6d8fa3] group-hover:text-white group-hover:border-transparent group-hover:scale-110 transition-all duration-300 mb-4 shadow-md">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-sm text-white/95 leading-snug max-w-[160px]">
                  {feat.title}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
