import type { Metadata } from "next";
import PropertyListingsPage from "@/components/properties/PropertyListingsPage";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Commercial Properties in London | Hanif Properties",
  description:
    "Explore our complete portfolio of commercial properties across London. Modern offices, retail shops, industrial warehouses, and investment units.",
};

export default function CommercialPage() {
  return (
    <PropertyListingsPage
      badge="Property Portfolio"
      title="Commercial Properties in London"
      description="Explore our curated selection of high-specification office spaces, retail units, and logistics warehouses across prime Greater London locations."
      properties={properties as Property[]}
      basePath="/commercial"
    />
  );
}
