import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeEstimationCtaSection from "@/components/sections/FreeEstimationCtaSection";
import Link from "next/link";
import {
  Compass,
  Building,
  Eye,
  Layers,
  Sofa,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Navami Reality Bangalore",
  description:
    "Comprehensive architectural design, luxury villa construction, 3D elevations, structural engineering and turnkey solutions in Bangalore.",
};

const detailedServices = [
  {
    slug: "structural",
    icon: Layers,
    title: "Structural Design and Engineering",
    subtitle: "Lifetime Seismic Resilience & Load-Bearing Durability",
    description:
      "Our licensed structural engineers design reinforced concrete (RCC) and structural steel frameworks engineered for maximum load stability, seismic compliance, wind resistance, and zero structural deflection.",
    features: [
      "Seismic Zone Compliant RCC Detailing",
      "Soil Bearing Capacity Analysis & Foundation Design",
      "Structural Steel & Cantilever Engineering",
      "Licensed Structural Stability Certification",
    ],
    image: "/images/services/structural.jpg",
  },
  {
    slug: "architect",
    icon: Compass,
    title: "Architectural Design and Services",
    subtitle: "Custom Floor Plans, Vastu Harmonization & Spatial Flow",
    description:
      "We conceive bespoke, energy-efficient, and Vastu-compliant architectural plans. From initial site contour analysis to municipal approvals, our architects create spaces harmonized with Bangalore's climate and natural sunlight.",
    features: [
      "Custom 2D/3D Floor Plan Layouts",
      "Vastu Compliance & Spatial Circulation",
      "Bangalore BBMP & BDA Municipal Sanction Support",
      "Natural Daylighting & Cross-Ventilation Design",
    ],
    image: "/images/services/architect.jpg",
  },
  {
    slug: "construction",
    icon: Building,
    title: "Construction Execution and Project Management",
    subtitle: "Turnkey Residential Build with Strict Milestone Schedules",
    description:
      "End-to-end turnkey construction execution from foundation excavation to lock-and-key handover. We use certified steel, RMC concrete, high-grade masonry, and dedicated full-time site supervisors for total quality control.",
    features: [
      "Milestone-Based Transparent Scheduling",
      "Certified High-Grade Construction Materials",
      "On-Site Quality Audits & Compaction Testing",
      "Dedicated Full-Time Site Supervisor",
    ],
    image: "/images/services/construction.jpg",
  },
  {
    slug: "interior",
    icon: Sofa,
    title: "Interior Design and Space Planning",
    subtitle: "Custom Millwork, Italian Kitchens & Luxury Living",
    description:
      "From bespoke Italian modular kitchens to warm timber wall paneling, architectural false ceilings, and mood lighting, we execute interiors that complement your residence's architecture seamlessly.",
    features: [
      "Modular Kitchens & Wardrobe Systems",
      "False Ceiling & Architectural Mood Lighting",
      "Premium Marble & Large-Format Porcelain Flooring",
      "Custom Woodwork & Acoustic Detailing",
    ],
    image: "/images/services/interior.jpg",
  },
  {
    slug: "renovation",
    icon: ShieldCheck,
    title: "Renovation and Retrofitting Services",
    subtitle: "Home Remodeling, Floor Additions & Structural Upgrades",
    description:
      "We restore and modernize existing properties through structural column and beam strengthening, floor additions, layout reconfigurations, facade makeovers, and advanced multi-layer waterproofing protection.",
    features: [
      "Complete Home Remodeling & Floor Additions",
      "Structural Column & Beam Jacketing (Retrofitting)",
      "Layout Reconfiguration & Wall Removals",
      "Terrace & Basement Pressure Injection Waterproofing",
    ],
    image: "/images/services/Renovation.jpg",
  },
  {
    slug: "3d",
    icon: Eye,
    title: "3D Modelling and Architectural Elevation Design",
    subtitle: "Photorealistic 3D Facades & Day-to-Night Lighting Visualisations",
    description:
      "Experience your residence in cinematic 3D before a single brick is laid. We create high-definition exterior elevations, material and texture previews, landscape integrations, and daytime-to-evening lighting walkthroughs.",
    features: [
      "High-Definition 3D Exterior Elevations",
      "Realistic Material & Texture Mapping",
      "Day and Night Architectural Lighting Previews",
      "Virtual Video Walkthrough Renders",
    ],
    image: "/images/services/3d-elevation.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1e2833]">
      <Navbar />

      {/* Page Hero Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 bg-[#2f3d4d] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#dbd0be]/40 text-[#dbd0be] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            NAVAMI REALITY
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-[#dbd0be] text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive architectural design, turnkey villa construction, 3D modeling, and certified structural engineering under one dedicated studio.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-20">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.title}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl bg-[#2f3d4d] border border-[#dbd0be]/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#dbd0be]/30 border border-[#dbd0be] text-[#2f3d4d] dark:text-[#dbd0be] flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c86931]">
                      SERVICE 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#2f3d4d] dark:text-white tracking-tight mb-2">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-bold text-[#6d8fa3] uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#2f3d4d]/80 dark:text-[#dbd0be] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-[#2f3d4d] dark:text-[#dbd0be]">
                        <CheckCircle2 size={16} className="text-[#93acaa] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block px-9 py-4 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-md transition-all duration-300 hover:scale-105 border border-[#dbd0be]/40"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FreeEstimationCtaSection />
      <Footer />
    </main>
  );
}
