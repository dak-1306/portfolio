import SolarSystem from "@/components/cosmic/planets/SolarSystem";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProjectSection() {
  return (
    <>
      <SectionHeading
        title="Projects"
        badge="My Work"
        description="A collection of my recent projects and contributions."
      />
      <SolarSystem />
    </>
  );
}
