import { Atom, Code2, Palette, Sparkles } from "lucide-react";
import SkillCard from "@/components/skills/CardSkill";
import SectionHeading from "@/components/common/SectionHeading";
const skills = [
  {
    icon: <Atom className="size-7" />,
    name: "React",
    level: 90,
    description:
      "Building scalable component-based user interfaces with modern React ecosystem.",
    tags: ["Hooks", "Context API", "React Router", "React Query"],
  },
  {
    icon: <Code2 className="size-7" />,
    name: "TypeScript",
    level: 85,
    description:
      "Developing type-safe applications with maintainable and scalable architecture.",
    tags: ["Types", "Interfaces", "Generics", "Zod"],
  },
  {
    icon: <Palette className="size-7" />,
    name: "TailwindCSS",
    level: 92,
    description:
      "Crafting responsive modern UI with utility-first styling and design systems.",
    tags: ["Responsive", "Animations", "Dark Mode", "shadcn/ui"],
  },
  {
    icon: <Sparkles className="size-7" />,
    name: "Framer Motion",
    level: 80,
    description:
      "Creating smooth and immersive animations for modern interactive experiences.",
    tags: ["Motion", "Gestures", "Transitions", "Scroll Reveal"],
  },
];
export default function SkillSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-4">
        {" "}
        {/* Heading */}{" "}
        <SectionHeading
          badge="Skills"
          title="My Cosmic Toolbox"
          description="A glimpse into the technologies and skills that power my cosmic creations."
        />{" "}
        {/* Grid */}{" "}
        <div className=" mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 ">
          {" "}
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              description={skill.description}
              tags={skill.tags}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
