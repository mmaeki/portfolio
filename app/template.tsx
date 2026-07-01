"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations";

/**
 * App Router template — re-mounts on navigation for page enter animations.
 * initial={false} keeps content visible if JavaScript is slow or blocked (e.g.
 * opening the dev site via the Network URL before allowedDevOrigins is set).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial={false}
      animate="visible"
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
