import project1 from "../assets/projects/worldmapv1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT: string = `I love technical challenges and finding good solutions. What started as a hobby with my first programming attempt quickly became a path I want to follow in my career. I focus on creating applications from design to final product, using modern technologies and an innovative approach.`;

export const ABOUT_TEXT: string = `My name is Petr Michal, and I always liked solving technical problems. I started as a team leader, where I learned how to make work processes better. Then, my friend showed me programming, and I found my passion. Step by step, I learned HTML, CSS, JavaScript, React, and Node.js, which helped me understand both frontend and backend development. I also learned to build mobile apps with React Native, so I can bring my applications to mobile devices. Now, I am focusing on OpenAI and exploring how artificial intelligence can improve modern apps. In my free time, I like running, cycling, and hiking.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Administrative Worker",
    company: "TJMac s.r.o.",
    description: `Managed and optimized the company's e-shop. Communicated with clients and solved technical requirements. Created materials for marketing purposes. Ensured smooth office operations and supported the team.`,
    technologies: [],
  },
  {
    year: "2021 - 2022",
    role: "Team Leader",
    company: "Bidli s.r.o.",
    description: `Led a team of specialists in the energy sector. Planned and monitored results. Coordinated projects and introduced technical innovations. Supported the team in solving technological challenges.`,
    technologies: [],
  },
  {
    year: "2013 - 2021",
    role: "Team Leader",
    company: "Twenty-one s.r.o.",
    description: `Grew from operator to Team Leader. Led a team and managed projects. Provided technical coordination of projects. Planned and tracked project progress. Estimated capacity and budgets. Collaborated across the company to implement processes. Provided feedback and mentoring to team members.`,
    technologies: [],
  },
];

export const COURSES = [
  {
    year: "2024 - Present",
    courses: [
      {
        iconKey: "React Native",
        text: "React Native - Udemy",
        link: "https://www.udemy.com/course/react-native-the-practical-guide/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: "Figma",
        text: "Figma - Udemy",
        link: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: ["NodeJS", "Express", "MongoDB"],
        text: "Node.js, Express, MongoDB - Udemy",
        link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: "Figma",
        text: "Figma - Udemy",
        link: "https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: ["React", "TypeScript"],
        text: "React & TypeScript - Udemy",
        link: "https://www.udemy.com/course/react-typescript-the-practical-guide/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: "TypeScript",
        text: "TypeScript - Udemy",
        link: "https://www.udemy.com/course/understanding-typescript/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: ["Git", "GitHub"],
        text: "Git & GitHub - Udemy",
        link: "https://www.udemy.com/course/git-github-practical-guide/?couponCode=KEEPLEARNING",
      },
    ],
  },
  {
    year: "2022 - 2023",
    courses: [
      {
        iconKey: "React",
        text: "React - Jonas Schmedtmann - Udemy",
        link: "https://www.udemy.com/course/the-ultimate-react-course/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: "React",
        text: "React 1,2,3 - David Šetek - YouTube",
        link: "https://www.youtube.com/watch?v=Nz5LGoay5R4&list=PLQ8x_VWW6AkvURLFWrOZy1e8cZuyx_xN8",
      },
      {
        iconKey: "JavaScript",
        text: "JavaScript - Jonas Schmedtmann - Udemy",
        link: "https://www.udemy.com/course/the-complete-javascript-course/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: "JavaScript",
        text: "JavaScript - David Šetek - YouTube",
        link: "https://www.youtube.com/watch?v=FqqhAWJgN0E&list=PLQ8x_VWW6AktVAKDISvXrcsh6kp7Jt_SM",
      },
      {
        iconKey: ["HTML", "CSS"],
        text: "HTML,CSS - Jonas Schmedtmann - Udemy",
        link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?couponCode=KEEPLEARNING",
      },
      {
        iconKey: ["HTML", "CSS"],
        text: "HTML,CSS - David Šetek - YouTube",
        link: "https://www.youtube.com/watch?v=kbLBBI5hEK4&list=PLQ8x_VWW6AkvCiDzMEI5K9jW_1rsV9PTf",
      },
    ],
  },
  {
    year: "2009 - 2020",
    courses: [
      {
        iconKey: "Management",
        text: "Rozvoj manažerských dovedností",
        link: "",
      },
      {
        iconKey: "Coaching",
        text: "Vzdělávací program 'Koučovací styl vedení'",
        link: "",
      },
      {
        iconKey: "Excel",
        text: "MS Excel Pokročilý - Gopas",
        link: "",
      },
      {
        iconKey: "Running",
        text: "Trenér kondičního běhu 3. třídy",
        link: "",
      },
      {
        iconKey: "Fitness",
        text: "Fitness trenér",
        link: "",
      },
      {
        iconKey: "Massage",
        text: "Sportovní masér",
        link: "",
      },
    ],
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
