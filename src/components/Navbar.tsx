import { Link } from "react-scroll"; // Import for smooth scrolling between sections
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu and close button
import { NAV_LINKS } from "../constants/data";

// Animations
const logoAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

const linkVariants = {
  variants: {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  },
  initial: "hidden",
  animate: "visible",
};

const Navbar = () => {
  const navbarHeight = 96;
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) => section === activeSection;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full py-6 z-10 shadow-md transition-colors duration-300 ${
          isScrolled ? "bg-neutral-900" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div {...logoAnimation}>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("hero")}
              onClick={() => setActiveSection("hero")}
              className="cursor-pointer text-3xl font-bold text-cyan-300"
            >
              {`{PM}`}
            </Link>
          </motion.div>

          <div className="hidden lg:flex space-x-8 text-xl text-neutral-300">
            {NAV_LINKS.map((link, index) => (
              <motion.div key={link.section} custom={index} {...linkVariants}>
                <Link
                  to={link.section}
                  smooth={true}
                  duration={500}
                  offset={-navbarHeight}
                  spy={true}
                  onSetActive={() => setActiveSection(link.section)}
                  onClick={() => setActiveSection(link.section)}
                  className={`cursor-pointer ${
                    isActive(link.section)
                      ? "text-cyan-300"
                      : "hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-neutral-300 text-3xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 z-[1000] bg-neutral-900 shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-col space-y-8 p-8 text-neutral-300">
          <button
            className="absolute top-4 right-4 text-neutral-300 text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.section}
              to={link.section}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => {
                setActiveSection(link.section);
                setIsMenuOpen(false);
              }}
              className="cursor-pointer hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
