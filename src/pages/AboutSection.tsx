import { motion } from "framer-motion";
import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import AboutConstellation from "@/components/about/AboutConstellation";
import { about, features, journey } from "@/data/about";
import {
  sectionReveal,
  staggerContainer,
  staggerItem,
  DEFAULT_VIEWPORT,
} from "@/motion";

export default function AboutSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      id="about"
      className="space-y-16"
    >
      <div className="container relative z-10 mx-auto px-4 space-y-16">
        <SectionHeading
          badge={about.badge}
          title={about.title}
          description={about.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <CosmicCard
                icon={item.icon}
                name={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
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
