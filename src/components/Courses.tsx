import { COURSES } from "../constants/data"; // Importing the list of courses from data file
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion
import {
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa"; // Specific icons from react-icons
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import {
  FaUserTie,
  FaRunning,
  FaDumbbell,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { GiWhistle } from "react-icons/gi";
// Object defining icons and background color for each course
const courseIcons = {
  "React Native": {
    icon: <RiReactjsLine className="text-lg text-white" />,
    color: "bg-[#0d99ff]",
  },
  Figma: {
    icon: <FaFigma className="text-lg text-white" />,
    color: "bg-[#f24e1e]",
  },
  NodeJS: {
    icon: <FaNodeJs className="text-lg text-white" />,
    color: "bg-green-500", // Barva pro Node.js
  },
  Express: {
    icon: (
      <span className="text-lg text-white flex items-center justify-center rounded-full w-9 h-9 bg-gray-800">
        Ex
      </span>
    ), // Custom text for Express, styled as a rounded icon
    color: "", // Background color is set directly in the icon
  },
  MongoDB: {
    icon: <SiMongodb className="text-lg text-white" />,
    color: "bg-[#4DB33D]", // Barva pro MongoDB
  },
  TypeScript: {
    icon: <SiTypescript className="text-lg text-white" />,
    color: "bg-[#3178c6]",
  },
  Git: {
    icon: <FaGitAlt className="text-lg text-white" />,
    color: "bg-red-500", // Barva pro Git
  },
  GitHub: {
    icon: <FaGithub className="text-lg text-gray-900" />,
    color: "bg-white", // Barva pro GitHub
  },
  // Přidej další potřebné kurzy podle obrázku:
  React: {
    icon: <RiReactjsLine className="text-lg text-white" />,
    color: "bg-[#0d99ff]",
  },
  "React 1,2,3": {
    icon: <RiReactjsLine className="text-lg text-white" />,
    color: "bg-[#0d99ff]",
  },
  JavaScript: {
    icon: <SiJavascript className="text-lg text-white" />,
    color: "bg-yellow-400",
  },
  HTML: {
    icon: <FaHtml5 className="text-lg text-white" />,
    color: "bg-orange-500", // Barva pro HTML
  },
  CSS: {
    icon: <FaCss3Alt className="text-lg text-white" />,
    color: "bg-blue-500", // Barva pro CSS
  },
  Management: {
    icon: <FaUserTie className="text-lg text-white" />,
    color: "bg-yellow-500",
  },
  Coaching: {
    icon: <GiWhistle className="text-lg text-white" />,
    color: "bg-green-500",
  },
  Excel: {
    icon: <SiMicrosoftexcel className="text-lg text-white" />,
    color: "bg-green-700",
  },
  Running: {
    icon: <FaRunning className="text-lg text-white" />,
    color: "bg-blue-500",
  },
  Fitness: {
    icon: <FaDumbbell className="text-lg text-white" />,
    color: "bg-orange-500",
  },
  Massage: {
    icon: <FaHandHoldingMedical className="text-lg text-white" />,
    color: "bg-purple-500",
  },
};

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
                  {/* Icon with background color */}
                  <span className="mr-2 flex items-center justify-center">
                    {/* Kontrola, zda je iconKey pole */}
                    {Array.isArray(course.iconKey) ? (
                      // Pokud je pole, vykresli více ikon
                      course.iconKey.map((key, index) => (
                        <span
                          key={index}
                          className={`flex items-center justify-center rounded-full p-2 ${
                            courseIcons[key as keyof typeof courseIcons]
                              ?.color || ""
                          }`}
                        >
                          {courseIcons[key as keyof typeof courseIcons]?.icon}
                        </span>
                      ))
                    ) : (
                      // Pokud není pole, vykresli jen jednu ikonu
                      <span
                        className={`flex items-center justify-center rounded-full p-2 ${
                          courseIcons[
                            course.iconKey as keyof typeof courseIcons
                          ]?.color || ""
                        }`}
                      >
                        {
                          courseIcons[
                            course.iconKey as keyof typeof courseIcons
                          ]?.icon
                        }
                      </span>
                    )}
                  </span>
                  <span>{course.text}</span> {/* Course Text */}
                  {course.link === "" ? (
                    ""
                  ) : (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-cyan-300 underline"
                    >
                      LINK {/* Link */}
                    </a>
                  )}
                </div>
              ))}{" "}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
