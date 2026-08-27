"use client";

import { useEffect, useRef } from "react";

export default function HeroGlow() {
  const purpleRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (purpleRef.current) {
          purpleRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        }
        if (redRef.current) {
          redRef.current.style.transform = `translate3d(0, ${y * -0.1}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={purpleRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple/25 blur-[110px]"
      />
      <div
        ref={redRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-red/20 blur-[110px]"
      />
    </>
  );
}
