import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
import ProjectSection from "@/pages/ProjectSection";
import SkillSection from "@/pages/SkillSection";
import ContactSection from "@/pages/ContactSection";
export default function HomePage() {
  return (
    <div className=" space-y-24 pb-24 px-10">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}
