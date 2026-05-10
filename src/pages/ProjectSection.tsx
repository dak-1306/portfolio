import SolarSystem from "@/components/cosmic/planets/SolarSystem";
import SectionHeading from "@/components/common/SectionHeading";
import { projects } from "@/data/project";
import StarIcon from "@/components/common/StarIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CosmicCard from "@/components/common/CosmicCard";
import { Link } from "react-router-dom";

export default function ProjectSection() {
  const projectData = projects.map((project) => ({
    id: project.id,
    name: project.title,
    slug: project.slug,
    description: project.description,
  }));
  return (
    <section id="projects">
      <SectionHeading
        title="My Works"
        badge="Turning Ideas Into Digital Reality"
        description="A showcase of my projects, where creativity meets code to bring innovative web experiences to life."
      />

      <Tabs defaultValue="solar">
        <div className="w-full flex items-center justify-center mt-6">
          <TabsList>
            <TabsTrigger value="solar">
              <StarIcon />
              System Solar
            </TabsTrigger>
            <TabsTrigger value="card">Card View</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="solar">
          <SolarSystem projectData={projectData} />
        </TabsContent>
        <TabsContent value="card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl mt-10">
            {projectData.map((project) => (
              <Link to={`/project/${project.slug}`} key={project.id}>
                <CosmicCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
