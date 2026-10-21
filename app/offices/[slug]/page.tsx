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
      title: "Office Space Not Found | Hanif Properties London",
    };
  }

  return {
    title: `${property.title} | Office Space London`,
    description: property.description.slice(0, 160),
  };
}

export default async function OfficeDetailsPage({ params }: Props) {
  const { slug } = await params;
  const typedProperties = properties as Property[];
  const property = typedProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const officeProperties = typedProperties.filter(
    (p) =>
      p.category.toLowerCase().includes("office") ||
      p.suitableFor.toLowerCase().includes("office")
  );

  return (
    <PropertyDetailsView
      property={property}
      allProperties={officeProperties.length > 1 ? officeProperties : typedProperties}
      currentSection={{ name: "Offices", href: "/offices" }}
      backUrl="/offices"
      backLabel="Back to office listings"
    />
  );
}
