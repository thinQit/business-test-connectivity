"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { ContactForm } from "@/components/blocks/ContactForm";
import { LogoCloud } from "@/components/blocks/LogoCloud";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
} as const;

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <motion.section {...sectionAnim} className="section">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">
              Let’s assemble your site.
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Share your goals, timeline, and what you’re shipping. We’ll reply
              with a clean plan.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-card">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/75" />
              <Image
                src="/images/hero.png"
                alt="Contact visual"
                width={1400}
                height={900}
                className="h-[280px] w-full object-cover md:h-[360px]"
                priority
              />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <p className="text-white text-lg md:text-xl font-semibold tracking-tighter">
                  Clear inputs → precise output.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <ContactForm
          headline="Send a message"
          subheadline="We typically respond within 1–2 business days."
          contactInfo={[
            { icon: "✉️", label: "Email", value: "hello@business.com" },
            { icon: "📍", label: "Location", value: "Remote / Worldwide" },
            { icon: "⏱️", label: "Hours", value: "Mon–Fri, 9am–5pm" }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <LogoCloud
          headline="Compatible with modern stacks"
          logos={[
            { name: "Next.js", imageUrl: "/images/logo-1.png" },
            { name: "React", imageUrl: "/images/logo-2.png" },
            { name: "Tailwind", imageUrl: "/images/logo-3.png" },
            { name: "Vercel", imageUrl: "/images/logo-4.png" }
          ]}
        />
      </motion.div>
    </div>
  );
}
