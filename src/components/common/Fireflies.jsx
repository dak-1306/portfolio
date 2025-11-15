import Firefly from "./Firefly";

export default function Fireflies({ count = 12 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Firefly key={i} />
      ))}
    </>
  );
}
