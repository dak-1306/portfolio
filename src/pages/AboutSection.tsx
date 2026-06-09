import { motion } from "framer-motion";
import { Sparkles, Rocket, Globe2 } from "lucide-react";

import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import AboutConstellation from "@/components/about/AboutConstellation";

import { about, journey } from "@/constants/headingSection";
import { sectionReveal } from "@/motion/section";

const features = [
  {
    icon: <Rocket className="size-7" />,
    title: "Frontend Development",
    description:
      "My journey into web development began with HTML, CSS, and JavaScript, and quickly evolved into a strong focus on React. I enjoy building responsive, interactive, and user-friendly web applications while continuously improving my technical skills.",
  },
  {
    icon: <Sparkles className="size-7" />,
    title: "Performance-Driven Development",
    description:
      "I focus on writing maintainable code, building scalable architectures, and creating smooth user experiences. For me, good software is not only functional but also easy to understand and extend.",
  },
  {
    icon: <Globe2 className="size-7" />,
    title: "Adaptable Team Player",
    description:
      "I enjoy collaborating with others, learning from feedback, and adapting to new technologies when needed. Currently, I am seeking a frontend internship where I can contribute, learn, and grow in a professional environment.",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      id="about"
      className="space-y-16"
    >
      <div className="container relative z-10 mx-auto px-4 space-y-16">
        <SectionHeading
          badge={about.badge}
          title={about.title}
          description={about.description}
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
        badge={journey.badge}
        title={journey.title}
        description={journey.description}
      />
      <AboutConstellation />
    </motion.section>
  );
}
