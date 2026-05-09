import { motion } from "framer-motion";
import { Rocket, Sparkles, Orbit } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const planets = [
  {
    name: "Mercury",
    orbit: "orbit-mercury",
    planet: "planet-mercury",
    size: "size-5",
    icon: <Sparkles className="size-3" />,
    slug: "mercury-project",
  },
  {
    name: "Venus",
    orbit: "orbit-venus",
    planet: "planet-venus",
    size: "size-7",
    icon: <Orbit className="size-4" />,
    slug: "venus-project",
  },
  {
    name: "Mars",
    orbit: "orbit-mars",
    planet: "planet-mars",
    size: "size-6",
    icon: <Rocket className="size-4" />,
    slug: "mars-project",
  },
];

export default function SolarSystem() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Main Solar System */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center scale-[1.35]"
      >
        {/* Sun Glow */}
        <div className="absolute h-[300px] w-[300px] rounded-full bg-yellow-400/20 blur-3xl" />

        {/* Sun */}
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="sun relative z-20"
        >
          <div className="sun-surface" />
        </motion.div>

        {/* Planets */}
        {planets.map((planet) => (
          <div key={planet.name} className={`orbit ${planet.orbit}`}>
            <Link to={`/project/${planet.slug}`}>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`planet ${planet.planet} ${planet.size}`}
              >
                <div className="planet-glow" />

                <Tooltip>
                  <TooltipTrigger className="absolute z-10">
                    <div className="relative z-10 text-white/90">
                      {planet.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background/90 text-foreground">
                    {planet.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </Link>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
