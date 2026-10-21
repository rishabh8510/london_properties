import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";


export type ButtonVariant = "fill" | "not-fill" | "gradient";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button text or display label (can also pass children) */
  name?: string;
  /** Navigation target URL (if provided, renders as Next.js Link) */
  url?: string;
  href?: string;
  /** Visual variant: 'fill' | 'not-fill' | 'gradient' */
  variant?: ButtonVariant;
  /** Size: 'sm' | 'md' | 'lg' */
  size?: ButtonSize;
  /** Show default arrow icon or provide custom icon */
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  /** Full width button */
  fullWidth?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  name,
  children,
  url,
  href,
  variant = "fill",
  size = "md",
  showIcon = true,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
  ...props
}: ButtonProps) {
  const linkHref = url || href;
  const content = name || children;

  // Variant styling
  const variantStyles: Record<ButtonVariant, string> = {
    fill: "bg-[#4a8c26] text-white hover:bg-[#3d751f] shadow-sm hover:shadow",
    "not-fill":
      "border-2 border-[#4a8c26] text-[#4a8c26] bg-transparent hover:bg-[#4a8c26] hover:text-white",
    gradient:
      "bg-gradient-to-r from-[#4a8c26] via-[#5aa02c] to-[#3d751f] text-white shadow-md hover:shadow-lg hover:brightness-105",
  };

  // Size styling
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm gap-2 rounded-sm",
    md: "px-6 py-3 text-[15px] gap-2.5 rounded-sm",
    lg: "px-8 py-3 text-base gap-3 rounded-sm",
  };

  // Default icon size
  const iconSize = size === "sm" ? 15 : size === "lg" ? 20 : 18;
  const renderedIcon =
    icon !== undefined ? (
      icon
    ) : showIcon ? (
      <ArrowUpRight
        size={iconSize}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    ) : null;

  const baseStyles =
    "group inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`.trim();

  const innerContent = (
    <>
      {iconPosition === "left" && renderedIcon}
      <span>{content}</span>
      {iconPosition === "right" && renderedIcon}
    </>
  );

  // If URL/href is provided, render as Next.js Link
  if (linkHref) {
    return (
      <Link
        href={linkHref}
        className={combinedClasses}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
      >
        {innerContent}
      </Link>
    );
  }

  // Otherwise render standard HTML button
  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {innerContent}
    </button>
  );
}
