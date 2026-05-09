// components/about/AboutConstellation.tsx

import { motion } from "framer-motion";

import { Code2, Database, FileCode2, Sparkles, Star } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const milestones = [
  {
    year: "Năm 1",
    title: "HTML, CSS, JavaScript",
    description:
      "Bắt đầu hành trình frontend với nền tảng xây dựng giao diện web cơ bản.",
    icon: <FileCode2 className="size-5" />,
    x: 120,
    y: 140,
  },

  {
    year: "Năm 2",
    title: "React.js & TailwindCSS",
    description:
      "Tiếp cận component-based architecture và modern UI development.",
    icon: <Sparkles className="size-5" />,
    x: 520,
    y: 280,
  },

  {
    year: "Cuối năm 2 - Đầu năm 3",
    title: "Express.js & MongoDB",
    description: "Tìm hiểu backend cơ bản, REST API và database NoSQL.",
    icon: <Database className="size-5" />,
    x: 280,
    y: 540,
  },

  {
    year: "Năm 3 - Hiện tại",
    title: "TypeScript • React.ts • shadcn/ui",
    description:
      "Tập trung vào scalable frontend architecture và modern design systems.",
    icon: <Code2 className="size-5" />,
    x: 780,
    y: 750,
  },
];

export default function AboutConstellation() {
  return (
    <div className="container relative z-10 mx-auto px-4 pt-32">
      {/* Heading */}
      <SectionHeading
        badge="Constellation of Growth"
        title="My Frontend Journey"
        description="Một hành trình khám phá và phát triển kỹ năng frontend qua từng năm."
        center={true}
      />

      {/* Constellation */}
      <div
        className="
          relative mx-auto mt-28
          h-[900px]
          max-w-6xl
        "
      >
        {/* SVG Lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 900"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Glow Filter */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />

              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Line 1 */}
          <motion.path
            d="
              M 120 120
              C 230 135, 330 180, 450 260
            "
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.6,
              delay: 0.2,
            }}
          />

          {/* Line 2 */}
          <motion.path
            d="
              M 450 260
              C 390 410, 310 470, 240 520
            "
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.6,
              delay: 0.6,
            }}
          />

          {/* Line 3 */}
          <motion.path
            d="
              M 240 520
              C 380 650, 520 700, 680 720
            "
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.6,
              delay: 1,
            }}
          />
        </svg>

        {/* Stars */}
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.title}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
            }}
            viewport={{
              once: true,
            }}
            className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              top: milestone.y,
              left: milestone.x,
            }}
          >
            {/* Time */}
            <div
              className="
                absolute left-1/2 top-[-42px]

                -translate-x-1/2

                whitespace-nowrap

                text-sm
                font-medium

                text-white/80
              "
            >
              {milestone.year}
            </div>

            {/* Glow */}
            <div
              className="
                absolute left-1/2 top-1/2

                h-28 w-28

                -translate-x-1/2 -translate-y-1/2

                rounded-full

                bg-white/20

                blur-3xl
              "
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.15,
                  }}
                  className="
                    group relative z-10

                    flex flex-col items-center

                    outline-none
                  "
                >
                  {/* Star */}
                  <div className="relative">
                    <Star
                      className="
                        size-14

                        fill-white
                        text-white

                        drop-shadow-[0_0_18px_rgba(255,255,255,0.95)]

                        transition-all duration-300

                        group-hover:
                        drop-shadow-[0_0_32px_rgba(255,255,255,1)]
                      "
                    />

                    {/* Icon */}
                    <div
                      className="
                        absolute inset-0

                        flex items-center justify-center

                        text-black
                      "
                    >
                      {milestone.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <p
                    className="
                      mt-4

                      max-w-[220px]

                      text-center

                      font-heading
                      text-base
                      font-medium

                      text-foreground
                    "
                  >
                    {milestone.title}
                  </p>
                </motion.button>
              </TooltipTrigger>

              {/* Tooltip */}
              <TooltipContent
                side="top"
                className="
                  max-w-xs

                  border border-white/10

                  bg-card/95

                  backdrop-blur-xl
                "
              >
                <div>
                  <h4
                    className="
                      font-heading
                      text-base
                      font-semibold

                      text-white
                    "
                  >
                    {milestone.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      leading-relaxed
                      text-muted-foreground
                    "
                  >
                    {milestone.description}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
