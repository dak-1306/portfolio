import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function PlanetRing() {
  const particles = useMemo(() => {
    const count = 1200;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 0.6;

      const angle = Math.random() * Math.PI * 2;

      const y = (Math.random() - 0.5) * 0.03;

      positions[i * 3] = Math.cos(angle) * radius;

      positions[i * 3 + 1] = y;

      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return positions;
  }, []);

  return (
    <group rotation={[Math.PI / 2.8, 0, 0]}>
      <Points positions={particles} stride={3}>
        <PointMaterial
          transparent
          color="#c4b5fd"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}
