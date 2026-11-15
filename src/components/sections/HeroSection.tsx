"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* ── 1. FULL-BLEED HIGH-RES BACKGROUND IMAGE (Edge-to-Edge Full Screen) ── */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.jpg"
          alt="Build Design Transform - Navami Reality"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />
        {/* Subtle soft gradient only on left to make text readable without washing out the image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(245, 241, 235, 0.88) 0%, rgba(245, 241, 235, 0.55) 38%, rgba(245, 241, 235, 0) 72%)",
          }}
        />
        {/* Top subtle shadow for seamless navbar blending */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(47, 61, 77, 0.12) 0%, rgba(47, 61, 77, 0) 100%)",
          }}
        />
      </div>

      {/* ── 2. HERO CONTENT (Full-Width, Left Aligned, Completely Unobstructed) ── */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 pt-32 sm:pt-36 md:pt-40 pb-16 flex-1 flex flex-col justify-center">
        <div className="flex items-start justify-between gap-10">
          
          <div className="max-w-2xl py-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Eyebrow in Noguchi Slate Blue */}
              <div className="text-[11px] xs:text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.2em] sm:tracking-[0.28em] text-[#6d8fa3] uppercase mb-5 flex flex-wrap items-center gap-2 sm:gap-3 drop-shadow-sm">
                <span>ARCHITECTURE</span>
                <span className="text-[#dbd0be] font-light">—</span>
                <span>INTERIORS</span>
                <span className="text-[#dbd0be] font-light">—</span>
                <span>LANDSCAPES</span>
              </div>

              {/* Headline: Build Design Transform */}
              <h1 className="font-serif font-normal text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight text-[#2f3d4d] mb-7 sm:mb-9 drop-shadow-sm">
                Build
                <br />
                Design{" "}
                <span className="italic font-serif text-[#c86931] drop-shadow-sm">
                  Transform
                </span>
              </h1>

              {/* Action Button */}
              <div className="flex items-center pt-5 sm:pt-9 md:pt-11">
                <button
                  onClick={() => handleScrollTo("#portfolio")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-xl group border border-[#dbd0be]/40 w-auto"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight size={17} strokeWidth={2.4} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Top Right Pillars Text Badge */}
          <div className="hidden xl:flex flex-col items-end text-right text-[11px] font-bold tracking-[0.24em] text-[#2f3d4d] uppercase space-y-1 pt-2 drop-shadow-sm">
            <span>MODERN</span>
            <span>SUSTAINABLE</span>
            <span>FUNCTIONAL</span>
            <span>TIMELESS</span>
          </div>

        </div>
      </div>

      {/* ── 3. BOTTOM AREA: OPEN & UNOBSTRUCTED ── */}
      <div className="relative z-10 h-8 sm:h-12 pointer-events-none" />
    </section>
  );
}
