import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope" 
});

export const metadata: Metadata = {
  title: {
    default: "Smart Student Hub - One verified profile, every achievement",
    template: "%s | Smart Student Hub"
  },
  description: "Centralized, verified student achievement platform for Higher Education Institutions in India. Catalog academics, co-curriculars, internships, certifications, leadership, and volunteering with faculty validation and analytics for NAAC/NIRF.",
  keywords: ["student achievements", "NAAC", "NIRF", "higher education", "India", "academic records", "verification", "portfolio"],
  authors: [{ name: "Smart Student Hub" }],
  creator: "Smart Student Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartstudenthub.com",
    title: "Smart Student Hub - One verified profile, every achievement",
    description: "Centralized, verified student achievement platform for Higher Education Institutions in India.",
    siteName: "Smart Student Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Student Hub - One verified profile, every achievement",
    description: "Centralized, verified student achievement platform for Higher Education Institutions in India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
