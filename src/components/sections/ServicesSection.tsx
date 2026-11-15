"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const serviceList = [
  {
    id: 1,
    slug: "structural",
    title: "Structural Design and Engineering",
    description: "Licensed structural analysis, seismic resilience, reinforced RCC detailing, and load-bearing stability certification.",
    details: "Includes seismic zone compliance analysis, soil bearing tests, structural steel and cantilever detailing, and government-approved structural stability certifications for lifetime durability.",
    image: "/images/services/structural.jpg",
    emoji: "🏛️",
  },
  {
    id: 2,
    slug: "architect",
    title: "Architectural Design and Services",
    description: "Bespoke floor plans, spatial circulation, natural light orientation, Vastu compliance, and municipal sanction support.",
    details: "Includes custom 2D/3D floor layouts, natural daylighting and ventilation planning, Vastu compliance, and complete BBMP / BDA municipal sanction drawings.",
    image: "/images/services/architect.jpg",
    emoji: "📐",
  },
  {
    id: 3,
    slug: "construction",
    title: "Construction Execution and Project Management",
    description: "End-to-end turnkey residential construction with certified materials, milestone tracking, and daily supervisor audits.",
    details: "Complete turnkey execution from foundation excavation to lock-and-key handover, using certified steel and RMC concrete with daily on-site supervision.",
    image: "/images/services/construction.jpg",
    emoji: "🏗️",
  },
  {
    id: 4,
    slug: "interior",
    title: "Interior Design and Space Planning",
    description: "Bespoke millwork, modular Italian kitchens, architectural false ceilings, mood lighting, and luxury spatial planning.",
    details: "Custom modular Italian kitchens, bespoke wardrobe systems, false ceilings, architectural mood lighting, and premium Italian marble / porcelain flooring.",
    image: "/images/services/interior.jpg",
    emoji: "🛋️",
  },
  {
    id: 5,
    slug: "renovation",
    title: "Renovation and Retrofitting Services",
    description: "Advanced structural rehabilitation, floor additions, retrofitting, and specialized crystalline waterproofing membranes.",
    details: "Comprehensive home remodeling, column and beam jacketing, room extensions, floor additions, and multi-layer crystalline waterproofing protection.",
    image: "/images/services/Renovation.jpg",
    emoji: "🔧",
  },
  {
    id: 6,
    slug: "3d",
    title: "3D Modelling and Architectural Elevation Design",
    description: "Photorealistic 3D day-and-night visualisations, cinematic video walkthroughs, and textured exterior facades.",
    details: "High-definition 3D exterior elevations, material and texture mapping, daytime and night lighting previews, and cinematic walkthrough video renders.",
    image: "/images/services/3d-elevation.jpg",
    emoji: "✏️",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      ref={ref}
      className="bg-[#f8f9fa] py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#dbd0be]" />
              <span className="text-[#6d8fa3] text-[11px] font-bold tracking-[0.22em] uppercase">What We Do</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[#2f3d4d] font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.1]"
            >
              Our Services
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#2f3d4d]/70 text-sm leading-relaxed max-w-sm"
          >
            We provide services that set high standards for quality, reliability, durability and value for money.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
          {serviceList.map((service, idx) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[24px] overflow-hidden bg-white border border-[#dbd0be]/40 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2f3d4d]/10 flex items-center justify-center">
                  <span className="text-5xl select-none" aria-hidden="true">{service.emoji}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[15px] text-[#2f3d4d] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#2f3d4d]/75 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Smooth Inline Expandable Text */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-[#dbd0be]/40 text-xs text-[#2f3d4d]/85 leading-relaxed bg-[#f8f9fa] p-3 rounded-xl">
                            <span className="font-bold text-[#c86931] uppercase tracking-wider text-[10px] block mb-1">
                              Key Highlights:
                            </span>
                            <p className="mb-2.5">{service.details}</p>
                            <Link
                              href={`/services#${service.slug}`}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2f3d4d] hover:text-[#c86931] transition-colors"
                            >
                              <span>View full specifications</span>
                              <ArrowUpRight size={12} strokeWidth={2.4} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="mt-4 inline-flex items-center gap-1.5 text-[#c86931] hover:text-[#b35924] text-xs sm:text-sm font-bold tracking-wide transition-all w-fit cursor-pointer py-1"
                  >
                    <span>{isExpanded ? "Show less" : "Learn more"}</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-base md:text-[17px] tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#dbd0be]/40 w-full sm:w-auto"
          >
            <span>View All Services</span>
            <ArrowUpRight size={17} strokeWidth={2.4} />
          </Link>
        </div>

      </div>
    </section>
  );
}
