"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import { AdaptiveDpr, Environment, Float, Stars } from "@react-three/drei";

import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

import Planet from "@/components/cosmic/planets/Planet";

import MoonGlow from "@/components/cosmic/planets/MoonGlow";
import MoonRimLight from "@/components/cosmic/planets/MoonRimLight";
import MoonDust from "@/components/cosmic/planets/MoonDust";

export default function CosmicMoonScene({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-[#020617]">
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        {/* Left */}
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          {children}
        </div>

        {/* Right spacing */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* 3D */}
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 40,
          }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          {/* Performance */}
          <AdaptiveDpr pixelated />
          {/* Fog */}
          <fog attach="fog" args={["#020617", 5, 12]} />
          {/* Lights */}
          <MoonRimLight />
          {/* Stars */}
          <Stars
            radius={80}
            depth={40}
            count={1200}
            factor={3}
            saturation={0}
            fade
            speed={0.2}
          />
          {/* Moon dust */}
          <MoonDust />
          {/* Moon */}
          <group position={[2.5, 0, 0]}>
            <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.2}>
              <Suspense fallback={null}>
                <Planet
                  color="/textures/planets/moon/color.webp"
                  normal="/textures/planets/moon/normal.webp"
                  roughness="/textures/planets/moon/roughness.webp"
                  showAtmosphere={false}
                  showRing={false}
                >
                  <MoonGlow />
                </Planet>
              </Suspense>
            </Float>
          </group>
          {/* HDRI */}
          <Environment preset="night" /> {/* Disable zoom */}{" "}
          {/* Postprocessing */}
          <EffectComposer>
            <Bloom
              intensity={0.3}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />

            <Vignette eskil={false} offset={0.15} darkness={0.9} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
    </section>
  );
}
