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

const sectionHeadingAnimation = (i: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  },
});

const sections = [
  {
    title: "Frontend Technologies",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
    ],
  },
  {
    title: "Backend Technologies",
    items: ["NodeJS", "Express", "Supabase", "Firebase", "MongoDB"],
  },
  {
    title: "Tools and Platforms",
    items: [
      "Git",
      "GitHub",
      "VSCode",
      "GPT",
      "Heroku",
      "Netlify",
      "Postman",
      "Expo",
    ],
  },
  {
    title: "Graphic Tools",
    items: ["Figma", "Canva"],
  },
  {
    title: "Testing Tools",
    items: ["Jest", "React Testing Library"],
  },
];

function Technologies() {
  const icons = baseIcons("large");

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1 {...headingAnimation} className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>

      {sections.map((section, index) => (
        <div key={section.title} className="mb-12">
          <motion.h2
            variants={sectionHeadingAnimation(index)}
            initial="hidden"
            whileInView="visible"
            className="text-2xl mb-6 text-center"
          >
            {section.title}
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {section.items.map((tech, i) => {
              const { icon, color } = icons[tech] || {}; // Fallback in case icon is missing
              return (
                <motion.div
                  key={tech}
                  variants={iconVariants(i)}
                  initial="hidden"
                  whileInView="visible"
                  className={`relative w-28 h-28 flex items-center justify-center rounded-md ${color || "bg-neutral-800"} group`}
                >
                  {icon || (
                    <span className="text-white">N/A</span> // Placeholder if icon is missing
                  )}
                  <span className="absolute bottom-0 mb-2 text-xs text-white px-2 py-1 rounded bg-black opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Technologies;
