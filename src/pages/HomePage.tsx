import CosmicLayout from "@/components/layouts/CosmicLayout";
import HeroSection from "@/pages/HeroSection";
export default function HomePage() {
  return (
    <CosmicLayout>
      {" "}
      <HeroSection />
      <section className="min-h-screen"> Projects </section>{" "}
    </CosmicLayout>
  );
}
