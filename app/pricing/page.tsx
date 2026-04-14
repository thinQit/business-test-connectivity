"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASparkles } from "@/components/blocks/CTASparkles";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Pricing
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
              Transparent tiers. Clean scope.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Choose a tier that fits your timeline. Keep the build crisp and
              the outcome measurable.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
              <Image
                src="/images/product-3.png"
                alt="Pricing visual"
                width={1400}
                height={900}
                className="h-[320px] w-full object-cover md:h-[420px]"
                priority
              />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <p className="text-white text-lg md:text-xl font-semibold tracking-tighter">
                  Scope clarity beats surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <PricingTable
          headline="Pricing"
          subheadline="A simple ladder from fast launch to full system."
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
          headline="Pricing FAQ"
          subheadline="What’s included and how it works."
          items={[
            {
              question: "Do you offer monthly plans?",
              answer:
                "These tiers are one-time builds. Ongoing iteration can be added as a custom engagement."
            },
            {
              question: "What do you need from us to start?",
              answer:
                "A short brief, any brand assets, and either draft copy or bullet points. We’ll structure the rest."
            },
            {
              question: "Can we start Starter and upgrade later?",
              answer:
                "Yes. We can expand into multi-page and add sections as your needs grow."
            }
          ]}
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl px-4 pb-20 md:pb-28">
        <motion.div {...sectionAnim}>
          <CTASparkles
            headline="Want a custom scope?"
            description="Tell us what you’re building and we’ll propose a clean plan."
            ctaLabel="Contact us"
            ctaHref="/contact"
            secondaryCtaLabel="View portfolio"
            secondaryCtaHref="/portfolio"
          />
        </motion.div>
      </div>
    </div>
  );
}
