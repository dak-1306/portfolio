import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  ScrollToTop
  - hiển thị khi scroll vượt threshold
  - click sẽ scroll mượt lên top
  - pointer-events allowed (button có thể nhận sự kiện)
*/
export default function ScrollToTop({ threshold = 300 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-6 z-50 rounded-full bg-[var(--color-cta-bg)] text-white p-3 shadow-lg hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <FontAwesomeIcon icon={["fas", "arrow-up"]} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
