"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { CTASparkles } from "@/components/blocks/CTASparkles";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
              Modular services, assembled with precision.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Choose a focused build or a full conversion system—designed to
              feel engineered, not templated.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
              <Image
                src="/images/product-1.png"
                alt="Services visual"
                width={1400}
                height={900}
                className="h-[320px] w-full object-cover md:h-[420px]"
                priority
              />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <p className="text-white text-lg md:text-xl font-semibold tracking-tighter">
                  Blueprint-level structure for your online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <FeaturesGrid
          badge="What we do"
          headline="From architecture to launch"
          subheadline="A clean, repeatable process that still feels bespoke."
          features={[
            {
              icon: "🧱",
              title: "Landing pages",
              description:
                "High-impact hero, social proof, features, pricing, FAQ, and CTA—assembled into a tight funnel."
            },
            {
              icon: "🗺️",
              title: "Multi-page sites",
              description:
                "About, services, pricing, portfolio, and contact—structured for clarity and navigation."
            },
            {
              icon: "🧪",
              title: "UX + content structure",
              description:
                "Information architecture, messaging hierarchy, and scannable editorial flow."
            },
            {
              icon: "⚡",
              title: "Performance pass",
              description:
                "Image discipline, layout stability, and production-minded defaults."
            },
            {
              icon: "🎛️",
              title: "Design system setup",
              description:
                "Surface tiers, typography rhythm, and gradient energy—consistent across pages."
            },
            {
              icon: "🔁",
              title: "Iteration sprints",
              description:
                "Post-launch improvements based on feedback and real usage."
            }
          ]}
        />
      </motion.div>

      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
              Service modules
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tighter text-center">
              Pick the blocks you need
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
              Combine modules into a launch plan that matches your timeline.
            </p>

            <div className="mt-10">
              <HoverEffect
                items={[
                  {
                    title: "Architecture & page map",
                    description:
                      "Define pages, sections, and conversion paths before building.",
                    link: "/contact"
                  },
                  {
                    title: "Visual system & surfaces",
                    description:
                      "Deep tonal layering with glass and gradient energy.",
                    link: "/contact"
                  },
                  {
                    title: "Content refinement",
                    description:
                      "Turn raw notes into a crisp editorial narrative.",
                    link: "/contact"
                  },
                  {
                    title: "Launch checklist",
                    description:
                      "QA, responsiveness, and final polish for production.",
                    link: "/contact"
                  },
                  {
                    title: "Portfolio presentation",
                    description:
                      "Project pages that read like case studies, not galleries.",
                    link: "/portfolio"
                  },
                  {
                    title: "Ongoing iteration",
                    description:
                      "Improve based on feedback and measurable outcomes.",
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
            headline="Want a tailored build plan?"
            description="Tell us what you’re shipping and we’ll assemble the right flow."
            ctaLabel="Contact us"
            ctaHref="/contact"
            secondaryCtaLabel="See pricing"
            secondaryCtaHref="/pricing"
          />
        </motion.div>
      </div>
    </div>
  );
}
