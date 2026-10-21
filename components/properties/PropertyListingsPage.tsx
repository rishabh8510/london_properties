import PropertyCard from "@/components/properties/PropertyCard";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import type { Property } from "@/types/property";

interface PropertyListingsPageProps {
  badge?: string;
  title: string;
  description: string;
  properties: Property[];
  basePath?: string;
  emptyMessage?: string;
}

export default function PropertyListingsPage({
  badge = "Property Portfolio",
  title,
  description,
  properties,
  basePath = "/commercial",
  emptyMessage = "No properties found in this category at present. Please check back soon or get in touch with our team.",
}: PropertyListingsPageProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#4a8c26]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#4a8c26]">
              {badge}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#14213d] sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </section>

      {/* Grid of properties */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  basePath={basePath}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center">
              <p className="text-slate-600 max-w-md mx-auto">{emptyMessage}</p>
              <div className="mt-6 flex justify-center gap-4">
                <Button
                  name="View All Commercial"
                  url="/commercial"
                  variant="fill"
                  size="md"
                />
                <Button
                  name="Contact Team"
                  url="/contact"
                  variant="not-fill"
                  size="md"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
