import ttmLanding from "@/assets/images/landing.webp";
import ttmDashboard from "@/assets/images/dashboard.webp";
import ttmTask from "@/assets/images/task.webp";
import ttmChat from "@/assets/images/chatTTm.webp";

import bikevnHome from "@/assets/images/home_bikevn.webp";
import bikevnDetail from "@/assets/images/productDetail_bikevn.webp";
import bikevnProfile from "@/assets/images/profile_bikvn.webp";
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

export const projectsHeading = {
  badge: "My Works",
  title: "Featured Projects",
  description:
    "Projects that demonstrate my skills in frontend development, problem-solving, and application architecture.",
};

export const projectSample: Project[] = [
  {
    id: "1",
    title: "TeamTaskManager",
    slug: "team-task-manager",
    subtitle: "Full-stack Project & Task Management System",
    description:
      "A full-stack project and task management platform that helps teams organize projects, assign tasks, track progress, and collaborate efficiently. The application focuses on scalable frontend architecture, responsive user experience, and seamless integration with backend services.",
    role: "Full-Stack Developer",
    duration: "2025 - 2026",
    status: "Completed",
    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Recharts",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "JWT-based authentication and account management",
      "Project and task collaboration system",
      "Advanced search, filtering, and task organization",
      "Interactive dashboard with analytics and charts",
      "Responsive UI with dark/light theme support",
    ],
    liveUrl: "https://team-task-manager-three.vercel.app/",
    githubUrl: "https://github.com/dak-1306/teamTaskManager",
    image: [ttmLanding, ttmDashboard, ttmTask, ttmChat],
    accentColor: "#3b82f6", // Màu xanh dương chủ đạo cho tech/management
  },
  {
    id: "2",
    title: "BikeVN",
    slug: "bikevn",
    subtitle: "Motorbike Rental Management Platform",

    description:
      "A full-stack motorbike rental platform that enables vehicle booking, payment processing, rental management, and customer engagement. As the frontend developer, I designed and implemented the entire frontend architecture, focusing on scalability, maintainability, and seamless integration with backend services.",

    role: "Frontend Developer",

    duration: "2026",

    status: "In Progress",

    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Zod",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "Spring Boot API",
    ],

    features: [
      "Customer-facing motorbike rental platform",
      "Admin dashboard for vehicle and booking management",
      "Booking workflow and rental lifecycle management",
      "Authentication and role-based access control",
      "Real-time state management and API integration",
      "Feature-first architecture with monorepo structure",
    ],

    liveUrl: "",
    githubUrl: "https://github.com/DATTCNPM/BikeVN",
    image: [bikevnHome, bikevnDetail, bikevnProfile],

    accentColor: "#b0b910",
  },
];
