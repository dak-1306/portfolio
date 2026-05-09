import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function FloatingParticles() {
  const particles = useMemo(() => {
    const count = 800;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 8;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() - 0.5) * 2);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  return (
    <Points positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}
