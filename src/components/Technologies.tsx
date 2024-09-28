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
import { SiCanva } from "react-icons/si";
import { BiLogoHeroku } from "react-icons/bi";
import { motion } from "framer-motion";
import chatgptImage from "/chatgpt.png";

const iconVariants = (i: number) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1, // postupné zpoždění pro každou ikonu
      duration: 0.5,
    },
  },
});

const technologyIcons = {
  HTML: {
    icon: <FaHtml5 className="text-7xl text-white" />,
    color: "bg-orange-500",
  },
  CSS: {
    icon: <FaCss3Alt className="text-7xl text-white" />,
    color: "bg-blue-500",
  },
  JavaScript: {
    icon: <SiJavascript className="text-7xl text-white" />,
    color: "bg-yellow-400",
  },
  React: {
    icon: <RiReactjsLine className="text-7xl text-white" />,
    color: "bg-[#0d99ff]",
  },
  TypeScript: {
    icon: <SiTypescript className="text-7xl text-white" />,
    color: "bg-[#3178c6]",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="text-7xl text-white" />,
    color: "bg-[#2298bd]",
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion className="text-7xl text-white" />,
    color: "bg-[#bc4a97]",
  },
  NodeJS: {
    icon: <FaNodeJs className="text-7xl text-white" />,
    color: "bg-green-500",
  },
  Express: {
    icon: <span className="text-2xl font-bold text-white">Express</span>, // Custom text icon for Express
    color: "bg-gray-800", // Grey background color for Express
  },
  MongoDB: {
    icon: <SiMongodb className="text-7xl text-white" />,
    color: "bg-[#4DB33D]",
  },
  Supabase: {
    icon: <SiSupabase className="text-7xl text-white" />,
    color: "bg-[#1e7d52]",
  },
  Firebase: {
    icon: <IoLogoFirebase className="text-7xl text-white" />,
    color: "bg-yellow-500",
  },
  Git: {
    icon: <FaGitAlt className="text-7xl text-white" />,
    color: "bg-red-500",
  },
  GitHub: {
    icon: <FaGithub className="text-7xl text-gray-900" />,
    color: "bg-white",
  },
  VSCode: {
    icon: <VscVscode className="text-7xl text-white" />,
    color: "bg-[#30a3f1]",
  },
  GPT: {
    icon: <img src={chatgptImage} alt="ChatGPT" className="w-16 h-16" />,
    color: "bg-gray-800",
  },
  Heroku: {
    icon: <BiLogoHeroku className="text-7xl text-white" />,
    color: "bg-indigo-600",
  },
  Netlify: {
    icon: <SiNetlify className="text-7xl text-white" />,
    color: "bg-[#05bdba]",
  },
  Figma: {
    icon: <FaFigma className="text-7xl text-white" />,
    color: "bg-[#f24e1e]",
  },
  Canva: {
    icon: <SiCanva className="text-7xl text-white" />,
    color: "bg-[#00c4cc]",
  },
};

function Technologies() {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {Object.entries(technologyIcons).map(
          ([tech, { icon, color }], index) => (
            <motion.div
              key={tech}
              variants={iconVariants(index)}
              initial="hidden"
              whileInView="visible"
              className={`relative w-28 h-28 flex items-center justify-center rounded-md ${color} group`}
            >
              {icon}
              {/* Tooltip */}
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
