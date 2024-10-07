import { RiReactjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  SiTailwindcss,
  SiSupabase,
  SiJavascript,
  SiTypescript,
  SiNetlify,
  SiMongodb,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiCanva, SiVite, SiRedux } from "react-icons/si";
import { BiLogoHeroku } from "react-icons/bi";
import { motion } from "framer-motion";
import chatgptImage from "/chatgpt.png"; // Image for the ChatGPT icon
import { AiOutlineLink } from "react-icons/ai";
import { BiBook, BiRightArrowAlt } from "react-icons/bi"; // Icons for links and documentation
import { useState } from "react";
import { PROJECTS } from "../constants/data";

type TechnologyIcon = {
  icon: JSX.Element; // Defines the type for each technology icon
  color: string; // The background color of the icon container
};

type LinkIcon = {
  icon: JSX.Element; // Icon for each link (GitHub, Demo, etc.)
  color: string; // Background color for each link button
  label: string; // Label for the icon
  url?: string; // URL for the link (optional)
};

// Updated object that matches "Technologies" icons and colors
const technologyIcons: Record<string, TechnologyIcon> = {
  HTML: {
    icon: <FaHtml5 className="text-lg text-white" />,
    color: "bg-orange-500",
  },
  CSS: {
    icon: <FaCss3Alt className="text-lg text-white" />,
    color: "bg-blue-500",
  },
  JavaScript: {
    icon: <SiJavascript className="text-lg text-white" />,
    color: "bg-yellow-400",
  },
  React: {
    icon: <RiReactjsLine className="text-lg text-white" />,
    color: "bg-[#0d99ff]",
  },
  TypeScript: {
    icon: <SiTypescript className="text-lg text-white" />,
    color: "bg-[#3178c6]",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="text-lg text-white" />,
    color: "bg-[#2298bd]",
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion className="text-lg text-white" />,
    color: "bg-[#bc4a97]",
  },
  "Node.js": {
    icon: <FaNodeJs className="text-lg text-white" />,
    color: "bg-green-500",
  },
  Express: {
    icon: <span className="text-lg text-white">Ex</span>, // Custom text for Express
    color: "bg-black",
  },
  MongoDB: {
    icon: <SiMongodb className="text-lg text-white" />,
    color: "bg-[#4DB33D]",
  },
  Supabase: {
    icon: <SiSupabase className="text-lg text-white" />,
    color: "bg-[#1e7d52]",
  },
  Firebase: {
    icon: <IoLogoFirebase className="text-lg text-white" />,
    color: "bg-yellow-500",
  },
  Git: {
    icon: <FaGitAlt className="text-lg text-white" />,
    color: "bg-red-500",
  },
  GitHub: {
    icon: <FaGithub className="text-lg text-gray-900" />,
    color: "bg-white",
  },
  VSCode: {
    icon: <VscVscode className="text-lg text-white" />,
    color: "bg-[#30a3f1]",
  },
  GPT: {
    icon: <img src={chatgptImage} alt="ChatGPT" className="w-8 h-8" />,
    color: "bg-gray-800",
  },
  Heroku: {
    icon: <BiLogoHeroku className="text-lg text-white" />,
    color: "bg-indigo-600",
  },
  Netlify: {
    icon: <SiNetlify className="text-lg text-white" />,
    color: "bg-[#05bdba]",
  },
  Figma: {
    icon: <FaFigma className="text-lg text-white" />,
    color: "bg-[#f24e1e]",
  },
  Redux: {
    icon: <SiRedux className="text-lg text-white" />,
    color: "bg-[#764ABC]", // Fialová barva pro Redux
  },
};

// Object for different types of project links like GitHub, Demo, and Documentation
const linkIcons: Record<string, LinkIcon> = {
  GitHub: { icon: <FaGithub />, color: "bg-gray-900", label: "GitHub" },
  Demo: { icon: <AiOutlineLink />, color: "bg-gray-900", label: "Demo" },
  Documentation: {
    icon: <BiBook />,
    color: "bg-gray-900",
    label: "Documentation",
  },
};

// Filter options for projects (to filter by technology)
const filterOptions = ["All", "React", "React Native", "TypeScript", "Node.js"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All"); // State for the active filter

  // Filtered projects based on the active filter
  const filteredProjects = PROJECTS.filter((project) =>
    activeFilter === "All" ? true : project.technologies.includes(activeFilter)
  );

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animation to appear smoothly
        initial={{ opacity: 0, y: -100 }} // Start state of the animation
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)} // Change active filter when clicked
            className={`${
              activeFilter === filter
                ? "bg-cyan-300 text-black"
                : "bg-neutral-300 text-black"
            } px-4 py-2 rounded-md font-medium`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }} // Animation for project cards
            initial={{ opacity: 0, y: 50 }} // Start state of the card
            transition={{ duration: 0.5 }}
            className="w-[350px] bg-neutral-800 p-6 rounded-lg shadow-md relative flex flex-col justify-between transition-transform transform hover:scale-105 hover:bg-neutral-700 hover:shadow-[0_0_15px_0_rgba(0,0,0,0.8)]"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Link Icons (GitHub, Demo, Documentation) */}
              <div className="absolute bottom-9 right-0 flex space-x-2 bg-black p-2 transform translate-y-1/2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-white"
                  >
                    <FaGithub className="w-6 h-6" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                      GitHub
                    </span>
                  </a>
                )}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-white"
                  >
                    <BiBook className="w-6 h-6" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                      Documentation
                    </span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center text-white space-x-1"
                  >
                    <span className="text-sm">Demo</span>
                    <BiRightArrowAlt className="w-4 h-4" />
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                      Demo
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Title and Description */}
            <div className="flex-grow">
              <h6 className="font-semibold text-lg mb-2">{project.title}</h6>
              <p className="text-neutral-400 mb-4 text-xs">
                {project.description}
              </p>
            </div>

            {/* Technologies Used in the Project */}
            <div className="flex justify-start items-center space-x-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`relative group flex items-center justify-center rounded-md w-8 h-8 text-white text-sm font-medium ${
                    technologyIcons[tech]?.color || "bg-neutral-800"
                  }`}
                >
                  {technologyIcons[tech]?.icon || null}{" "}
                  {/* Display technology icon */}
                  <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                    {tech} {/* Display technology name on hover */}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
