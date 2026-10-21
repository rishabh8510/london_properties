import Image from "next/image";
import { Building2, MapPin, Ruler } from "lucide-react";
import Button from "@/components/Button";
import type { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
  basePath?: string;
}

export default function PropertyCard({
  property,
  basePath = "/commercial",
}: PropertyCardProps) {
  return (
    <article className="flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white shadow-[0_6px_30px_rgba(20,33,61,0.08)] hover:shadow-[0_12px_40px_rgba(20,33,61,0.14)] transition-all duration-300 border border-gray-200">
      {/* Image — Left (50%) */}
      <div className="relative w-full sm:w-1/2 shrink-0 aspect-[16/9] sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-gray-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-[#14213d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {property.category}
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-green-500/95 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
          {property.status}
        </span>
      </div>

      {/* Content — Right (50%) */}
      <div className="flex w-full sm:w-1/2 flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h2 className="text-base font-bold leading-snug text-[#14213d] sm:text-lg">
            {property.title}
          </h2>

          <ul className="mt-2 space-y-1.5 text-xs text-slate-600 sm:text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0 text-[#4a8c26]" />
              <span>{property.location}</span>
            </li>
            <li className="flex items-center gap-2">
              <Ruler size={14} className="shrink-0 text-[#4a8c26]" />
              <span>{property.size}</span>
            </li>
            <li className="flex items-center gap-2">
              <Building2 size={14} className="shrink-0 text-[#4a8c26]" />
              <span>{property.suitableFor}</span>
            </li>
          </ul>

          <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Rent: <span className="text-[#14213d] font-bold text-xs lowercase">{property.price}</span>
          </p>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <Button
            name="View Details"
            url={`${basePath}/${property.slug}`}
            variant="not-fill"
            size="md"
            fullWidth
          />
        </div>
      </div>
    </article>
  );
}
