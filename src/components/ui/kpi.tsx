import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KPIProps {
  title: string
  value: string | number
  change?: {
    value: string | number
    type: "increase" | "decrease" | "neutral"
    period?: string
  }
  description?: string
  icon?: React.ReactNode
  className?: string
}

export function KPI({ 
  title, 
  value, 
  change, 
  description, 
  icon,
  className 
}: KPIProps) {
  const changeColor = change?.type === "increase" 
    ? "text-teal-600 dark:text-teal-400" 
    : change?.type === "decrease" 
    ? "text-red-600 dark:text-red-400" 
    : "text-muted-foreground"

  return (
    <Card className={cn("glass", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-heading mb-1">
          {value}
        </div>
        {change && (
          <div className={cn("text-xs flex items-center gap-1", changeColor)}>
            <span>
              {change.type === "increase" && "↗"}
              {change.type === "decrease" && "↘"}
              {change.type === "neutral" && "→"}
            </span>
            <span>{change.value}</span>
            {change.period && (
              <span className="text-muted-foreground">
                from {change.period}
              </span>
            )}
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export function KPIGrid({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {children}
    </div>
  )
}
