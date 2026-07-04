"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Play on mount instead of when scrolled into view. */
  immediate?: boolean;
};

/** Entrance fade + slight rise. Disabled under prefers-reduced-motion. */
export function FadeIn({
  children,
  delay = 0,
  y = 18,
  className,
  immediate = false,
}: FadeInProps) {
  const reduce = useReducedMotion();

  const hidden = { opacity: 0, y: reduce ? 0 : y };
  const shown = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(immediate
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.5, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
