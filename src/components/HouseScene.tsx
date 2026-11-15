"use client";

import { useRef, useState } from "react";

export default function HouseScene() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-navy-dark">
      {/* ── 1. CINEMATIC ARCHITECTURAL CAMERA REEL (60 FPS) ── */}
      <video
        ref={videoRef}
        src="/videos/navami-cinematic-render.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="w-full h-full object-cover object-center transform scale-[1.01]"
      />

      {/* ── 2. FALLBACK DAY IMAGE (Instant initial render) ── */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/house-day.jpg"
            alt="Navami Villa Day View"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* ── 3. CINEMATIC 35mm VIGNETTE ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 48%, transparent 52%, rgba(7, 20, 38, 0.45) 100%)",
        }}
      />
    </div>
  );
}
