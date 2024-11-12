import {
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaGithub,
  FaCss3Alt,
  FaLinkedin,
  FaUserTie,
  FaRunning,
  FaDumbbell,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiMicrosoftexcel,
  SiSupabase,
  SiNetlify,
  SiPostman,
  SiExpo,
  SiCanva,
  SiExpress,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BiLogoHeroku } from "react-icons/bi";
import chatgptImage from "/chatgpt.png";

export type IconSize = "small" | "medium" | "large";

function getIconClass(size: IconSize): string {
  switch (size) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-lg";
    case "large":
      return "text-7xl";
    default:
      return "text-lg";
  }
}

// Define the base icons with all configurations in a single object
const baseIcons = (size: IconSize) => ({
  "React Native": {
    icon: <RiReactjsLine className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#0d99ff]",
  },
  Figma: {
    icon: <FaFigma className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#f24e1e]",
  },
  NodeJS: {
    icon: <FaNodeJs className={`${getIconClass(size)} text-white`} />,
    color: "bg-green-500",
  },
  Express: {
    icon: <SiExpress className={`${getIconClass(size)} text-white`} />,
    color: "bg-black",
  },
  MongoDB: {
    icon: <SiMongodb className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#4DB33D]",
  },
  TypeScript: {
    icon: <SiTypescript className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#3178c6]",
  },
  Git: {
    icon: <FaGitAlt className={`${getIconClass(size)} text-white`} />,
    color: "bg-red-500",
  },
  GitHub: {
    icon: <FaGithub className={`${getIconClass(size)} text-gray-900`} />,
    color: "bg-white",
  },
  React: {
    icon: <RiReactjsLine className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#0d99ff]",
  },
  JavaScript: {
    icon: <SiJavascript className={`${getIconClass(size)} text-white`} />,
    color: "bg-yellow-400",
  },
  HTML: {
    icon: <FaHtml5 className={`${getIconClass(size)} text-white`} />,
    color: "bg-orange-500",
  },
  CSS: {
    icon: <FaCss3Alt className={`${getIconClass(size)} text-white`} />,
    color: "bg-blue-500",
  },
  Management: {
    icon: <FaUserTie className={`${getIconClass(size)} text-white`} />,
    color: "bg-yellow-500",
  },
  Coaching: {
    icon: <SiMicrosoftexcel className={`${getIconClass(size)} text-white`} />,
    color: "bg-green-500",
  },
  Excel: {
    icon: <SiMicrosoftexcel className={`${getIconClass(size)} text-white`} />,
    color: "bg-green-700",
  },
  Running: {
    icon: <FaRunning className={`${getIconClass(size)} text-white`} />,
    color: "bg-blue-500",
  },
  Fitness: {
    icon: <FaDumbbell className={`${getIconClass(size)} text-white`} />,
    color: "bg-orange-500",
  },
  Massage: {
    icon: (
      <FaHandHoldingMedical className={`${getIconClass(size)} text-white`} />
    ),
    color: "bg-purple-500",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#2298bd]",
  },
  "Framer Motion": {
    icon: (
      <TbBrandFramerMotion className={`${getIconClass(size)} text-white`} />
    ),
    color: "bg-[#bc4a97]",
  },
  Supabase: {
    icon: <SiSupabase className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#1e7d52]",
  },
  Firebase: {
    icon: <IoLogoFirebase className={`${getIconClass(size)} text-white`} />,
    color: "bg-yellow-500",
  },
  VSCode: {
    icon: <VscVscode className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#30a3f1]",
  },
  GPT: {
    icon: <img src={chatgptImage} alt="ChatGPT" className="w-16 h-16" />,
    color: "bg-gray-800",
  },
  Heroku: {
    icon: <BiLogoHeroku className={`${getIconClass(size)} text-white`} />,
    color: "bg-indigo-600",
  },
  Netlify: {
    icon: <SiNetlify className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#05bdba]",
  },
  Canva: {
    icon: <SiCanva className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#00c4cc]",
  },
  Postman: {
    icon: <SiPostman className={`${getIconClass(size)} text-white`} />,
    color: "bg-orange-500",
  },
  Expo: {
    icon: <SiExpo className={`${getIconClass(size)} text-white`} />,
    color: "bg-black",
  },
  LinkedIn: {
    icon: <FaLinkedin className={`${getIconClass(size)} text-white`} />,
    color: "bg-blue-500",
  },
  Jest: {
    icon: <SiJest className={`${getIconClass(size)} text-white`} />,
    color: "bg-orange-600",
  },
  "React Testing Library": {
    icon: <SiTestinglibrary className={`${getIconClass(size)} text-white`} />,
    color: "bg-[#C3231F]",
  },
});

export const courseIconNames = [
  "React Native",
  "Figma",
  "NodeJS",
  "Express",
  "MongoDB",
  "TypeScript",
  "Git",
  "GitHub",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Management",
  "Coaching",
  "Excel",
  "Running",
  "Fitness",
  "Massage",
  "Jest",
  "React Testing Library",
] as const;

export const technologyIconNames = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "React Native",
  "NodeJS",
  "Express",
  "MongoDB",
  "TailwindCSS",
  "Framer Motion",
  "Supabase",
  "Firebase",
  "VSCode",
  "GPT",
  "Heroku",
  "Netlify",
  "Figma",
  "Canva",
  "Postman",
  "Expo",
  "GitHub",
  "Jest",
  "React Testing Library",
] as const;

export const socialIconNames = ["GitHub", "LinkedIn"] as const;

export type IconName =
  | (typeof courseIconNames)[number]
  | (typeof technologyIconNames)[number]
  | (typeof socialIconNames)[number];
export default baseIcons;
