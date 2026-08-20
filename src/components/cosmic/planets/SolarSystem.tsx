import { motion } from "framer-motion";
import { Rocket, Sparkles, Orbit } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { solarSystemReveal, DEFAULT_VIEWPORT } from "@/motion";

type Project = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

const PLANET_CONFIGS = [
  {
    orbit: "orbit-mercury",
    planet: "planet-mercury",
    size: "size-5 md:size-6",
    icon: Sparkles,
  },
  {
    orbit: "orbit-venus",
    planet: "planet-venus",
    size: "size-7 md:size-9",
    icon: Orbit,
  },
  {
    orbit: "orbit-mars",
    planet: "planet-mars",
    size: "size-6 md:size-8",
    icon: Rocket,
  },
];

export default function SolarSystem({
  projectData,
}: {
  projectData: Project[];
}) {
  if (!projectData || projectData.length === 0) return null;

  return (
    <TooltipProvider delayDuration={100}>
      <section className="relative flex min-h-[500px] md:min-h-screen items-center justify-center overflow-hidden py-20">
        <motion.div
          variants={solarSystemReveal}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="relative flex items-center justify-center scale-[0.5] sm:scale-[0.8] md:scale-[1.1] lg:scale-[1.3] transform-gpu will-change-transform"
        >
          {/* Sun Glow */}
          <div className="absolute h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-yellow-400/10 blur-[80px] md:blur-[120px] pointer-events-none" />

          {/* Sun */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="sun relative z-20 transform-gpu"
          >
            <div className="sun-surface" />
          </motion.div>

          {/* Planets Rendering */}
          {projectData.slice(0, 4).map((project, index) => {
            const config = PLANET_CONFIGS[index];
            const Icon = config.icon;

            return (
              <div
                key={project.id}
                className={`orbit ${config.orbit} border-white/5 transform-gpu will-change-transform`}
              >
                <Link to={`/project/${project.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`planet ${config.planet} ${config.size} cursor-pointer group transform-gpu`}
                  >
                    <div className="planet-glow group-hover:opacity-100 transition-opacity duration-200" />

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="relative z-10 text-white/90 flex items-center justify-center h-full w-full">
                          <Icon className="w-1/2 h-1/2" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <div className="space-y-1">
                          <p className="font-bold text-secondary text-sm md:text-base">
                            {project.name}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </motion.div>

        {/* Ambient background particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="stars-overlay opacity-30" />
        </div>
      </section>
    </TooltipProvider>
  );
}
