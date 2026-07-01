import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants — import these in components so animation
 * timing stays consistent across the site.
 */

/** Fade + slide up — used with whileInView scroll reveals */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Parent container — staggers child animations on enter */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Each word/letter in AnimatedText animates with this variant */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Smooth page enter — used in app/template.tsx */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

/** Default whileInView options — trigger once, slightly before fully visible */
export const scrollRevealViewport = {
  once: true,
  margin: "-60px" as const,
  amount: 0.2 as const,
};
