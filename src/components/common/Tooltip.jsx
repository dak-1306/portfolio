import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({ children, label, visible, as = "span" }) {
  const [open, setOpen] = useState(false);
  const controlled = typeof visible === "boolean";
  const show = controlled ? visible : open;
  const anchorRef = useRef(null);
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(elRef.current);
    return () => document.body.removeChild(elRef.current);
  }, []);

  // compute position when needed (simple centering)
  const style =
    anchorRef.current && show
      ? (() => {
          const r = anchorRef.current.getBoundingClientRect();
          return {
            position: "fixed",
            left: r.left + r.width / 2,
            top: r.top + r.height + 8,
            transform: "translateX(-50%)",
            zIndex: 9999,
          };
        })()
      : { display: "none" };

  const Tag = as;

  return (
    <Tag
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      ref={anchorRef}
    >
      {children}
      {createPortal(
        <div
          style={style}
          className={
            "bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap transition-opacity duration-150 " +
            (show ? "opacity-100" : "opacity-0")
          }
          aria-hidden={!show}
        >
          {label}
        </div>,
        elRef.current
      )}
    </Tag>
  );
}
