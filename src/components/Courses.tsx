import { COURSES } from "../constants/data";
import { motion } from "framer-motion";
import { baseIcons } from "../constants/IconConstants";

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

function Courses() {
  const icons = baseIcons("medium");

  return (
    <div id="courses" className="border-b border-neutral-900 pb-4">
      <motion.h1 {...headingAnimation} className="my-20 text-center text-4xl">
        Courses
      </motion.h1>

      <div>
        {COURSES.map((courseGroup, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div {...textAnimationLeft} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {courseGroup.year}
              </p>
            </motion.div>

            <motion.div
              {...textAnimationRight}
              className="w-full max-w-xl lg:w-3/4"
            >
              {courseGroup.courses.map((course, idx) => (
                <div key={idx} className="mb-2 flex items-center">
                  {/* Icons */}
                  <span className="mr-2 flex">
                    {Array.isArray(course.iconKey)
                      ? course.iconKey.map((key, index) => {
                          const icon = icons[key];
                          return (
                            <span
                              key={index}
                              className={`rounded-full p-2 ${
                                icon?.color || ""
                              }`}
                            >
                              {icon?.icon}
                            </span>
                          );
                        })
                      : (() => {
                          const icon = icons[course.iconKey];
                          return (
                            <span
                              className={`rounded-full p-2 ${
                                icon?.color || ""
                              }`}
                            >
                              {icon?.icon}
                            </span>
                          );
                        })()}
                  </span>
                  {/* Text */}
                  <span>{course.text}</span>
                  {/* Link */}
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-cyan-300 underline"
                    >
                      LINK
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
