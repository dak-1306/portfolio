import CosmicPlanetScene from "@/components/cosmic/CosmicPlanetScene";
import { Button } from "@/components/ui/button";
{
  /* <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300">
            Frontend Developer
          </p>

          <h1 className="text-glow mb-6 text-6xl font-black leading-tight lg:text-8xl">
            DAK
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Crafting immersive digital experiences with React, TypeScript,
            animation systems, and modern frontend architecture.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="glass cosmic-border rounded-2xl px-6 py-3">
              View Projects
            </button>

            <button className="rounded-2xl border border-white/10 px-6 py-3 text-white/80 transition hover:border-violet-400/40 hover:text-white">
              Contact Me
            </button>
          </div>
        </div> */
}
export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-12 gap-8 px-10">
        <div className="relative z-10 col-span-5 flex flex-col justify-center space-y-6">
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
        <div className="col-span-7">
          <CosmicPlanetScene />
        </div>
      </div>
    </div>
  );
}
