"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    name: "Navillera Charms",
    description:
      "Custom Italian charm bracelet e-commerce store — product builder, collections, cart, and checkout, fully deployed.",
    tag: "E-Commerce · Next.js",
    href: "https://navilleracharms.vercel.app",
    external: true,
    image: "/images/projects/navillera-charms.png",
  },
  {
    name: "Interactive Portfolio",
    description:
      "A personal portfolio built to experiment with motion, layout rhythm, and front-end craft.",
    tag: "Portfolio · Next.js",
    href: "https://portfolio-deylalrts-projects.vercel.app/",
    external: true,
    image: "/images/projects/interactive-portfolio.png",
  },
  {
    name: "Budget Tracker App",
    description:
      "ALERTIFY — a budget-tracking app concept designed end-to-end in Figma, from user flows to high-fidelity screens.",
    tag: "Figma Prototype · UX/UI",
    href: "https://www.figma.com/proto/BPW5tyvQEE7K3AQvy1ahm1/ALERTIFY?node-id=5-200&t=ZbTf0zY2STL0uzs4-1&starting-point-node-id=3%3A31",
    external: true,
    image: "/images/projects/budget-tracker.png",
  },
  {
    name: "E-Commerce Website Design",
    description:
      "Mack's Chocolate Box — a full e-commerce site design covering browsing, product, and checkout flows in Figma.",
    tag: "Figma Prototype · UI Design",
    href: "https://www.figma.com/proto/Di0ITSnmfxi10xloi9OEDE/Goof-bol?node-id=352-758&t=lglLWSxHg7BmsAdQ-1",
    external: true,
    image: "/images/projects/ecommerce-design.png",
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);
  const raf = useRef(0);

  // Floating preview follows the cursor with a lerp (not 1:1) so it trails
  // slightly rather than snapping, plus a small tilt driven by how fast the
  // cursor is moving horizontally — gives it a bit of physical weight.
  useEffect(() => {
    function onMove(event: MouseEvent) {
      mouse.current = { x: event.clientX, y: event.clientY };
    }
    window.addEventListener("mousemove", onMove);

    function loop() {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      pos.current.x += dx * 0.16;
      pos.current.y += dy * 0.16;
      rotation.current += (dx * 0.04 - rotation.current) * 0.12;

      const node = previewRef.current;
      if (node) {
        const clampedRotation = Math.max(-10, Math.min(10, rotation.current));
        node.style.transform = `translate3d(${pos.current.x + 28}px, ${
          pos.current.y - 96
        }px, 0) rotate(${clampedRotation.toFixed(2)}deg)`;
      }
      raf.current = requestAnimationFrame(loop);
    }
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const activeProject = activeIndex !== null ? PROJECTS[activeIndex] : null;

  return (
    <section id="projects" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="up">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="section-heading text-3xl text-ink sm:text-4xl">
              PROJECTS
            </h2>
            
          </div>
        </Reveal>

        <ul className="border-t border-line">
          {PROJECTS.map((project, index) => {
            const rowClass =
              "row-hover flex flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-8";

            const inner = (
              <>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-muted transition-colors group-hover:text-red sm:text-4xl">
                    {project.name}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted">
                  <span className="uppercase tracking-[0.15em]">
                    {project.tag}
                  </span>
                  {project.href && (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:rotate-45 group-hover:border-red group-hover:bg-red group-hover:text-bg">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={project.name} as="li" variant="up" delay={index * 90}>
                <div
                  className="group border-b border-line"
                  onMouseEnter={() => project.image && setActiveIndex(index)}
                  onMouseLeave={() =>
                    setActiveIndex((current) => (current === index ? null : current))
                  }
                >
                  {project.href ? (
                    <a
                      href={project.href}
                      target={project.external ? "_blank" : undefined}
                      rel={project.external ? "noopener noreferrer" : undefined}
                      className={rowClass}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={rowClass}>{inner}</div>
                  )}
                  <p className="hidden max-w-2xl pb-6 text-sm text-muted sm:block">
                    {project.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>

      {/* Cursor-following preview — desktop/pointer-fine only, inert until
          a project has an `image` set. */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[70] hidden h-44 w-64 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl transition-opacity duration-300 will-change-transform md:block ${
          activeProject ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeProject?.image && (
          <Image
            src={activeProject.image}
            alt=""
            fill
            sizes="256px"
            className="object-cover"
          />
        )}
      </div>
    </section>
  );
}
