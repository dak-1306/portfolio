import { AdditiveBlending, BackSide } from "three";

export default function MoonGlow() {
  return (
    <mesh scale={1.06}>
      <sphereGeometry args={[1.22, 64, 64]} />

      <meshBasicMaterial
        color="#cbd5e1"
        transparent
        opacity={0.04}
        blending={AdditiveBlending}
        side={BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}
