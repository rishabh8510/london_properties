import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Commercial", href: "/commercial" },
  { name: "Offices", href: "/offices" },
  { name: "Retail", href: "/retail" },
  { name: "Contact", href: "/contact" },
];

const propertyTypes = [
  { name: "Office Spaces", href: "/offices" },
  { name: "Retail Units", href: "/retail" },
  { name: "Industrial Spaces", href: "/commercial?type=industrial" },
  { name: "Investment Opportunities", href: "/commercial?type=investment" },
];

const contactInfo = [
  { icon: MapPin, text: "London, United Kingdom", href: undefined },
  { icon: Phone, text: "+44 020 3633 8802", href: "tel:+44020 3633 8802" },
  { icon: Mail, text: "info@hanifproperties.co.uk", href: "mailto:info@hanifproperties.co.uk" },
  { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM", href: undefined },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Sitemap", href: "/sitemap" },
];

/* Social icons (inline SVG, pure Tailwind) */
const svgProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const socials: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg {...svgProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg {...svgProps}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg {...svgProps}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[5px] border-gray-300">
        <span className="relative block h-5 w-5">
          <span className="absolute left-0 top-0 h-full w-[5px] rounded-sm bg-[#5aa02c]" />
          <span className="absolute right-0 top-0 h-full w-[5px] rounded-sm bg-[#5aa02c]" />
          <span className="absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 bg-[#4a8c26]" />
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-[#14213d] sm:text-xl">
          Hanif Properties London
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[11px]">
          Commercial Property Solutions
        </span>
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 sm:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-slate-500">
              Your trusted partner for commercial property across London.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#14213d] shadow-[0_2px_10px_rgba(20,33,61,0.10)] transition-colors hover:bg-[#4a8c26] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-bold text-[#14213d]">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-slate-500 transition-colors hover:text-[#4a8c26]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property types */}
          <div>
            <h2 className="text-base font-bold text-[#14213d]">Property Types</h2>
            <ul className="mt-5 space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-slate-500 transition-colors hover:text-[#4a8c26]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-bold text-[#14213d]">Contact Information</h2>
            <ul className="mt-5 space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-4">
                  <Icon size={20} strokeWidth={1.75} className="shrink-0 text-[#14213d]" />
                  {href ? (
                    <a
                      href={href}
                      className="break-all text-[15px] text-slate-500 transition-colors hover:text-[#4a8c26]"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[15px] text-slate-500">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Hanif Properties London. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-y-2">
            {legalLinks.map((link, i) => (
              <li
                key={link.name}
                className={i !== 0 ? "ml-4 border-l border-gray-300 pl-4" : ""}
              >
                <Link href={link.href} className="transition-colors hover:text-[#4a8c26]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}