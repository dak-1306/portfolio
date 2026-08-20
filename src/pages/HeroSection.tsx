import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SaturnScene from "@/components/cosmic/planets/SaturnScene";
import CometTextReveal from "@/components/common/CometTextReveal";
import { Button } from "@/components/ui/button";
import { projectSample } from "@/data/project";
import { hero } from "@/data/hero";
import { sectionReveal, DEFAULT_VIEWPORT } from "@/motion";

export default function HeroSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      id="hero"
      className="relative flex min-h-screen items-center justify-center mt-12 md:mt-0"
    >
      <div className="container mx-auto px-4 grid grid-cols-12 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="relative z-10 col-span-12 md:col-span-5 flex flex-col justify-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            {hero.badge}
          </p>

          {/* Comet Text Reveal cho Main Title */}
          <CometTextReveal
            as="h1"
            text={hero.title}
            delay={0.3}
            duration={2}
            className="text-4xl font-black leading-tight lg:text-6xl"
          />

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>

          <div className="space-x-4 pt-2">
            <Link to={`/project/${projectSample[0].slug}`}>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
            <a href="#contact">
              <Button size="lg">Contact Me</Button>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Scene */}
        <div className="col-span-12 md:col-span-7">
          <SaturnScene />
        </div>
      </div>
    </motion.section>
  );
}
