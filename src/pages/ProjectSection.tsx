import SolarSystem from "@/components/solar-system/SolarSystem";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProjectSection() {
  return (
    <section className="relative z-10 min-h-screen overflow-hidden">
      <SectionHeading
        title="Projects"
        badge="My Work"
        description="A collection of my recent projects and contributions."
      />
      <SolarSystem />
    </section>
  );
}
