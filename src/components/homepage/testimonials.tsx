import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Dean of Student Affairs",
    institution: "NIT Trichy",
    quote: "Smart Student Hub transformed our accreditation process. What used to take weeks now happens in days, with complete transparency.",
    rating: 5
  },
  {
    name: "Prof. Meera Sharma",
    role: "Faculty Coordinator",
    institution: "BITS Pilani",
    quote: "The faculty validation workflow is incredibly intuitive. We can approve hundreds of achievements in minutes, not hours.",
    rating: 5
  },
  {
    name: "Dr. Anand Joshi",
    role: "Registrar",
    institution: "VIT University",
    quote: "NAAC compliance became effortless. The automated reports saved us countless hours during our accreditation review.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <Section className="bg-stone-50 dark:bg-stone-900">
      <div className="space-y-16">
        <SectionHeader
          alignment="center"
          subtitle="Testimonials"
          title="Trusted by Educational Leaders"
          description="Hear from faculty and administrators across India's top institutions."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-muted-foreground" />
                
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {testimonial.institution}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function ComplianceSection() {
  return (
    <Section className="bg-white dark:bg-stone-950">
      <SectionHeader
        alignment="center"
        title="Privacy & Security First"
        description="Built with institutional-grade security and compliance standards."
      />
    </Section>
  )
}

export function FinalCTA() {
  return (
    <Section className="bg-gradient-to-r from-indigo-600 to-teal-600">
      <div className="text-center text-white space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold font-heading">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Join 100+ HEIs already using Smart Student Hub to streamline achievements and ensure NAAC readiness.
        </p>
      </div>
    </Section>
  )
}
