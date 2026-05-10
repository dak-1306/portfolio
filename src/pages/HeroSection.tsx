// import CosmicMarsScene from "@/components/layouts/CosmicMarsScene";
import SaturnScene from "@/components/cosmic/planets/SaturnScene";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/project";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="grid grid-cols-12 gap-8 px-10">
        <div className="relative z-10 col-span-12 md:col-span-5 flex flex-col justify-center space-y-6">
          <p className=" text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Frontend Developer
          </p>
          <h1 className="text-glow text-6xl font-black leading-tight lg:text-8xl">
            DAK
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I build intuitive, performance-driven web interfaces using React. By
            integrating AI into my workflow, I optimize my coding process and
            extend my capabilities seamlessly across the full stack
          </p>
          <div className="space-x-4">
            <Link to={`/project/${projects[0].slug}`}>
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
    </section>
  );
}
