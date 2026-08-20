import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SolarSystem from "@/components/cosmic/planets/SolarSystem";
import SectionHeading from "@/components/common/SectionHeading";
import StarIcon from "@/components/common/StarIcon";
import CosmicCard from "@/components/common/CosmicCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectSample, projectsHeading } from "@/data/project";
import {
  sectionReveal,
  staggerContainer,
  staggerItem,
  DEFAULT_VIEWPORT,
} from "@/motion";

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
      viewport={DEFAULT_VIEWPORT}
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl mt-10"
          >
            {projectData.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Link to={`/project/${project.slug}`}>
                  <CosmicCard
                    name={project.name}
                    description={project.description}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}
