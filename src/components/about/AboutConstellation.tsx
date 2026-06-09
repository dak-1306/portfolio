import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, FileCode2, Sparkles, Database, Code2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { sectionReveal } from "@/motion/section";

type Milestone = {
  title: string;
  description: string;
  year: string;
  icon: React.ReactNode;
  x: number; // % từ 0 - 100
  y: number; // % từ 0 - 100
};

export default function AboutConstellation() {
  const [isMobile, setIsMobile] = useState(false);

  // Kiểm tra breakpoint để thay đổi tọa độ hoặc cách hiển thị
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const milestones: Milestone[] = [
    {
      year: "2024",
      title: "Web Foundations",
      description:
        "Started learning HTML, CSS, JavaScript and fundamental web development concepts.",
      icon: <FileCode2 className="size-4 md:size-5" />,
      x: isMobile ? 50 : 15, // Mobile: Căn giữa | Desktop: 15%
      y: isMobile ? 10 : 15,
    },
    {
      year: "2025",
      title: "React Ecosystem",
      description:
        "Built modern frontend applications using React, TypeScript, Tailwind CSS, and component-based architecture.",
      icon: <Sparkles className="size-4 md:size-5" />,
      x: isMobile ? 50 : 55,
      y: isMobile ? 35 : 30,
    },
    {
      year: "2025-2026",
      title: "Full-Stack Development",
      description:
        "Developed full-stack projects with Express.js, MongoDB, authentication, and REST APIs.",
      icon: <Database className="size-4 md:size-5" />,
      x: isMobile ? 50 : 30,
      y: isMobile ? 65 : 60,
    },
    {
      year: "Present",
      title: "Scalable Frontend Systems",
      description:
        "Applying TanStack Query, Zustand, React Hook Form, Zod, and modern frontend architecture patterns.",
      icon: <Code2 className="size-4 md:size-5" />,
      x: isMobile ? 50 : 80,
      y: isMobile ? 90 : 80,
    },
  ];

  // Tạo đường dẫn SVG linh hoạt dựa trên tọa độ milestones
  const getPathData = () => {
    if (milestones.length < 2) return "";
    let d = `M ${milestones[0].x * 10} ${milestones[0].y * 9}`; // Nhân 10 và 9 vì viewBox="0 0 1000 900"
    for (let i = 1; i < milestones.length; i++) {
      const prev = milestones[i - 1];
      const curr = milestones[i];
      // Tạo đường cong mềm mại
      d += ` C ${prev.x * 10} ${(prev.y + (curr.y - prev.y) / 2) * 9}, ${curr.x * 10} ${(prev.y + (curr.y - prev.y) / 2) * 9}, ${curr.x * 10} ${curr.y * 9}`;
    }
    return d;
  };

  return (
    <TooltipProvider>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container relative z-10 mx-auto px-4 overflow-hidden"
      >
        {/* Constellation Container với tỷ lệ khung hình cố định */}
        <div className="relative mx-auto w-full max-w-5xl aspect-[10/12] md:aspect-[10/9]">
          {/* SVG Lines - Tự động co giãn theo ViewBox */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 900"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d={getPathData()}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth={isMobile ? "4" : "2"}
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Stars */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: `${milestone.y}%`,
                left: `${milestone.x}%`,
              }}
            >
              {/* Year Label */}
              <div className="absolute left-1/2 top-[-30px] md:top-[-42px] -translate-x-1/2 whitespace-nowrap text-[10px] md:text-sm font-medium text-white/60">
                {milestone.year}
              </div>

              {/* Glow Behind Star */}
              <div className="absolute left-1/2 top-1/2 h-16 w-16 md:h-28 md:w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    whileHover={{ scale: 1.2 }}
                    className="group relative z-10 flex flex-col items-center outline-none"
                  >
                    <div className="relative">
                      <Star className="size-8 md:size-14 fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {milestone.icon}
                      </div>
                    </div>

                    <p className="mt-2 md:mt-4 max-w-[120px] md:max-w-[200px] text-center font-heading text-[10px] md:text-base font-medium text-foreground line-clamp-1 md:line-clamp-none">
                      {milestone.title}
                    </p>
                  </motion.button>
                </TooltipTrigger>

                <TooltipContent side="top">
                  <p className="font-bold text-secondary text-sm md:text-base">
                    {milestone.title}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-tight">
                    {milestone.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
