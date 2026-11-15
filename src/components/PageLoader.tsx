"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#24303d] text-white px-6 select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at center, rgba(109, 143, 163, 0.35) 0%, rgba(36, 48, 61, 0) 65%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
            {/* 3D Gold Emblem with Pulsing Luxury Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6"
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-[#dbd0be]/40 animate-ping opacity-30" />
              
              {/* Spinning progress border */}
              <div className="absolute -inset-1.5 rounded-full border border-t-[#dbd0be] border-r-transparent border-b-[#6d8fa3] border-l-transparent animate-spin" />

              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-[#dbd0be]/70 bg-[#2f3d4d] p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Navami Reality Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Brand Title: NAVAMI REALITY */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif font-black text-2xl sm:text-3xl tracking-[0.2em] text-white uppercase leading-none mb-1.5">
                NAVAMI
              </h2>
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-[#dbd0be] uppercase mb-4">
                REALITY
              </div>
              <div className="text-[9px] tracking-[0.25em] text-[#93acaa] uppercase font-medium mb-6">
                BUILD · DESIGN · TRANSFORM
              </div>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-56 flex flex-col items-center">
              <div className="w-full h-[2px] bg-white/15 rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#6d8fa3] via-[#c86931] to-[#dbd0be] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="text-[11px] font-mono tracking-wider text-[#dbd0be]/70">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
