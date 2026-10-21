import Image from "next/image";
import { Building2, Handshake, Users } from "lucide-react";
import Button from "@/components/Button";

// Image yaha rakho: public/images/about.jpg
const ABOUT_IMAGE = "/images/about.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Advice",
    text: "Market insights and guidance",
  },
  {
    icon: Building2,
    title: "Wide Portfolio",
    text: "Offices, retail, industrial and more",
  },
  {
    icon: Handshake,
    title: "Client Focused",
    text: "Tailored solutions for your business",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative">
          {/* Decorative soft-blue shape behind the image */}
          <div
            aria-hidden="true"
            className="absolute -right-3 top-8 hidden h-[85%] w-full rounded-sm bg-sky-100/70 sm:block lg:-right-5"
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_10px_40px_rgba(20,33,61,0.12)]">
            <Image
              src={ABOUT_IMAGE}
              alt="Commercial building in London"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#4a8c26]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#4a8c26]">
              About Us
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#14213d] sm:text-4xl lg:text-[44px]">
            Your Trusted Partner for Commercial Property
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Hanif Properties London specialises in commercial property lettings
            and sales across London. With over 25 years of experience, we
            provide flexible solutions for businesses of all sizes, from
            start-ups to established companies.
          </p>

          {/* Features */}
          <div className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-0">
            {features.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`${
                  i !== 0 ? "sm:border-l sm:border-gray-200 sm:pl-6" : ""
                } ${i !== features.length - 1 ? "sm:pr-6" : ""}`}
              >
                <Icon size={38} strokeWidth={1.5} className="text-[#4a8c26]" />
                <h3 className="mt-4 text-base font-bold text-[#14213d]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Button
              name="Learn More"
              url="/about"
              variant="fill"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}