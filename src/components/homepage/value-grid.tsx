import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, ChartBar as BarChart3, Zap, Users, FileCheck, Award, ArrowUpRight } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Verified Records",
    description: "Every achievement verified by faculty with timestamped approvals and digital signatures. Build trust through institutional validation.",
    features: ["Faculty approval workflow", "Digital certificates", "Audit trail"],
    badge: "Trust First"
  },
  {
    icon: BarChart3,
    title: "NAAC-Ready Analytics",
    description: "Pre-built dashboards and export formats aligned with NAAC criteria. Turn student data into accreditation evidence effortlessly.",
    features: ["NAAC criteria mapping", "One-click exports", "Compliance reports"],
    badge: "Accreditation"
  },
  {
    icon: Zap,
    title: "Seamless Integrations",
    description: "Connect with existing ERP systems, LMS platforms, and academic databases. Single sign-on and bulk data imports included.",
    features: ["ERP connectivity", "SSO support", "Bulk imports"],
    badge: "Integration"
  },
  {
    icon: Users,
    title: "Student-First UX",
    description: "Intuitive interface designed for Indian students. Mobile-first design with vernacular language support and offline capability.",
    features: ["Mobile optimized", "Multi-language", "Offline access"],
    badge: "Experience"
  }
]

export function ValueGrid() {
  return (
    <Section className="bg-white dark:bg-stone-950">
      <div className="space-y-16">
        <SectionHeader
          alignment="center"
          subtitle="Why Choose Us"
          title="Built for Indian Higher Education"
          description="Purpose-built features that address the unique challenges of Indian HEIs, from NAAC compliance to faculty workload management."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-stone-200/50 dark:border-stone-800/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                  >
                    {value.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
                
                <div className="space-y-2">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <FileCheck className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Value Proposition */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-stone-900 dark:to-stone-800 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Complete Solution
              </Badge>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold font-heading">
              From Student Portfolios to Institutional Analytics
            </h3>
            
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Replace fragmented systems with one unified platform. Students build portfolios, faculty validate achievements, and administrators get NAAC-ready insights—all in one secure, scalable solution.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>50% faster verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>2x compliance readiness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>90% faculty time saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
