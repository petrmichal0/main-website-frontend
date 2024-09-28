import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>

          {/* Ikony sociálních sítí */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-md bg-blue-600 text-white flex justify-center items-center hover:bg-blue-800"
              title="Facebook"
            >
              <FaFacebook className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-md bg-blue-500 text-white flex justify-center items-center hover:bg-blue-700"
              title="LinkedIn"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-md bg-gray-900 text-white flex justify-center items-center hover:bg-gray-700"
              title="GitHub"
            >
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
