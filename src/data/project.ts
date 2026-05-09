// types/project.ts (Hoặc để chung trong file project.ts)
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

export const projects: Project[] = [
  {
    id: "1",
    title: "Spendly Finance",
    slug: "spendly-finance",
    subtitle: "Quản lý tài chính cá nhân AI-Native",
    description:
      "Hệ thống quản lý chi tiêu sử dụng Firebase để đồng bộ thời gian thực và tích hợp AI phân loại giao dịch tự động. Dự án tập trung vào trải nghiệm người dùng tối giản nhưng mạnh mẽ.",
    role: "Frontend Lead / Architect",
    duration: "03/2026 - 05/2026",
    status: "In Progress",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
    features: [
      "Tự động quét hóa đơn bằng OCR",
      "Biểu đồ trực quan hóa dữ liệu",
      "Quản lý ngân sách nhóm",
      "Thông báo biến động qua Telegram",
    ],
    liveUrl: "https://spendly.vn",
    githubUrl: "https://github.com/uth-dev/spendly",
    image: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2070",
    ],
  },
  {
    id: "2",
    slug: "driver-alert-system",
    title: "Driver Alert System",
    subtitle: "Cảnh báo mệt mỏi tài xế thời gian thực",
    description:
      "Ứng dụng Computer Vision sử dụng OpenCV và MediaPipe để nhận diện dấu hiệu buồn ngủ của tài xế và đưa ra cảnh báo âm thanh tức thì.",
    role: "Computer Vision Engineer",
    duration: "10/2025 - 01/2026",
    status: "Completed",
    techStack: ["Python", "OpenCV", "MediaPipe", "React", "FastAPI"],
    features: [
      "Nhận diện nháy mắt (EAR)",
      "Theo dõi hướng nhìn (Gaze detection)",
      "Cảnh báo âm thanh đa cấp độ",
      "Dashboard thống kê hành trình",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/uth-dev/fatigue-alert",
    image: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2070",
    ],
  },
  // Thêm project 3, 4... tại đây
];
