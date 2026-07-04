"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Terminal } from "@/components/brand/terminal";
import { CodeBlock, Tok } from "@/components/brand/code";

const HOSTS = [
  { label: "supabase.co", active: false },
  { label: "terrabase.dev", active: true },
] as const;

/** Animated one-line SDK swap: `.supabase.co` → `.terrabase.dev`. */
export function HeroCodeSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const first = setTimeout(() => setI(1), 1100);
    const loop = setInterval(() => setI((v) => (v === 1 ? 0 : 1)), 3800);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
    };
  }, [reduce]);

  const host = HOSTS[i]!;

  return (
    <Terminal title="lib/supabase.ts" className="w-full">
      <CodeBlock>
        <span className="block">
          <Tok k="comment">{"// same SDK — just point it at Terrabase"}</Tok>
        </span>
        <span className="block">
          <Tok k="keyword">const </Tok>
          <Tok k="prop">supabase</Tok> <Tok k="punct">=</Tok>{" "}
          <Tok k="fn">createClient</Tok>
          <Tok k="punct">(</Tok>
        </span>
        <span className="block pl-4">
          <Tok k="punct">&apos;https://xyz.</Tok>
          <span className="relative inline-flex overflow-hidden align-baseline">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={host.label}
                initial={{ y: reduce ? 0 : "0.9em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: reduce ? 0 : "-0.9em", opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.3, 0.7, 0.2, 1] }}
                className={host.active ? "text-accent font-medium" : "text-[#e8b36a]"}
              >
                {host.label}
              </motion.span>
            </AnimatePresence>
          </span>
          <Tok k="punct">&apos;</Tok>
          <Tok k="punct">,</Tok> <Tok k="prop">ANON_KEY</Tok>
        </span>
        <span className="block">
          <Tok k="punct">)</Tok>
        </span>
      </CodeBlock>
    </Terminal>
  );
}
