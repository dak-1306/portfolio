import React from "react";
import { motion } from "framer-motion";

/*
  Card
  - card reusable với hiệu ứng hover nâng + shadow
  - giữ prop `as` để render thành li/a/div tùy nhu cầu
  - props: as, className, hover (bool), hoverScale / hoverY
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

  const base =
    "relative z-0 group bg-white rounded-lg p-5 shadow-md border border-transparent";
  const hoverVisual = "hover:shadow-xl";

  const motionProps = hover
    ? {
        whileHover: { y: hoverY, scale: hoverScale },
        whileTap: { y: tapY, scale: 0.997 },
        transition: { type: "spring", stiffness: 260, damping: 28 },
      }
    : {};

  return (
    <MotionComp
      {...motionProps}
      className={cn(base, hover ? hoverVisual : "", className)}
      style={{ willChange: "transform", ...style }}
      {...props}
    >
      {children}
    </MotionComp>
  );
}
