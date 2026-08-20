export type ProjectStatus = "Completed" | "In Progress" | "Alpha";

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  role: string;
  duration: string;
  status: ProjectStatus;
  techStack: string[];
  features: string[];
  liveUrl: string;
  adminUrl?: string;
  githubUrl: string;
  image: string[];
  accentColor?: string;
}

export interface SectionHeader {
  badge: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  iconName: "Rocket" | "Sparkles" | "Globe2"; // Dùng Icon Name thay vì JSX
  title: string;
  description: string;
}
