import type { SectionHeader, FeatureItem } from "@/types/portfolio";

export const heroData = {
  badge: "Frontend Developer",
  title: "Trần Hải Đăng",
  description:
    "Building modern, high-performance web applications with React, TypeScript, and a focus on great user experiences.",
};

export const aboutData = {
  header: {
    badge: "About Me",
    title: "Who am I?",
    description:
      "Frontend developer focused on clean code, performance, and modern user experiences.",
  } as SectionHeader,
  features: [
    {
      iconName: "Rocket",
      title: "Frontend Development",
      description:
        "My journey into web development began with HTML, CSS, and JavaScript, and quickly evolved into a strong focus on React...",
    },
    {
      iconName: "Sparkles",
      title: "Performance-Driven Development",
      description:
        "I focus on writing maintainable code, building scalable architectures, and creating smooth user experiences...",
    },
    {
      iconName: "Globe2",
      title: "Adaptable Team Player",
      description:
        "I enjoy collaborating with others, learning from feedback, and adapting to new technologies when needed...",
    },
  ] as FeatureItem[],
  journey: {
    badge: "My Journey",
    title: "Learning & Growth",
    description:
      "A continuous journey of learning modern technologies, building projects, and improving as a frontend developer.",
  } as SectionHeader,
};

export const skillsHeader: SectionHeader = {
  badge: "Tech Stack",
  title: "Core Skills & Technologies",
  description:
    "Frontend technologies, development tools, and practices I use to build modern web applications.",
};

export const contactData: SectionHeader = {
  badge: "Contact",
  title: "Let's Connect",
  description:
    "Open to internship opportunities, collaborations, and frontend development projects.",
};
