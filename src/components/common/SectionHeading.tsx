import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  headingContainer,
  headingBadge,
  headingTitle,
  headingDescription,
} from "@/motion/heading";

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
      variants={headingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={center ? "text-center" : "text-left"}
    >
      {badge && (
        <motion.div variants={headingBadge}>
          <Badge variant="default" className="mb-4">
            <Star className="size-3 mr-1" />
            {badge}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        variants={headingTitle}
        className="font-heading text-4xl font-bold tracking-tight md:text-5xl"
      >
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {description && (
        <motion.p
          variants={headingDescription}
          className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
