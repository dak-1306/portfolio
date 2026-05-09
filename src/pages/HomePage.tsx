import CosmicLayout from "@/components/layouts/CosmicLayout";
import HeroSection from "@/pages/HeroSection";
import AboutSection from "@/pages/AboutSection";
export default function HomePage() {
  return (
    <CosmicLayout>
      {" "}
      <HeroSection />
      <AboutSection />{" "}
    </CosmicLayout>
  );
}
