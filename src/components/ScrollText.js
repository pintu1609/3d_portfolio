"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function ScrollText() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["-15deg", "15deg"]);
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section
      ref={targetRef}
      className="h-[200vh] flex items-center justify-center bg-black text-white"
    >
      <motion.h1
        style={{ rotate, y, opacity }}
        className="text-6xl md:text-8xl font-extrabold tracking-tight"
      >
        SCROLL EFFECT
      </motion.h1>
    </section>
  );
}
