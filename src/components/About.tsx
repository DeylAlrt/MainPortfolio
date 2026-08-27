import Image from "next/image";
import Reveal from "./Reveal";
import SpideySense from "./SpideySense";

const FACTS = [
  { label: "Based in", value: "Dubai, UAE" },
  { label: "Studying", value: "Computer Science, B.Sc." },
  { label: "At", value: "University of Creative Arts" },
  { label: "Graduating", value: "August 2027" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <Reveal variant="scale" className="order-2 lg:order-1">
          <div className="group relative w-fit">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-red/40 via-purple/30 to-transparent blur-xl"
            />

            {/* Spidey-sense burst — hover the photo to trigger it */}
            <SpideySense />

            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/images/MyPicture.jpg"
                alt="Portrait of Dale Alerta"
                width={320}
                height={400}
                className="h-[400px] w-[320px] object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal variant="up">
            <h2 className="section-heading text-3xl text-ink sm:text-4xl">
              About Me
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              A Computer Science student who has a solid background in
              software development and problem-solving skills. Willingness
              to work in a fast-paced setting as evidenced by the ability to
              learn new technologies and produce high quality and impactful
              projects in a timely fashion. Desire to join a progressive
              team with a technical role and collaborative spirit.
            </p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {FACTS.map((fact, index) => (
              <Reveal key={fact.label} variant="up" delay={index * 80}>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-lg text-ink sm:text-xl">
                  {fact.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
