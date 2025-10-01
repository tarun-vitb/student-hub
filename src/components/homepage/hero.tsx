"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/ui/section-header"
import { ArrowRight, Play, Shield, Award, Users, BarChart } from "lucide-react"

const trustLogos = [
  { name: "IIT Delhi", logo: "/logos/iit-delhi.png" },
  { name: "BITS Pilani", logo: "/logos/bits-pilani.png" },
  { name: "NIT Trichy", logo: "/logos/nit-trichy.png" },
  { name: "VIT University", logo: "/logos/vit.png" },
  { name: "SRM University", logo: "/logos/srm.png" },
  { name: "Manipal University", logo: "/logos/manipal.png" },
]

export function Hero() {
  return (
    <Section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-stone-900 dark:to-stone-800">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                <Shield className="w-3 h-3 mr-1" />
                Trusted by 100+ HEIs
              </Badge>
              <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                NAAC Ready
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-balance leading-tight">
                Verify every achievement,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  build every future
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
                The only centralized platform Indian HEIs need to catalog, verify, and showcase every student achievement—from academics to leadership, with faculty validation and NAAC-ready analytics.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                Get a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Play className="w-5 h-5 mr-2" />
                Explore Product
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">
                Trusted by leading institutions across India
              </p>
              <div className="flex items-center gap-6 opacity-60">
                {trustLogos.slice(0, 4).map((logo) => (
                  <div key={logo.name} className="text-xs text-muted-foreground font-medium">
                    {logo.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Dashboard Preview */}
            <div className="relative rounded-2xl bg-white dark:bg-stone-900 shadow-2xl border border-stone-200/50 dark:border-stone-700/50 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Computer Science, Final Year</p>
                  </div>
                </div>
                <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                  98% Complete
                </Badge>
              </div>

              {/* Mock Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
                  <div className="text-2xl font-bold text-primary">47</div>
                  <div className="text-xs text-muted-foreground">Achievements</div>
                </div>
                <div className="text-center p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">12</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">8.9</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
              </div>

              {/* Mock Recent Activity */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Recent Validations</h4>
                {[
                  { title: "Hackathon Winner - TechFest 2024", status: "Approved", icon: Award },
                  { title: "Research Paper - IEEE Conference", status: "Pending", icon: BarChart },
                  { title: "Leadership Role - Cultural Committee", status: "Approved", icon: Users },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-stone-50 dark:bg-stone-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium truncate">{item.title}</span>
                    </div>
                    <Badge 
                      variant={item.status === "Approved" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center transform rotate-12 animate-pulse">
              <Shield className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center transform -rotate-12 animate-pulse">
              <BarChart className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
