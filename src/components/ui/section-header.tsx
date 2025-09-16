import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: {
    text: string
    variant?: "default" | "secondary" | "outline"
  }
  alignment?: "left" | "center"
  className?: string
  children?: React.ReactNode
}

export function SectionHeader({
  title,
  subtitle,
  description,
  badge,
  alignment = "left",
  className,
  children
}: SectionHeaderProps) {
  const textAlign = alignment === "center" ? "text-center" : "text-left"
  const flexAlign = alignment === "center" ? "items-center" : "items-start"

  return (
    <div className={cn(`flex flex-col ${flexAlign} space-y-4`, className)}>
      <div className={cn("space-y-2", textAlign)}>
        {badge && (
          <div className="inline-flex">
            <span className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
              badge.variant === "outline" 
                ? "border border-border text-muted-foreground" 
                : badge.variant === "secondary"
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            )}>
              {badge.text}
            </span>
          </div>
        )}
        
        {subtitle && (
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            {subtitle}
          </p>
        )}
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-balance leading-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl text-balance leading-relaxed">
            {description}
          </p>
        )}
      </div>
      
      {children}
    </div>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className={cn("container", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
