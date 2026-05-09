export default function MoonRimLight() {
  return (
    <>
      {/* Main moon light */}
      <directionalLight position={[5, 2, 5]} intensity={2.5} color="#ffffff" />

      {/* Cold rim */}
      <pointLight
        position={[-3, 1, -2]}
        intensity={1.5}
        distance={10}
        color="#93c5fd"
      />
    </>
  );
}
