"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

interface DayNightImageSliderProps {
  dayImage?: string;
  nightImage?: string;
  alt?: string;
  className?: string;
}

export default function DayNightImageSlider({
  dayImage = "/images/about-villa-day.jpg",
  nightImage = "/images/about-villa-night.jpg",
  alt = "Navami Reality Villa Day to Night View",
  className = "",
}: DayNightImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleStopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStopDragging);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleStopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      className={`relative select-none overflow-hidden rounded-[32px] cursor-ew-resize shadow-2xl border-4 border-white dark:border-[#2f3d4d] ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* ── 1. NIGHT VIEW (Background Base Image) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={nightImage}
        alt={`${alt} - Night View with Lights`}
        className="w-full h-[280px] xs:h-[340px] sm:h-[400px] md:h-[450px] object-cover pointer-events-none block"
        draggable={false}
      />

      {/* ── 2. MORNING VIEW (Clipped Overlay Image) ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
          WebkitClipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dayImage}
          alt={`${alt} - Morning Daylight View`}
          className="w-full h-[280px] xs:h-[340px] sm:h-[400px] md:h-[450px] object-cover pointer-events-none block"
          draggable={false}
        />
      </div>

      {/* ── 3. TOP PILL BADGES (Matching Image 2 Reference) ── */}
      {/* Left Pill Badge: MORNING VIEW */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black tracking-wider uppercase border border-white/20 shadow-lg">
          <Sun size={11} className="text-[#dbd0be]" />
          <span>MORNING VIEW</span>
        </div>
      </div>

      {/* Right Pill Badge: NIGHT VIEW (Neon Yellow-Lime from Image 2) */}
      <div className="absolute top-3 right-16 sm:top-5 sm:right-24 z-20 pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-[#D2F800] text-black text-[9px] sm:text-[10px] font-black tracking-wider uppercase shadow-xl">
          <Moon size={11} className="text-black" />
          <span>NIGHT VIEW</span>
        </div>
      </div>

      {/* ── 4. VERTICAL SLIDER DIVIDER LINE & CIRCULAR HANDLE (Yellow Lime from Image 2) ── */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical Yellow Line */}
        <div className="w-[3px] h-full bg-[#D2F800] shadow-[0_0_12px_rgba(210,248,0,0.8)]" />

        {/* Circular Yellow Drag Handle with < > arrows (Matching Image 2) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#D2F800] text-black flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] border-2 border-white hover:scale-110 active:scale-95 transition-transform">
          <div className="flex items-center justify-center -space-x-1">
            <ChevronLeft size={16} strokeWidth={3} />
            <ChevronRight size={16} strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* ── 5. BOTTOM GUARANTEE OVERLAY STRIP ── */}
      <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#2f3d4d]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#dbd0be]/30 text-white flex items-center justify-between pointer-events-none shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#D2F800] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wide">
            Drag slider left &harr; right to transition Morning to Night View
          </span>
        </div>
        <span className="text-[10px] text-[#dbd0be] font-mono uppercase tracking-wider hidden sm:inline">
          Architectural Lighting
        </span>
      </div>
    </div>
  );
}
