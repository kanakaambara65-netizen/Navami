"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Architectural Staircase",
    category: "Structural & Finishes",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Bathroom & Shower Niche",
    category: "Premium Interiors",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    id: 3,
    title: "Custom Kitchen & Geometric Backsplash",
    category: "Kitchen & Cabinetry",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
  },
  {
    id: 4,
    title: "Turnkey Residential Construction",
    category: "Civil Construction",
    image: "/images/blankimage.jpg",
  },
  {
    id: 5,
    title: "Contemporary Villa Floating Steps",
    category: "Architectural Detailing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 6,
    title: "Exterior Natural Stone Cladding",
    category: "Elevation & Facade",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="bg-white py-24 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#dbd0be]" />
              <span className="text-[#6d8fa3] text-[11px] font-bold tracking-[0.22em] uppercase">Portfolio</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[#2f3d4d] font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.1]"
            >
              Our Latest Work
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#2f3d4d]/70 text-sm leading-relaxed max-w-sm"
          >
            Browse our gallery for ideas and tips, and see why we&apos;re recognised as Bangalore&apos;s best builders.
          </motion.p>
        </div>

        {/* 6-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative aspect-[4/3] rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer border border-[#dbd0be]/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover overlay in Deep Navy `#2f3d4d` */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f3d4d]/92 via-[#2f3d4d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="inline-block self-start text-[10px] font-bold text-[#2f3d4d] bg-[#dbd0be] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h4 className="font-bold text-base leading-tight text-white">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-10 py-3.5 sm:py-4.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-base md:text-[17px] tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#dbd0be]/40 w-full sm:w-auto"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={17} strokeWidth={2.4} />
          </Link>
        </div>

      </div>
    </section>
  );
}
