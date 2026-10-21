import Image from "next/image";
import Button from "@/components/Button";

// Image yaha rakho: public/images/cta-london.jpg
const CTA_IMAGE = "/images/cta-london.jpg";

export default function CtaBanner() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-sm bg-[#14213d] shadow-[0_10px_40px_rgba(20,33,61,0.18)]">
          {/* Background image (right side) */}
          <Image
            src={CTA_IMAGE}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-20 object-cover object-[75%_center]"
          />
          {/* Navy overlay: solid on the left, fading to the right */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14213d] via-[#14213d]/90 to-[#14213d]/40 md:via-[#14213d]/80 md:to-[#14213d]/20"
          />

          <div className="flex flex-col items-start gap-6 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-14 lg:py-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Looking for the right commercial space?
              </h2>
              <p className="mt-3 text-sm text-white/90 sm:text-base">
                Get in touch with our team to discuss your requirements.
              </p>
            </div>

            <Button
              name="Contact Us"
              url="/contact"
              variant="fill"
              size="lg"
              className="shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}