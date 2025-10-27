import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Card from "../components/common/card.jsx";
import Timeline from "../components/projects/TimeLine";
import { projects } from "../data/dataPortfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <MainLayout title="My Projects">
      {/* Timeline bar with dots */}
      <Timeline
        projects={projects}
        hoveredIndex={hoveredIndex}
        onHoverIndexChange={setHoveredIndex}
      />

      {/* Project cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => {
          const isActive = hoveredIndex === i;
          return (
            <Card
              as="li"
              key={project.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={
                "space-y-4 " +
                (isActive ? "ring-2 ring-green-300 -translate-y-1" : "")
              }
            >
              <h4 className="font-bold">{project.title}</h4>
              <p>{project.description}</p>
              <p>{project.event}</p>

              <div className="flex items-center space-x-3">
                {project.technologies.map((tech) => {
                  const key = String(tech).toLowerCase();
                  const map = {
                    react: ["fab", "react"],
                    "node.js": ["fab", "node-js"],
                    "node-js": ["fab", "node-js"],
                    html5: ["fab", "html5"],
                    css: ["fab", "css3"],
                    css3: ["fab", "css3"],
                    js: ["fab", "js"],
                    javascript: ["fab", "js"],
                  };
                  const iconDef = map[key] || ["fab", key];
                  return (
                    <FontAwesomeIcon
                      key={tech}
                      icon={iconDef}
                      className="text-2xl text-gray-600 hover:text-gray-800"
                    />
                  );
                })}
              </div>

              <div className="flex items-center">
                <a href={project.linkGithub} className="mr-4">
                  <FontAwesomeIcon
                    className="text-2xl text-gray-600 hover:text-gray-800"
                    icon={["fab", "github"]}
                  />
                </a>

                <Button variant="success" size="medium" href={project.linkDemo}>
                  Demo
                </Button>
              </div>
            </Card>
          );
        })}
      </ul>
      <div className="flex flex-col items-center mt-8 space-y-4">
        <p className="text-blue-600 italic text-center">
          Muốn xem thêm các dự án khác của tôi?
        </p>
        <Link to="/contact">
          <Button variant="cta" size="large">
            Liên hệ với tôi
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
export default Projects;
