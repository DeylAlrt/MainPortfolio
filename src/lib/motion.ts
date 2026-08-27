/** Deterministic pseudo-random in [-1, 1], stable across server/client renders. */
export function seededJitter(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
}
