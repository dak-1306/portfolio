// import CosmicMarsScene from "@/components/layouts/CosmicMarsScene";
import SaturnScene from "@/components/cosmic/planets/SaturnScene";
import { Button } from "@/components/ui/button";
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
            Crafting immersive digital experiences with React, TypeScript,
            animation systems, and modern frontend architecture.
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg">
              View Projects
            </Button>
            <Button size="lg">Contact Me</Button>
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
