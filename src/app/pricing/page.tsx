import type { Metadata } from "next"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Section, SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/ui/cta"
import { 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans - Transparent & Institution-Friendly",
  description: "Flexible pricing plans designed for Indian HEIs. Start with our Campus Starter plan or scale with Enterprise features. No hidden fees.",
}

const pricingPlans = [
  {
    name: "Campus Starter",
    description: "Perfect for small colleges getting started",
    price: "₹12",
    period: "per student/month",
    yearlyPrice: "₹120",
    yearlyPeriod: "per student/year",
    badge: null,
    features: [
      "Up to 1,000 students",
      "Basic achievement categories",
      "Faculty verification workflow", 
      "Student portfolio builder",
      "Basic analytics dashboard",
      "Email support",
      "CSV data exports",
      "Mobile app access"
    ],
    limitations: [
      "Limited custom categories",
      "Basic reporting only"
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const
  },
  {
    name: "Institutional",
    description: "Most popular for mid-size universities", 
    price: "₹8",
    period: "per student/month",
    yearlyPrice: "₹80",
    yearlyPeriod: "per student/year", 
    badge: "Most Popular",
    features: [
      "Up to 10,000 students",
      "All achievement categories",
      "Advanced verification workflow",
      "NAAC-ready analytics",
      "Custom reporting builder",
      "Priority email & phone support",
      "API access",
      "SSO integration",
      "Bulk import/export",
      "Mobile app with offline mode"
    ],
    limitations: [],
    cta: "Get Started",
    ctaVariant: "default" as const
  },
  {
    name: "Enterprise", 
    description: "For large universities with custom needs",
    price: "Custom",
    period: "pricing",
    yearlyPrice: "Volume",
    yearlyPeriod: "discounts",
    badge: "Best Value",
    features: [
      "Unlimited students",
      "Custom achievement workflows",
      "Advanced NAAC mapping",
      "White-label options",
      "Dedicated success manager",
      "24/7 priority support",
      "Custom integrations",
      "Advanced security features",
      "On-premise deployment option",
      "Custom training programs"
    ],
    limitations: [],
    cta: "Contact Sales", 
    ctaVariant: "outline" as const
  }
]

const addOns = [
  { name: "Advanced SSO", price: "₹5,000/month", description: "LDAP, Active Directory, SAML" },
  { name: "Custom Integrations", price: "₹15,000", description: "One-time setup fee per integration" },
  { name: "On-premise Deployment", price: "₹50,000", description: "One-time setup + ₹10,000/month support" },
  { name: "Professional Training", price: "₹25,000", description: "Comprehensive staff training program" }
]

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 30-day free trial for all plans with full feature access. No credit card required."
  },
  {
    question: "How is billing calculated?",
    answer: "Billing is based on active students using the platform. We count only students who have created profiles or have achievements recorded."
  },
  {
    question: "Can we switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade anytime. Changes are prorated and reflected in your next billing cycle."
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes, for institutions with over 15,000 students, we offer custom pricing with significant volume discounts."
  },
  {
    question: "What about data migration?",
    answer: "We provide free data migration assistance for all paid plans, including CSV imports and API-based transfers."
  },
  {
    question: "Is technical support included?",
    answer: "All plans include technical support. Starter gets email support, Institutional gets priority support, and Enterprise gets 24/7 dedicated support."
  }
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <Section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-indigo-50/50 to-teal-50/50 dark:from-stone-900 dark:to-stone-800">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                Transparent Pricing
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-balance">
              Pricing That Scales{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                With Your Institution
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed">
              No hidden fees, no per-feature charges. Choose a plan that fits your institution size and grow as you scale.
            </p>
          </div>
        </Section>

        {/* Pricing Cards */}
        <Section className="bg-white dark:bg-stone-950">
          <div className="space-y-16">
            <SectionHeader
              alignment="center"
              title="Choose Your Plan"
              description="All plans include our core features with varying levels of support and customization."
            />

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.badge ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                    
                    <div className="space-y-1 pt-4">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold font-heading">{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      {plan.yearlyPrice && (
                        <p className="text-sm text-teal-600 dark:text-teal-400">
                          Or {plan.yearlyPrice}/{plan.yearlyPeriod} (save 17%)
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className="w-full" 
                      variant={plan.ctaVariant}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Add-ons Section */}
        <Section className="bg-stone-50 dark:bg-stone-900">
          <div className="space-y-16">
            <SectionHeader
              alignment="center"
              subtitle="Add-ons"
              title="Extend Your Platform"
              description="Optional services to customize your Smart Student Hub experience."
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <Card key={index} className="glass">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{addon.name}</h3>
                      <Badge variant="secondary">{addon.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-white dark:bg-stone-950">
          <div className="space-y-16 max-w-4xl mx-auto">
            <SectionHeader
              alignment="center"
              subtitle="FAQ"
              title="Common Questions"
              description="Everything you need to know about our pricing and plans."
            />

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-indigo-600 to-teal-600">
          <CTA
            variant="gradient"
            title="Still Have Questions?"
            description="Our team is here to help you choose the right plan and ensure a smooth implementation."
            primaryAction={{
              text: "Schedule a Consultation",
              href: "/contact"
            }}
            secondaryAction={{
              text: "Start Free Trial",
              href: "/signup"
            }}
          />
        </Section>
      </main>
      <Footer />
    </>
  )
}
