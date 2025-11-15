import React from "react";
import { motion } from "framer-motion";

/*
  CardCircle
  - container hình tròn, overflow-hidden để ảnh cover gọn
  - dùng framer-motion cho hover/tap mượt
  - props:
    - size: lớp Tailwind cho kích thước (ví dụ "w-40 h-40")
    - className: mở rộng class
    - hover: bật/tắt hiệu ứng hover
    - hoverY / hoverScale / tapY: điều chỉnh chuyển động
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
  const base =
    "relative overflow-hidden rounded-full flex items-center justify-center bg-white shadow-md";
  const visual = "ring-offset-2";

  const motionProps = hover
    ? {
        whileHover: { y: hoverY, scale: hoverScale },
        whileTap: { y: tapY, scale: 0.995 },
        transition: { type: "spring", stiffness: 260, damping: 28 },
      }
    : {};

  return (
    <Motion
      {...motionProps}
      className={cn(base, size, visual, "will-change-transform", className)}
      style={{ willChange: "transform", ...style }}
      {...props}
    >
      {/* nội dung luôn nằm trên (z-10) để tránh bị overlay pseudo hoặc sheen */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </Motion>
  );
}
