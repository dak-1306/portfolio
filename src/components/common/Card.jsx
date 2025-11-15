import React from "react";
import { motion } from "framer-motion";

/*
  Card
  - reusable card with framer-motion hover
  - uses subtle colored shadow (emerald/green) instead of plain gray
*/
const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function Card({
  children,
  as = "div",
  className = "",
  hover = true,
  hoverY = -6,
  hoverScale = 1.01,
  tapY = 1,
  style,
  ...props
}) {
  const MotionComp = motion[as] || motion.div;

  // base visual (removed default Tailwind shadow to use colored boxShadow)
  const base =
    "relative z-0 group bg-white rounded-lg p-5 border border-transparent";

  // subtle default shadow (emerald green, low opacity)
  const defaultShadow = "0 8px 24px rgba(16, 185, 27, 0.16)"; // rgba of emerald-400

  // stronger shadow on hover (still green-tinted)
  const hoverShadow = "0 24px 48px rgba(16, 185, 30, 0.28)";

  const motionProps = hover
    ? {
        whileHover: { y: hoverY, scale: hoverScale, boxShadow: hoverShadow },
        whileTap: { y: tapY, scale: 0.997 },
        transition: { type: "spring", stiffness: 260, damping: 28 },
      }
    : {};

  return (
    <MotionComp
      {...motionProps}
      className={cn(base, className)}
      style={{
        willChange: "transform, box-shadow",
        boxShadow: defaultShadow,
        ...style,
      }}
      {...props}
    >
      {children}
    </MotionComp>
  );
}
