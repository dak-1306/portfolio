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
