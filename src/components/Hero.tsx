import type { CSSProperties } from "react";
import HeroGlow from "./HeroGlow";
import HeroSocials from "./HeroSocials";
import SpiderWeb from "./SpiderWeb";

function AnimatedWord({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="glitch-text hero-letter inline-block"
          data-text={ch}
          style={
            {
              animationDelay: `${startDelay + i * 45}ms`,
              // Negative delay starts each letter's infinite glitch flicker
              // already mid-cycle, so the bursts ripple across the name
              // instead of firing on every letter in perfect unison.
              "--glitch-delay": `${-(i * 0.37)}s`,
            } as CSSProperties
          }
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line px-5 pt-14 pb-10 sm:px-8 sm:pt-20"
    >
      {/* decorative spider web, behind the ambient glow and content */}
      <SpiderWeb />

      {/* ambient glow accents */}
      <HeroGlow />

      <div className="relative mx-auto max-w-6xl">
        <div
          className="hero-in mb-6 flex items-center gap-2"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
          </span>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            Open to Internships &amp; Junior Roles
          </p>
        </div>

        <h1 className="leading-[0.85] text-[15vw] sm:text-[10vw] lg:text-[7.5rem]">
          <AnimatedWord text="DALE" startDelay={90} />
          <AnimatedWord text="ALERTA" startDelay={280} />
        </h1>

        <p
          className="hero-in mt-5 font-display text-lg tracking-wide text-ink sm:text-xl"
          style={{ animationDelay: "580ms" }}
        >
          &ldquo;Every Website Tells a <span className="text-red">Story</span>&rdquo;
        </p>

        <p
          className="hero-in mt-5 max-w-xl text-base text-muted sm:text-lg"
          style={{ animationDelay: "660ms" }}
        >
          Front-end developer &amp; Computer Science student blending code
          and design to build interfaces with real character — from Figma
          systems to shipped e-commerce.
        </p>

        <div className="hero-in mt-6" style={{ animationDelay: "720ms" }}>
          <HeroSocials />
        </div>

        <div
          className="hero-in mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "780ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--red)_85%,white)] active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-purple hover:text-purple active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        <div
          className="hero-in mt-16 flex flex-col gap-6 border-t border-line pt-6 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "840ms" }}
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line"
            >
              <span className="inline-block h-8 w-8 animate-spin-slow rounded-full border border-dashed border-red/60" />
            </span>
            <span>
              Computer Science Student
              <br />
              University of Creative Arts
            </span>
          </div>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>
    </section>
  );
}
