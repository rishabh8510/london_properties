import { Suspense } from "react";
import type { Metadata } from "next";
import FilteredPropertiesView from "@/components/properties/FilteredPropertiesView";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Properties to Let & For Sale in London | Hanif Properties",
  description:
    "Explore our full portfolio of commercial properties across London. Filter by commercial spaces, office suites, and retail units.",
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 py-20 text-center">
          <div className="mx-auto max-w-7xl px-5">
            <p className="text-sm font-semibold text-slate-500">
              Loading properties...
            </p>
          </div>
        </div>
      }
    >
      <FilteredPropertiesView properties={properties as Property[]} />
    </Suspense>
  );
}
