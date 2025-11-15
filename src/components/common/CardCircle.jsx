import React from "react";
import { motion } from "framer-motion";

/*
  CardCircle
  - container hình tròn, overflow-hidden để ảnh cover gọn
  - dùng framer-motion cho hover/tap mượt
  - giờ có colored shadow giống Card
*/
const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function CardCircle({
  children,
  size = "w-40 h-40",
  className = "",
  hover = true,
  hoverY = -6,
  hoverScale = 1.02,
  tapY = 1,
  style,
  ...props
}) {
  const Motion = motion.div;
  // bỏ shadow-md của Tailwind, dùng box-shadow màu xanh nhẹ
  const base =
    "relative overflow-hidden rounded-full flex items-center justify-center bg-white";
  const visual = "ring-offset-2";

  const defaultShadow = "0 8px 24px rgba(16,185,27,0.16)"; // matching Card default
  const hoverShadow = "0 20px 40px rgba(16,185,30,0.24)";

  const motionProps = hover
    ? {
        whileHover: { y: hoverY, scale: hoverScale, boxShadow: hoverShadow },
        whileTap: { y: tapY, scale: 0.995 },
        transition: { type: "spring", stiffness: 260, damping: 28 },
      }
    : {};

  return (
    <Motion
      {...motionProps}
      className={cn(base, size, visual, "will-change-transform", className)}
      style={{
        willChange: "transform, box-shadow",
        boxShadow: defaultShadow,
        ...style,
      }}
      {...props}
    >
      {/* nội dung luôn nằm trên (z-10) để tránh bị overlay pseudo hoặc sheen */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </Motion>
  );
}
