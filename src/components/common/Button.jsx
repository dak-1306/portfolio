import React from "react";

// Bản đồ tên biến thể => class CSS (ở đây bạn dùng các class CSS riêng như .btn-success, .btn-cta)
const btnStyle = {
  success: "btn-success",
  info: "btn-info",
  CV: "btn-CV",
  cta: "btn-cta",
  danger: "btn-danger",
};

// Bản đồ kích thước => lớp Tailwind cho padding/size text
const btnSize = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-base",
};

// trợ giúp ghép class string
const cn = (...parts) => parts.filter(Boolean).join(" ");

export default function Button({
  children,
  onClick,
  variant = "cta", // biến thể mặc định (tên key trong btnStyle)
  size = "medium", // kích thước mặc định (key trong btnSize)
  icon,
  type = "button",
  disabled = false,
  className = "",
  href, // nếu có href sẽ render <a> thay vì <button>
  ...props
}) {
  // base: các lớp Tailwind chung cho mọi nút (layout, transitions, rounding...)
  const base =
    "group inline-flex items-center gap-2 relative overflow-visible rounded-md font-semibold select-none " +
    "transition-transform duration-200 will-change-transform motion-safe:transform-gpu " +
    "transform-gpu";

  // interaction: các lớp cho hover, active, focus, disabled
  const interaction =
    // hover nâng nhẹ, active nhấn xuống, shadow khi hover
    "motion-safe:hover:-translate-y-1 active:translate-y-0.5 " +
    "hover:shadow-lg active:shadow-md " +
    // focus ring; màu ring cụ thể đặt trong CSS variant (.btn-*)
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    // disabled state
    (disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer");

  // sheen: lớp cho overlay "sheen" (hiệu ứng sáng) — thực hiện bằng một <span> con
  const sheen =
    // lớp này được dùng ở phần <span aria-hidden> để tạo hiệu ứng sáng
    "absolute inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay";

  // Lấy class kích thước và biến thể từ map; dùng fallback nếu key không tồn tại
  const sizeCls = btnSize[size] ?? btnSize.medium;
  const variantCls = btnStyle[variant] ?? btnStyle.cta;

  // nếu có href render <a>, ngược lại render <button>
  const Tag = href ? "a" : "button";

  return (
    <Tag
      {...(href ? { href } : {})}
      type={href ? undefined : type} // a tag không cần type
      onClick={onClick}
      disabled={disabled && !href ? true : undefined}
      className={cn(
        base,
        interaction,
        variantCls, // màu / background cụ thể do bạn tự định nghĩa trong CSS (btn-*)
        sizeCls,
        "relative",
        className
      )}
      {...props}
    >
      {/* Lớp sheen: layer overlay để tạo hiệu ứng sáng. style/appearance chỉnh trong CSS */}
      <span aria-hidden="true" className={sheen} />

      {/* Icon nếu có (đặt trước text) */}
      {icon ? (
        <span className="relative z-10 inline-flex items-center justify-center transition-transform duration-150 group-hover:-translate-y-0.5">
          {icon}
        </span>
      ) : null}

      {/* Nội dung nút */}
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
