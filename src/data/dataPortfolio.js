// dữ liệu trang portfolio
const personalInfo = {
  fullName: "Trần Hải Đăng",
  dateOfBirth: "13/06/2005",
  address: "123 Đường ABC, Quận Bình Thạnh, Thành phố HCM",
  email: "thd1306@gmail.com",
  avatar: "/src/assets/img/avatar.jpg",
  titleH1: "Welcome to My Portfolio",
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
  groupAvatar: ["/assets/team1.svg", "/assets/team2.svg", "/assets/team3.svg"],
};
// dữ liệu trang skills
const skills = ["JavaScript", "React", "Node.js", "MongoDB", "CSS", "HTML"];
// dữ liệu trang projects
const projects = [
  {
    title: "Dự án 1",
    description: "Mô tả ngắn gọn về dự án 1.",
    technologies: ["React", "Node.js"],
    linkGithub: "https://github.com/username/project1",
    linkDemo: "https://username.github.io/project1",
  },
  {
    title: "Dự án 2",
    description: "Mô tả ngắn gọn về dự án 2.",
    technologies: ["MongoDB", "Express"],
    linkGithub: "https://github.com/username/project2",
    linkDemo: "https://username.github.io/project2",
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
  projects: "Projects",
  contact: "Contact me",
};
export { personalInfo, aboutMe, projects, skills, contact, header };
