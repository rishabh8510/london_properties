import type { Metadata } from "next";
import PropertyListingsPage from "@/components/properties/PropertyListingsPage";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Commercial Properties in London | Hanif Properties",
  description:
    "Explore our complete portfolio of commercial properties across London. Modern commercial units, workshops, and logistics warehouses.",
};

export default function CommercialPage() {
  const commercialProperties = (properties as Property[]).filter(
    (p) =>
      p.category.toLowerCase().includes("commercial") ||
      p.suitableFor.toLowerCase().includes("commercial")
  );

  return (
    <PropertyListingsPage
      badge="Commercial Portfolio"
      title="Commercial Properties in London"
      description="Explore our curated selection of high-specification commercial units, logistics warehouses, and versatile business parks across Greater London."
      properties={commercialProperties}
      basePath="/commercial"
      emptyMessage="No commercial spaces currently available. Please contact our commercial team."
    />
  );
}
