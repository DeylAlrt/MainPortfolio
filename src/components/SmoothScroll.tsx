"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Adds real inertia/momentum to mouse-wheel and touch scrolling across the
 * whole page (native `scroll-behavior: smooth` only eases anchor-link jumps).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Route in-page anchor links (nav, hero CTAs, footer) through Lenis so
    // they ease in step with wheel/touch scrolling instead of native jump.
    const NAV_OFFSET = 76;
    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.1 });
    }
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
