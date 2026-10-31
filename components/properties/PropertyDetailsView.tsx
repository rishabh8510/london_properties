import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/Button";
import type { Property } from "@/types/property";

interface PropertyDetailsViewProps {
  property: Property;
  allProperties?: Property[];
  currentSection?: {
    name: string;
    href: string;
  };
  backUrl?: string;
  backLabel?: string;
}

export default function PropertyDetailsView({
  property,
  allProperties = [],
  currentSection = { name: "Commercial", href: "/commercial" },
  backUrl,
  backLabel = "Back to listings",
}: PropertyDetailsViewProps) {
  const returnUrl = backUrl || currentSection.href;
  const otherProperties = allProperties.filter((p) => p.id !== property.id);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 overflow-x-auto"
          >
            <Link href="/" className="hover:text-[#4a8c26] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={currentSection.href}
              className="hover:text-[#4a8c26] transition-colors"
            >
              {currentSection.name}
            </Link>
            <span>/</span>
            <span className="text-[#14213d] font-semibold truncate max-w-[200px] sm:max-w-none">
              {property.title}
            </span>
          </nav>

          <Link
            href={returnUrl}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4a8c26] hover:text-[#3d751f] transition-colors"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="rounded-sm bg-[#14213d] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {property.category}
                </span>
                <span className="rounded-sm bg-green-50 border border-green-200 px-3 py-1 text-xs font-bold text-[#4a8c26]">
                  {property.status}
                </span>
                <span className="rounded-sm bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  EPC: {property.epc}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#14213d] sm:text-4xl lg:text-5xl">
                {property.title}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-sm sm:text-base text-slate-600">
                <MapPin size={18} className="shrink-0 text-[#4a8c26]" />
                {property.address}
              </p>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
              <span className="text-xs uppercase font-semibold text-slate-400">
                Guide Rent / Price
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#14213d]">
                {property.price}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {property.tenure}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* Left Column: Details, Specifications, Amenities */}
          <div className="space-y-10">
            {/* Primary Property Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-gray-100 shadow-[0_8px_30px_rgba(20,33,61,0.08)] border border-gray-200">
              <Image
                src={property.image}
                alt={property.title}
                fill
                priority
                sizes="(min-width: 1280px) 800px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Quick Highlights Row */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {property.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-sm bg-white p-4 sm:p-5 shadow-sm border border-gray-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-bold text-[#14213d]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Description Section */}
            <section className="rounded-sm bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-6 rounded-full bg-[#4a8c26]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#14213d]">
                  Property Overview
                </h2>
              </div>
              <p className="text-base leading-8 text-slate-700 whitespace-pre-line">
                {property.description}
              </p>
            </section>

            {/* Key Features & Amenities */}
            {property.features && property.features.length > 0 && (
              <section className="rounded-sm bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-1.5 w-6 rounded-full bg-[#4a8c26]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#14213d]">
                    Key Features & Amenities
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {property.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg bg-slate-50 p-3.5 border border-slate-100"
                    >
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-[#4a8c26] mt-0.5"
                      />
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Specifications Summary Table */}
            <section className="rounded-sm bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-6 rounded-full bg-[#4a8c26]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#14213d]">
                  Property Specification Summary
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Property ID</span>
                  <span className="font-semibold text-[#14213d]">
                    HP-LON-{String(property.id).padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Category</span>
                  <span className="font-semibold text-[#14213d]">
                    {property.category}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Available Size</span>
                  <span className="font-semibold text-[#14213d]">
                    {property.size}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Suitable Use</span>
                  <span className="font-semibold text-[#14213d]">
                    {property.suitableFor}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Tenure</span>
                  <span className="font-semibold text-[#14213d]">
                    {property.tenure}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">
                    Energy Performance Certificate
                  </span>
                  <span className="font-semibold text-[#14213d]">
                    Band {property.epc}
                  </span>
                </div>
                <div className="flex justify-between py-3.5 text-sm">
                  <span className="font-medium text-slate-500">Status</span>
                  <span className="font-semibold text-emerald-700">
                    {property.status}
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar / Enquiry Card */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Enquiry Card */}
              <div className="rounded-sm bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(20,33,61,0.08)] border border-gray-200">
                <span className="inline-block rounded-sm bg-green-50 px-3 py-1 text-xs font-bold text-[#4a8c26] mb-3">
                  Direct Agent Listing
                </span>
                <h3 className="text-xl font-bold text-[#14213d]">
                  Interested in this property?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Speak directly with our London commercial team to arrange a viewing, request floor plans, or discuss terms.
                </p>

                <div className="mt-6 space-y-3">
                  <Button
                    name="Book a Viewing"
                    url={`/contact?property=${encodeURIComponent(property.title)}`}
                    variant="fill"
                    size="lg"
                    fullWidth
                  />

                  <Button
                    name="Call Agent: +44 20 1234 5678"
                    url="tel:+442012345678"
                    variant="not-fill"
                    size="md"
                    fullWidth
                    icon={<Phone size={16} />}
                  />
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5 space-y-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#4a8c26]" />
                    <span>Verified Commercial Listing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#4a8c26]" />
                    <span>Fast Response within 24 Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#4a8c26]" />
                    <span>Full Lease Pack Available</span>
                  </div>
                </div>
              </div>

              {/* Location Highlights Card */}
              <div className="rounded-sm bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-base font-bold text-[#14213d] flex items-center gap-2 mb-3">
                  <Compass size={18} className="text-[#4a8c26]" />
                  Location & Connectivity
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {property.address}. Strategically situated close to key transport links, retail amenities, and arterial highways for rapid London logistics.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Other Properties Section */}
        {otherProperties.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-gray-200">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#4a8c26]">
                  More Spaces
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#14213d] mt-1">
                  Explore Other Available Properties
                </h3>
              </div>
              <Link
                href={currentSection.href}
                className="text-sm font-semibold text-[#4a8c26] hover:text-[#3d751f] underline underline-offset-4"
              >
                View all {currentSection.name.toLowerCase()} listings
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherProperties.slice(0, 2).map((other) => (
                <article
                  key={other.id}
                  className="flex flex-col sm:flex-row overflow-hidden rounded-sm bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 overflow-hidden bg-gray-100">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(min-width: 640px) 240px, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded bg-[#14213d] px-2.5 py-1 text-[11px] font-bold uppercase text-white">
                      {other.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <h4 className="text-lg font-bold text-[#14213d]">
                        {other.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#4a8c26]" />
                        {other.location}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 flex items-center gap-1.5">
                        <Ruler size={14} className="text-[#4a8c26]" />
                        {other.size}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Button
                        name="View Space"
                        url={`${currentSection.href}/${other.slug}`}
                        variant="not-fill"
                        size="sm"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
