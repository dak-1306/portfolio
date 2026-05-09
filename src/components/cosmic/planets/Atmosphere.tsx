import { AdditiveBlending, BackSide } from "three";

export default function Atmosphere() {
  return (
    <mesh scale={1.04}>
      <sphereGeometry args={[1.21, 64, 64]} />

      <meshBasicMaterial
        color="#93c5fd"
        transparent
        opacity={0.035}
        blending={AdditiveBlending}
        side={BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}
