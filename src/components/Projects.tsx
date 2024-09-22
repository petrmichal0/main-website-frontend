import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa"; // Import ikon z react-icons
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiVite,
  SiMongodb,
} from "react-icons/si"; // Další specifické ikony

// Mapa technologií a jejich ikon a barev
const technologyIcons: Record<string, { icon: JSX.Element; color: string }> = {
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

function Projects() {
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
      <div>
        {PROJECTS.map((project, index) => (
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

              <div className="flex flex-wrap gap-2">
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
