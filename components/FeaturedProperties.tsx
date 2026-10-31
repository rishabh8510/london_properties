import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Ruler } from "lucide-react";
import Button from "@/components/Button";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

// Display only the top 3 properties in order of importance on the home page
const data = (properties as Property[]).slice(0, 3);

export default function FeaturedProperties() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl lg:text-[44px]">
            Featured Properties
          </h2>
          <Link
            href="/properties"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#4a8c26] underline underline-offset-4 hover:text-[#3d751f] sm:text-base"
          >
            View All Properties
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.map((property, index) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-sm bg-white shadow-[0_6px_30px_rgba(20,33,61,0.10)] transition-shadow hover:shadow-[0_10px_40px_rgba(20,33,61,0.16)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-[#14213d] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  {property.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-[#14213d] xl:text-[22px]">
                  {property.title}
                </h3>

                <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                  <li className="flex items-center gap-4">
                    <MapPin size={20} strokeWidth={1.5} className="shrink-0 text-[#14213d]" />
                    {property.location}
                  </li>
                  <li className="flex items-center gap-4">
                    <Ruler size={20} strokeWidth={1.5} className="shrink-0 text-[#14213d]" />
                    {property.size}
                  </li>
                  <li className="flex items-center gap-4">
                    <Building2 size={20} strokeWidth={1.5} className="shrink-0 text-[#14213d]" />
                    {property.suitableFor}
                  </li>
                </ul>

                <Button
                  name="View Details"
                  url={`/properties/${property.slug}`}
                  variant="not-fill"
                  size="sm"
                  className="mt-6"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}