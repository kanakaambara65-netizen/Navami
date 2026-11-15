"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface ThemeContextType {
  isDark: boolean;
  daylightProgress: number; // 0 = Morning (100% Day), 1 = Night (100% Night)
  toggleTheme: () => void;
  setDaylightProgress: (progress: number) => void;
  setThemeMode: (dark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  daylightProgress: 0,
  toggleTheme: () => {},
  setDaylightProgress: () => {},
  setThemeMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [daylightProgress, setDaylightState] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("navami-theme");
    if (saved === "dark") {
      setIsDark(true);
      setDaylightState(1);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      setDaylightState(0);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setThemeMode = useCallback((dark: boolean) => {
    setIsDark(dark);
    setDaylightState(dark ? 1 : 0);
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("navami-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("navami-theme", "light");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode(!isDark);
  }, [isDark, setThemeMode]);

  const setDaylightProgress = useCallback((progress: number) => {
    const clamped = Math.max(0, Math.min(1, progress));
    setDaylightState(clamped);
    const shouldBeDark = clamped > 0.45;
    if (shouldBeDark !== isDark) {
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("navami-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("navami-theme", "light");
      }
    }
  }, [isDark]);

  if (!mounted) {
    return <div className="theme-transition">{children}</div>;
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        daylightProgress,
        toggleTheme,
        setDaylightProgress,
        setThemeMode,
      }}
    >
      <div className="theme-transition">{children}</div>
    </ThemeContext.Provider>
  );
}
