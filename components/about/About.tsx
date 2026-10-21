import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us | Hanif Properties London",
  description:
    "Hanif Properties has been helping London businesses grow with short and long term commercial property solutions.",
};

const paragraphs = [
  "Hanif Properties has been helping London businesses grow for 20 years. We welcome small and growing companies and offer short and long term solutions for your future plans. We are looking for similar buildings directly and through agents, get in touch now.",
  "With more than 25 years’ experience embedded within this dynamic industry, Hanif Properties has built up a solid name in the commercial property market. Not only have we earned a renowned reputation for our professional insights and expertise, but our long-standing engagement within the industry has allowed us to develop an expansive network of contacts throughout the UK and beyond.",
  "As proud as we are of our past achievements, we’re also heavily invested in evolving our business services to meet emerging and future trends in the market. Recently, we expanded the group to include several large industrial buildings in Belvedere Industrial Estate. 2 large units totalling 125,000 sq. ft were secured on a long lease at a low rent.",
  "The units were refurbished and split into smaller units, suitable for smaller businesses at a substantially higher rent. The group portfolio includes several industrial buildings let out in the same way and over 25 residential apartments, all in the Greater London area.",
  "We are a family company and run our business and try to help smaller new start up business and have seen many of these small businesses have grown into large enterprises. Our plans are to acquire more industrial properties and convert them into business centres for small to medium size businesses.",
];

export default function About() {
  return (
    <main className="bg-white">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#4a8c26]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#4a8c26]">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#14213d] sm:text-4xl lg:text-5xl">
            About Hanif Properties London
          </h1>

          {/* Paragraphs */}
          <div className="mt-8 space-y-6 border-l-4 border-[#4a8c26]/30 pl-5 sm:mt-10 sm:space-y-7 sm:pl-8">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button
              name="Contact Our Team"
              url="/contact"
              variant="fill"
              size="lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}