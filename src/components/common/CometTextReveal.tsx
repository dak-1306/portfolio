import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CometTextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  delay?: number;
  duration?: number;
}

const PARTICLES = [
  { id: 1, leftOffset: "-5%", delayOffset: 0.1, size: 4, duration: 1.2 },
  { id: 2, leftOffset: "-12%", delayOffset: 0.25, size: 3, duration: 1.0 },
  { id: 3, leftOffset: "-20%", delayOffset: 0.4, size: 5, duration: 1.4 },
  { id: 4, leftOffset: "-28%", delayOffset: 0.55, size: 3, duration: 1.1 },
  { id: 5, leftOffset: "-35%", delayOffset: 0.7, size: 4, duration: 1.3 },
] as const;

export default function CometTextReveal({
  text,
  className,
  as: Component = "h2",
  delay = 0.2,
  duration = 1.6,
}: CometTextRevealProps) {
  return (
    <div className="relative inline-grid grid-cols-1 grid-rows-1 items-center overflow-visible">
      {/* 1. Base Placeholder: Giữ khung kích thước chuẩn, opacity-0 giúp trong suốt 100% lộ nền cha */}
      <Component
        className={cn(
          "col-start-1 row-start-1 opacity-0 select-none pointer-events-none py-2",
          className,
        )}
        aria-hidden="true"
      >
        {text}
      </Component>

      {/* 2. Revealed Text: Chồng khít vị trí layer 1, clipPath nới rộng -30% chiều dọc chống cắt chân chữ */}
      <motion.div
        initial={{ clipPath: "inset(-30% 100% -30% 0)" }}
        whileInView={{ clipPath: "inset(-30% -30% -30% 0)" }}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="col-start-1 row-start-1 w-full h-full transform-gpu will-change-[clip-path] drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
      >
        <Component
          className={cn(
            "py-2 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent",
            className,
          )}
        >
          {text}
        </Component>
      </motion.div>

      {/* 3. Track Sao Chổi & Hạt Bụi */}
      <div className="col-start-1 row-start-1 w-full h-full pointer-events-none overflow-visible relative z-20">
        <motion.div
          initial={{ x: "0%", opacity: 0 }}
          whileInView={{ x: "100%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{
            duration,
            delay,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-full transform-gpu will-change-transform"
        >
          <div className="relative flex items-center">
            {/* Lõi sao chổi */}
            <div className="h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#22d3ee]" />

            {/* Đuôi sáng */}
            <div className="absolute right-1/2 h-[2px] w-20 bg-gradient-to-l from-cyan-300 via-secondary/60 to-transparent blur-[1px]" />

            {/* Hạt bụi sao rơi */}
            {PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 16 + p.size * 2],
                  x: [-4, -12],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: delay + p.delayOffset,
                  ease: "easeOut",
                }}
                style={{
                  left: p.leftOffset,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                className="absolute top-1/2 rounded-full bg-cyan-200 shadow-[0_0_6px_#22d3ee] transform-gpu"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
