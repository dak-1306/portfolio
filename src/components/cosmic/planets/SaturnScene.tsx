import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionReveal, DEFAULT_VIEWPORT } from "@/motion";

class Particle {
  angle: number;
  baseRadius: number;
  speed: number;
  baseParticleSize: number;
  color: string;
  perspective: number;
  opacity: number;
  ring: string;

  constructor(ring: string) {
    this.ring = ring;
    this.angle = Math.random() * Math.PI * 2;
    this.perspective = 0.2;

    if (ring === "C") {
      this.baseRadius = 120 + Math.random() * 30;
      this.speed = 0.001 + Math.random() * 0.003;
      this.baseParticleSize = Math.random() * 1.2 + 0.3;
      this.color = "#bfb3a5";
      this.opacity = Math.random() * 0.4 + 0.1;
    } else if (ring === "B") {
      this.baseRadius = 150 + Math.random() * 90;
      this.speed = 0.003 + Math.random() * 0.005;
      this.baseParticleSize = Math.random() * 1.8 + 0.5;
      const colors = ["#e2d5b8", "#d0bfa0", "#bfab8a", "#ede6d1", "#ffffff"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.8 + 0.2;
    } else if (ring === "A") {
      this.baseRadius = 260 + Math.random() * 60;
      this.speed = 0.001 + Math.random() * 0.004;
      this.baseParticleSize = Math.random() * 1.5 + 0.4;
      const colors = ["#d7cdc0", "#c2b7a9", "#f0e6d6"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.6 + 0.1;
    } else {
      this.baseRadius = 330 + Math.random() * 5;
      this.speed = 0.0005 + Math.random() * 0.002;
      this.baseParticleSize = Math.random() * 1.0 + 0.2;
      this.color = "#e2dcca";
      this.opacity = Math.random() * 0.3 + 0.05;
    }
  }

  update() {
    this.angle += this.speed;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    scale: number,
  ) {
    const currentRadius = this.baseRadius * scale;
    const currentSize = this.baseParticleSize * scale;

    const x = Math.cos(this.angle) * currentRadius;
    const y = Math.sin(this.angle) * currentRadius * this.perspective;

    let currentOpacity = this.opacity;
    if (Math.sin(this.angle) < 0) {
      currentOpacity *= 0.4;
    }

    ctx.beginPath();
    ctx.arc(centerX + x, centerY + y, currentSize, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = currentOpacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

const SaturnAdvanced: React.FC = () => {
  const canvasBackRef = useRef<HTMLCanvasElement>(null);
  const canvasFrontRef = useRef<HTMLCanvasElement>(null);
  const [baseSize, setBaseSize] = useState(750);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBaseSize(width - 40);
      else if (width < 1024) setBaseSize(600);
      else setBaseSize(750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (particles.current.length === 0) {
      const count = 1800;
      for (let i = 0; i < count; i++) {
        const ring =
          i < 0.1 * count
            ? "C"
            : i < 0.6 * count
              ? "B"
              : i < 0.95 * count
                ? "A"
                : "F";
        particles.current.push(new Particle(ring));
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvasBack = canvasBackRef.current;
    const canvasFront = canvasFrontRef.current;
    if (!canvasBack || !canvasFront) return;

    const ctxBack = canvasBack.getContext("2d");
    const ctxFront = canvasFront.getContext("2d");
    if (!ctxBack || !ctxFront) return;

    const dpr = window.devicePixelRatio || 1;
    const scaleFactor = baseSize / 750;

    [canvasBack, canvasFront].forEach((canvas) => {
      canvas.width = baseSize * dpr;
      canvas.height = baseSize * dpr;
      canvas.style.width = `${baseSize}px`;
      canvas.style.height = `${baseSize}px`;
    });

    ctxBack.scale(dpr, dpr);
    ctxFront.scale(dpr, dpr);

    let animationFrameId: number;

    const animate = () => {
      ctxBack.clearRect(0, 0, baseSize, baseSize);
      ctxFront.clearRect(0, 0, baseSize, baseSize);

      const centerX = baseSize / 2;
      const centerY = baseSize / 2;

      particles.current.forEach((p) => {
        p.update();
        if (Math.sin(p.angle) < 0) {
          p.draw(ctxBack, centerX, centerY, scaleFactor);
        } else {
          p.draw(ctxFront, centerX, centerY, scaleFactor);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [baseSize]);

  const planetSize = (224 * baseSize) / 750;

  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className="relative flex items-center justify-center w-full overflow-hidden"
      style={{ height: `${baseSize}px` }}
    >
      <div
        className="relative flex items-center justify-center transition-all duration-500"
        style={{
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          transform: "rotateX(10deg) rotateZ(-15deg)",
        }}
      >
        <canvas
          ref={canvasBackRef}
          className="absolute z-0 pointer-events-none"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 rounded-full"
          style={{ width: `${planetSize}px`, height: `${planetSize}px` }}
        >
          <svg viewBox="0 0 130 130" className="w-full h-full drop-shadow-2xl">
            <defs>
              <radialGradient id="saturnGradient" cx="25%" cy="25%" r="75%">
                <stop offset="0%" stopColor="#fdf4df" />
                <stop offset="35%" stopColor="#e2c199" />
                <stop offset="60%" stopColor="#cbb07c" />
                <stop offset="85%" stopColor="#a5937d" />
                <stop offset="100%" stopColor="#755a3f" />
              </radialGradient>
              <filter
                id="innerShadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  stdDeviation="4"
                  result="blur"
                />
                <feOffset dx="-3" dy="-3" in="blur" result="offsetBlur" />
                <feComposite
                  in="SourceGraphic"
                  in2="offsetBlur"
                  operator="arithmetic"
                  k1="0"
                  k2="1"
                  k3="-1"
                  k4="0"
                  result="innerShadow"
                />
                <feFlood floodColor="black" floodOpacity="0.4" result="color" />
                <feComposite
                  in="color"
                  in2="innerShadow"
                  operator="in"
                  result="shadow"
                />
                <feComposite in="shadow" in2="SourceGraphic" operator="over" />
              </filter>
            </defs>
            <circle
              cx="65"
              cy="65"
              r="63"
              fill="url(#saturnGradient)"
              filter="url(#innerShadow)"
            />
            <g opacity="0.5">
              <path
                d="M10,48 Q65,55 120,48"
                fill="none"
                stroke="#dcbfa0"
                strokeWidth="1.2"
              />
              <path
                d="M7,58 Q65,65 123,58"
                fill="none"
                stroke="#cca67c"
                strokeWidth="1.5"
              />
              <path
                d="M5,70 Q65,78 125,70"
                fill="none"
                stroke="#bca083"
                strokeWidth="1"
              />
              <path
                d="M8,80 Q65,86 122,80"
                fill="none"
                stroke="#ac9272"
                strokeWidth="0.8"
              />
            </g>
          </svg>
        </motion.div>

        <canvas
          ref={canvasFrontRef}
          className="absolute z-20 pointer-events-none"
        />

        <div
          className="absolute rounded-full opacity-10 -z-10 blur-[100px]"
          style={{
            width: `${baseSize * 1.1}px`,
            height: `${baseSize * 1.1}px`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SaturnAdvanced;
