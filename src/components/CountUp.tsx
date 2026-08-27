"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** e.g. "3.5", "10+", "90", "2027" */
  value: string;
  className?: string;
  duration?: number;
};

export default function CountUp({
  value,
  className = "",
  duration = 1200,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => {
    const match = value.match(/[\d.]+/);
    return match ? value.replace(match[0], "0") : value;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/[\d.]+/);
    if (!match) {
      const id = window.setTimeout(() => setDisplay(value), 0);
      return () => window.clearTimeout(id);
    }

    const target = parseFloat(match[0]);
    const decimals = match[0].includes(".")
      ? match[0].split(".")[1].length
      : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setDisplay(value), 0);
      return () => window.clearTimeout(id);
    }

    let raf = 0;
    const animate = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        }
      };
      raf = requestAnimationFrame(step);
    };

    // Re-counts from 0 every time the stat scrolls back into view (not just
    // once), and resets to 0 on the way out — matching the site's other
    // in/out reveal motion instead of a fire-once entrance.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
          } else {
            cancelAnimationFrame(raf);
            setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
