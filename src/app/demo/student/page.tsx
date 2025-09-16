import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  Plus,
  Share2,
  Download,
  Calendar,
  FileText,
  User
} from "lucide-react"

export const metadata: Metadata = {
  title: "Student Dashboard Demo - Portfolio Management",
  description: "Experience the student interface for managing achievements, building portfolios, and tracking validation status.",
}

const achievements = [
  {
    title: "Winner - National Hackathon 2024",
    category: "Technical Skills",
    date: "2024-03-15",
    status: "approved",
    institution: "TechFest IIT Bombay",
    description: "First place in AI/ML category with innovative healthcare solution"
  },
  {
    title: "Research Paper Publication",
    category: "Academic Excellence",
    date: "2024-02-20",
    status: "pending",
    institution: "IEEE Conference",
    description: "Published paper on Machine Learning applications in Healthcare"
  },
  {
    title: "Cultural Committee President",
    category: "Leadership & Co-curricular",
    date: "2023-08-01",
    status: "approved",
    institution: "College Student Council",
    description: "Led team of 50+ students, organized 15+ events"
  },
  {
    title: "NSS Volunteer - 120 Hours",
    category: "Social Service",
    date: "2023-12-15",
    status: "approved",
    institution: "NSS Unit",
    description: "Community service in rural education and healthcare"
  },
  {
    title: "Industry Internship",
    category: "Professional Experience",
    date: "2024-01-15",
    status: "pending",
    institution: "Tech Corp Pvt Ltd",
    description: "3-month internship in software development team"
  }
]

const stats = [
  { label: "Total Achievements", value: 47, icon: Award, color: "text-indigo-600" },
  { label: "Verified", value: 42, icon: CheckCircle, color: "text-teal-600" },
  { label: "Pending", value: 5, icon: Clock, color: "text-amber-600" },
  { label: "Categories", value: 8, icon: BookOpen, color: "text-purple-600" }
]

const recentActivity = [
  { action: "Achievement approved", item: "Cultural Committee President", time: "2 hours ago" },
  { action: "New achievement added", item: "Industry Internship", time: "1 day ago" },
  { action: "Portfolio shared", item: "With placement cell", time: "3 days ago" },
  { action: "Evidence uploaded", item: "Research Paper Publication", time: "1 week ago" }
]

export default function StudentDemoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-stone-50 dark:bg-stone-900">
        {/* Header */}
        <div className="bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
          <div className="container py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                  PS
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-heading">Priya Sharma</h1>
                  <p className="text-muted-foreground">Computer Science & Engineering, Final Year</p>
                  <Badge className="mt-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    Profile 94% Complete
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Portfolio
                </Button>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Achievement
                </Button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Profile Completion</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold font-heading">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Achievements List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>My Achievements</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="approved">Approved</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="draft">Draft</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="mt-6">
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="border border-stone-200 dark:border-stone-700 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg">{achievement.title}</h3>
                                <p className="text-sm text-muted-foreground">{achievement.institution}</p>
                              </div>
                              <Badge 
                                variant={achievement.status === "approved" ? "default" : "secondary"}
                                className="ml-4"
                              >
                                {achievement.status === "approved" ? (
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                ) : (
                                  <Clock className="w-3 h-3 mr-1" />
                                )}
                                {achievement.status}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-3">
                              {achievement.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <BookOpen className="w-3 h-3" />
                                  {achievement.category}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(achievement.date).toLocaleDateString()}
                                </span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <FileText className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground truncate">{activity.item}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Achievement
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share2 className="w-4 h-4 mr-2" />
                      Generate Portfolio Link
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Export to PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portfolio Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-20 bg-stone-100 dark:bg-stone-800 rounded-lg mx-auto flex items-center justify-center">
                      <FileText className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your portfolio is ready to share with recruiters and faculty.
                    </p>
                    <Button size="sm" className="w-full">
                      View Full Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
