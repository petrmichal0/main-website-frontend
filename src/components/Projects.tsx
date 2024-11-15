import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "../constants/data";
import { baseIcons } from "../constants/IconConstants"; // Import baseIcons
import { IconName } from "../constants/data";
import { FaGithub } from "react-icons/fa";
import { BiBook, BiRightArrowAlt } from "react-icons/bi"; // Icons for links and documentation

// Animation configurations
const headingAnimation = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -100 },
  transition: { duration: 1.5 },
};

const cardAnimation = (index: number) => ({
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 50 },
  transition: {
    duration: 0.7,
    delay: index * 0.1,
  },
});

const filterOptions = [
  "All",
  "React",
  "React Native",
  "TypeScript",
  "NodeJS",
  "Testing",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtered projects based on the active filter
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") {
      return true;
    }

    if (activeFilter === "Testing") {
      return (
        project.technologies.includes("Jest") ||
        project.technologies.includes("React Testing Library")
      );
    }

    return project.technologies.includes(activeFilter);
  });

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      {/* Section Title */}
      <motion.h1 {...headingAnimation} className="my-20 text-center text-4xl">
        Projects
      </motion.h1>

      {/* Filter Buttons */}
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

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            {...cardAnimation(index)}
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
              {project.technologies.map((tech, index) => {
                const iconData = baseIcons("medium")[tech as IconName];
                return (
                  <div
                    key={index}
                    className={`relative group flex items-center justify-center rounded-md w-8 h-8 text-white text-sm font-medium ${
                      iconData?.color || "bg-neutral-800"
                    }`}
                  >
                    {iconData?.icon || null}
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex justify-center items-center bg-black text-white text-xs rounded px-2 py-1">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
