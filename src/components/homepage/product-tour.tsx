"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { 
  GraduationCap, 
  Shield, 
  Play,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const workflows = [
  {
    id: "student",
    label: "Student Experience",
    icon: GraduationCap,
    description: "Intuitive portfolio building with smart categorization",
    features: [
      "One-click achievement upload",
      "Auto-categorization by type",
      "Portfolio preview & sharing",
      "Progress tracking"
    ],
    mockup: {
      title: "Add New Achievement",
      content: [
        { label: "Category", value: "Leadership & Co-curricular" },
        { label: "Title", value: "Cultural Committee President" },
        { label: "Duration", value: "Aug 2023 - Present" },
        { label: "Status", value: "Pending Approval", badge: "warning" }
      ]
    }
  },
  {
    id: "faculty",
    label: "Faculty Validation",
    icon: Shield,
    description: "Streamlined approval workflow with batch processing",
    features: [
      "Queue-based approvals",
      "Bulk validation options",
      "Evidence review tools",
      "Approval history"
    ],
    mockup: {
      title: "Pending Approvals Queue",
      content: [
        { label: "Priya Sharma", value: "Hackathon Winner Certificate", badge: "new" },
        { label: "Rahul Kumar", value: "Research Paper Publication", badge: "review" },
        { label: "Anita Singh", value: "NSS Volunteer Certificate", badge: "approved" }
      ]
    }
  },
  {
    id: "admin",
    label: "Admin Analytics",
    icon: BarChart3,
    description: "NAAC-ready insights with automated reporting",
    features: [
      "Real-time dashboards",
      "NAAC criteria mapping",
      "Export to multiple formats",
      "Compliance tracking"
    ],
    mockup: {
      title: "Department Overview",
      content: [
        { label: "Total Students", value: "1,247", badge: "metric" },
        { label: "Verified Achievements", value: "8,934", badge: "metric" },
        { label: "NAAC Compliance", value: "94%", badge: "success" },
        { label: "Pending Reviews", value: "23", badge: "warning" }
      ]
    }
  }
]

export function ProductTour() {
  const [activeTab, setActiveTab] = React.useState("student")

  return (
    <Section className="bg-stone-50 dark:bg-stone-900">
      <div className="space-y-16">
        <SectionHeader
          alignment="center"
          subtitle="Interactive Demo"
          title="See How It Works"
          description="Explore the complete workflow from student portfolio creation to institutional analytics, designed for the Indian higher education ecosystem."
        />
        
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {workflows.map((workflow) => (
                <TabsTrigger 
                  key={workflow.id}
                  value={workflow.id}
                  className="flex items-center gap-2 px-6 py-3 text-sm"
                >
                  <workflow.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{workflow.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {workflows.map((workflow) => (
              <TabsContent key={workflow.id} value={workflow.id} className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary">
                      <workflow.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">{workflow.label}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {workflow.description}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Features List */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold">Key Features</h4>
                    <div className="space-y-4">
                      {workflow.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900">
                            <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full sm:w-auto">
                        <Play className="w-4 h-4 mr-2" />
                        Try Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="relative">
                    <Card className="glass shadow-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h5 className="font-semibold text-lg">{workflow.mockup.title}</h5>
                          <Badge variant="outline" className="text-xs">
                            Live Preview
                          </Badge>
                        </div>
                        
                        <div className="space-y-4">
                          {workflow.mockup.content.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
                              <span className="text-sm font-medium text-muted-foreground">
                                {item.label}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">
                                  {item.value}
                                </span>
                                {item.badge && (
                                  <Badge 
                                    variant={
                                      item.badge === "success" ? "default" : 
                                      item.badge === "warning" ? "secondary" :
                                      item.badge === "new" ? "default" : "outline"
                                    }
                                    className="text-xs"
                                  >
                                    {item.badge === "new" && <Clock className="w-3 h-3 mr-1" />}
                                    {item.badge === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
                                    {item.badge === "warning" && <AlertCircle className="w-3 h-3 mr-1" />}
                                    {item.badge === "success" && "✓"}
                                    {item.badge === "metric" && "📊"}
                                    {item.badge === "review" && "👀"}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Floating indicator */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-teal-500 rounded-full animate-pulse flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Section>
  )
}
