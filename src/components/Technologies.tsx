import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const technologyIcons = {
  React: {
    icon: <RiReactjsLine className="text-5xl text-white" />,
    color: "bg-cyan-500",
  },
  NextJS: {
    icon: <TbBrandNextjs className="text-5xl text-white" />,
    color: "bg-gray-900",
  },
  MongoDB: {
    icon: <SiMongodb className="text-5xl text-white" />,
    color: "bg-green-500",
  },
  Redis: {
    icon: <DiRedis className="text-5xl text-white" />,
    color: "bg-red-700",
  },
  NodeJS: {
    icon: <FaNodeJs className="text-5xl text-white" />,
    color: "bg-green-500",
  },
  PostgreSQL: {
    icon: <BiLogoPostgresql className="text-5xl text-white" />,
    color: "bg-blue-500",
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
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {Object.entries(technologyIcons).map(
          ([tech, { icon, color }], index) => (
            <motion.div
              key={tech}
              variants={iconVariants(index + 1)}
              initial="initial"
              animate="animate"
              className={`w-16 h-16 flex items-center justify-center rounded-md ${color}`}
            >
              {icon}
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default Technologies;
