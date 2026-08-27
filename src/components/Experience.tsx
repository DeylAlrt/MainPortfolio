import Reveal from "./Reveal";
import CountUp from "./CountUp";

const EXPERIENCE = [
  {
    role: "Front-End Developer",
    org: "Self-directed",
    period: "Oct 2025 — Present",
    description:
      "Designed 10+ high-fidelity Figma prototypes and built Navillera, a fully operational e-commerce site with product listings, cart, and checkout.",
  },
  {
    role: "Guest Services Associate",
    org: "Dubai Opera · Part-Time",
    period: "Jan 2026 — Present",
    description:
      "Maintain high guest-relations standards during peak hours across ticketing, ushering, and VIP lounge support.",
  },
  {
    role: "Volleyball Assistant Coach",
    org: "One Dela Cruz Academy Dubai",
    period: "Jun 2023 — Jun 2024",
    description:
      "Assisted coaches teaching fundamentals and advanced training sessions, contributing to player development at all levels.",
  },
  {
    role: "Crew Member — Internship",
    org: "Burger King, Olayan Food Division",
    period: "Feb 2024 — May 2024",
    description:
      "Thrived in a fast-paced environment with strong emphasis on communication, teamwork, and problem-solving.",
  },
];

const STATS = [
  { value: "4", label: "Projects Shipped" },
  { value: "10+", label: "Figma Prototypes" },
  { value: "2027", label: "Expected Graduation" },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="up">
          <h2 className="section-heading mb-12 text-3xl text-ink sm:text-4xl">
            Experience &amp; Milestones
          </h2>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1fr_260px]">
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
              Experience
            </h3>
            <ol className="space-y-8 border-l border-line pl-6">
              {EXPERIENCE.map((item, index) => (
                <Reveal
                  key={`${item.role}-${item.period}`}
                  as="li"
                  variant="left"
                  delay={index * 90}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="dot-badge absolute -left-[29px] top-1.5 h-3 w-3 rounded-full"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-display text-lg text-ink sm:text-xl">
                      {item.role}
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-sm text-purple">{item.org}</p>
                  <p className="mt-2 max-w-xl text-sm text-muted">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
              By the Numbers
            </h3>
            <ul className="space-y-6 border-t border-line pt-6">
              {STATS.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  as="li"
                  variant="scale"
                  delay={index * 100}
                  className="border-b border-line pb-6"
                >
                  <CountUp
                    value={stat.value}
                    className="font-display text-4xl leading-none text-ink sm:text-5xl"
                  />
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
