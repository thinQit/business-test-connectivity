"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroGradientBlob } from "@/components/blocks/HeroGradientBlob";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroGradientBlob
        badge="The Precise Architect"
        headline="A technical editorial site for modern business."
        subheadline="Test connectivity check from studio—now wrapped in a premium blueprint aesthetic: deep dark surfaces, glass layers, and a high-energy purple-to-blue gradient."
        primaryCta={{ label: "View services", href: "/services" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      {/* Mandatory image presence on page */}
      <div className="container mx-auto max-w-7xl px-4 -mt-10 md:-mt-16">
        <motion.div
          {...sectionAnim}
          className="relative overflow-hidden rounded-2xl bg-card"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />
          <Image
            src="/images/hero.png"
            alt="Blueprint-style hero visual"
            width={1600}
            height={900}
            className="h-[320px] w-full object-cover md:h-[420px]"
            priority
          />
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 md:p-10">
              <p className="text-white/80 text-sm uppercase tracking-wider">
                Editorial clarity • Conversion flow • Precision layout
              </p>
              <p className="mt-2 text-white text-2xl md:text-3xl font-semibold tracking-tighter">
                Designed to feel engineered—not templated.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div {...sectionAnim}>
        <LogoCloud
          headline="Trusted patterns, modern execution"
          logos={[
            { name: "Logo One", imageUrl: "/images/logo-1.png" },
            { name: "Logo Two", imageUrl: "/images/logo-2.png" },
            { name: "Logo Three", imageUrl: "/images/logo-3.png" },
            { name: "Logo Four", imageUrl: "/images/logo-4.png" },
            { name: "Logo Five", imageUrl: "/images/logo-5.png" }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <FeaturesGrid
          badge="Capabilities"
          headline="Precision components for a complete conversion flow"
          subheadline="High-contrast editorial typography, deep tonal layering, and intentional spacing—optimized for a 1440px desktop journey."
          features={[
            {
              icon: "⚙️",
              title: "Technical editorial layout",
              description:
                "Tight reading width, generous vertical rhythm, and purposeful hierarchy for authority and clarity."
            },
            {
              icon: "🧊",
              title: "Glass + gradient system",
              description:
                "A signature purple-to-blue energy layer that reads premium on a deep ink background."
            },
            {
              icon: "📐",
              title: "Bento-style storytelling",
              description:
                "Modular sections that feel like a blueprint: structured, scannable, and cinematic."
            },
            {
              icon: "🚀",
              title: "Conversion-ready sections",
              description:
                "Social proof, pricing, FAQs, and a high-intent CTA—assembled into a clean funnel."
            },
            {
              icon: "🧭",
              title: "Clear navigation",
              description:
                "Floating nav that stays out of the way while keeping key pages one click away."
            },
            {
              icon: "🔒",
              title: "Production-minded",
              description:
                "Built with Next.js App Router conventions, strong defaults, and maintainable structure."
            }
          ]}
        />
      </motion.div>

      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 md:mb-14">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                How it works
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tighter">
                A blueprint-like process from first brief to launch
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Structured phases that keep scope crisp, decisions visible, and
                outcomes measurable.
              </p>
            </div>

            <StickyScrollReveal
              content={[
                {
                  title: "01 — Audit & architecture",
                  description:
                    "We map goals, pages, and conversion paths. You get a clear plan before we build.",
                  content: (
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-card">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                      <Image
                        src="/images/product-1.png"
                        alt="Architecture and audit preview"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 p-6 flex items-end">
                        <p className="text-white font-medium">
                          Information architecture + content plan
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  title: "02 — Design system & sections",
                  description:
                    "We establish surfaces, typography rhythm, and gradient energy—then assemble sections.",
                  content: (
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-card">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                      <Image
                        src="/images/product-2.png"
                        alt="Design system preview"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 p-6 flex items-end">
                        <p className="text-white font-medium">
                          Surfaces, spacing, and editorial hierarchy
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  title: "03 — Build, QA, and ship",
                  description:
                    "We implement, test, and launch with a clean handoff and room to iterate.",
                  content: (
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-card">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                      <Image
                        src="/images/product-3.png"
                        alt="Build and launch preview"
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 p-6 flex items-end">
                        <p className="text-white font-medium">
                          Production build + launch checklist
                        </p>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <TestimonialsGrid
          headline="What teams say after launch"
          subheadline="Short, specific feedback—focused on clarity, speed, and results."
          testimonials={[
            {
              quote:
                "The site finally feels like our product: engineered, premium, and easy to navigate.",
              name: "Alex Morgan",
              title: "Head of Growth",
              avatarUrl: "/images/avatar-1.png",
              rating: 5
            },
            {
              quote:
                "The conversion flow is clean. We saw better-qualified inbound within the first week.",
              name: "Priya Shah",
              title: "Founder",
              avatarUrl: "/images/avatar-2.png",
              rating: 5
            },
            {
              quote:
                "Strong layout discipline and a design system that scales. Updates are painless now.",
              name: "Daniel Kim",
              title: "Engineering Lead",
              avatarUrl: "/images/avatar-3.png",
              rating: 5
            }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <PricingTable
          headline="Simple pricing, engineered for clarity"
          subheadline="Pick a tier that matches your timeline and depth. Upgrade anytime."
          tiers={[
            {
              name: "Starter",
              price: "$499",
              period: "one-time",
              description: "A crisp landing page with essential sections.",
              features: [
                "Hero + social proof + CTA",
                "Up to 5 sections",
                "Basic SEO + performance pass",
                "Launch-ready responsive layout"
              ],
              ctaLabel: "Start Starter",
              ctaHref: "/contact"
            },
            {
              name: "Professional",
              price: "$1,499",
              period: "one-time",
              description: "Full conversion flow with multiple pages.",
              features: [
                "5–6 pages (About/Services/Pricing/Portfolio/Contact)",
                "Editorial layout + bento storytelling",
                "Pricing + FAQ + testimonials",
                "Analytics-ready structure"
              ],
              ctaLabel: "Choose Pro",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Scale",
              price: "Custom",
              period: "",
              description: "For teams needing deeper content and iteration.",
              features: [
                "Custom sections + content modeling",
                "Iteration sprints",
                "Performance + accessibility hardening",
                "Ongoing improvements"
              ],
              ctaLabel: "Talk to us",
              ctaHref: "/contact"
            }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <FAQAccordion
          headline="FAQ"
          subheadline="Fast answers, no fluff."
          items={[
            {
              question: "Can you match an existing brand?",
              answer:
                "Yes. We can adapt typography, spacing, and color while keeping the technical editorial structure intact."
            },
            {
              question: "Do you provide copywriting?",
              answer:
                "We can work with your draft copy or help structure and refine it into a conversion-ready narrative."
            },
            {
              question: "How long does a typical build take?",
              answer:
                "A focused landing page can ship in days. Multi-page builds typically take 1–3 weeks depending on content readiness."
            },
            {
              question: "Is this optimized for dark mode?",
              answer:
                "Yes—this system is designed for deep tonal layering, glass surfaces, and high-contrast readability."
            }
          ]}
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl px-4 pb-20 md:pb-28">
        <motion.div {...sectionAnim}>
          <CTASparkles
            headline="Ready to define the future?"
            description="Turn a basic presence into a premium, engineered narrative—built to convert."
            ctaLabel="Contact us"
            ctaHref="/contact"
            secondaryCtaLabel="View portfolio"
            secondaryCtaHref="/portfolio"
            sparkleColor="#FFFFFF"
          />
        </motion.div>
      </div>
    </div>
  );
}
