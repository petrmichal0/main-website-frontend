import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35 pt-24">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:text-7xl lg:mt-16"
            >
              Petr Michal
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:tracking-normal"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 mb-8 lg:mb-0"
            >
              <a
                href="path-to-your-cv-file.pdf"
                download
                className="inline-block px-6 py-3 text-lg text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Petr Michal"
              className="max-h-[400px] lg:max-h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
