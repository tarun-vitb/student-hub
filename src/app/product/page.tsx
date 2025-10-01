import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/ui/cta"
import { GraduationCap, Shield, ChartBar as BarChart3, Zap, CircleCheck as CheckCircle, ArrowRight, Award, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Product Overview - Complete Student Achievement Platform",
  description: "Explore Smart Student Hub's comprehensive features for managing, verifying, and showcasing student achievements with NAAC-ready analytics.",
}

const features = [
  {
    icon: GraduationCap,
    title: "Student Portfolio Builder",
    description: "Intuitive interface for students to catalog all achievements",
    details: [
      "One-click achievement upload",
      "Smart categorization engine", 
      "Evidence attachment system",
      "Progress tracking dashboard"
    ]
  },
  {
    icon: Shield,
    title: "Faculty Verification System", 
    description: "Streamlined workflow for institutional validation",
    details: [
      "Queue-based approval system",
      "Bulk validation capabilities",
      "Evidence review tools",
      "Digital signature integration"
    ]
  },
  {
    icon: BarChart3,
    title: "Admin Analytics Hub",
    description: "NAAC-ready insights and compliance reporting",
    details: [
      "Real-time dashboards",
      "NAAC criteria mapping",
      "Automated report generation",
      "Data export capabilities"
    ]
  },
  {
    icon: Database,
    title: "Centralized Data Management",
    description: "Unified repository for all student achievements",
    details: [
      "Secure cloud storage",
      "Advanced search capabilities",
      "Bulk import/export",
      "Data integrity assurance"
    ]
  }
]

const integrations = [
  { name: "ERP Systems", description: "Connect with existing campus management" },
  { name: "Learning Management Systems", description: "Sync with Moodle, Canvas, and others" },
  { name: "Single Sign-On", description: "LDAP, Active Directory, SAML" },
  { name: "Academic Databases", description: "Import from registrar systems" }
]

export default async function ProductPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <Section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-stone-900 dark:to-stone-800">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Complete Platform Overview
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-balance">
              Every Feature Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Indian Higher Education
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground text-balance max-w-4xl mx-auto leading-relaxed">
              From student portfolio creation to institutional analytics, discover how Smart Student Hub addresses every aspect of achievement management and NAAC compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Section>

        {/* Core Features */}
        <Section className="bg-white dark:bg-stone-950">
          <div className="space-y-16">
            <SectionHeader
              alignment="center"
              subtitle="Core Features"
              title="Everything You Need in One Platform"
              description="Comprehensive tools designed specifically for the challenges faced by Indian HEIs in managing student achievements and ensuring accreditation compliance."
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Integration Section */}
        <Section className="bg-stone-50 dark:bg-stone-900">
          <div className="space-y-16">
            <SectionHeader
              alignment="center"
              subtitle="Seamless Integration"
              title="Works with Your Existing Systems"
              description="Connect Smart Student Hub with your current infrastructure for a unified experience."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="text-center glass">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900">
                      <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Security & Compliance */}
        <Section className="bg-white dark:bg-stone-950">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeader
                subtitle="Security & Compliance"
                title="Built for Institutional Trust"
                description="Enterprise-grade security with compliance standards that meet Indian regulatory requirements."
              />
              
              <div className="space-y-4">
                {[
                  "ISO 27001 certified data centers",
                  "End-to-end encryption",
                  "Role-based access controls", 
                  "GDPR and data localization compliant",
                  "Regular security audits",
                  "99.9% uptime guarantee"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="glass p-8">
                <div className="space-y-6 text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-teal-100 dark:bg-teal-900">
                    <Award className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading mb-2">99.9%</h3>
                    <p className="text-muted-foreground">Uptime Guarantee</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">256-bit</div>
                      <div className="text-xs text-muted-foreground">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">ISO 27001</div>
                      <div className="text-xs text-muted-foreground">Certified</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-blue-600 to-teal-600">
          <CTA
            variant="gradient"
            title="Ready to Transform Your Institution?"
            description="Join 100+ HEIs across India that are already using Smart Student Hub to streamline achievements and ensure NAAC readiness."
            primaryAction={{
              text: "Start Your Free Trial",
              href: "/signup"
            }}
            secondaryAction={{
              text: "Schedule a Demo",
              href: "/demo"
            }}
          />
        </Section>
      </main>
      <Footer />
    </>
  )
}
