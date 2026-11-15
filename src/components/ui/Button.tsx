import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none"

const variants = {
  primary:
    "bg-accent text-white hover:brightness-110 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_8px_30px_-8px_var(--color-accent)]",
  secondary: "bg-surface text-text border border-border hover:border-border-strong hover:bg-surface-hover",
  ghost: "text-text-muted hover:text-text hover:bg-surface",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6",
  lg: "h-12 px-7 text-base",
}

interface CommonProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children: ReactNode
  className?: string
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  )
}
