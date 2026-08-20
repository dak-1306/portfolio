import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectSection from "@/components/sections/project/ProjectSection";
import SkillSection from "@/components/sections/skill/SkillSection";
import ContactSection from "@/components/sections/contact/ContactSection";
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
