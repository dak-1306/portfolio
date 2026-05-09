import CosmicGlow from "./CosmicGlow";
import GridOverlay from "./GridOverlay";
import StarsCanvas from "./StarsCanvas";
export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {" "}
      {/* Base */} <div className="absolute inset-0 bg-background" />{" "}
      {/* Main Cosmic Gradient */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312e81_0%,#020617_40%,#000000_100%)]" />{" "}
      {/* Extra Ambient Gradient */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)]" />{" "}
      {/* Vignette */} <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Grid */} <GridOverlay /> {/* Glow */} <CosmicGlow /> {/* Stars */}{" "}
      <StarsCanvas /> {/* Noise */}{" "}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage: ` repeating-radial-gradient( circle at 0 0, transparent 0, rgba(255,255,255,0.12) 1px, transparent 2px ) `,
          backgroundSize: "4px 4px",
        }}
      />{" "}
    </div>
  );
}
