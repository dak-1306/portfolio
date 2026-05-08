"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { TextureLoader, Mesh, SRGBColorSpace } from "three";
import { useEffect, useRef } from "react";

import Atmosphere from "./Atmosphere";
import PlanetRing from "./PlanetRing";

export default function Planet() {
  const planetRef = useRef<Mesh | null>(null);

  const colorMap = useLoader(TextureLoader, "/textures/planets/mars/color.jpg");

  const normalMap = useLoader(
    TextureLoader,
    "/textures/planets/mars/normal.jpg",
  );

  const roughnessMap = useLoader(
    TextureLoader,
    "/textures/planets/mars/roughness.jpg",
  );

  useEffect(() => {
    // Giúp màu texture hiển thị đúng
    colorMap.colorSpace = SRGBColorSpace;
  }, [colorMap]);

  useFrame((_, delta) => {
    if (!planetRef.current) return;

    planetRef.current.rotation.y += delta * 0.12;
  });

  return (
    <>
      <group position={[0, 0, 0]}>
        {/* Planet */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[1.2, 128, 128]} />

          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            metalness={0.05}
            roughness={0.8}
          />
        </mesh>

        {/* Atmosphere */}
        <Atmosphere />

        {/* Ring */}
        <PlanetRing />
      </group>
    </>
  );
}
