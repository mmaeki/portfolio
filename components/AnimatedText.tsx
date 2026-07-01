"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  /** Render as h1, p, etc. */
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  /** Split by words (default) or individual letters */
  splitBy?: "words" | "letters";
}

/**
 * Staggered reveal animation for hero taglines.
 * Renders plain text first so content is visible before JS runs, then animates.
 */
export default function AnimatedText({
  text,
  as: Tag = "h1",
  className = "",
  splitBy = "words",
}: AnimatedTextProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!text) return null;

  // Visible immediately — avoids opacity:0 when Framer Motion hasn't loaded yet
  if (!ready) {
    return <Tag className={className}>{text}</Tag>;
  }

  const segments =
    splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="inline-flex flex-wrap"
        aria-hidden
      >
        {segments.map((segment, index) => (
          <motion.span
            key={`${segment}-${index}`}
            variants={wordReveal}
            className="inline-block"
            style={splitBy === "words" ? { marginRight: "0.28em" } : undefined}
          >
            {segment}
            {splitBy === "letters" && segment === " " ? "\u00A0" : null}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
