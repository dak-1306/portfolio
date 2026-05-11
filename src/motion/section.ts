import type { Variants } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};
