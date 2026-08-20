// src/motion/index.ts
import type { Variants, Transition } from "framer-motion";

// ==========================================
// 1. TOKENS (Giá trị cấu hình chung)
// ==========================================
export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as const,
  soft: [0.16, 1, 0.3, 1] as const,
};

export const DEFAULT_VIEWPORT = {
  once: true,
  margin: "-50px",
} as const;

// Transition tái sử dụng
const TRANSITION_SMOOTH: Transition = { duration: 0.6, ease: EASING.smooth };
const TRANSITION_FAST: Transition = { duration: 0.25, ease: "easeOut" };

// ==========================================
// 2. PAGE & SECTION ANIMATIONS
// ==========================================
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: TRANSITION_FAST },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_SMOOTH,
  },
};

// ==========================================
// 3. STAGGER CONTAINERS & ITEMS
// ==========================================
export const createStaggerContainer = (
  staggerDelay = 0.1,
  delayChildren = 0.05,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerContainer: Variants = createStaggerContainer(0.1, 0.05);

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
};

// ==========================================
// 4. HEADINGS & TYPOGRAPHY
// ==========================================
export const headingContainer: Variants = createStaggerContainer(0.12);

export const headingTitle: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TRANSITION_SMOOTH,
  },
};

export const headingTextItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASING.smooth },
  },
};

// ==========================================
// 5. CARDS & HOVER STATES
// ==========================================
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASING.smooth },
  },
};

export const cardHover = {
  whileHover: { y: -4 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};
