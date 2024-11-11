import { motion } from "framer-motion";
import baseIcons, { technologyIconNames } from "../constants/IconConstants";

const iconVariants = (i: number) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  },
});

const headingAnimation = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -100 },
  transition: { duration: 1.5 },
};

function Technologies() {
  const icons = baseIcons("large");

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1 {...headingAnimation} className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologyIconNames.map((tech, index) => {
          const { icon, color } = icons[tech];
          return (
            <motion.div
              key={tech}
              variants={iconVariants(index)}
              initial="hidden"
              whileInView="visible"
              className={`relative w-28 h-28 flex items-center justify-center rounded-md ${color} group`}
            >
              {icon}

              <span className="absolute bottom-0 mb-2 text-xs text-white px-2 py-1 rounded bg-black opacity-0 group-hover:opacity-100 transition-opacity">
                {tech}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
