"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { TeamGrid } from "@/components/blocks/TeamGrid";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
              Built like a blueprint: precise, minimal, authoritative.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Business is a test connectivity check from studio—presented as a
              premium technical editorial experience with deep surfaces and
              high-energy gradients.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
              <Image
                src="/images/product-2.png"
                alt="About visual"
                width={1400}
                height={900}
                className="h-[360px] w-full object-cover md:h-[460px]"
                priority
              />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <p className="text-white text-lg md:text-xl font-semibold tracking-tighter">
                  Clarity in structure. Luxury in restraint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <StatsCounter
          bgColor="bg-card text-card-foreground"
          stats={[
            { label: "Sections assembled", value: "25+" },
            { label: "Pages shipped", value: "6" },
            { label: "Design system layers", value: "3" },
            { label: "Primary gradient", value: "1" }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <TeamGrid
          headline="The team"
          subheadline="Small, senior, and focused on shipping."
          members={[
            {
              name: "Jordan Lee",
              title: "Design Systems",
              bio: "Editorial hierarchy, spacing rhythm, and surface layering.",
              imageUrl: "/images/avatar-1.png"
            },
            {
              name: "Sam Rivera",
              title: "Engineering",
              bio: "Next.js implementation with performance-minded defaults.",
              imageUrl: "/images/avatar-2.png"
            },
            {
              name: "Taylor Nguyen",
              title: "Content & UX",
              bio: "Conversion flow, messaging clarity, and information architecture.",
              imageUrl: "/images/avatar-3.png"
            }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <TestimonialsGrid
          headline="Principles we build by"
          subheadline="A few signals that define the work."
          testimonials={[
            {
              quote:
                "No filler sections—every block has a job in the narrative and funnel.",
              name: "Internal principle",
              title: "Conversion discipline",
              avatarUrl: "/images/avatar-4.png",
              rating: 5
            },
            {
              quote:
                "We use tonal shifts and spacing to define structure—no noisy 1px borders.",
              name: "Internal principle",
              title: "No-line rule",
              avatarUrl: "/images/avatar-5.png",
              rating: 5
            }
          ]}
        />
      </motion.div>
    </div>
  );
}
