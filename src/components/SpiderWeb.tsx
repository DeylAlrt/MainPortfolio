import { seededJitter } from "@/lib/motion";

const SIZE = 400;
const SPOKES = 11;
const RINGS = 6;

type WebGeometry = {
  spokeLines: { x: number; y: number }[];
  ringPaths: string[];
};

/** Builds a quarter spider-web anchored at the SVG origin (0,0), spanning into the box. */
/** Round to 2 decimals so server/client float serialization always matches (avoids hydration diffs). */
function round(n: number): number {
  return Math.round(n * 100) / 100;
}

function buildWeb(seedOffset: number): WebGeometry {
  const angleStep = Math.PI / 2 / (SPOKES - 1);

  const spokePoints: { x: number; y: number }[][] = [];
  for (let i = 0; i < SPOKES; i++) {
    const angle = i * angleStep;
    const points: { x: number; y: number }[] = [];
    for (let j = 1; j <= RINGS; j++) {
      const baseRadius = (SIZE * j) / RINGS;
      const jitter = seededJitter(seedOffset + i * 7.13 + j * 3.71) * 8;
      const radius = baseRadius + jitter;
      points.push({
        x: round(Math.cos(angle) * radius),
        y: round(Math.sin(angle) * radius),
      });
    }
    spokePoints.push(points);
  }

  const spokeLines = spokePoints.map((pts) => pts[pts.length - 1]);

  const ringPaths: string[] = [];
  for (let j = 0; j < RINGS; j++) {
    let d = "";
    for (let i = 0; i < SPOKES; i++) {
      const p = spokePoints[i][j];
      d += i === 0 ? `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}` : ` L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }
    ringPaths.push(d);
  }

  return { spokeLines, ringPaths };
}

function WebCorner({ className, seedOffset }: { className: string; seedOffset: number }) {
  const { spokeLines, ringPaths } = buildWeb(seedOffset);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="url(#web-stroke)" strokeWidth="1.4">
        {spokeLines.map((pt, i) => (
          <line key={`spoke-${i}`} x1={0} y1={0} x2={pt.x} y2={pt.y} />
        ))}
        {ringPaths.map((d, i) => (
          <path key={`ring-${i}`} d={d} />
        ))}
      </g>
      <defs>
        <linearGradient id="web-stroke" x1="0" y1="0" x2={SIZE} y2={SIZE}>
          <stop offset="0%" stopColor="var(--red)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--purple)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Decorative spider web, scoped to whichever section renders it (the hero's
 * intro) rather than fixed across the whole page — it needs a `relative`
 * (or otherwise positioned) ancestor to anchor against, and should be
 * placed before that section's actual content in JSX so it paints behind.
 */
export default function SpiderWeb() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Quarter-web geometry is built spreading right+down from its origin;
          scale-x flips that into left+down so it reads correctly anchored
          from the top-right corner instead. The flip lives on this static
          wrapper (not on WebCorner itself) because the sway animation's
          keyframes drive `transform` on whatever element they're applied
          to — a `transform` utility on that same element would just get
          overridden every frame instead of composing with it. */}
      <div className="absolute -top-6 -right-6 h-[56vw] w-[56vw] max-h-[600px] max-w-[600px] -scale-x-100 opacity-[0.4]">
        <WebCorner className="web-sway h-full w-full" seedOffset={2} />
      </div>
    </div>
  );
}
