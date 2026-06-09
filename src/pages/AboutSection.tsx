import { motion } from "framer-motion";

import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import AboutConstellation from "@/components/about/AboutConstellation";
import { sectionReveal } from "@/motion/section";

import { about, features, journey } from "@/data/about";

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
