import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CometTextReveal from "@/components/common/CometTextReveal";
import { headingContainer, headingTextItem, DEFAULT_VIEWPORT } from "@/motion";

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
      viewport={DEFAULT_VIEWPORT}
      className={center ? "text-center" : "text-left"}
    >
      {/* Badge xuất hiện trước */}
      {badge && (
        <motion.div variants={headingTextItem}>
          <Badge variant="default" className="mb-4 inline-flex items-center">
            <Star className="size-3 mr-1" />
            {badge}
          </Badge>
        </motion.div>
      )}

      {/* Comet Title chạy độc lập mượt mà */}
      <div>
        <CometTextReveal
          as="h2"
          text={title}
          delay={0.15}
          duration={1.5}
          className="font-heading text-3xl font-bold tracking-tight md:text-5xl"
        />
      </div>

      {/* Description hiện theo sau */}
      {description && (
        <motion.p
          variants={headingTextItem}
          className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
