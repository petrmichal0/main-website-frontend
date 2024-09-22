import { useState } from "react"; // Import useState pro správu filtrování
import { PROJECTS } from "../constants";
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
import { AiOutlineLink } from "react-icons/ai"; // Ikona pro demo
import { BiBook } from "react-icons/bi"; // Ikona pro dokumentaci

// Definice typu pro technologie a další odkazy
type TechnologyIcon = {
  icon: JSX.Element;
  color: string;
};

// Definice typu pro odkazy na GitHub, demo a dokumentaci
type LinkIcon = {
  icon: JSX.Element;
  color: string;
  label: string;
  url?: string; // URL pro GitHub, demo nebo dokumentaci
};

// Definice typu pro objekt s technologiemi
type TechnologyIcons = {
  [key: string]: TechnologyIcon;
};

// Mapa technologií a jejich ikon a barev
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
  GitHub: { icon: <FaGithub />, color: "bg-gray-800" },
};

// Mapa odkazů na GitHub, demo a dokumentaci
const linkIcons: Record<string, LinkIcon> = {
  GitHub: { icon: <FaGithub />, color: "bg-gray-900", label: "GitHub" },
  Demo: { icon: <AiOutlineLink />, color: "bg-green-600", label: "Demo" },
  Documentation: {
    icon: <BiBook />,
    color: "bg-blue-500",
    label: "Documentation",
  },
};

// Definování seznamu technologií pro filtrování
const filterOptions = ["All", "React", "Node.js", "Angular", "Vue.js"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All"); // Stav pro sledování aktuálního filtru

  // Funkce pro filtrování projektů podle technologie
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

      <div>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-center text-center lg:text-left lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologie */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 text-white text-sm font-medium ${
                      technologyIcons[tech]?.color || "bg-neutral-800"
                    }`}
                  >
                    {technologyIcons[tech]?.icon || null}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Odkazy na GitHub, demo a dokumentaci */}
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 text-white text-sm font-medium ${linkIcons.GitHub.color}`}
                  >
                    {linkIcons.GitHub.icon}
                    <span>{linkIcons.GitHub.label}</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 text-white text-sm font-medium ${linkIcons.Demo.color}`}
                  >
                    {linkIcons.Demo.icon}
                    <span>{linkIcons.Demo.label}</span>
                  </a>
                )}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 text-white text-sm font-medium ${linkIcons.Documentation.color}`}
                  >
                    {linkIcons.Documentation.icon}
                    <span>{linkIcons.Documentation.label}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
