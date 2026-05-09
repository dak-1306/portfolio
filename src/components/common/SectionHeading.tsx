import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <Badge variant="default" className="mb-4">
          <Star className="size-3 mr-1" />
          {badge}
        </Badge>
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
