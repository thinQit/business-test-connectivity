"use client";

const Image = "img" as any;
import Link from "next/link";
import { motion } from "framer-motion";

import { BentoGrid } from "@/components/ui/effects/BentoGrid";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTASparkles } from "@/components/blocks/CTASparkles";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

function PortfolioCard({
  title,
  description,
  imageUrl,
  href
}: {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-card block"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={800}
        className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 flex items-end p-6">
        <div>
          <p className="text-white text-xl font-semibold tracking-tighter">
            {title}
          </p>
          <p className="mt-2 text-white/80 text-sm max-w-md">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
              Projects that read like engineered narratives.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              A few sample layouts using the same technical editorial system:
              deep surfaces, glass layers, and gradient energy.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="pb-20 md:pb-28">
        <div className="container mx-auto max-w-7xl px-4">
          <BentoGrid className="max-w-5xl">
            <div className="md:col-span-2">
              <PortfolioCard
                title="Blueprint Landing"
                description="Hero → proof → features → pricing → CTA. Tight and conversion-ready."
                imageUrl="/images/hero.png"
                href="/contact"
              />
            </div>
            <div className="md:col-span-1">
              <PortfolioCard
                title="Bento Feature Story"
                description="Modular storytelling with scannable structure."
                imageUrl="/images/product-1.png"
                href="/services"
              />
            </div>
            <div className="md:col-span-1">
              <PortfolioCard
                title="Pricing System"
                description="Clear tiers with strong visual hierarchy."
                imageUrl="/images/product-3.png"
                href="/pricing"
              />
            </div>
            <div className="md:col-span-2">
              <PortfolioCard
                title="Case Study Layout"
                description="Editorial narrative with images, outcomes, and next steps."
                imageUrl="/images/product-2.png"
                href="/about"
              />
            </div>
          </BentoGrid>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
              What you can showcase
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tighter text-center">
              Portfolio formats
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
              Present work as proof—structured, readable, and persuasive.
            </p>

            <div className="mt-10">
              <HoverEffect
                items={[
                  {
                    title: "Case studies",
                    description:
                      "Problem → approach → outcome, with crisp visuals.",
                    link: "/contact"
                  },
                  {
                    title: "Project galleries",
                    description:
                      "A clean grid with consistent thumbnails and metadata.",
                    link: "/portfolio"
                  },
                  {
                    title: "Before/after",
                    description:
                      "Show transformation with a narrative and measurable results.",
                    link: "/contact"
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto max-w-7xl px-4 pb-20 md:pb-28">
        <motion.div {...sectionAnim}>
          <CTASparkles
            headline="Want your work to look this precise?"
            description="We’ll assemble a portfolio that feels premium and converts."
            ctaLabel="Contact us"
            ctaHref="/contact"
            secondaryCtaLabel="See services"
            secondaryCtaHref="/services"
          />
        </motion.div>
      </div>
    </div>
  );
}
