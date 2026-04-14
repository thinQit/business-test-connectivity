import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { NavbarFloating } from "@/components/blocks/NavbarFloating";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Business",
  description: "test connectivity check from studio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarFloating
            logo="Business"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            ctaLabel="Get a quote"
            ctaHref="/contact"
          />
        </div>

        {/* Offset for fixed navbar */}
        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="Business"
          description="A technical editorial presence for modern teams—built with precision, clarity, and conversion in mind."
          columns={[
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" }
              ]
            },
            {
              title: "Services",
              links: [
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" }
              ]
            }
          ]}
          copyright={`© ${new Date().getFullYear()} Business. All rights reserved.`}
        />
      </body>
    </html>
  );
}
