import CosmicLayout from "@/components/layouts/CosmicLayout";
import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import ProjectSection from "@/pages/ProjectSection";
export default function HomePage() {
  return (
    <CosmicLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </CosmicLayout>
  );
}
