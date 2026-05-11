import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectSample } from "@/data/project";
import CosmicBackground from "@/components/cosmic/background/CosmicBackground";
import { pageTransition } from "@/motion/page";

const NotFound = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen flex flex-col items-center overflow-x-hidden justify-center text-center px-6"
    >
      <CosmicBackground />
      {/* Cảnh báo lỗi 404 với hiệu ứng Glitch giả lập */}
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter select-none"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px var(--border)",
          }}
        >
          404
        </motion.h1>

        {/* Lớp phủ chữ phát sáng bên trên */}
        <motion.div
          animate={{
            x: [0, -2, 2, -1, 0],
            opacity: [0.8, 1, 0.9, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-primary/20 blur-sm pointer-events-none"
        >
          404
        </motion.div>
      </div>

      {/* Thông điệp lỗi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md space-y-6 -mt-10 md:-mt-20 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold uppercase tracking-widest">
          <Rocket size={14} />
          <span>Lost in Deep Space</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Tín hiệu đã bị ngắt quãng
        </h2>

        <p className="text-muted-foreground text-lg font-sans">
          Trang bạn đang tìm kiếm đã trôi dạt ra ngoài tầm phủ sóng hoặc chưa
          từng tồn tại trong hệ thống này.
        </p>

        {/* Nhóm nút điều hướng */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/">
            <Button
              size="lg"
              className="rounded-xl px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 w-full sm:w-auto shadow-lg shadow-primary/20"
            >
              <Home size={18} />
              Về trang chủ
            </Button>
          </Link>

          <Link to={`/project/${projectSample[0]?.slug}`}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 border-border hover:bg-muted font-bold gap-2 w-full sm:w-auto"
            >
              <Search size={18} />
              Xem dự án
            </Button>
          </Link>
        </div>

        <button
          onClick={() => window.history.back()}
          className="text-sm text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2 mx-auto pt-4 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Quay lại trang trước đó
        </button>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
