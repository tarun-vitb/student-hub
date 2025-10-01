import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/homepage/hero"
import { ValueGrid } from "@/components/homepage/value-grid"
import { ProductTour } from "@/components/homepage/product-tour"
import { Metrics } from "@/components/homepage/metrics"
import { Testimonials } from "@/components/homepage/testimonials"
import { ComplianceSection, FinalCTA } from "@/components/homepage/testimonials"
import { Footer } from "@/components/ui/footer"

export default async function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ValueGrid />
        <ProductTour />
        <Metrics />
        <Testimonials />
        <ComplianceSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
