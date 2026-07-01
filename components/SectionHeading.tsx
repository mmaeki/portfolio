"use client";

import { motion } from "framer-motion";
import { fadeInUp, scrollRevealViewport } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Center-align text — useful for page headers */
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.header
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-lg text-ink-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
