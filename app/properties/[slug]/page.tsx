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
      title: "Property Not Found | Hanif Properties London",
    };
  }

  return {
    title: `${property.title} | Hanif Properties London`,
    description: property.description.slice(0, 160),
  };
}

export default async function PropertyDetailsPage({ params }: Props) {
  const { slug } = await params;
  const typedProperties = properties as Property[];
  const property = typedProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <PropertyDetailsView
      property={property}
      allProperties={typedProperties}
      currentSection={{ name: "Properties", href: "/properties" }}
      backUrl="/properties"
      backLabel="Back to properties"
    />
  );
}
