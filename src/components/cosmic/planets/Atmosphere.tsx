import { AdditiveBlending, BackSide } from "three";

export default function Atmosphere() {
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[1.22, 64, 64]} />

      <meshBasicMaterial
        color="#60a5fa"
        transparent
        opacity={0.12}
        blending={AdditiveBlending}
        side={BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}
