import Image from "next/image";

export default function SpideySense() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-16 left-1/2 z-20 w-[120%] max-w-none -translate-x-1/2 sm:-top-21"
    >
      <Image
        src="/images/spidey-sense.png"
        alt=""
        width={500}
        height={400}
        className="spidey-sense-img h-auto w-full"
      />
    </div>
  );
}
