import { Atom, Code2, Palette, Sparkles, Database, Flame } from "lucide-react";
import Figma from "@/assets/icons/figma.svg?react";
import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";

import { skills } from "@/constants/headingSection";
import { motion } from "framer-motion";
import { sectionReveal } from "@/motion/section";

const skillsData = [
  // Frontend Group - Core Strength
  {
    icon: <Atom className="size-7" />,
    name: "React",
    level: 85,
    description:
      "Building modern, component-based user interfaces with a focus on performance optimization.",
    tags: ["Hooks", "Context API", "React Router", "shadcn/ui"],
  },
  {
    icon: <Code2 className="size-7" />,
    name: "JavaScript/TypeScript",
    level: 70,
    description:
      "Crafting smooth logic and transitioning towards type-safe development for cleaner codebases.",
    tags: ["ES6+", "DOM", "Basic Types", "Interfaces"],
  },
  {
    icon: <Palette className="size-7" />,
    name: "TailwindCSS",
    level: 90,
    description:
      "Designing responsive and aesthetic interfaces rapidly using a utility-first CSS approach.",
    tags: ["Responsive Design", "Custom Themes", "Animations"],
  },

  // AI & Backend Group - Extended Capabilities
  {
    icon: <Sparkles className="size-7" />,
    name: "AI-Native Workflow",
    level: 95,
    description:
      "Leveraging AI (Claude, GPT, Copilot) to optimize code quality and accelerate Full-stack development.",
    tags: ["Prompt Engineering", "Code Optimization", "Rapid Prototyping"],
  },
  {
    icon: <Database className="size-7" />,
    name: "Express & MongoDB",
    level: 60,
    description:
      "Developing essential backend systems and RESTful APIs with strong AI-assisted logic.",
    tags: ["RESTful API", "CRUD operations", "Mongoose"],
  },

  // Tools & Infrastructure
  {
    icon: <Flame className="size-7" />,
    name: "Firebase",
    level: 65,
    description:
      "Integrating cloud services for real-world applications and academic projects.",
    tags: ["Authentication", "Firestore", "Storage"],
  },
  {
    icon: <Figma className="size-7" />,
    name: "Figma",
    level: 75,
    description:
      "Translating design mockups into pixel-perfect code while ensuring UI/UX consistency.",
    tags: ["UI/UX Design", "Prototyping", "Design-to-Code"],
  },
];
export default function SkillSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      id="skills"
      className="container relative z-10 mx-auto px-4 space-y-16"
    >
      {" "}
      {/* Heading */}{" "}
      <SectionHeading
        badge={skills.badge}
        title={skills.title}
        description={skills.description}
      />{" "}
      {/* Grid */}{" "}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 ">
        {" "}
        {skillsData.map((skill) => (
          <CosmicCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            description={skill.description}
            tags={skill.tags}
          />
        ))}{" "}
      </div>{" "}
    </motion.section>
  );
}
