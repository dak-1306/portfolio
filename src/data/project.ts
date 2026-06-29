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
  slug: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  status: "Completed" | "In Progress" | "Alpha";
  techStack: string[];
  features: string[];
  liveUrl: string;
  adminUrl?: string; // Bổ sung thêm link admin riêng cho BikeVN
  githubUrl: string;
  image: string[];
  accentColor?: string;
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
      "A robust project and task management platform designed to streamline team collaboration and workflow tracking. The application emphasizes scalable frontend architecture, real-time client-server synchronization, and intuitive user experiences with high-performance interactive dashboards.",
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
      "Secure JWT-based authentication with account management and role control",
      "Dynamic project workspaces with granular task tracking and assignment",
      "Advanced data filtering, multi-criteria searching, and task organization",
      "Analytical dashboards equipped with interactive charts and productivity reports",
      "Responsive, accessible UI featuring seamless dark and light theme toggles",
    ],
    liveUrl: "https://team-task-manager-three.vercel.app/",
    githubUrl: "https://github.com/dak-1306/teamTaskManager",
    image: [ttmLanding, ttmDashboard, ttmTask, ttmChat],
    accentColor: "#3b82f6",
  },
  {
    id: "2",
    title: "BikeVN",
    slug: "bikevn",
    subtitle: "Motorbike Rental & Administrative Management Platform",
    description:
      "A comprehensive digital marketplace facilitating motorbike rentals, flexible booking lifecycles, and secure online payment flows. Responsibilities included spearheading the entire frontend architecture, enforcing strict multi-role access controls, and designing a modular administrative system.",
    role: "Lead Frontend Developer",
    duration: "2026 - Present",
    status: "In Progress",
    techStack: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "Spring Boot API",
      "MySQL",
    ],
    features: [
      "Customer-facing portal optimized for seamless vehicle discovery and catalog browsing",
      "Dedicated, feature-rich admin dashboard tailored for fleet and booking management",
      "End-to-end automated booking workflow coupled with structural rental lifecycle states",
      "Secure multi-role authentication system managing client vs. staff views",
      "High-performance caching and predictive server-state management via TanStack Query",
      "Clean, scalable, feature-first codebase organized in a structural monorepo approach",
    ],
    liveUrl: "https://bike-vn.vercel.app", // Bổ sung đầy đủ link live
    adminUrl: "https://bike-vn-admin.vercel.app", // Bổ sung link admin dashboard
    githubUrl: "https://github.com/DATTCNPM/BikeVN",
    image: [bikevnHome, bikevnDetail, bikevnProfile],
    accentColor: "#b0b910",
  },
];
