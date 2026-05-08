import type { ReactNode } from "react";

type CosmicLayoutProps = {
  children: ReactNode;
};

export default function CosmicLayout({ children }: CosmicLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {/* Base */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#020617_45%,#000000_100%)]" />

        {/* Purple Glow */}
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl" />

        {/* Cyan Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Stars */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(1px 1px at 40px 70px, white, transparent),
              radial-gradient(1.5px 1.5px at 120px 40px, white, transparent),
              radial-gradient(2px 2px at 200px 120px, white, transparent),
              radial-gradient(1px 1px at 300px 200px, white, transparent)
            `,
            backgroundSize: "400px 400px",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle at 0 0,
                transparent 0,
                rgba(255,255,255,0.15) 1px,
                transparent 2px
              )
            `,
            backgroundSize: "4px 4px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </main>
  );
}
