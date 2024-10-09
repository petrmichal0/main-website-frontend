import { ABOUT_TEXT } from "../constants/data"; // Imports the text for the "About" section from constants
import aboutImg from "../assets/about.jpg"; // Imports the image for the "About" section
import { motion } from "framer-motion"; // Imports motion for animations from framer-motion
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"; // Imports social media icons for Facebook, LinkedIn, and GitHub

function About() {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      {/* Section Heading with Animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Heading becomes visible and slides up when in view
        initial={{ opacity: 0, y: -100 }} // Initial state (invisible and positioned higher)
        transition={{ duration: 1.5 }} // Animation duration for smooth transition
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>{" "}
        {/* "About Me" heading */}
      </motion.h1>

      {/* Main Content Container */}
      <div className="flex flex-wrap">
        {/* Left Section with Image and Animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} // Image becomes visible and slides in from the left
          initial={{ opacity: 0, x: -100 }} // Initial state (invisible and positioned to the left)
          transition={{ duration: 1.5 }} // Animation duration for smooth transition
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />{" "}
            {/* Rounded image */}
          </div>
        </motion.div>

        {/* Right Section with Text and Animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }} // Text becomes visible and slides in from the right
          initial={{ opacity: 0, x: 100 }} // Initial state (invisible and positioned to the right)
          transition={{ duration: 0.5 }} // Faster animation for text
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>{" "}
            {/* About me text */}
          </div>

          {/* Social Media Icons Section */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=100005710067699"
              target="_blank"
              rel="noopener noreferrer" // Ensures security when opening external links
              className="w-16 h-16 rounded-md bg-blue-600 text-white flex justify-center items-center hover:bg-blue-800" // Button with hover effect
              title="Facebook"
            >
              <FaFacebook className="w-10 h-10" /> {/* Facebook Icon */}
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/petr-michal-68b5a3245/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-md bg-blue-500 text-white flex justify-center items-center hover:bg-blue-700"
              title="LinkedIn"
            >
              <FaLinkedin className="w-10 h-10" /> {/* LinkedIn Icon */}
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/petrmichal0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-md bg-white text-gray-900 flex justify-center items-center hover:bg-gray-800 hover:text-white"
              title="GitHub"
            >
              <FaGithub className="w-10 h-10" /> {/* GitHub Icon */}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
