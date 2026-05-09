import { useLoader } from "@react-three/fiber";

import { TextureLoader, SRGBColorSpace } from "three";

import Atmosphere from "./Atmosphere";
import PlanetRing from "./PlanetRing";

export default function Planet({
  color,
  normal,
  roughness,
  showAtmosphere,
  showRing,
  children,
}: {
  color: string;
  normal: string;
  roughness: string;
  showAtmosphere: boolean;
  showRing: boolean;
  children?: React.ReactNode;
}) {
  const colorMap = useLoader(TextureLoader, color);

  const normalMap = useLoader(TextureLoader, normal);

  const roughnessMap = useLoader(TextureLoader, roughness);

  // Correct color space
  colorMap.colorSpace = SRGBColorSpace;

  return (
    <group>
      {/* Planet */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />

        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalness={0.05}
          roughness={0.8}
          envMapIntensity={1.2}
        />
      </mesh>
      {children}
      {/* Atmosphere */}
      {showAtmosphere && <Atmosphere />}

      {/* Ring */}
      {showRing && <PlanetRing />}
    </group>
  );
}
