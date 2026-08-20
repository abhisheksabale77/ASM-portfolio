"use client";

import { useState, useEffect, RefObject } from "react";

export type NavbarColor = "white" | "black";

interface UseNavbarColorOptions {
  /** Default fallback color if no [data-navbar-color] element is found */
  defaultColor?: NavbarColor;
}

/**
 * Custom hook that dynamically determines the required navbar text/icon color
 * by performing multi-point spatial sampling underneath the floating navbar.
 *
 * Samples 3 horizontal points (Left 25%, Center 50%, Right 75%) along the navbar's
 * vertical center to determine the dominant visual background.
 *
 * @param navbarRef - Ref to the navbar element to measure exact viewport bounding box
 * @param options - Configuration options
 * @returns "white" (for dark backgrounds) | "black" (for light backgrounds)
 */
export function useNavbarColor(
  navbarRef?: RefObject<HTMLElement | null>,
  options: UseNavbarColorOptions = {}
): NavbarColor {
  const { defaultColor = "white" } = options;
  const [navbarColor, setNavbarColor] = useState<NavbarColor>(defaultColor);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;

    const detectColor = () => {
      // 1. Calculate navbar vertical center Y coordinate in viewport space
      let sampleY = 56; // Standard fallback (top-6 = 24px + half of 64px height = 56px)
      if (navbarRef?.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        sampleY = rect.top + rect.height / 2;
      }

      // 2. Sample 3 horizontal points across the navbar span (Left 25%, Center 50%, Right 75%)
      const samplePointsX = [
        window.innerWidth * 0.25,
        window.innerWidth * 0.50,
        window.innerWidth * 0.75,
      ];

      const votes: NavbarColor[] = [];

      for (const sampleX of samplePointsX) {
        const elementAtPoint = document.elementFromPoint(sampleX, sampleY);
        if (elementAtPoint) {
          const target = elementAtPoint.closest<HTMLElement>("[data-navbar-color]");
          if (target) {
            const attr = target.getAttribute("data-navbar-color") as NavbarColor;
            if (attr === "white" || attr === "black") {
              votes.push(attr);
            }
          }
        }
      }

      // 3. Resolve dominant color from spatial samples
      let dominantColor: NavbarColor;
      if (votes.length > 0) {
        const whiteVotes = votes.filter((v) => v === "white").length;
        const blackVotes = votes.filter((v) => v === "black").length;
        dominantColor = whiteVotes >= blackVotes ? "white" : "black";
      } else {
        // Safe Fallback: if near top of document, use defaultColor ("white" for Hero), else "black"
        dominantColor = window.scrollY < 100 ? defaultColor : "black";
      }

      // 4. Update React state ONLY if color actually changed (prevents re-render thrashing)
      setNavbarColor((prev) => (prev !== dominantColor ? dominantColor : prev));
    };

    // 5. RequestAnimationFrame throttler for smooth 60fps/120fps scrolling
    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        detectColor();
        rafId = null;
      });
    };

    // Initial detection on mount
    detectColor();

    // Register passive event listeners
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [navbarRef, defaultColor]);

  return navbarColor;
}
