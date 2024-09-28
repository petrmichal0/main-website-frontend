import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiSupabase,
  SiFramer,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { BiLogoPostgresql, BiLogoHeroku, BiLogoNetlify } from "react-icons/bi";
import { motion } from "framer-motion";

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
    color: "bg-yellow-500",
  },
  React: {
    icon: <RiReactjsLine className="text-7xl text-white" />,
    color: "bg-cyan-500",
  },
  "React Native": {
    icon: <RiReactjsLine className="text-7xl text-white" />,
    color: "bg-blue-500",
  },
  TypeScript: {
    icon: <SiTypescript className="text-7xl text-white" />,
    color: "bg-blue-700",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="text-7xl text-white" />,
    color: "bg-teal-500",
  },
  "Framer Motion": {
    icon: <SiFramer className="text-7xl text-white" />,
    color: "bg-pink-500",
  },
  NodeJS: {
    icon: <FaNodeJs className="text-7xl text-white" />,
    color: "bg-green-500",
  },
  Supabase: {
    icon: <SiSupabase className="text-7xl text-white" />,
    color: "bg-green-500",
  },
  Firebase: {
    icon: <SiFirebase className="text-7xl text-white" />,
    color: "bg-yellow-500",
  },
  Git: {
    icon: <FaGit className="text-7xl text-white" />,
    color: "bg-red-500",
  },
  GitHub: {
    icon: <FaGithub className="text-7xl text-white" />,
    color: "bg-gray-900",
  },
  VSCode: {
    icon: <FaGithub className="text-7xl text-white" />,
    color: "bg-blue-500",
  },
  GPT: {
    icon: <SiJavascript className="text-7xl text-white" />,
    color: "bg-green-700",
  },
  Heroku: {
    icon: <BiLogoHeroku className="text-7xl text-white" />,
    color: "bg-indigo-600",
  },
  Netlify: {
    icon: <BiLogoNetlify className="text-7xl text-white" />,
    color: "bg-teal-400",
  },
  Figma: {
    icon: <FaFigma className="text-7xl text-white" />,
    color: "bg-red-400",
  },
  Canva: {
    icon: <SiCanva className="text-7xl text-white" />,
    color: "bg-blue-300",
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
              className={`w-28 h-28 flex items-center justify-center rounded-md ${color}`}
            >
              {icon}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Technologies;
