import { EXPERIENCES } from "../constants/data"; // Importing the list of experiences from a data file
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion

function Experience() {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      {/* Heading section with animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Fades and slides the text into view when scrolled
        initial={{ opacity: 0, y: -100 }} // Initially invisible and moved up
        transition={{ duration: 1.5 }} // Animation duration
        className="my-20 text-center text-4xl"
      >
        Experience {/* Main title for the section */}
      </motion.h1>

      {/* Mapping over the EXPERIENCES array and displaying each experience */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Left section - Year of experience */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fades and slides the year into view
              initial={{ opacity: 0, x: -100 }} // Initially invisible and moved left
              transition={{ duration: 0.5 }} // Shorter animation duration
              className="w-full lg:w-1/4"
            >
              {/* Displaying the year of the experience */}
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Right section - Role, company, and description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fades and slides the text into view
              initial={{ opacity: 0, x: 100 }} // Initially invisible and moved right
              transition={{ duration: 0.5 }} // Shorter animation duration
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Job title and company name */}
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>

              {/* Description of the role */}
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* List of technologies used during the experience */}
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr2 mb-2 rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
