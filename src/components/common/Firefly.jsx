import { motion } from "framer-motion";

export default function Firefly() {
  // vị trí base trong container (phần trăm)
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  // di chuyển nhỏ bằng px
  const moveX = (Math.random() - 0.5) * 40; // +/- 20px
  const moveY = (Math.random() - 0.5) * 40;
  const size = 6 + Math.random() * 8; // random size px
  const duration = 6 + Math.random() * 6;

  return (
    <motion.div
      initial={{ opacity: 0.6, translateX: 0, translateY: 0 }}
      animate={{
        opacity: [0.4, 1, 0.5],
        translateX: [0, moveX, 0],
        translateY: [0, moveY, 0],
      }}
      transition={{
        opacity: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        translateX: { duration, repeat: Infinity, ease: "easeInOut" },
        translateY: { duration, repeat: Infinity, ease: "easeInOut" },
        repeatDelay: 0.5,
      }}
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,200,1) 30%, rgba(255,255,200,0) 70%)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)", // center by left/top
        zIndex: 0,
        mixBlendMode: "screen",
      }}
    />
  );
}
