import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
interface SkillCardProps {
  icon: ReactNode;
  name: string;
  level: number;
  description: string;
  tags: string[];
  className?: string;
}
const MotionCard = motion(Card);
export default function SkillCard({
  icon,
  name,
  level,
  description,
  tags,
  className,
}: SkillCardProps) {
  return (
    <MotionCard
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative overflow-hidden",
        "border border-white/10",
        "bg-gradient-to-b from-card/90 to-card/50",
        "backdrop-blur-xl",
        "shadow-[0_0_40px_rgba(120,119,198,0.10)]",
        "transition-all duration-300",
        "hover:border-primary/20",
        className,
      )}
    >
      {" "}
      {/* Cosmic Glow */}{" "}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {" "}
        <div className="absolute -left-16 top-0 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />{" "}
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />{" "}
      </div>{" "}
      <CardContent className="relative z-10 p-6">
        {" "}
        {/* Header */}{" "}
        <div className="flex items-start justify-between gap-4">
          {" "}
          <div className=" flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:scale-110 ">
            {" "}
            {icon}{" "}
          </div>{" "}
          <Badge
            variant="secondary"
            className=" border border-primary/20 bg-primary/10 text-primary backdrop-blur-md "
          >
            {" "}
            {level}%{" "}
          </Badge>{" "}
        </div>{" "}
        {/* Content */}{" "}
        <div className="mt-5">
          {" "}
          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            {" "}
            {name}{" "}
          </h3>{" "}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {" "}
            {description}{" "}
          </p>{" "}
        </div>{" "}
        {/* Progress */}{" "}
        <div className="mt-6">
          {" "}
          <div className="mb-2 flex items-center justify-between text-sm">
            {" "}
            <span className="text-muted-foreground"> Skill Level </span>{" "}
            <span className="font-medium text-primary"> {level}% </span>{" "}
          </div>{" "}
          <Progress value={level} className="h-2 bg-white/10" />{" "}
        </div>{" "}
        {/* Tags */}{" "}
        <div className="mt-6 flex flex-wrap gap-2">
          {" "}
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className=" border-white/10 bg-white/5 text-muted-foreground transition-colors duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary "
            >
              {" "}
              {tag}{" "}
            </Badge>
          ))}{" "}
        </div>{" "}
      </CardContent>{" "}
    </MotionCard>
  );
}
