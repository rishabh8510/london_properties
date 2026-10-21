import Image from "next/image";

const HERO_IMAGE = "/images/hero.jpg";

export default function ContactHero() {
  return (
    <section className="relative isolate flex min-h-[320px] items-center overflow-hidden bg-white sm:min-h-[380px] lg:min-h-[440px]">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] lg:object-center"
      />

      {/* White fade from left so text stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/85 to-white/10 lg:via-white/70 lg:to-transparent"
      />

      {/* Soft fade at bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white/90 to-transparent"
      />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 lg:py-16">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#14213d] sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>
      </div>
    </section>
  );
}