import { motion } from "framer-motion";
import CosmicCard from "@/components/common/CosmicCard";
import SectionHeading from "@/components/common/SectionHeading";
import AboutConstellation from "@/components/sections/about/AboutConstellation";
import { aboutData } from "@/data/sections";
import {
  sectionReveal,
  staggerContainer,
  staggerItem,
  DEFAULT_VIEWPORT,
} from "@/motion";
import { Globe2, Rocket, Sparkles, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  Sparkles,
  Globe2,
};

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
          badge={aboutData.header.badge}
          title={aboutData.header.title}
          description={aboutData.header.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {aboutData.features.map((item) => {
            const IconComponent = ICON_MAP[item.iconName];

            return (
              <motion.div key={item.title} variants={staggerItem}>
                <CosmicCard
                  icon={
                    IconComponent ? <IconComponent className="size-7" /> : null
                  }
                  name={item.title}
                  description={item.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <SectionHeading
        badge={aboutData.journey.badge}
        title={aboutData.journey.title}
        description={aboutData.journey.description}
      />
      <AboutConstellation />
    </motion.section>
  );
}
