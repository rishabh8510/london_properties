import Image from "next/image";
import { MapPin, Building2, ShieldCheck } from "lucide-react";
import Button from "@/components/Button";

const HERO_IMAGE = "/images/hero.jpg";

const features = [
  { icon: MapPin, title: "Prime Locations", text: "Across London" },
  { icon: Building2, title: "All Property Types", text: "Offices, Retail, Industrial" },
  { icon: ShieldCheck, title: "Trusted Partner", text: "25+ Years Experience" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
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
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white/90 to-transparent"
      />

      {/* Full-height flex container, centered */}
      <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col items-center justify-center px-5 py-16 sm:px-8 lg:min-h-[760px] lg:py-24">
        {/* Inner block: max-w-7xl, centered, content left-aligned */}
        <div className="flex w-full max-w-7xl flex-col items-start">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#14213d] sm:text-5xl lg:text-6xl">
            Commercial Property <br />Solutions in{" "}
            <span className="text-[#4a8c26]">London</span>
          </h1>

          <p className="mt-7 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Flexible short and long term commercial property solutions for
            businesses of all sizes. Offices, retail units, industrial spaces
            and investment opportunities across prime London locations.
          </p>

          <div className="mt-9">
            <Button
              name="View Properties"
              url="/commercial"
              variant="fill"
              size="lg"
            />
          </div>

          {/* Features row — full 7xl width, left-aligned */}
          <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
            {features.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`flex items-center gap-4 ${
                  i !== 0 ? "sm:border-l sm:border-gray-300 sm:pl-8" : ""
                } ${i !== features.length - 1 ? "sm:pr-8" : ""}`}
              >
                <Icon size={38} strokeWidth={1.5} className="shrink-0 text-[#14213d]" />
                <div className="text-left">
                  <p className="text-base font-bold text-[#14213d]">{title}</p>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}