"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Building2, SlidersHorizontal, Check, ChevronDown, X } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import CtaBanner from "@/components/CtaBanner";
import Button from "@/components/Button";
import type { Property } from "@/types/property";

type FilterCategory = "all" | "commercial" | "offices" | "rental";

interface FilterOption {
  id: FilterCategory;
  label: string;
}

const filterOptions: FilterOption[] = [
  { id: "all", label: "All Properties" },
  { id: "commercial", label: "Commercial" },
  { id: "offices", label: "Offices" },
  { id: "rental", label: "Rental" },
];

function propertyMatchesFilter(property: Property, filter: FilterCategory): boolean {
  if (filter === "all") return true;

  const cat = property.category.toLowerCase().trim();

  if (filter === "commercial") {
    return cat === "commercial";
  }

  if (filter === "offices") {
    return cat === "offices" || cat === "office";
  }

  if (filter === "rental") {
    return cat === "rental" || cat === "retail";
  }

  return true;
}

interface FilteredPropertiesViewProps {
  properties: Property[];
}

export default function FilteredPropertiesView({
  properties,
}: FilteredPropertiesViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read active filter directly from URL query param as single source of truth
  const param = (searchParams.get("filter") || searchParams.get("type") || "all").toLowerCase();
  const activeFilter: FilterCategory =
    param === "commercial"
      ? "commercial"
      : param === "offices" || param === "office"
      ? "offices"
      : param === "rental" || param === "retail"
      ? "rental"
      : "all";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click & escape key to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  // Compute counts for each filter option
  const counts = useMemo(() => {
    const map: Record<FilterCategory, number> = {
      all: properties.length,
      commercial: 0,
      offices: 0,
      rental: 0,
    };

    properties.forEach((p) => {
      if (propertyMatchesFilter(p, "commercial")) map.commercial++;
      if (propertyMatchesFilter(p, "offices")) map.offices++;
      if (propertyMatchesFilter(p, "rental")) map.rental++;
    });

    return map;
  }, [properties]);

  // Filtered list
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => propertyMatchesFilter(p, activeFilter));
  }, [properties, activeFilter]);

  const handleFilterChange = (filterId: FilterCategory) => {
    setIsDropdownOpen(false);
    if (filterId === "all") {
      router.replace("/properties", { scroll: false });
    } else {
      router.replace(`/properties?filter=${filterId}`, { scroll: false });
    }
  };

  const selectedOption = filterOptions.find((opt) => opt.id === activeFilter) || filterOptions[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#4a8c26]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#4a8c26]">
              Property Portfolio
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#14213d] sm:text-4xl lg:text-5xl">
            Commercial, Offices & Rental Properties in London
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore our curated portfolio of premium commercial facilities, executive offices, and high-visibility rental units across London.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Dropdown Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label
                  id="filter-dropdown-label"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  <SlidersHorizontal size={14} className="text-[#4a8c26]" />
                  Filter by Category:
                </label>

                <div ref={dropdownRef} className="relative inline-block w-full sm:w-auto">
                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    aria-labelledby="filter-dropdown-label"
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="flex w-full sm:w-72 items-center justify-between gap-3 rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#14213d] shadow-sm hover:border-[#4a8c26] focus:border-[#4a8c26] focus:outline-none focus:ring-2 focus:ring-[#4a8c26]/20 transition-all cursor-pointer"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="truncate">{selectedOption.label}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700">
                        {counts[selectedOption.id]}
                      </span>
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[#4a8c26]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div
                      role="listbox"
                      aria-labelledby="filter-dropdown-label"
                      className="absolute left-0 z-30 mt-1.5 w-full sm:w-72 rounded-sm border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                    >
                      {filterOptions.map((opt) => {
                        const isSelected = activeFilter === opt.id;
                        const count = counts[opt.id];

                        return (
                          <button
                            key={opt.id}
                            role="option"
                            type="button"
                            aria-selected={isSelected}
                            onClick={() => handleFilterChange(opt.id)}
                            className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-green-50 font-semibold text-[#14213d]"
                                : "text-slate-700 hover:bg-slate-50 hover:text-[#14213d]"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {isSelected ? (
                                <Check size={16} className="text-[#4a8c26] shrink-0" />
                              ) : (
                                <span className="w-4 shrink-0" />
                              )}
                              <span>{opt.label}</span>
                            </span>

                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                                isSelected
                                  ? "bg-[#4a8c26] text-white"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Quick reset tag if active filter is not 'all' */}
                {activeFilter !== "all" && (
                  <button
                    type="button"
                    onClick={() => handleFilterChange("all")}
                    className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <span>Reset filter</span>
                    <X size={13} className="text-slate-500" />
                  </button>
                )}
              </div>

              {/* Status info */}
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Showing <strong className="text-[#14213d] font-bold">{filteredProperties.length}</strong> {filteredProperties.length === 1 ? "property" : "properties"}
                {activeFilter !== "all" && (
                  <button
                    type="button"
                    onClick={() => handleFilterChange("all")}
                    className="ml-2 text-xs font-semibold text-[#4a8c26] underline underline-offset-2 hover:text-[#3d751f]"
                  >
                    Clear filter
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  basePath="/properties"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
              <Building2 size={40} className="mx-auto text-slate-300 mb-3" />
              <h2 className="text-lg font-bold text-[#14213d]">
                No properties found in this category
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                We currently don&apos;t have any listings matching this filter. Try selecting &apos;All Properties&apos; or contact our commercial team directly.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Button
                  name="View All Properties"
                  onClick={() => handleFilterChange("all")}
                  variant="fill"
                  size="md"
                />
                <Button
                  name="Contact Team"
                  url="/contact"
                  variant="not-fill"
                  size="md"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
