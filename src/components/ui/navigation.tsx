"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, GraduationCap, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  {
    name: "Product",
    href: "/product",
    submenu: [
      { name: "Overview", href: "/product", description: "Complete platform overview" },
      { name: "Student Dashboard", href: "/demo/student", description: "Student experience" },
      { name: "Faculty Portal", href: "/demo/faculty", description: "Faculty validation tools" },
      { name: "Admin Analytics", href: "/demo/admin", description: "Institutional insights" },
    ]
  },
  {
    name: "Solutions",
    href: "/solutions",
    submenu: [
      { name: "For HEIs", href: "/solutions/heis", description: "Accreditation & compliance" },
      { name: "For Faculty", href: "/solutions/faculty", description: "Validation workflows" },
      { name: "For Students", href: "/solutions/students", description: "Achievement portfolios" },
      { name: "For Placement Cells", href: "/solutions/placement", description: "Recruitment support" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Documentation", href: "/docs", description: "Implementation guides" },
      { name: "Case Studies", href: "/case-studies", description: "Success stories" },
      { name: "Blog", href: "/blog", description: "Latest insights" },
      { name: "NAAC Playbook", href: "/resources/naac", description: "Compliance guide" },
    ]
  },
  { name: "Company", href: "/company" },
]

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold font-heading text-lg">Smart Student Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  {item.submenu.map((subitem) => (
                    <DropdownMenuItem key={subitem.name} asChild>
                      <Link href={subitem.href} className="flex flex-col items-start space-y-1 p-3">
                        <span className="font-medium">{subitem.name}</span>
                        {subitem.description && (
                          <span className="text-sm text-muted-foreground">
                            {subitem.description}
                          </span>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden sm:flex"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Auth Links */}
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/signin">Sign in</Link>
          </Button>
          
          <Button asChild>
            <Link href="/demo">Get a Demo</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-border/40 space-y-2">
              <Link
                href="/signin"
                className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start px-3"
              >
                <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-2">Toggle theme</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
