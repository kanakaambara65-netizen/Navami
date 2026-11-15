"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeEstimationCtaSection from "@/components/sections/FreeEstimationCtaSection";
import { Bed, Bath, MapPin } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Ocean Breeze Luxury Villa",
    category: "Villas",
    location: "Begur Waterfront, Bangalore",
    beds: 4,
    baths: 4,
    area: "4,200 sq.ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    description: "Contemporary glass-fronted 3-story villa with double-height living room and infinity plunge pool.",
  },
  {
    id: 2,
    title: "The Jakson House Duplex",
    category: "Modern Residences",
    location: "Assetz Canvas and Cove, Bangalore",
    beds: 3,
    baths: 3,
    area: "3,100 sq.ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    description: "Warm architectural lighting with minimalist cantilever balconies and natural stone cladding.",
  },
  {
    id: 3,
    title: "Lakeside Cottage Estate",
    category: "Villas",
    location: "Near Begur Lake, Bangalore",
    beds: 5,
    baths: 5,
    area: "5,600 sq.ft",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    description: "Expansive modern luxury residence featuring climate-responsive overhangs and terrace gardens.",
  },
  {
    id: 4,
    title: "Modern Architectural Staircase",
    category: "Interiors & Detailing",
    location: "HSR Layout, Bangalore",
    beds: 4,
    baths: 3,
    area: "3,800 sq.ft",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80",
    description: "Floating oak treads with seamless glass balustrade and integrated warm LED step illumination.",
  },
  {
    id: 5,
    title: "Bespoke Bathrooms & Porcelain Suite",
    category: "Interiors & Detailing",
    location: "Electronic City Phase 1, Bangalore",
    beds: 3,
    baths: 3,
    area: "2,900 sq.ft",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
    description: "Large-format Spanish porcelain tiling with recessed niches and thermostatic rainfall shower fixtures.",
  },
  {
    id: 6,
    title: "Contemporary Kitchen & Geometric Backsplash",
    category: "Interiors & Detailing",
    location: "Sarjapur Road, Bangalore",
    beds: 4,
    baths: 4,
    area: "4,000 sq.ft",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&q=80",
    description: "Handleless matte cabinetry, quartz countertop islands, and artisanal patterned ceramic splashback.",
  },
  {
    id: 7,
    title: "Turnkey Civil Construction & Frame",
    category: "Turnkey Construction",
    location: "Begur Road, Bangalore",
    beds: 5,
    baths: 5,
    area: "4,800 sq.ft",
    image: "/images/blankimage.jpg",
    description: "Seismic RCC framed construction with certified cement mixes and laser-guided leveling.",
  },
  {
    id: 8,
    title: "Exterior Natural Stone Cladding",
    category: "Elevations",
    location: "South Bangalore",
    beds: 4,
    baths: 4,
    area: "3,600 sq.ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    description: "Textured sandstone and basalt stone masonry facade with weatherproof protective sealing.",
  },
  {
    id: 9,
    title: "Photorealistic 3D Visualisation",
    category: "Elevations",
    location: "Whitefield, Bangalore",
    beds: 6,
    baths: 6,
    area: "6,200 sq.ft",
    image: "https://images.unsplash.com/photo-1609347744403-2306bfaae9e9?w=900&q=80",
    description: "High-resolution architectural renders with day/twilight illumination and spatial lighting analysis.",
  },
];

const categories = ["All", "Villas", "Modern Residences", "Turnkey Construction", "Elevations", "Interiors & Detailing"];

export default function PortfolioPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = selectedCat === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCat);

  return (
    <main className="min-h-screen bg-white dark:bg-[#1e2833]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 bg-[#2f3d4d] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#dbd0be]/40 text-[#dbd0be] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            NAVAMI REALITY PORTFOLIO
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Our Latest Work
          </h1>
          <p className="text-[#dbd0be] text-sm sm:text-base max-w-2xl mx-auto">
            Explore our curated showcase of turnkey luxury villas, residential architectures, exterior elevations, and custom interior spaces built across Bangalore.
          </p>

          {/* Curvy Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  selectedCat === cat
                    ? "bg-[#6d8fa3] text-white border-[#dbd0be] shadow-lg scale-105"
                    : "bg-white/10 text-[#dbd0be] border-transparent hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Curvy Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-[28px] overflow-hidden shadow-lg border border-[#dbd0be]/40 bg-white dark:bg-[#2f3d4d] flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#2f3d4d]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#2f3d4d]/85 backdrop-blur-md text-[#dbd0be] text-[10px] font-bold tracking-wider uppercase border border-[#dbd0be]/30">
                  {item.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#6d8fa3] mb-2 font-medium">
                    <MapPin size={13} className="text-[#93acaa]" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#2f3d4d] dark:text-white mb-2 group-hover:text-[#6d8fa3] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#2f3d4d]/75 dark:text-[#dbd0be]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#dbd0be]/30 flex items-center justify-between text-xs font-semibold text-[#2f3d4d] dark:text-[#dbd0be]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Bed size={13} className="text-[#6d8fa3]" /> {item.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={13} className="text-[#6d8fa3]" /> {item.baths} Baths
                    </span>
                  </div>
                  <span className="text-[#2f3d4d] dark:text-white font-bold">{item.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FreeEstimationCtaSection />
      <Footer />
    </main>
  );
}
