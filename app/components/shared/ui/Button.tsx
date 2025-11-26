"use client";

import { ButtonHTMLAttributes } from "react";

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "subtle";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes: Record<ButtonSize, string> = {
    xs: "h-8 px-3 text-xs",
    sm: "h-9 px-3.5 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-sm",
    xl: "h-12 px-6 text-base",
  };

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-white text-black hover:bg-neutral-200",
    secondary:
      "bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800",
    ghost: "text-neutral-50 hover:bg-neutral-900/60",
    subtle:
      "bg-neutral-900/60 text-neutral-50 border border-neutral-800 hover:bg-neutral-900",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      {...props}
      className={classNames(
        base,
        sizes[size],
        variants[variant],
        widthClass,
        className
      )}
    >
      {children}
    </button>
  );
}

/**
 * Examples:
 *
 * <Button>Jetzt starten</Button>
 * <Button variant="secondary" size="sm">Mehr erfahren</Button>
 * <Button variant="ghost" size="md">Demo ansehen</Button>
 * <Button variant="primary" size="lg" fullWidth>Jetzt kostenlos testen</Button>
 */
