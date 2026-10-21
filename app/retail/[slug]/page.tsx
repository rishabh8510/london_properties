import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PropertyDetailsView from "@/components/properties/PropertyDetailsView";
import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (properties as Property[]).map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = (properties as Property[]).find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Retail Property Not Found | Hanif Properties London",
    };
  }

  return {
    title: `${property.title} | Retail Space London`,
    description: property.description.slice(0, 160),
  };
}

export default async function RetailDetailsPage({ params }: Props) {
  const { slug } = await params;
  const typedProperties = properties as Property[];
  const property = typedProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const retailProperties = typedProperties.filter(
    (p) =>
      p.category.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("retail") ||
      p.suitableFor.toLowerCase().includes("showroom")
  );

  return (
    <PropertyDetailsView
      property={property}
      allProperties={retailProperties.length > 1 ? retailProperties : typedProperties}
      currentSection={{ name: "Retail", href: "/retail" }}
      backUrl="/retail"
      backLabel="Back to retail listings"
    />
  );
}
