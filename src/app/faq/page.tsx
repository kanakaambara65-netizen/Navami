"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreeEstimationCtaSection from "@/components/sections/FreeEstimationCtaSection";
import { ChevronDown, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is included in your Turnkey Villa Construction package?",
    a: "Our turnkey package covers everything from initial soil testing, architectural drafting, structural engineering, BBMP sanction coordination, foundation excavation, RCC framework, brickwork, electrical & plumbing rough-in, premium plastering, waterproofing, floor finishes, bathroom fixtures, and final lock-and-key handover.",
  },
  {
    q: "How long does a typical luxury villa take to build in Bangalore?",
    a: "A standard 3,000 to 5,000 sq.ft custom villa generally takes 8 to 12 months from groundbreaking to final handover, depending on architectural complexity, custom interior millwork, and monsoon periods. We deliver a detailed milestone schedule with weekly progress tracking.",
  },
  {
    q: "Do you provide transparent, upfront pricing with no hidden costs?",
    a: "Yes, 100%. We provide a line-itemized Bill of Quantities (BOQ) with clearly specified brands, material specifications, and fixed stage-wise milestone billing. You will never encounter surprise add-ons or unexpected price escalations.",
  },
  {
    q: "Can I review and experience my home in 3D before ground is broken?",
    a: "Absolutely. We prepare photorealistic 3D elevations, spatial visualisations, and day-to-night lighting renders. You can inspect every room, window angle, exterior finish, and material texture before construction starts, preventing expensive changes on site.",
  },
  {
    q: "Can we visit an ongoing Navami Reality construction site in Bangalore?",
    a: "We welcome site visits! We are proud to walk prospective homeowners through our active villa projects near Begur Lake, Assetz Canvas & Cove, and South Bangalore so you can see our structural reinforcement, shuttering quality, and site management in person.",
  },
  {
    q: "What warranties do you provide upon project completion?",
    a: "We provide a 10-year structural stability assurance, 10-year specialized waterproofing guarantee, and 12-month complimentary post-handover defect liability maintenance covering plumbing, electrical, and minor finish settlements.",
  },
  {
    q: "Do you handle Vastu compliance and climate-conscious design?",
    a: "Yes. All our floor plans are designed to honor traditional Vastu Shastra principles while optimizing Bangalore's natural breezes, cross-ventilation, and daytime sun angles for minimal artificial cooling and lighting needs.",
  },
  {
    q: "How can I request a free consultation and project estimation?",
    a: "Simply send us your site dimensions, location, and family requirements via our contact form, email us at Navami.reality08@gmail.com, or WhatsApp us directly at +91 8123943351. We prepare a detailed, no-obligation estimate within 24 to 48 hours.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#1e2833]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 bg-[#2f3d4d] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#dbd0be]/40 text-[#dbd0be] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            KNOWLEDGE BASE
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#dbd0be] text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about planning, designing, estimating, and building your dream residence with Navami Reality.
          </p>
        </div>
      </section>

      {/* FAQ Accordion List (Curvy Cards) */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-[24px] border border-[#dbd0be]/40 bg-white dark:bg-[#2f3d4d] overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#dbd0be]/10 transition-colors"
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-[#2f3d4d] dark:text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#6d8fa3] text-white"
                        : "bg-[#dbd0be]/30 text-[#2f3d4d] dark:text-[#dbd0be]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-2 text-sm text-[#2f3d4d]/80 dark:text-[#dbd0be] leading-relaxed border-t border-[#dbd0be]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Card (Curvy Pill Architecture) */}
        <div className="mt-16 p-10 rounded-[32px] bg-[#f8f9fa] dark:bg-[#2f3d4d] border border-[#dbd0be]/40 text-center shadow-lg">
          <HelpCircle size={40} className="text-[#6d8fa3] mx-auto mb-3" />
          <h3 className="font-sans font-bold text-xl text-[#2f3d4d] dark:text-white mb-2">
            Have a Specific Question About Your Site?
          </h3>
          <p className="text-sm text-[#6d8fa3] dark:text-[#dbd0be] max-w-lg mx-auto mb-8">
            Our principal architect and structural engineer are always happy to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918123943351?text=Hello%20Navami%20Reality%2C%20I%20have%20a%20question%20about%20my%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 rounded-full bg-[#25D366] hover:bg-[#1faa4b] text-white font-bold text-sm sm:text-[15px] uppercase tracking-wider shadow-md transition-all flex items-center gap-2.5 border border-transparent hover:scale-105"
            >
              <MessageCircle size={17} /> WhatsApp +91 8123943351
            </a>
            <a
              href="tel:8123943351"
              className="px-9 py-4 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-[15px] uppercase tracking-wider shadow-md transition-all flex items-center gap-2.5 border border-[#dbd0be]/40 hover:scale-105"
            >
              <Phone size={16} /> Call 8123943351
            </a>
            <a
              href="mailto:Navami.reality08@gmail.com"
              className="px-9 py-4 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-sm sm:text-[15px] uppercase tracking-wider shadow-md transition-all flex items-center gap-2.5 border border-[#dbd0be]/40 hover:scale-105"
            >
              <Mail size={16} /> Send Email
            </a>
          </div>
        </div>
      </section>

      <FreeEstimationCtaSection />
      <Footer />
    </main>
  );
}
