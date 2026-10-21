"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Commercial", href: "/commercial" },
  { name: "Offices", href: "/offices" },
  { name: "Retail", href: "/retail" },
  { name: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Icon: grey ring + green "H" (pure Tailwind) */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[5px] border-gray-300">
        <span className="relative block h-5 w-5">
          <span className="absolute left-0 top-0 h-full w-[5px] rounded-sm bg-[#5aa02c]" />
          <span className="absolute right-0 top-0 h-full w-[5px] rounded-sm bg-[#5aa02c]" />
          <span className="absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 bg-[#4a8c26]" />
        </span>
      </span>
      <span className="text-lg font-bold tracking-tight text-[#14213d] sm:text-xl">
        Hanif Properties London
      </span>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Logo */}
        <div className="lg:justify-self-start">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-6 text-[15px] transition-colors ${
                  active
                    ? "font-semibold text-[#14213d]"
                    : "font-medium text-gray-600 hover:text-[#4a8c26]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-[1px] left-1/2 h-[3px] w-[calc(100%+16px)] -translate-x-1/2 rounded-full bg-[#4a8c26]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block lg:justify-self-end">
          <Button
            name="Contact Us"
            url="/contact"
            variant="fill"
            size="md"
          />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#14213d] hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-3 font-medium ${
                  active
                    ? "bg-green-50 text-[#4a8c26]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#4a8c26]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-3">
            <Button
              name="Contact Us"
              url="/contact"
              variant="fill"
              fullWidth
              onClick={() => setIsOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  );
}