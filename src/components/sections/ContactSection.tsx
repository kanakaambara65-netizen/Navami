"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle2, Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Project Enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:Navami.reality08@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 md:px-10 lg:px-16 bg-[#f8f9fa]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#dbd0be]" />
            <span className="text-[#6d8fa3] text-[11px] font-bold tracking-[0.22em] uppercase">Get In Touch</span>
            <div className="w-8 h-px bg-[#dbd0be]" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#2f3d4d] font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.1] mb-3"
          >
            Get in Touch with Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#2f3d4d]/70 max-w-2xl mx-auto"
          >
            Contact us for project advice, architectural consultations, or a FREE site quotation
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-[32px] p-8 sm:p-12 shadow-xl bg-white border border-[#dbd0be]/40"
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 size={48} className="text-[#6d8fa3] mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2 text-[#2f3d4d]">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-[#2f3d4d]/70 mb-6">
                Your enquiry has been prepared. Our project team will connect with you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-9 py-4 rounded-full bg-[#2f3d4d] text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-[#c86931] transition-colors shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold tracking-wider uppercase mb-2 text-[#2f3d4d]">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-2xl border border-[#dbd0be]/60 bg-[#f8f9fa] focus:outline-none focus:border-[#6d8fa3] text-sm text-[#2f3d4d] transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 mt-1 block">Name is required</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold tracking-wider uppercase mb-2 text-[#2f3d4d]">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-3 rounded-2xl border border-[#dbd0be]/60 bg-[#f8f9fa] focus:outline-none focus:border-[#6d8fa3] text-sm text-[#2f3d4d] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">Email is required</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold tracking-wider uppercase mb-2 text-[#2f3d4d]">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    {...register("phone", { required: true })}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 rounded-2xl border border-[#dbd0be]/60 bg-[#f8f9fa] focus:outline-none focus:border-[#6d8fa3] text-sm text-[#2f3d4d] transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block">Phone is required</span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold tracking-wider uppercase mb-2 text-[#2f3d4d]">
                  Project Details / Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  {...register("message", { required: true })}
                  placeholder="Tell us about your plot size, location in Bangalore, type of construction (Turnkey Villa, Duplex, Renovation, Elevation), or any timeline goals..."
                  className="w-full px-4 py-3 rounded-2xl border border-[#dbd0be]/60 bg-[#f8f9fa] focus:outline-none focus:border-[#6d8fa3] text-sm text-[#2f3d4d] transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 mt-1 block">Message is required</span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-5 text-xs text-[#2f3d4d]/75">
                  <a
                    href="https://wa.me/918123943351?text=Hello%20Navami%20Reality%2C%20I%20would%20like%20to%20enquire%20about%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-bold text-[#2f3d4d] hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span>+91 8123943351 (WhatsApp)</span>
                  </a>
                  <a
                    href="tel:8123943351"
                    className="flex items-center gap-1.5 hover:text-[#c86931] transition-colors"
                  >
                    <Phone size={13} className="text-[#6d8fa3]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Assetz+Canvas+and+Cove,+Begur+Lake,+Bangalore+560068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-1.5 hover:text-[#c86931] transition-colors"
                  >
                    <MapPin size={13} className="text-[#6d8fa3]" /> Assetz Canvas &amp; Cove, Begur Lake
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#dbd0be]/30"
                >
                  <span>Submit Enquiry</span>
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Location & Studio Address Banner (Directly Follows Contact Form) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 sm:p-7 rounded-[28px] bg-white border border-[#dbd0be]/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#dbd0be]/30 border border-[#dbd0be] text-[#c86931] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c86931] block mb-1">
                Studio &amp; Office Location
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2f3d4d] leading-snug">
                C145, Assetz Canvas and Cove, Near Begur Lake, Bangalore – 560068
              </p>
              <p className="text-xs text-[#2f3d4d]/65 mt-1">
                GSTIN: 29BLNPN7816A1ZV &bull; Open Mon – Sat (9:00 AM – 8:00 PM)
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Assetz+Canvas+and+Cove,+Begur+Lake,+Bangalore+560068"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 border border-[#dbd0be]/30 group"
          >
            <span>Get Directions</span>
            <ArrowUpRight size={16} strokeWidth={2.4} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Interactive Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 rounded-[32px] overflow-hidden shadow-xl border border-[#dbd0be]/60 bg-white"
        >
          <iframe
            src="https://maps.google.com/maps?q=Assetz%20Canvas%20and%20Cove,%20Begur,%20Bangalore%20560068&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 sm:h-80 border-0 block"
            loading="lazy"
            title="Navami Reality Studio Location - Assetz Canvas and Cove, Begur Lake, Bangalore"
          />
        </motion.div>
      </div>
    </section>
  );
}
