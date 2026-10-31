import type { Metadata } from "next";
import PropertyListingsPage from "@/components/properties/PropertyListingsPage";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Rental Properties & Retail Units in London | Hanif Properties",
  description:
    "Prime rental properties, retail units, high street shops, and commercial showrooms available across London. High footfall locations with versatile floor layouts.",
};

export default function RetailPage() {
  const rentalProperties = (properties as Property[]).filter(
    (p) =>
      p.category.toLowerCase().includes("rental") ||
      p.category.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("rental") ||
      p.suitableFor.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("showroom")
  );

  return (
    <PropertyListingsPage
      badge="Rental Portfolio"
      title="Rental Properties & Units in London"
      description="Explore prime rental properties, retail spaces, high-street units, and commercial showrooms located in thriving districts across London."
      properties={rentalProperties}
      basePath="/retail"
      emptyMessage="No rental units currently available. Please check back soon or contact our commercial team."
    />
  );
}
