import type { Metadata } from "next";
import PropertyListingsPage from "@/components/properties/PropertyListingsPage";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

export const metadata: Metadata = {
  title: "Office Spaces to Let in London | Hanif Properties",
  description:
    "Discover modern, flexible office spaces and business suites across prime London locations. High-speed connectivity, transport links, and flexible terms.",
};

export default function OfficesPage() {
  const officeProperties = (properties as Property[]).filter(
    (p) =>
      p.category.toLowerCase().includes("office") ||
      p.suitableFor.toLowerCase().includes("office")
  );

  return (
    <PropertyListingsPage
      badge="Offices Portfolio"
      title="Office Spaces in London"
      description="Discover our range of flexible office spaces, executive suites, and corporate headquarters tailored for growing teams and established businesses across London."
      properties={officeProperties}
      basePath="/offices"
      emptyMessage="No office spaces currently available. Please check back soon or contact our commercial team."
    />
  );
}
