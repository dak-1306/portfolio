import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={center ? "text-center" : "text-left"}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary backdrop-blur-md">
          ✦ {badge}
        </div>
      )}

      <h2 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
