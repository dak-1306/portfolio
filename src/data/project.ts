import ttmLanding from "@/assets/images/landing.webp";
import ttmDashboard from "@/assets/images/dashboard.webp";
import ttmTask from "@/assets/images/task.webp";
export interface Project {
  id: string;
  title: string;
  slug: string; // Thêm trường slug để tạo URL thân thiện
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  status: "Completed" | "In Progress" | "Alpha";
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string[];
  accentColor?: string; // Tùy chọn để tùy biến màu sắc riêng cho mỗi project
}

export const projectSample: Project[] = [
  {
    id: "1",
    title: "TeamTaskManager",
    slug: "team-task-manager",
    subtitle: "Full-stack Project & Task Management System",
    description:
      "A collaborative platform designed to streamline team workflows and enhance productivity. Developed with a focus on seamless data synchronization and intuitive user experience, this project demonstrates the integration of modern frontend patterns with a robust backend architecture, accelerated by AI-native development workflows.",
    role: "Full-Stack Developer",
    duration: "Mar 2026 - Present",
    status: "In Progress",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "shadcn ui",
    ],
    features: [
      "Secure Authentication system (Register/Login/Logout)",
      "Comprehensive Project-based Task Management",
      "Full CRUD operations for projects and individual tasks",
      "Dynamic User Profile management with password updates",
      "Modern Theme Switching (Dark/Light mode) support",
      "Account deletion functionality for user privacy",
    ],
    liveUrl: "https://team-task-manager-three.vercel.app/",
    githubUrl: "https://github.com/dak-1306/teamTaskManager",
    image: [ttmLanding, ttmDashboard, ttmTask],
    accentColor: "#3b82f6", // Màu xanh dương chủ đạo cho tech/management
  },
];
