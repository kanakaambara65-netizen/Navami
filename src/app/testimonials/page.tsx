import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeEstimationCtaSection from "@/components/sections/FreeEstimationCtaSection";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Testimonials | Navami Reality Bangalore",
  description:
    "Read verified reviews and client experiences from homeowners who built their luxury villas with Navami Reality in Bangalore.",
};

const allReviews = [
  {
    id: 1,
    name: "Karthik R.",
    project: "G+2 Luxury Villa (4,200 sq.ft)",
    location: "Begur Lake, Bangalore",
    rating: 5,
    date: "August 2024",
    review:
      "Extremely happy with the service and final outcome. Nagaraju and the Navami team were punctual, reliable, and completely transparent with material bills and concrete testing. They finished our villa on schedule with zero compromises.",
  },
  {
    id: 2,
    name: "Dr. Sandeep & Priya",
    project: "Duplex Elevation & Interior Execution",
    location: "Assetz Canvas & Cove, Bangalore",
    rating: 5,
    date: "June 2024",
    review:
      "I had my complete duplex elevation and interior built by Navami Reality. They were polite, tidy, and cleaned up after every milestone. Their 3D model was executed down to the exact detail on site. Highly recommended!",
  },
  {
    id: 3,
    name: "Vikramaditya S.",
    project: "Contemporary Residence & Waterproofing",
    location: "Electronic City Phase 1, Bangalore",
    rating: 5,
    date: "March 2024",
    review:
      "Navami was dependable, skilled, and always had a structural solution whenever tricky soil conditions appeared. The finished quality is fantastic and their 10-year waterproofing warranty gave our family total peace of mind.",
  },
  {
    id: 4,
    name: "Anand Murthy",
    project: "Turnkey Residential Build (3,500 sq.ft)",
    location: "HSR Layout Sector 2, Bangalore",
    rating: 5,
    date: "December 2023",
    review:
      "Building a home in Bangalore can be stressful, but Navami Reality made it effortless. Weekly photo updates, strict adherence to approved plans, and honest budgeting. Couldn't have asked for a better contractor.",
  },
  {
    id: 5,
    name: "Radhika & Suresh Kumar",
    project: "Modern Villa & Terrace Garden",
    location: "Sarjapur Road, Bangalore",
    rating: 5,
    date: "November 2023",
    review:
      "Their architectural planning optimized every square foot. Natural lighting pours into our central courtyard. The masonry and finishings are of the highest standard. 5 stars all the way!",
  },
  {
    id: 6,
    name: "Manoj Balakrishnan",
    project: "Structural Retrofitting & Elevation Remodel",
    location: "Whitefield, Bangalore",
    rating: 5,
    date: "September 2023",
    review:
      "Transformed our 15-year-old traditional building into a showstopper modern landmark. The cantilever work and stone cladding facade draw compliments from everyone in our neighborhood.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1e2833]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 bg-[#2f3d4d] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#dbd0be]/40 text-[#dbd0be] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            VERIFIED EXPERIENCES
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            What Our Customers Are Saying
          </h1>
          <p className="text-[#dbd0be] text-sm sm:text-base max-w-2xl mx-auto">
            Discover why homeowners across Bangalore trust Navami Reality for their architectural planning, turnkey villa construction, and luxury finishes.
          </p>

          {/* Overall Rating Pill */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-[#dbd0be]/30">
            <div className="flex gap-1 text-[#93acaa]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#dbd0be] tracking-wide">
              4.9 / 5.0 Star Average from 120+ Homeowners
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((r) => (
            <div
              key={r.id}
              className="rounded-[28px] p-8 bg-white dark:bg-[#2f3d4d] border border-[#dbd0be]/40 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-[#6d8fa3] flex items-center justify-center text-white"
                      >
                        <Star size={12} fill="currentColor" stroke="none" />
                      </div>
                    ))}
                  </div>
                  <Quote size={24} className="text-[#93acaa] rotate-180" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#2f3d4d]/85 dark:text-[#dbd0be] leading-relaxed mb-6 italic">
                  &ldquo;{r.review}&rdquo;
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-[#dbd0be]/30">
                <div className="flex items-center gap-1.5 mb-1">
                  <h4 className="font-sans font-bold text-base text-[#2f3d4d] dark:text-white">
                    {r.name}
                  </h4>
                  <CheckCircle2 size={14} className="text-[#93acaa]" />
                </div>
                <div className="text-xs text-[#6d8fa3] font-semibold">{r.project}</div>
                <div className="text-xs text-[#2f3d4d]/60 dark:text-[#dbd0be]/60 mt-0.5">{r.location} · {r.date}</div>
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
