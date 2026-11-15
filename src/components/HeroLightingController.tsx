"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Sparkles } from "lucide-react";

export default function HeroLightingController() {
  const { isDark, daylightProgress, setDaylightProgress, setThemeMode } = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Time of day label calculation
  const getTimeLabel = (t: number) => {
    if (t < 0.2) return { time: "08:00 AM", label: "Natural Morning Sunlight", tag: "Morning View" };
    if (t < 0.45) return { time: "12:30 PM", label: "Midday Daylight Clarity", tag: "Daylight" };
    if (t < 0.7) return { time: "06:15 PM", label: "Golden Hour Sunset & Twilight", tag: "Golden Hour" };
    if (t < 0.88) return { time: "08:30 PM", label: "Evening Architectural Lights", tag: "Twilight" };
    return { time: "10:30 PM", label: "Midnight Luxury Villa Illumination", tag: "Night Villa" };
  };

  const currentInfo = getTimeLabel(daylightProgress);
  const arcLength = 260;

  // Compute position on the C-curve given t (0 to 1)
  const getCPoint = (t: number) => {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;

    const p0 = { x: 35, y: 22 };
    const p1 = { x: 80, y: 95 };
    const p2 = { x: 160, y: 95 };
    const p3 = { x: 205, y: 26 };

    const x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
    const y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
    return { x, y };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateFromPointer(e);
  };

  const updateFromPointer = useCallback((e: MouseEvent | TouchEvent | React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const relX = clientX - rect.left;
    const width = rect.width;
    const t = Math.max(0, Math.min(1, relX / width));
    setDaylightProgress(t);
  }, [setDaylightProgress]);

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => {
      updateFromPointer(e);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging, updateFromPointer]);

  const knobPos = getCPoint(daylightProgress);

  return (
    <div className="w-full select-none">
      <div
        className={`backdrop-blur-xl border transition-all duration-500 rounded-b-sm overflow-hidden p-4 shadow-xl ${
          isDark
            ? "bg-navy-dark/95 border-gold/30 text-white"
            : "bg-white/95 border-navy/15 text-navy shadow-navy/5"
        }`}
      >
        {/* Top Status Line */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
              Interactive Daylight Control
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-serif font-bold ${isDark ? "text-white" : "text-navy"}`}>
              {currentInfo.time}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/15 text-gold font-mono">
              {currentInfo.tag}
            </span>
          </div>
        </div>

        {/* C-Shaped Arc Track (Interactive Scrub) */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          className="relative w-full h-[75px] cursor-ew-resize mb-2 touch-none group"
          title="Drag along the C-curve to illuminate the villa"
        >
          <svg
            viewBox="0 0 240 110"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="cArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="50%" stopColor="#C5A46D" />
                <stop offset="100%" stopColor="#142D50" />
              </linearGradient>

              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Guide C-Curve */}
            <path
              d="M 35 22 C 80 95, 160 95, 205 26"
              fill="none"
              stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(20,45,80,0.12)"}
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Illuminated Active C-Curve portion */}
            <path
              d="M 35 22 C 80 95, 160 95, 205 26"
              fill="none"
              stroke="url(#cArcGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={arcLength}
              strokeDashoffset={arcLength * (1 - daylightProgress)}
            />

            {/* Markers */}
            <circle cx="35" cy="22" r="3.5" fill="#87CEEB" />
            <circle cx="120" cy="76" r="3" fill="#C5A46D" />
            <circle cx="205" cy="26" r="3.5" fill="#071426" stroke="#C5A46D" strokeWidth="1.5" />

            {/* Draggable Knob */}
            <g transform={`translate(${knobPos.x}, ${knobPos.y})`} filter="url(#goldGlow)">
              <circle r="10" fill="rgba(197, 164, 109, 0.3)" />
              <circle r="6" fill="#C5A46D" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle r="1.5" fill="#FFFFFF" />
            </g>

            {/* Labels */}
            <text x="35" y="14" textAnchor="middle" fontSize="8.5" fill={isDark ? "#A0AEC0" : "#788497"} fontFamily="sans-serif">
              ☀️ Morning
            </text>
            <text x="120" y="100" textAnchor="middle" fontSize="8.5" fill="#C5A46D" fontFamily="sans-serif">
              🌅 Sunset
            </text>
            <text x="205" y="14" textAnchor="middle" fontSize="8.5" fill={isDark ? "#A0AEC0" : "#788497"} fontFamily="sans-serif">
              🌙 Night
            </text>
          </svg>
        </div>

        {/* Linear Range Slider */}
        <div className="relative mb-3">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={daylightProgress}
            onChange={(e) => setDaylightProgress(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-gray-300 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5A46D]"
            aria-label="Daylight progress slider"
          />
        </div>

        {/* Quick One-Tap Buttons (Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gold/15">
          <button
            onClick={() => setThemeMode(false)}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-sm transition-all duration-300 ${
              !isDark && daylightProgress < 0.25
                ? "bg-gold text-navy-dark shadow-md"
                : isDark
                ? "bg-white/5 text-gray-300 hover:bg-white/10"
                : "bg-navy/5 text-navy hover:bg-navy/10"
            }`}
          >
            <Sun size={13} className={daylightProgress < 0.25 ? "text-navy-dark" : "text-gold"} />
            <span>☀️ Morning View</span>
          </button>

          <button
            onClick={() => setThemeMode(true)}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-sm transition-all duration-300 ${
              isDark && daylightProgress > 0.75
                ? "bg-gold text-navy-dark shadow-md"
                : isDark
                ? "bg-white/5 text-gray-300 hover:bg-white/10"
                : "bg-navy/5 text-navy hover:bg-navy/10"
            }`}
          >
            <Moon size={13} className={daylightProgress > 0.75 ? "text-navy-dark" : "text-gold"} />
            <span>🌙 Night View</span>
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-muted/70">
          <Sparkles size={10} className="text-gold" />
          <span>Drag knob along C-curve or click buttons to illuminate</span>
        </div>
      </div>
    </div>
  );
}
