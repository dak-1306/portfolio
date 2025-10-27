// dữ liệu trang portfolio
const personalInfo = {
  fullName: "Trần Hải Đăng",
  dateOfBirth: "13/06/2005",
  address: "123 Đường ABC, Quận Bình Thạnh, Thành phố HCM",
  email: "thd1306@gmail.com",
  avatar: "/src/assets/img/avatar.jpg",
  titleH2: "Welcome to My Portfolio",
  titleH3: "Thông tin cơ bản",
};
// dữ liệu trang about me
const aboutMe = {
  slogan: "Đam mê công nghệ và phát triển phần mềm",
  education: "Cử nhân Công nghệ Thông tin - Đại học Bách Khoa TP.HCM",
  experience: "3 năm kinh nghiệm trong phát triển web full-stack",
  passion: "Lập trình, học hỏi công nghệ mới và làm việc nhóm",
  myValue:
    "Luôn nỗ lực hết mình để mang lại giá trị tốt nhất cho dự án và đồng đội.",

  groupAvatar: [
    "/src/assets/img/group1.jpg",
    "/src/assets/img/group2.jpg",
    "/src/assets/img/group3.jpg",
    "/src/assets/img/group4.jpg",
  ],
};

// dữ liệu trang skills (chỉ tên, giữ tương thích)
const skills = ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"];

// thêm dữ liệu chi tiết cho mỗi skill (dùng bởi trang Skills hoặc component)
const skillsData = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: ["fab", "js"],
    level: 90, // % kỹ năng
    years: 4,
    color: "from-yellow-400 to-yellow-500",
    description: "ES6+, DOM, fetch/axios, async/await, tooling (webpack/vite)",
  },
  {
    id: "react",
    name: "React",
    icon: ["fab", "react"],
    level: 85,
    years: 3,
    color: "from-sky-400 to-sky-600",
    description:
      "Functional components, hooks, router, state management (redux/zustand)",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: ["fab", "node-js"],
    level: 80,
    years: 3,
    color: "from-green-400 to-green-600",
    description: "Express, REST API, authentication, build & deploy",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: ["fas", "database"],
    level: 70,
    years: 2,
    color: "from-emerald-400 to-emerald-600",
    description: "Mongoose, schema design, aggregation, indexing basics",
  },
  {
    id: "css",
    name: "CSS",
    icon: ["fab", "css3"],
    level: 85,
    years: 4,
    color: "from-blue-400 to-blue-600",
    description: "Layout (Flexbox, Grid), responsive, Tailwind CSS, animations",
  },
  {
    id: "html",
    name: "HTML",
    icon: ["fab", "html5"],
    level: 90,
    years: 5,
    color: "from-red-400 to-red-600",
    description: "Semantic HTML, accessibility, SEO basics",
  },
];

// dữ liệu trang projects
const projects = [
  {
    title: "Dự án 1",
    description: "Mô tả ngắn gọn về dự án 1.",
    technologies: ["react", "node-js"],
    linkGithub: "https://github.com/username/project1",
    linkDemo: "https://username.github.io/project1",
    //dữ liệu cho time line
    time: "2023",
    event: "Cuộc thi lập trình ABC 2023",
  },
  {
    title: "Dự án 2",
    description: "Mô tả ngắn gọn về dự án 2.",
    technologies: ["html5", "css3", "js"],
    linkGithub: "https://github.com/username/project2",
    linkDemo: "https://username.github.io/project2",
    //dữ liệu cho time line
    time: "2022",
    event: "Cuộc thi lập trình XYZ 2022",
  },
  {
    title: "Dự án 3",
    description: "Mô tả ngắn gọn về dự án 3.",
    technologies: ["react", "node-js"],
    linkGithub: "https://github.com/username/project3",
    linkDemo: "https://username.github.io/project3",
    //dữ liệu cho time line
    time: "2021",
    event: "Cuộc thi lập trình DEF 2021",
  },
];

// dữ liệu trang contact
const contact = {
  phone: "+84 123 456 789",
  email: "nguyen.van.a@example.com",
  linkedin: "https://www.linkedin.com/in/nguyenvana",
  github: "https://github.com/username",
  socialMedia: {
    facebook: "https://www.facebook.com/nguyenvana",
    twitter: "https://twitter.com/nguyenvana",
  },
};

//dữ liệu Header
const header = {
  title: "My Portfolio",
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact me",
};
export { personalInfo, aboutMe, projects, skills, skillsData, contact, header };
