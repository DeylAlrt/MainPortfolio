import Reveal from "./Reveal";

const PRIMARY_SKILLS = [
  { name: "HTML", note: "Semantic markup" },
  { name: "CSS", note: "Layout & styling" },
  { name: "JavaScript", note: "Interactivity" },
  { name: "Next.js", note: "React framework" },
  { name: "Figma", note: "UX & prototyping" },
  { name: "Claude AI", note: "AI-assisted build" },
];

const SECONDARY_SKILLS = ["Python", "Microsoft Office", "Video/Photo Editing"];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="up">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="section-heading text-3xl text-ink sm:text-4xl">
              Skills &amp; Tools
            </h2>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {PRIMARY_SKILLS.map((skill, index) => (
            <Reveal
              key={skill.name}
              as="li"
              variant="scale"
              delay={index * 70}
              className="group rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:shadow-[0_10px_30px_-12px_rgba(255,46,77,0.35)]"
            >
              <p className="font-display text-lg text-ink transition-colors group-hover:text-red">
                {skill.name}
              </p>
              <p className="mt-1 text-xs text-muted">{skill.note}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="fade" delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Also familiar with
            </span>
            {SECONDARY_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-purple hover:text-purple"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
