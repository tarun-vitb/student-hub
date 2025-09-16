import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Overview", href: "/product" },
    { name: "Student Dashboard", href: "/demo/student" },
    { name: "Faculty Portal", href: "/demo/faculty" },
    { name: "Admin Analytics", href: "/demo/admin" },
    { name: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { name: "For HEIs", href: "/solutions/heis" },
    { name: "For Faculty", href: "/solutions/faculty" },
    { name: "For Students", href: "/solutions/students" },
    { name: "For Placement Cells", href: "/solutions/placement" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "NAAC Playbook", href: "/resources/naac" },
    { name: "Help Center", href: "/support" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance", href: "/compliance" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300">
      <div className="container py-16">
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold font-heading text-lg text-white">Smart Student Hub</span>
            </Link>
            
            <p className="text-stone-400 leading-relaxed max-w-sm">
              One verified profile, every achievement. The trusted platform for Indian HEIs to manage student achievements and ensure NAAC compliance.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contact@smartstudenthub.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 80-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white">Product</h3>
            <div className="space-y-3">
              {footerLinks.product.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white">Solutions</h3>
            <div className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white">Resources</h3>
            <div className="space-y-3">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-stone-400">
                Get the latest insights on higher education and technology.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-500 focus:border-primary"
              />
              <Button size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-stone-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-400">Follow us:</span>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-stone-400 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-stone-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-stone-400 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-stone-800 text-center text-sm text-stone-500">
            <p>&copy; 2024 Smart Student Hub. All rights reserved. Made in India for Indian Higher Education.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
