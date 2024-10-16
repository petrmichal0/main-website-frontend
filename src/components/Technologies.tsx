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
  SiPostman,
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
import { SiCanva } from "react-icons/si";
import { BiLogoHeroku } from "react-icons/bi";
import { motion } from "framer-motion";
import chatgptImage from "/chatgpt.png"; // Image for the ChatGPT icon

// Variants for animating the icons
const iconVariants = (i: number) => ({
  hidden: { opacity: 0, x: 100 }, // Initial state, hidden and translated to the right
  visible: {
    opacity: 1, // Fully visible
    x: 0, // Translated back to its original position
    transition: {
      delay: i * 0.1, // Staggered animation delay
      duration: 0.5, // Animation duration
    },
  },
});

// Object defining each technology's icon and background color
const technologyIcons = {
  HTML: {
    icon: <FaHtml5 className="text-7xl text-white" />,
    color: "bg-orange-500", // Orange background for HTML
  },
  CSS: {
    icon: <FaCss3Alt className="text-7xl text-white" />,
    color: "bg-blue-500", // Blue background for CSS
  },
  JavaScript: {
    icon: <SiJavascript className="text-7xl text-white" />,
    color: "bg-yellow-400", // Yellow background for JavaScript
  },
  React: {
    icon: <RiReactjsLine className="text-7xl text-white" />,
    color: "bg-[#0d99ff]", // Cyan background for React
  },
  TypeScript: {
    icon: <SiTypescript className="text-7xl text-white" />,
    color: "bg-[#3178c6]", // Blue background for TypeScript
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="text-7xl text-white" />,
    color: "bg-[#2298bd]", // Teal background for Tailwind CSS
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion className="text-7xl text-white" />,
    color: "bg-[#bc4a97]", // Pink background for Framer Motion
  },
  NodeJS: {
    icon: <FaNodeJs className="text-7xl text-white" />,
    color: "bg-green-500", // Green background for Node.js
  },
  Express: {
    icon: <span className="text-5xl font-bold text-white">Ex</span>, // Custom text for Express
    color: "bg-black", // Gray background for Express
  },
  MongoDB: {
    icon: <SiMongodb className="text-7xl text-white" />,
    color: "bg-[#4DB33D]", // Green background for MongoDB
  },
  Supabase: {
    icon: <SiSupabase className="text-7xl text-white" />,
    color: "bg-[#1e7d52]", // Dark green background for Supabase
  },
  Firebase: {
    icon: <IoLogoFirebase className="text-7xl text-white" />,
    color: "bg-yellow-500", // Yellow background for Firebase
  },
  Git: {
    icon: <FaGitAlt className="text-7xl text-white" />,
    color: "bg-red-500", // Red background for Git
  },
  GitHub: {
    icon: <FaGithub className="text-7xl text-gray-900" />,
    color: "bg-white", // White background for GitHub
  },
  VSCode: {
    icon: <VscVscode className="text-7xl text-white" />,
    color: "bg-[#30a3f1]", // Blue background for VSCode
  },
  GPT: {
    icon: <img src={chatgptImage} alt="ChatGPT" className="w-16 h-16" />, // Custom image for ChatGPT
    color: "bg-gray-800", // Gray background for ChatGPT
  },
  Heroku: {
    icon: <BiLogoHeroku className="text-7xl text-white" />,
    color: "bg-indigo-600", // Indigo background for Heroku
  },
  Netlify: {
    icon: <SiNetlify className="text-7xl text-white" />,
    color: "bg-[#05bdba]", // Teal background for Netlify
  },
  Figma: {
    icon: <FaFigma className="text-7xl text-white" />,
    color: "bg-[#f24e1e]", // Red background for Figma
  },
  Canva: {
    icon: <SiCanva className="text-7xl text-white" />,
    color: "bg-[#00c4cc]", // Teal background for Canva
  },
  Postman: {
    icon: <SiPostman className="text-7xl text-white" />, 
    color: "bg-orange-500", // Orange background for Postman
  },
};

// Component that renders the technologies section
function Technologies() {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      {/* Section title with animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animation when scrolled into view
        initial={{ opacity: 0, y: -100 }} // Start state of the animation
        transition={{ duration: 1.5 }} // Duration of the animation
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      {/* Flex container for the icons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Loop through the technologyIcons object and render each technology icon */}
        {Object.entries(technologyIcons).map(
          ([tech, { icon, color }], index) => (
            <motion.div
              key={tech}
              variants={iconVariants(index)} // Animation variants for each icon
              initial="hidden"
              whileInView="visible"
              className={`relative w-28 h-28 flex items-center justify-center rounded-md ${color} group`}
            >
              {icon}
              {/* Tooltip displayed when hovering over the icon */}
              <span className="absolute bottom-0 mb-2 text-xs text-white px-2 py-1 rounded bg-black opacity-0 group-hover:opacity-100 transition-opacity">
                {tech}
              </span>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Technologies;
