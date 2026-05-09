import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Planet from "@/components/cosmic/planets/Planet";
import PlanetLights from "@/components/cosmic/planets/PlanetLights";
import FloatingParticles from "@/components/cosmic/planets/FloatingParticles";
export default function CosmicMarsScene() {
  return (
    <div className="relative h-[700px] w-full">
      {" "}
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 40,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {" "}
        {/* Fog */} <fog attach="fog" args={["#020617", 6, 14]} />{" "}
        {/* Lighting */} <PlanetLights /> {/* Stars */}{" "}
        <Stars
          radius={100}
          depth={50}
          count={2500}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />{" "}
        {/* Floating effect */}{" "}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          {" "}
          <Planet
            color="/textures/planets/mars/color.webp"
            normal="/textures/planets/mars/normal.webp"
            roughness="/textures/planets/mars/roughness.webp"
            showAtmosphere={true}
            showRing={true}
          />{" "}
        </Float>{" "}
        {/* Particles */} <FloatingParticles /> {/* HDRI */}{" "}
        <Environment preset="night" /> {/* Disable zoom */}{" "}
        {/* Postprocessing */}
        <EffectComposer>
          <Bloom
            intensity={0.35}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotateSpeed={0.3}
        />{" "}
      </Canvas>{" "}
    </div>
  );
}
