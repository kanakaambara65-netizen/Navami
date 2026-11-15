"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Extremely happy with the service and result. Very reliable. The Navami team turned up when they said they would, completed the villa construction on time, and accommodated our structural design modifications effortlessly.",
    author: "Karthik R.",
    location: "Begur Lake Villa, Bangalore",
  },
  {
    id: 2,
    quote:
      "I had my complete duplex elevation and interior built by Nagaraju and his team. I would strongly recommend them. Punctual, tidy, and cleaned up after every milestone. Their pricing is also very fair and transparent.",
    author: "Dr. Sandeep & Priya",
    location: "Assetz Canvas and Cove, Bangalore",
  },
  {
    id: 3,
    quote:
      "Navami Reality was reliable, professional, and always had a structural solution for any challenge that came up on site. The finished quality is fantastic and we wouldn't hesitate to work with them again for future projects.",
    author: "Vikramaditya S.",
    location: "Electronic City Phase 1, Bangalore",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-6 md:px-10 lg:px-16 bg-[#f8f9fa]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#dbd0be]" />
            <span className="text-[#6d8fa3] text-[11px] font-bold tracking-[0.22em] uppercase">Testimonials</span>
            <div className="w-8 h-px bg-[#dbd0be]" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#2f3d4d] font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.1]"
          >
            What our clients are saying
          </motion.h2>
        </div>

        {/* 3 Curvy Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-[28px] p-8 flex flex-col justify-between text-center bg-white border border-[#dbd0be]/40 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex justify-center text-[#6d8fa3] mb-4">
                  <Quote size={28} className="rotate-180" />
                </div>

                {/* 5 Noguchi Slate Stars */}
                <div className="flex justify-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-[#6d8fa3] flex items-center justify-center text-white shadow-sm"
                    >
                      <Star size={12} fill="currentColor" stroke="none" />
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm leading-relaxed mb-6 text-[#2f3d4d]/85 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-[#dbd0be]/30">
                <h4 className="font-bold text-sm text-[#2f3d4d]">
                  {t.author}
                </h4>
                <p className="text-xs text-[#6d8fa3] mt-0.5">
                  ({t.location})
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
