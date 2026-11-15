"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Dynamic route & scroll-spy active state tracking
  useEffect(() => {
    // 1. If on dedicated route pages
    if (pathname === "/services") {
      setActiveSection("Services");
      return;
    }
    if (pathname === "/portfolio") {
      setActiveSection("Projects");
      return;
    }
    if (pathname !== "/") return;

    // 2. On homepage, track scroll position in true physical DOM order
    const idToLabel: Record<string, string> = {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Projects",
      contact: "Contact",
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // If user just clicked a nav link, preserve the clicked section during smooth scroll
      if (isClickingRef.current) return;

      // Bottom of page detection (highlights Contact)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("Contact");
        return;
      }

      // Sort elements by their real physical offsetTop on screen
      const elements = Object.keys(idToLabel)
        .map((id) => ({
          label: idToLabel[id],
          el: document.getElementById(id),
        }))
        .filter(
          (item): item is { label: string; el: HTMLElement } =>
            Boolean(item.el)
        )
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      const scrollPos = window.scrollY + 250;
      for (let i = elements.length - 1; i >= 0; i--) {
        if (scrollPos >= elements[i].el.offsetTop) {
          setActiveSection(elements[i].label);
          return;
        }
      }
      setActiveSection("Home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    // Map href to label and lock active state during smooth scroll
    const matched = navLinks.find((l) => l.href === href);
    if (matched) {
      setActiveSection(matched.label);
      isClickingRef.current = true;
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => {
        isClickingRef.current = false;
      }, 1000);
    }

    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (pathname === "/") {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      router.push(href);
      return;
    }
    router.push(href);
  };

  return (
    <>
      {/* ── SEAMLESS INTEGRATED HEADER NAVBAR (Matches reference design) ── */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#dbd0be]/40 py-3 sm:py-3.5"
            : "bg-[#f5f1eb]/85 backdrop-blur-md border-b border-[#dbd0be]/40 py-4 sm:py-4.5"
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* ── Left: Brand Logo & Typography (Starts at Left Edge, Blends with Home Page) ── */}
          <Link
            href="/#home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                handleNavClick("/#home");
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md border-2 border-[#dbd0be]/70 shrink-0 bg-white group-hover:scale-105 transition-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Navami Reality Logo Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-base xs:text-lg sm:text-2xl md:text-[25px] tracking-wider text-[#2f3d4d] uppercase leading-none">
                NAVAMI
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] text-[#6d8fa3] tracking-[0.24em] font-bold uppercase mt-0.5 sm:mt-1">
                REALITY · BANGALORE
              </span>
            </div>
          </Link>

          {/* ── Center: Refined Navigation Links with Active Indicator ── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative py-1 text-[15px] lg:text-[16px] tracking-wide transition-colors ${
                    isActive
                      ? "text-[#c86931] font-bold drop-shadow-sm"
                      : "text-[#2f3d4d]/85 hover:text-[#c86931] font-medium"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#c86931] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Right: Direct Phone Call + Enquire Pill CTA ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone Call Button */}
            <a
              href="tel:8123943351"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-[#c86931] text-[#2f3d4d] hover:text-white border border-[#dbd0be]/70 flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-105 group shrink-0"
              aria-label="Call Navami Reality"
              title="Call Us Directly (+91 8123943351)"
            >
              <Phone size={15} strokeWidth={2.2} className="group-hover:rotate-12 transition-transform" />
            </a>

            {/* Enquire Pill CTA (Shown on Tablet & Desktop, accessible via Mobile Drawer on phone) */}
            <button
              onClick={() => handleNavClick("/#contact")}
              className="hidden sm:inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-xs sm:text-sm md:text-[15px] tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] border border-[#dbd0be]/30 group shrink-0"
            >
              <span>Enquire</span>
              <ArrowUpRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2f3d4d] flex items-center justify-center text-white shadow-sm shrink-0"
              aria-label="Toggle Mobile Menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#FAF7F2] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#e8e3db]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#dbd0be]/70 shrink-0 bg-white shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/logo.png"
                      alt="Navami Reality Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-black text-base sm:text-lg tracking-wider uppercase text-[#2f3d4d] leading-none">
                      NAVAMI
                    </span>
                    <span className="text-[9px] text-[#6d8fa3] tracking-[0.22em] font-bold uppercase mt-0.5">
                      REALITY · BANGALORE
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#2f3d4d] text-white flex items-center justify-center shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.label;
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left font-bold text-2xl transition-colors ${
                        isActive
                          ? "text-[#c86931]"
                          : "text-[#2f3d4d] hover:text-[#c86931]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:8123943351"
                className="w-full py-4 rounded-full border border-[#2f3d4d]/30 text-[#2f3d4d] flex items-center justify-center gap-2 font-bold text-base tracking-wide uppercase hover:bg-white transition-colors"
              >
                <Phone size={17} /> Call: +91 8123943351
              </a>
              <button
                onClick={() => handleNavClick("/#contact")}
                className="w-full py-4 rounded-full bg-[#2f3d4d] hover:bg-[#c86931] text-white font-bold text-base uppercase tracking-wider shadow-lg transition-colors"
              >
                Enquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
