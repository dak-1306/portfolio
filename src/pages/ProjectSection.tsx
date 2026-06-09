import SolarSystem from "@/components/cosmic/planets/SolarSystem";
import SectionHeading from "@/components/common/SectionHeading";
import { projectSample } from "@/data/project";
import StarIcon from "@/components/common/StarIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CosmicCard from "@/components/common/CosmicCard";
import { Link } from "react-router-dom";

import { projectsHeading } from "@/data/project";
import { motion } from "framer-motion";
import { sectionReveal } from "@/motion/section";

export default function ProjectSection() {
  const projectData = projectSample.map((project) => ({
    id: project.id,
    name: project.title,
    slug: project.slug,
    description: project.description,
  }));

  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      id="projects"
    >
      <SectionHeading
        title={projectsHeading.title}
        badge={projectsHeading.badge}
        description={projectsHeading.description}
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
    </motion.section>
  );
}
