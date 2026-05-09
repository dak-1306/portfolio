import CosmicLayout from "@/components/layouts/CosmicLayout";
import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import ProjectSection from "@/pages/ProjectSection";
import SkillSection from "@/pages/SkillSection";
import ContactSection from "@/pages/ContactSection";
export default function HomePage() {
  return (
    <CosmicLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </CosmicLayout>
  );
}
