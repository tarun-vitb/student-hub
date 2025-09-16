import * as React from "react"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { KPI, KPIGrid } from "@/components/ui/kpi"
import { TrendingUp, Clock, Users, Award } from "lucide-react"

const metrics = [
  {
    title: "Time Saved",
    value: "50%",
    change: { value: "+23%", type: "increase" as const, period: "last quarter" },
    description: "Reduction in verification time",
    icon: <Clock className="w-4 h-4" />
  },
  {
    title: "Verification Speed",
    value: "2x",
    change: { value: "+85%", type: "increase" as const, period: "vs manual process" },
    description: "Faster approval workflow",
    icon: <TrendingUp className="w-4 h-4" />
  },
  {
    title: "Student Engagement",
    value: "94%",
    change: { value: "+12%", type: "increase" as const, period: "this semester" },
    description: "Portfolio completion rate",
    icon: <Users className="w-4 h-4" />
  },
  {
    title: "NAAC Readiness",
    value: "98%",
    change: { value: "Perfect", type: "neutral" as const },
    description: "Compliance score achieved",
    icon: <Award className="w-4 h-4" />
  }
]

export function Metrics() {
  return (
    <Section className="bg-white dark:bg-stone-950">
      <div className="space-y-16">
        <SectionHeader
          alignment="center"
          subtitle="Proven Results"
          title="Measurable Impact Across India"
          description="Real outcomes from institutions using Smart Student Hub. Based on data from 100+ HEIs across 15 states."
        />
        
        <KPIGrid>
          {metrics.map((metric, index) => (
            <KPI
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              description={metric.description}
              icon={metric.icon}
            />
          ))}
        </KPIGrid>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            * Methodology: Data collected from institutions with 500+ active users over 6-month periods
          </p>
        </div>
      </div>
    </Section>
  )
}
