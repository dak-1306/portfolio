import { AdditiveBlending, DoubleSide } from "three";

export default function PlanetRing() {
  return (
    <mesh rotation={[Math.PI / 2.8, 0, 0]}>
      <ringGeometry args={[1.7, 2.2, 128]} />

      <meshBasicMaterial
        color="#a855f7"
        transparent
        opacity={0.12}
        side={DoubleSide}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}
