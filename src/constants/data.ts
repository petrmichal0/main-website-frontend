import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT: string = `I love technical challenges and finding good solutions. What started as a hobby with my first programming attempt quickly became a path I want to follow in my career. I focus on creating applications from design to final product, using modern technologies and an innovative approach.`;

export const ABOUT_TEXT: string = `My name is Petr Michal, and I always liked solving technical problems. I started as a team leader, where I learned how to make work processes better. Then, my friend showed me programming, and I found my passion. Step by step, I learned HTML, CSS, JavaScript, React, and Node.js, which helped me understand both frontend and backend development. I also learned to build mobile apps with React Native, so I can bring my applications to mobile devices. Now, I am focusing on OpenAI and exploring how artificial intelligence can improve modern apps. In my free time, I like running, cycling, and hiking.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    github: "https://github.com/example/ecommerce",
    demo: "https://demo-ecommerce.com",
    documentation: "https://docs-ecommerce.com",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    github: "https://github.com/example/task-manager",
    demo: "https://demo-taskmanager.com",
    documentation: "https://docs-taskmanager.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    github: "https://github.com/example/portfolio",
    demo: "https://demo-portfolio.com",
    documentation: "https://docs-portfolio.com",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    github: "https://github.com/example/blog-platform",
    demo: "https://demo-blogplatform.com",
    documentation: "https://docs-blogplatform.com",
  },
];

export const CONTACT = {
  address: "Neratovice",
  phoneNo: "+420 737 967 806 ",
  email: "petrmichal0@gmail.com",
};
