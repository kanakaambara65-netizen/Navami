"use client";

import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2f3d4d] text-white pt-16 pb-8 border-t border-[#dbd0be]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Navami Reality Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover shadow-md border border-[#dbd0be]/40 bg-[#2f3d4d]"
              />
              <div>
                <div className="font-sans font-black text-sm tracking-widest text-white uppercase leading-none">
                  NAVAMI
                </div>
                <div className="text-[#dbd0be] text-[8px] tracking-[0.25em] font-semibold uppercase mt-0.5">
                  REALITY · BANGALORE
                </div>
              </div>
            </div>

            <p className="text-[#dbd0be]/80 text-xs sm:text-sm leading-relaxed mb-6">
              Delivering architectural planning, elevation design, and turnkey villa construction to homeowners and investors across Bangalore since 2017.
            </p>

            <div className="text-xs text-[#dbd0be]/60 space-y-1">
              <p>GSTIN: 29BLNPN7816A1ZV</p>
              <p>Est. 2017 · Bangalore, India</p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-bold text-xs tracking-wider uppercase mb-5 text-[#dbd0be]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/#home" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-xs tracking-wider uppercase mb-5 text-[#dbd0be]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Structural Design and Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Architectural Design and Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Construction Execution and Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Interior Design and Space Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  Renovation and Retrofitting Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#c86931] transition-colors">
                  3D Modelling and Architectural Elevation Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-bold text-xs tracking-wider uppercase mb-5 text-[#dbd0be]">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#93acaa] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Assetz+Canvas+and+Cove,+Begur+Lake,+Bangalore+560068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  C145, Assetz Canvas and Cove, Near Begur Lake, Bangalore – 560068
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#93acaa] shrink-0" />
                <a href="mailto:Navami.reality08@gmail.com" className="hover:text-white transition-colors truncate">
                  Navami.reality08@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={15} className="text-[#93acaa] shrink-0" />
                <a
                  href="https://wa.me/918123943351?text=Hello%20Navami%20Reality%2C%20I%20would%20like%20to%20enquire%20about%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 8123943351 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#93acaa] shrink-0" />
                <a href="tel:8123943351" className="hover:text-white transition-colors">
                  +91 8123943351 (Call)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dbd0be]/60">
          <div>
            &copy; 2026 NAVAMI REALITY. ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918123943351?text=Hello%20Navami%20Reality%2C%20I%20would%20like%20to%20enquire%20about%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#dbd0be]/30 flex items-center justify-center text-[#dbd0be] hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp (+91 8123943351)"
            >
              <MessageCircle size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#dbd0be]/30 flex items-center justify-center text-[#dbd0be] hover:bg-[#6d8fa3] hover:text-white hover:border-transparent transition-all"
              aria-label="Instagram"
            >
              <Instagram size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
