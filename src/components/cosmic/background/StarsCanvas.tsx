import { useEffect, useRef } from "react";
type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  velocity: number;
};
export default function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId = 0;
    const stars: Star[] = [];
    const STAR_COUNT = 180;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4,
        alpha: Math.random(),
        velocity: Math.random() * 0.003 + 0.001,
      });
    }
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.alpha += star.velocity;
        if (star.alpha >= 1 || star.alpha <= 0.2) {
          star.velocity = -star.velocity;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("resize", setCanvasSize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-80"
    />
  );
}
