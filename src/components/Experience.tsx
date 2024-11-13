import { EXPERIENCES } from "../constants/data";
import { motion } from "framer-motion";

// Animations
const headingAnimation = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -100 },
  transition: { duration: 1.5 },
};

const textAnimationLeft = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};

const textAnimationRight = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: 100 },
  transition: { duration: 0.5 },
};

function Experience() {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1 {...headingAnimation} className="my-20 text-center text-4xl">
        Experience
      </motion.h1>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div {...textAnimationLeft} className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
          </motion.div>

          <motion.div
            {...textAnimationRight}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              {experience.role} <span> - </span>
              <span className="text-sm text-purple-100">
                {experience.company}
              </span>
            </h6>

            <p className="mb-4 text-neutral-400">{experience.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
