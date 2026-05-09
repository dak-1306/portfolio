import { useMemo } from "react";

import { Points, PointMaterial } from "@react-three/drei";

export default function MoonDust() {
  const particles = useMemo(() => {
    const count = 300;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 2;

      const theta = Math.random() * Math.PI * 2;

      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01}
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  );
}
