import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Nâng cấp lớp Particle cho độ chi tiết và perspective
class Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  color: string;
  perspective: number;
  opacity: number;
  ring: string;

  constructor(ring: string) {
    this.ring = ring;
    this.angle = Math.random() * Math.PI * 2;
    this.perspective = 0.2; // Độ dẹt elip

    // Định nghĩa các dải vành đai và mật độ hạt
    if (ring === "C") {
      // Vành trong cùng
      this.radius = 120 + Math.random() * 30;
      this.speed = 0.001 + Math.random() * 0.003;
      this.size = Math.random() * 1.2 + 0.3;
      this.color = "#bfb3a5"; // Nâu xám
      this.opacity = Math.random() * 0.4 + 0.1;
    } else if (ring === "B") {
      // Vành mật độ cao
      this.radius = 150 + Math.random() * 90;
      this.speed = 0.003 + Math.random() * 0.005;
      this.size = Math.random() * 1.8 + 0.5;
      const colors = ["#e2d5b8", "#d0bfa0", "#bfab8a", "#ede6d1", "#ffffff"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.8 + 0.2;
    } else if (ring === "A") {
      // Vành ngoài Cassini
      this.radius = 260 + Math.random() * 60;
      this.speed = 0.001 + Math.random() * 0.004;
      this.size = Math.random() * 1.5 + 0.4;
      const colors = ["#d7cdc0", "#c2b7a9", "#f0e6d6"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.6 + 0.1;
    } else if (ring === "F") {
      // Vành rất mỏng ngoài cùng
      this.radius = 330 + Math.random() * 5;
      this.speed = 0.0005 + Math.random() * 0.002;
      this.size = Math.random() * 1.0 + 0.2;
      this.color = "#e2dcca";
      this.opacity = Math.random() * 0.3 + 0.05;
    } else {
      this.radius = 0;
      this.speed = 0;
      this.size = 0;
      this.color = "";
      this.opacity = 0;
    }
  }

  update() {
    this.angle += this.speed;
  }

  draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
    // Tính toán vị trí elip
    const x = Math.cos(this.angle) * this.radius;
    const y = Math.sin(this.angle) * this.radius * this.perspective;

    // Hiệu ứng mờ dần khi đi ra sau (sin < 0)
    let currentOpacity = this.opacity;
    if (Math.sin(this.angle) < 0) {
      currentOpacity *= 0.4; // Giảm opacity khi ở phía sau
    }

    ctx.beginPath();
    ctx.arc(centerX + x, centerY + y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = currentOpacity;
    ctx.fill();
    ctx.globalAlpha = 1; // Reset opacity
  }
}

const SaturnAdvanced: React.FC = () => {
  const canvasBackRef = useRef<HTMLCanvasElement>(null);
  const canvasFrontRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasBack = canvasBackRef.current;
    const canvasFront = canvasFrontRef.current;
    if (!canvasBack || !canvasFront) return;

    const ctxBack = canvasBack.getContext("2d");
    const ctxFront = canvasFront.getContext("2d");
    if (!ctxBack || !ctxFront) return;

    // Kích thước canvas lớn hơn
    const size = 750;
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Nâng cấp độ sắc nét (Retina)
    canvasBack.width = size * devicePixelRatio;
    canvasBack.height = size * devicePixelRatio;
    canvasBack.style.width = `${size}px`;
    canvasBack.style.height = `${size}px`;
    ctxBack.scale(devicePixelRatio, devicePixelRatio);

    canvasFront.width = size * devicePixelRatio;
    canvasFront.height = size * devicePixelRatio;
    canvasFront.style.width = `${size}px`;
    canvasFront.style.height = `${size}px`;
    ctxFront.scale(devicePixelRatio, devicePixelRatio);

    const particles: Particle[] = [];
    const particleCount = 1800; // Tăng số lượng hạt

    // Phân bố hạt vào các vành đai
    for (let i = 0; i < particleCount; i++) {
      let ring;
      if (i < 0.1 * particleCount) ring = "C";
      else if (i < 0.6 * particleCount) ring = "B";
      else if (i < 0.95 * particleCount) ring = "A";
      else ring = "F";
      particles.push(new Particle(ring));
    }

    const animate = () => {
      ctxBack.clearRect(0, 0, size, size);
      ctxFront.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      particles.forEach((p) => {
        p.update();
        // Tách hạt trước/sau dựa trên sin(angle)
        // Nếu perspective làm elip dẹt y, giá trị y lớn là trước. y nhỏ là sau.
        // x = Rcos, y = Rsin * perspective.
        // y > 0 => sin > 0 => Phía trước
        if (Math.sin(p.angle) < 0) {
          p.draw(ctxBack, centerX, centerY); // Vẽ lên canvas phía sau
        } else {
          p.draw(ctxFront, centerX, centerY); // Vẽ lên canvas phía trước
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[750px] overflow-hidden">
      {/* Container nghiêng toàn bộ hệ thống */}
      <div
        className="relative flex items-center justify-center w-[750px] h-[750px]"
        style={{ transform: "rotateX(10deg) rotateZ(-15deg)" }}
      >
        {/* Canvas cho vành đai phía sau */}
        <canvas
          ref={canvasBackRef}
          className="absolute z-0 pointer-events-none"
        />

        {/* Hành tinh Sao Thổ SVG nâng cấp */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-56 h-56 rounded-full" // Thêm bóng hào quang
        >
          <svg
            viewBox="0 0 130 130"
            className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
          >
            <defs>
              <radialGradient id="saturnGradient" cx="25%" cy="25%" r="75%">
                <stop offset="0%" stopColor="#fdf4df" />{" "}
                {/* Ánh sáng mạnh hơn */}
                <stop offset="35%" stopColor="#e2c199" />
                <stop offset="60%" stopColor="#cbb07c" />
                <stop offset="85%" stopColor="#a5937d" />
                <stop offset="100%" stopColor="#755a3f" />{" "}
                {/* Bóng tối sâu hơn */}
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

            {/* Thân hành tinh */}
            <circle
              cx="65"
              cy="65"
              r="63"
              fill="url(#saturnGradient)"
              filter="url(#innerShadow)"
            />

            {/* Các dải mây khí quyển chi tiết */}
            <path
              d="M10,48 Q65,55 120,48"
              fill="none"
              stroke="#dcbfa0"
              strokeWidth="1.2"
              opacity="0.6"
            />
            <path
              d="M7,58 Q65,65 123,58"
              fill="none"
              stroke="#cca67c"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M5,70 Q65,78 125,70"
              fill="none"
              stroke="#bca083"
              strokeWidth="1.0"
              opacity="0.4"
            />
            <path
              d="M8,80 Q65,86 122,80"
              fill="none"
              stroke="#ac9272"
              strokeWidth="0.8"
              opacity="0.3"
            />
            <path
              d="M15,90 Q65,95 115,90"
              fill="none"
              stroke="#9c8461"
              strokeWidth="0.6"
              opacity="0.25"
            />
            <path
              d="M25,100 Q65,103 105,100"
              fill="none"
              stroke="#8c7650"
              strokeWidth="0.5"
              opacity="0.2"
            />

            {/* Cơn bão nhỏ (giả lục giác) */}
            <path
              d="M60,15 L68,13 L75,15 L78,21 L75,27 L68,29 L60,27 L57,21 Z"
              fill="none"
              stroke="#ede1cf"
              strokeWidth="1.0"
              opacity="0.5"
            />
            <circle cx="67" cy="21" r="2.5" fill="#e8ddd1" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Canvas cho vành đai phía trước */}
        <canvas
          ref={canvasFrontRef}
          className="absolute z-20 pointer-events-none"
        />

        {/* Hào quang phía sau lớn hơn */}
        <div className="absolute w-[850px] h-[850px] rounded-full opacity-15 -z-10" />
      </div>
    </div>
  );
};

export default SaturnAdvanced;
