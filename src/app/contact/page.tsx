"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Project Consultation Request - ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nProject Requirements / Message:\n${data.message}`
    );
    window.location.href = `mailto:Navami.reality08@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  const whatsappUrl = `https://wa.me/918123943351?text=${encodeURIComponent(
    "Hello Navami Reality! I would like to schedule a consultation for my home construction/design project."
  )}`;

  return (
    <main className="min-h-screen bg-white dark:bg-[#1e2833]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 bg-[#2f3d4d] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-[#dbd0be]/40 text-[#dbd0be] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            START YOUR JOURNEY
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-[#dbd0be] text-sm sm:text-base max-w-2xl mx-auto">
            Contact us for any kind of information or for a FREE, no-obligation quote estimation. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d8fa3]">
                DIRECT ASSISTANCE
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#2f3d4d] dark:text-white mt-1 mb-4">
                We&apos;re Here to Help You Build
              </h2>
              <p className="text-sm text-[#2f3d4d]/80 dark:text-[#dbd0be] leading-relaxed mb-6">
                Whether you have an architectural plot ready for construction or are seeking design elevation advice, reach out to our team directly.
              </p>
            </div>

            {/* Curvy Contact Details List */}
            <div className="space-y-4">
              <div className="p-6 rounded-[24px] border border-[#dbd0be]/40 bg-[#f8f9fa] dark:bg-[#2f3d4d] flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#dbd0be]/30 border border-[#dbd0be] text-[#2f3d4d] dark:text-[#dbd0be] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#2f3d4d] dark:text-white">WhatsApp &amp; Direct Line</h4>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#25D366] hover:text-[#1faa4b] font-bold block">
                    +91 8123943351 (WhatsApp)
                  </a>
                  <a href="tel:8123943351" className="text-xs text-[#6d8fa3] hover:text-[#2f3d4d] dark:hover:text-[#dbd0be] font-medium">
                    Call: +91 8123943351
                  </a>
                  <p className="text-[11px] text-[#2f3d4d]/60 dark:text-[#dbd0be]/60 mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="p-6 rounded-[24px] border border-[#dbd0be]/40 bg-[#f8f9fa] dark:bg-[#2f3d4d] flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#dbd0be]/30 border border-[#dbd0be] text-[#2f3d4d] dark:text-[#dbd0be] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#2f3d4d] dark:text-white">Email Enquiries</h4>
                  <a href="mailto:Navami.reality08@gmail.com" className="text-sm text-[#6d8fa3] hover:text-[#2f3d4d] dark:hover:text-[#dbd0be] font-bold truncate block">
                    Navami.reality08@gmail.com
                  </a>
                  <p className="text-[11px] text-[#2f3d4d]/60 dark:text-[#dbd0be]/60 mt-0.5">Average response time: &lt; 2 hours</p>
                </div>
              </div>

              <div className="p-6 rounded-[24px] border border-[#dbd0be]/40 bg-[#f8f9fa] dark:bg-[#2f3d4d] flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#dbd0be]/30 border border-[#dbd0be] text-[#c86931] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#2f3d4d] dark:text-white">Studio Address</h4>
                  <a
                    href="https://maps.google.com/?q=Assetz+Canvas+and+Cove,+Begur+Lake,+Bangalore+560068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2f3d4d]/85 dark:text-[#dbd0be] hover:text-[#c86931] leading-snug block transition-colors"
                  >
                    C145, Assetz Canvas and Cove, Near Begur Lake, Bangalore – 560068
                  </a>
                  <p className="text-[11px] text-[#2f3d4d]/60 dark:text-[#dbd0be]/60 mt-0.5">GSTIN: 29BLNPN7816A1ZV</p>
                </div>
              </div>
            </div>

            {/* Curvy WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1faa4b] text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-all border border-transparent hover:scale-[1.02]"
            >
              <MessageSquare size={18} /> Chat on WhatsApp (+91 8123943351)
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] p-8 sm:p-12 shadow-2xl border border-[#dbd0be]/40 bg-white dark:bg-[#2f3d4d]">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 size={54} className="text-[#93acaa] mx-auto mb-4" />
                  <h3 className="font-sans font-black text-2xl mb-2 text-[#2f3d4d] dark:text-white">
                    Thank You! Message Sent
                  </h3>
                  <p className="text-sm text-[#6d8fa3] dark:text-[#dbd0be] max-w-md mx-auto mb-6">
                    We have received your enquiry and our team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 rounded-full bg-[#6d8fa3] text-white font-bold text-xs uppercase tracking-wider border border-[#dbd0be]/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="border-b border-[#dbd0be]/30 pb-4 mb-2">
                    <h3 className="font-sans font-black text-xl text-[#2f3d4d] dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#6d8fa3] dark:text-[#dbd0be]">
                      Fill out the form below and we will prepare a customized proposal.
                    </p>
                  </div>

                  {/* 3 Curvy Pill Inputs in 1 Row on Desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        aria-label="Your Full Name"
                        {...register("name", { required: true })}
                        className={`w-full px-5 py-3.5 rounded-full text-sm border outline-none transition-all ${
                          errors.name ? "border-red-400" : "border-[#dbd0be] dark:border-white/10"
                        } dark:bg-[#1e2833] dark:text-white focus:border-[#6d8fa3]`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-[#6d8fa3] mt-1 ml-3 block">Name is required</span>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email Address"
                        {...register("email", { required: true })}
                        className={`w-full px-5 py-3.5 rounded-full text-sm border outline-none transition-all ${
                          errors.email ? "border-red-400" : "border-[#dbd0be] dark:border-white/10"
                        } dark:bg-[#1e2833] dark:text-white focus:border-[#6d8fa3]`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-[#6d8fa3] mt-1 ml-3 block">Email is required</span>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        aria-label="Phone Number"
                        {...register("phone", { required: true })}
                        className={`w-full px-5 py-3.5 rounded-full text-sm border outline-none transition-all ${
                          errors.phone ? "border-red-400" : "border-[#dbd0be] dark:border-white/10"
                        } dark:bg-[#1e2833] dark:text-white focus:border-[#6d8fa3]`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-[#6d8fa3] mt-1 ml-3 block">Phone is required</span>
                      )}
                    </div>
                  </div>

                  {/* Message Field (Curvy Box) */}
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Message (Please mention your site location, plot dimensions, and requirements)"
                      aria-label="Project Details or Message"
                      {...register("message", { required: true })}
                      className={`w-full px-5 py-4 rounded-[24px] text-sm border outline-none transition-all resize-y ${
                        errors.message ? "border-red-400" : "border-[#dbd0be] dark:border-white/10"
                      } dark:bg-[#1e2833] dark:text-white focus:border-[#6d8fa3]`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-[#6d8fa3] mt-1 ml-3 block">Message is required</span>
                    )}
                  </div>

                  {/* Curvy Pill Submit Button */}
                  <div className="pt-2 text-center sm:text-left">
                    <button
                      type="submit"
                      className="px-12 py-4.5 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-base sm:text-[17px] uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#dbd0be]/40"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Interactive Google Map Embed */}
        <div className="mt-14 rounded-[32px] overflow-hidden shadow-2xl border border-[#dbd0be]/50 bg-white">
          <iframe
            src="https://maps.google.com/maps?q=Assetz%20Canvas%20and%20Cove,%20Begur,%20Bangalore%20560068&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 sm:h-96 border-0 block"
            loading="lazy"
            title="Navami Reality Studio Location - Assetz Canvas and Cove, Begur Lake, Bangalore"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
