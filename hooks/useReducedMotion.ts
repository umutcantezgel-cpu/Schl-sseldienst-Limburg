"use client";

import { useState, useEffect } from "react";

/**
 * Lightweight replacement for framer-motion's useReducedMotion hook.
 * Avoids importing the entire framer-motion library (~32 KB gzipped)
 * when only this single feature is needed.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
