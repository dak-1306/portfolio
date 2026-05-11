// import CosmicMarsScene from "@/components/layouts/CosmicMarsScene";
import SaturnScene from "@/components/cosmic/planets/SaturnScene";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projectSample } from "@/data/project";
import { hero } from "@/constants/headingSection";
import { motion } from "framer-motion";
import { sectionReveal } from "@/motion/section";

export default function HeroSection() {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="hero"
      className="relative flex min-h-screen items-center justify-center mt-12 md:mt-0"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="relative z-10 col-span-12 md:col-span-5 flex flex-col justify-center space-y-6">
          <p className=" text-sm uppercase tracking-[0.3em] text-primary mb-4">
            {hero.badge}
          </p>
          <h1 className="text-glow text-6xl font-black leading-tight lg:text-8xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>
          <div className="space-x-4">
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
        <div className="col-span-12 md:col-span-7">
          {/* <CosmicMarsScene /> */}
          <SaturnScene />
        </div>
      </div>
    </motion.section>
  );
}
