import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

interface CTAProps {
  title: string
  description?: string
  primaryAction: {
    text: string
    href?: string
    onClick?: () => void
    variant?: "default" | "outline" | "secondary"
    size?: "sm" | "default" | "lg"
  }
  secondaryAction?: {
    text: string
    href?: string
    onClick?: () => void
    variant?: "ghost" | "outline" | "link"
  }
  variant?: "default" | "gradient" | "glass"
  alignment?: "left" | "center"
  className?: string
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  alignment = "center",
  className
}: CTAProps) {
  const textAlign = alignment === "center" ? "text-center" : "text-left"
  const flexAlign = alignment === "center" ? "items-center" : "items-start"
  const justifyContent = alignment === "center" ? "justify-center" : "justify-start"

  const backgroundClass = {
    default: "bg-background",
    gradient: "gradient-primary text-white",
    glass: "glass"
  }[variant]

  return (
    <div className={cn(
      "rounded-xl p-8 lg:p-12",
      backgroundClass,
      className
    )}>
      <div className={cn(`flex flex-col ${flexAlign} space-y-6`, textAlign)}>
        <div className="space-y-2">
          <h3 className={cn(
            "text-2xl sm:text-3xl font-bold font-heading text-balance",
            variant === "gradient" ? "text-white" : "text-foreground"
          )}>
            {title}
          </h3>
          {description && (
            <p className={cn(
              "text-lg max-w-2xl text-balance leading-relaxed",
              variant === "gradient" ? "text-white/90" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
        </div>

        <div className={cn(`flex flex-col sm:flex-row gap-4 ${justifyContent}`)}>
          {primaryAction.href ? (
            <Button asChild variant={primaryAction.variant} size={primaryAction.size}>
              <a href={primaryAction.href} className="inline-flex items-center gap-2">
                {primaryAction.text}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          ) : (
            <Button 
              onClick={primaryAction.onClick}
              variant={primaryAction.variant}
              size={primaryAction.size}
              className="inline-flex items-center gap-2"
            >
              {primaryAction.text}
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}

          {secondaryAction && (
            <>
              {secondaryAction.href ? (
                <Button asChild variant={secondaryAction.variant || "ghost"}>
                  <a href={secondaryAction.href} className="inline-flex items-center gap-2">
                    {secondaryAction.text}
                    {secondaryAction.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </a>
                </Button>
              ) : (
                <Button 
                  onClick={secondaryAction.onClick}
                  variant={secondaryAction.variant || "ghost"}
                  className="inline-flex items-center gap-2"
                >
                  {secondaryAction.text}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
