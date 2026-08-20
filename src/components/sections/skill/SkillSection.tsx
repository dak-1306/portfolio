import { motion } from "framer-motion";
import { Atom, Code2, Palette, Sparkles, Database, Flame } from "lucide-react";

import Figma from "@/assets/icons/figma.svg?react";
import OpenAi from "@/assets/icons/openAI.svg?react";
import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import { skillsHeader } from "@/data/sections";
import {
  sectionReveal,
  staggerContainer,
  staggerItem,
  DEFAULT_VIEWPORT,
} from "@/motion";

const skillsData = [
  {
    icon: <Atom className="size-7" />,
    name: "React",
    description:
      "Building modern, component-based web applications with reusable architecture and responsive user interfaces.",
    tags: ["Hooks", "Context API", "React Router", "Component Design"],
  },
  {
    icon: <Code2 className="size-7" />,
    name: "TypeScript",
    description:
      "Developing maintainable and type-safe applications with improved code quality and scalability.",
    tags: ["Interfaces", "Types", "Generics", "Type Safety"],
  },
  {
    icon: <Palette className="size-7" />,
    name: "Tailwind CSS",
    description:
      "Creating responsive and visually appealing user interfaces using a utility-first styling approach.",
    tags: ["Responsive Design", "Custom Themes", "UI Development"],
  },
  {
    icon: <Sparkles className="size-7" />,
    name: "State & Data Management",
    description:
      "Managing application state, server state, and asynchronous data efficiently in modern React applications.",
    tags: ["TanStack Query", "Zustand", "Caching", "Server State"],
  },
  {
    icon: <Database className="size-7" />,
    name: "Backend Fundamentals",
    description:
      "Building RESTful APIs, authentication flows, and database operations for full-stack applications.",
    tags: ["Express.js", "MongoDB", "JWT", "Mongoose"],
  },
  {
    icon: <Flame className="size-7" />,
    name: "Firebase",
    description:
      "Integrating cloud services for authentication, database, and file storage solutions.",
    tags: ["Authentication", "Firestore", "Storage"],
  },
  {
    icon: <Figma className="size-7" />,
    name: "Figma",
    description:
      "Transforming design concepts into responsive and consistent user interfaces.",
    tags: ["UI Design", "Prototyping", "Design-to-Code"],
  },
  {
    icon: <OpenAi className="size-7" />,
    name: "AI-Assisted Development",
    description:
      "Using AI tools such as ChatGPT, Claude, and GitHub Copilot to accelerate development, improve code quality, and support problem solving.",
    tags: ["ChatGPT", "Claude", "GitHub Copilot", "Documentation"],
  },
];

export default function SkillSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      id="skills"
      className="container relative z-10 mx-auto px-4 space-y-16"
    >
      <SectionHeading
        badge={skillsHeader.badge}
        title={skillsHeader.title}
        description={skillsHeader.description}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={DEFAULT_VIEWPORT}
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >
        {skillsData.map((skill) => (
          <motion.div key={skill.name} variants={staggerItem}>
            <CosmicCard
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
              tags={skill.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
