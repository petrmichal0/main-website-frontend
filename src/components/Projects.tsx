import { useState } from "react";
import { PROJECTS } from "../constants/data";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiVite,
  SiMongodb,
} from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import { BiBook, BiRightArrowAlt } from "react-icons/bi"; // Ikona pro dokumentaci

type TechnologyIcon = {
  icon: JSX.Element;
  color: string;
};

type LinkIcon = {
  icon: JSX.Element;
  color: string;
  label: string;
  url?: string;
};

type TechnologyIcons = {
  [key: string]: TechnologyIcon;
};

const technologyIcons: TechnologyIcons = {
  React: { icon: <FaReact />, color: "bg-cyan-500" },
  TypeScript: { icon: <SiTypescript />, color: "bg-blue-500" },
  Vite: { icon: <SiVite />, color: "bg-purple-500" },
  Redux: { icon: <SiRedux />, color: "bg-purple-700" },
  TailwindCSS: { icon: <SiTailwindcss />, color: "bg-teal-500" },
  "Node.js": { icon: <FaNodeJs />, color: "bg-green-500" },
  MongoDB: { icon: <SiMongodb />, color: "bg-green-600" },
  CSS: { icon: <FaCss3Alt />, color: "bg-blue-400" },
  HTML: { icon: <FaHtml5 />, color: "bg-orange-500" },
};

const linkIcons: Record<string, LinkIcon> = {
  GitHub: { icon: <FaGithub />, color: "bg-gray-900", label: "GitHub" },
  Demo: { icon: <AiOutlineLink />, color: "bg-gray-900", label: "Demo" },
  Documentation: {
    icon: <BiBook />,
    color: "bg-gray-900",
    label: "Documentation",
  },
};

const filterOptions = ["All", "React", "Node.js", "Angular", "Vue.js"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) =>
    activeFilter === "All" ? true : project.technologies.includes(activeFilter)
  );

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Filtrovací tlačítka */}
      <div className="flex justify-center space-x-4 mb-10">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
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

      {/* Kontejner s projekty */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="w-[350px] bg-neutral-800 p-6 rounded-lg shadow-md relative flex flex-col justify-between transition-transform transform hover:scale-105 hover:bg-neutral-700 hover:shadow-[0_0_15px_0_rgba(0,0,0,0.8)]"
          >
            {/* Obrázek projektu */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              {/* Ikony GitHub, Demo, Dokumentace v pravém dolním rohu */}
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

            {/* Název projektu a popis */}
            <div className="flex-grow">
              <h6 className="font-semibold text-lg mb-2">{project.title}</h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
            </div>

            {/* Technologie vlevo */}
            <div className="flex justify-start items-center space-x-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`relative group flex items-center justify-center rounded-md w-8 h-8 text-white text-sm font-medium ${
                    technologyIcons[tech]?.color || "bg-neutral-800"
                  }`}
                >
                  {technologyIcons[tech]?.icon || null}
                  <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                    {tech}
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
