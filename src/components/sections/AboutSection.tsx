"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import DayNightImageSlider from "@/components/DayNightImageSlider";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-8 h-px bg-[#dbd0be]" />
              <span className="text-[#6d8fa3] text-[11px] font-bold tracking-[0.22em] uppercase">
                Trusted Professionals
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight mb-6 text-[#2f3d4d]"
            >
              Need Construction?
              <br />
              <span className="text-[#6d8fa3] italic font-serif">Built By The Best!</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-[15px] leading-relaxed text-[#2f3d4d]/80"
            >
              <p>
                Looking for Bangalore&apos;s finest builders and architects? Our team of professional craftsmen and licensed structural engineers have been delivering turnkey villa construction, elevation design, and luxury residential projects across Bangalore for 7+ years.
              </p>
              <p>
                We use the latest engineering systems and premium building materials to ensure the project is executed correctly the first time — built to stand strong for generations.
              </p>
            </motion.div>

            {/* Badges in Curvy Noguchi Style */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["EST. 2017", "BEGUR LAKE, BANGALORE", "GSTIN: 29BLNPN7816A1ZV"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#dbd0be] text-[#2f3d4d] text-[11px] font-bold tracking-wider uppercase bg-[#dbd0be]/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-base md:text-[17px] tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-[#dbd0be]/40 w-full sm:w-auto"
              >
                <span>Get Free Estimate</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right: Interactive Day/Night Slider (Using User's morningview0 & nightview0) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden shadow-2xl border-4 border-white">
              <DayNightImageSlider
                dayImage="/images/about-villa-day.jpg"
                nightImage="/images/about-villa-night.jpg"
                alt="Navami Reality Villa — Day vs Night"
              />
            </div>

            {/* Floating Quality Badge in Deep Navy `#2f3d4d` */}
            <div className="absolute -top-5 -right-3 sm:-top-7 sm:-right-7 z-40 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#2f3d4d] border-2 border-[#c86931] flex flex-col items-center justify-center text-center shadow-2xl p-2 select-none">
              <Award size={18} className="text-[#c86931] mb-1 drop-shadow-sm" />
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] text-[#dbd0be] leading-none">
                PREMIUM
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-[0.18em] text-white leading-tight mt-0.5">
                QUALITY
              </span>
              <span className="text-[6.5px] sm:text-[7px] font-bold uppercase tracking-wider text-[#93acaa] mt-0.5">
                EST. 2017
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
