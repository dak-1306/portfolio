import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CosmicCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function CosmicCard({
  title,
  description,
  icon,
  children,
  className,
}: CosmicCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10",
        "bg-gradient-to-b from-card/90 to-card/50",
        "backdrop-blur-xl",
        "shadow-[0_0_40px_rgba(120,119,198,0.12)]",
        "transition-all duration-300",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {icon && (
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
            {icon}
          </div>
        )}

        {title && (
          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {children && <div className="mt-5">{children}</div>}
      </div>
    </motion.div>
  );
}
