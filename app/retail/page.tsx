import type { Metadata } from "next";
import PropertyListingsPage from "@/components/properties/PropertyListingsPage";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Retail Units & Shops to Let in London | Hanif Properties",
  description:
    "Prime retail units, high street shops, and commercial showrooms available across London. High footfall locations with versatile floor layouts.",
};

export default function RetailPage() {
  const retailProperties = (properties as Property[]).filter(
    (p) =>
      p.category.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("showroom")
  );

  return (
    <PropertyListingsPage
      badge="Retail Portfolio"
      title="Retail Units & Commercial Shops in London"
      description="Explore high-visibility retail units, high-street shops, and premium showroom spaces located in thriving commercial and shopping districts across London."
      properties={retailProperties}
      basePath="/retail"
      emptyMessage="No retail units currently available. Please check back soon or contact our commercial team."
    />
  );
}
