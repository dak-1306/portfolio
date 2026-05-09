export default function PlanetLights() {
  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.25} />

      {/* Sun light */}
      <directionalLight position={[5, 3, 5]} intensity={2.5} color="#ffffff" />

      {/* Cyan rim */}
      <pointLight
        position={[-4, -2, 2]}
        intensity={2}
        distance={12}
        color="#22d3ee"
      />

      {/* Violet fill */}
      <pointLight
        position={[3, 0, -3]}
        intensity={1.5}
        distance={10}
        color="#a855f7"
      />
    </>
  );
}
