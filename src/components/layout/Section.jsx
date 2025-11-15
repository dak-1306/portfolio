import React from "react";
import { motion } from "framer-motion";

/*
  Section
  - reusable section wrapper with reveal-on-scroll
  - accepts id, title, innerClass, style, minH
*/
export default function Section({
  id,
  title = null,
  children,
  className = "",
  innerClass = "bg-white rounded-2xl shadow-md p-6 flex flex-col items-center",
  style = { background: "var(--color-background-gradient)" },
  minH = "min-h-[70vh] md:min-h-[75vh]",
}) {
  return (
    <section id={id} className={`${minH} flex items-center py-8 ${className}`}>
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={innerClass}
          style={style}
        >
          {title ? (
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
