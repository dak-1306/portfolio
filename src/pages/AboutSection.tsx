import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Globe2,
  Code2,
  Database,
  FileCode2,
} from "lucide-react";

import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import AboutConstellation from "@/components/about/AboutConstellation";

const features = [
  {
    icon: <Rocket className="size-7" />,
    title: "Passionate Coder",
    description:
      "My IT journey started in my first year, but it was late in that year when I wrote my first lines of HTML, CSS, and JavaScript that my true passion was ignited. Soon after, I discovered React—its component-based architecture, logical flow, and massive ecosystem immediately captivated me",
  },
  {
    icon: <Sparkles className="size-7" />,
    title: "Performance-Driven Development",
    description:
      "When I code, I prioritize three things: clean architecture, high performance, and visually optimized user interfaces. I believe good code shouldn't just work; it should provide a seamless experience for the user and be easy to scale.",
  },
  {
    icon: <Globe2 className="size-7" />,
    title: "Adaptable Team Player",
    description:
      "Beyond the code, I am a highly disciplined and cheerful team player. I am deeply adaptable and always ready to dive into new technologies if a project demands it. Currently, I am seeking a dynamic internship opportunity where I can contribute my frontend skills, learn from experienced mentors, and grow in a real-world environment.",
  },
];

const milestones = [
  {
    year: "Year 1",
    title: "Foundations of Web Development",
    description:
      "Embarked on my frontend journey by mastering the core principles of HTML, CSS, and JavaScript.",
    icon: <FileCode2 className="size-5" />,
    x: 120,
    y: 140,
  },

  {
    year: "Year 2",
    title: "React.js & Modern UI",
    description:
      "Deep dived into component-based architecture and utility-first styling with TailwindCSS.",
    icon: <Sparkles className="size-5" />,
    x: 520,
    y: 280,
  },

  {
    year: "Late Year 2 - Early Year 3",
    title: "Backend Fundamentals",
    description:
      "Exploring the server-side with Express.js, RESTful APIs, and NoSQL databases like MongoDB.",
    icon: <Database className="size-5" />,
    x: 280,
    y: 540,
  },

  {
    year: "Year 3 - Present",
    title: "Advanced Scalability & Systems",
    description:
      "Focusing on TypeScript integration, robust frontend architectures, and modern design systems with shadcn/ui.",
    icon: <Code2 className="size-5" />,
    x: 780,
    y: 750,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="space-y-16">
      <div className="container relative z-10 mx-auto px-4 space-y-16">
        <SectionHeading
          badge="About Me"
          title="Who am I?"
          description="A passionate frontend developer with a love for clean code, high performance, and visually stunning user interfaces. I thrive in collaborative environments and am always eager to learn and adapt to new technologies."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CosmicCard
                icon={item.icon}
                name={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <SectionHeading
        badge="My Journey"
        title="The Journey of Code & Discipline"
        description="From my humble beginnings in IT to my current passion for frontend development, my journey has been one of continuous learning and growth. I am deeply committed to honing my skills, embracing new challenges, and contributing to projects that push the boundaries of what's possible in web development."
        center={true}
      />
      <AboutConstellation milestones={milestones} />
    </section>
  );
}
