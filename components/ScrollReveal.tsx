"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp, scrollRevealViewport } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Optional delay before this section animates in */
  delay?: number;
  /** Override the default fade-in-up variant */
  variants?: Variants;
}

/**
 * Wrapper that triggers a fade-in/slide-up when the section enters the viewport.
 * Uses whileInView so animations only run once (see scrollRevealViewport).
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variants = fadeInUp,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
