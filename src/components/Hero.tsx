import { ReactTyped } from "react-typed"; // Importing the ReactTyped component for typing effect
import { HERO_CONTENT } from "../constants/data"; // Importing the hero content text
import profilePic from "../assets/mountainProfile.png"; // Importing profile image
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import { Link } from "react-scroll"; // Import for smooth scrolling functionality

// Animation container for delay-based animations
const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 }, // Starts offscreen with opacity 0
  visible: {
    x: 0,
    opacity: 1, // Moves to the center and fades in
    transition: { duration: 0.5, delay: delay }, // Sets the duration and delay for the animation
  },
});

function Hero() {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-24 lg:mb-35 pt-24">
      {/* Hero section container - flex for responsive layout */}
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Left column containing the title, typed text, and buttons */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animated heading using framer-motion */}
            <motion.h1
              variants={container(0)} // Applies the animation with delay 0
              initial="hidden" // Initial hidden state
              animate="visible" // When in view, it becomes visible
              className="pb-12 text-5xl font-thin tracking-tight lg:text-7xl lg:mt-16"
            >
              {/* Static greeting with bold text */}
              <span className="font-bold">Hello, I am Petr</span>
              <br />
              {/* ReactTyped for dynamic typing effect */}
              <ReactTyped
                strings={[
                  "a Full-Stack Developer", // Typing string 1
                  "a lover of sports", // Typing string 2
                  "a fan of design", // Typing string 3
                  "creating innovative web solutions", // Typing string 4
                ]}
                typeSpeed={50} // Speed at which text is typed
                backSpeed={40} // Speed at which text is erased
                loop // Enables looping of the text strings
                className="text-cyan-500 font-light" // Custom styles for the typed text
              />
            </motion.h1>

            {/* Additional hero content */}
            <motion.p
              variants={container(1)} // Animation delay for content paragraph
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:tracking-normal"
            >
              {HERO_CONTENT} {/* Static content defined in constants */}
            </motion.p>

            {/* Buttons for Download CV and Contact Me */}
            <motion.div
              variants={container(1.5)} // Delayed animation for buttons
              initial="hidden"
              animate="visible"
              className="mt-6 mb-8 lg:mb-0 flex space-x-4"
            >
              {/* Download CV button */}
              <a
                href="/CV.pdf" // Link to the downloadable CV
                download // Allows downloading
                className="inline-block px-6 py-3 text-lg text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
              >
                Download CV
              </a>

              {/* Smooth scroll to Contact section */}
              <Link
                to="contact" // Scrolls to the contact section
                smooth={true} // Smooth scrolling
                duration={500} // Duration of the scroll animation
                className="inline-block px-6 py-3 text-lg text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 transition-colors duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right column containing the profile image */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            {/* Animated profile image */}
            <motion.img
              initial={{ x: 100, opacity: 0 }} // Starts offscreen to the right and invisible
              animate={{ x: 0, opacity: 1 }} // Slides in and fades into view
              transition={{ duration: 1, delay: 1.2 }} // Animation timing and delay
              src={profilePic} // Profile image source
              alt="Petr Michal" // Alt text for accessibility
              className="max-h-[400px] lg:max-h-[500px] w-full object-cover rounded-2xl" // Image styling
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
