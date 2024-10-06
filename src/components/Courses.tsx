import { COURSES } from "../constants/data"; // Importing the list of courses from data file
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion

function Courses() {
  return (
    <div id="courses" className="border-b border-neutral-900 pb-4">
      {/* Section Title with Animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animation for heading
        initial={{ opacity: 0, y: -100 }} // Starting hidden and above
        transition={{ duration: 1.5 }} // Duration of animation
        className="my-20 text-center text-4xl"
      >
        Courses {/* Main title */}
      </motion.h1>

      {/* Mapping over the COURSES array and displaying each course by year */}
      <div>
        {COURSES.map((courseGroup, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left Section - Year of courses */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fades and slides in from left
              initial={{ opacity: 0, x: -100 }} // Initially hidden and left-aligned
              transition={{ duration: 0.5 }} // Shorter animation duration
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">
                {courseGroup.year}
              </p>{" "}
              {/* Displaying the year */}
            </motion.div>

            {/* Right Section - Courses */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fades and slides in from right
              initial={{ opacity: 0, x: 100 }} // Initially hidden and right-aligned
              transition={{ duration: 0.5 }} // Shorter animation duration
              className="w-full max-w-xl lg:w-3/4"
            >
              {courseGroup.courses.map((course, idx) => (
                <div key={idx} className="mb-2 flex items-center">
                  <span className="mr-2">{course.iconKey}</span> {/* Icon */}
                  <span>{course.text}</span> {/* Course Text */}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-cyan-300 underline"
                  >
                    LINK {/* Link */}
                  </a>
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
