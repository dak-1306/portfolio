// CosmicBackground.tsx

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  depth: number;
};

export default function CosmicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#020617_45%,#000000_100%)]" />

      {/* Nebula */}
      <NebulaLayer />

      <MilkyWay />

      {/* Stars */}
      <StarsCanvas />

      {/* Cosmic Glow */}
      <CosmicGlow />

      {/* Dust */}
      <CosmicDust />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.88)_100%)]" />
    </div>
  );
}

function MilkyWay() {
  return (
    <>
      {/* Main streak */}
      <div
        className="
        absolute
        left-[-15%]
        top-[18%]
        h-[650px]
        w-[1400px]
        rotate-[-18deg]
        rounded-full
        opacity-[0.08]
        blur-[130px]
        mix-blend-screen
        bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(168,85,247,0.10)_20%,rgba(59,130,246,0.06)_40%,transparent_72%)]
      "
      />

      {/* Soft support haze */}
      <div
        className="
        absolute
        left-[10%]
        top-[35%]
        h-[500px]
        w-[1000px]
        rotate-[-12deg]
        rounded-full
        opacity-[0.05]
        blur-[120px]
        mix-blend-lighten
        bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(34,211,238,0.05)_35%,transparent_75%)]
      "
      />
    </>
  );
}

function NebulaLayer() {
  return (
    <>
      {/* Large purple nebula */}
      <div className="absolute left-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-violet-500/12 blur-[160px]" />

      {/* Cyan atmosphere */}
      <div className="absolute right-[0%] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-[150px]" />

      {/* Pink distant nebula */}
      <div className="absolute bottom-[5%] left-[30%] h-[380px] w-[380px] rounded-full bg-fuchsia-500/8 blur-[140px]" />

      {/* Deep blue fog */}
      <div className="absolute bottom-[-10%] right-[20%] h-[450px] w-[450px] rounded-full bg-blue-500/8 blur-[180px]" />
    </>
  );
}

function CosmicGlow() {
  return (
    <>
      {/* Main soft glow */}
      <div className="absolute left-[20%] top-[25%] h-[220px] w-[220px] rounded-full bg-violet-300/8 blur-[120px]" />

      {/* Small accent */}
      <div className="absolute right-[18%] bottom-[18%] h-[120px] w-[120px] rounded-full bg-cyan-200/10 blur-[80px]" />

      {/* Distant glow */}
      <div className="absolute right-[35%] top-[12%] h-[90px] w-[90px] rounded-full bg-white/5 blur-[60px]" />
    </>
  );
}

function CosmicDust() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-screen"
      style={{
        backgroundImage: `
          radial-gradient(rgba(255,255,255,0.15) 0.6px, transparent 0.6px)
        `,
        backgroundSize: "4px 4px",
      }}
    />
  );
}

function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId = 0;

    const stars: Star[] = [];

    const STAR_COUNT = 220;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;

      for (let i = 0; i < STAR_COUNT; i++) {
        const depth = Math.random() * 3 + 1;

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius:
            depth === 1
              ? Math.random() * 0.6
              : depth === 2
                ? Math.random() * 1.2
                : Math.random() * 1.8,

          alpha: Math.random(),
          speed: Math.random() * 0.004 + 0.001,
          depth,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.alpha += star.speed;

        if (star.alpha >= 1 || star.alpha <= 0.2) {
          star.speed = -star.speed;
        }

        const offsetX = (mouse.x - window.innerWidth / 2) * 0.0008 * star.depth;

        const offsetY =
          (mouse.y - window.innerHeight / 2) * 0.0008 * star.depth;

        const x = star.x + offsetX;
        const y = star.y + offsetY;

        ctx.beginPath();

        ctx.arc(x, y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        if (star.depth > 2.5) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "white";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    setCanvasSize();

    createStars();

    render();

    window.addEventListener("resize", () => {
      setCanvasSize();
      createStars();
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-90"
    />
  );
}
