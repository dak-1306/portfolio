import { Sparkles, Rocket, Globe2 } from "lucide-react";
const about = {
  badge: "About Me",
  title: "Who am I?",
  description:
    "Frontend developer focused on clean code, performance, and modern user experiences.",
};

const features = [
  {
    icon: <Rocket className="size-7" />,
    title: "Frontend Development",
    description:
      "My journey into web development began with HTML, CSS, and JavaScript, and quickly evolved into a strong focus on React. I enjoy building responsive, interactive, and user-friendly web applications while continuously improving my technical skills.",
  },
  {
    icon: <Sparkles className="size-7" />,
    title: "Performance-Driven Development",
    description:
      "I focus on writing maintainable code, building scalable architectures, and creating smooth user experiences. For me, good software is not only functional but also easy to understand and extend.",
  },
  {
    icon: <Globe2 className="size-7" />,
    title: "Adaptable Team Player",
    description:
      "I enjoy collaborating with others, learning from feedback, and adapting to new technologies when needed. Currently, I am seeking a frontend internship where I can contribute, learn, and grow in a professional environment.",
  },
];

const journey = {
  badge: "My Journey",
  title: "Learning & Growth",
  description:
    "A continuous journey of learning modern technologies, building projects, and improving as a frontend developer.",
};

export { about, features, journey };
