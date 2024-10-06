import { Link } from "react-scroll"; // Import for smooth scrolling between sections
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import for animations
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu and close button

const Navbar = () => {
  const navbarHeight = 96; // Height of the navbar in pixels (6rem = 96px)
  const [activeSection, setActiveSection] = useState("hero"); // State to track the active section
  const [isScrolled, setIsScrolled] = useState(false); // State to check if the user has scrolled down
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the mobile menu is open

  // Function to check if the page has been scrolled
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Set state to true if scrolled
    } else {
      setIsScrolled(false); // Set state to false if scrolled back to top
    }
  };

  // Adding scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to check if the current section is active
  const isActive = (section: string) => section === activeSection;
  // Framer-motion animation variants for navbar links
  const linkVariants = {
    hidden: { opacity: 0, x: 100 }, // Start hidden and slightly to the right
    visible: (i: number) => ({
      opacity: 1,
      x: 0, // Animate to full visibility and position
      transition: {
        delay: i * 0.1, // Stagger animation for each link
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-6 z-10 shadow-md transition-colors duration-300 ${
          isScrolled ? "bg-neutral-900" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left, scrolls to hero section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Animation for the logo
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="hero" // Scrolls to the "hero" section
              smooth={true}
              duration={500}
              offset={-navbarHeight} // Offset for the navbar height
              spy={true} // Track the active section
              onSetActive={() => setActiveSection("hero")}
              onClick={() => setActiveSection("hero")}
              className="cursor-pointer text-3xl font-bold text-cyan-300"
            >
              {`{PM}`} {/* Logo text */}
            </Link>
          </motion.div>

          {/* Desktop menu with links to different sections */}
          <div className="hidden lg:flex space-x-8 text-xl text-neutral-300">
            {[
              { section: "hero", label: "Hero" },
              { section: "about", label: "About" },
              { section: "technologies", label: "Technologies" },
              { section: "experience", label: "Experience" },
              { section: "courses", label: "Courses" },
              { section: "projects", label: "Projects" },
              { section: "contact", label: "Contact" },
            ].map((link, index) => (
              <motion.div
                key={link.section}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
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
                  {link.label} {/* Display section label */}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hamburger menu icon for mobile devices */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)} // Opens the menu
              className="text-neutral-300 text-3xl"
            >
              <FaBars /> {/* Hamburger icon */}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay that closes the mobile menu when clicked outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)} // Closes the menu
        ></div>
      )}

      {/* Off-canvas mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[1000] bg-neutral-900 shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-col space-y-8 p-8 text-neutral-300">
          {/* Close button for the mobile menu */}
          <button
            className="absolute top-4 right-4 text-neutral-300 text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes /> {/* Close icon */}
          </button>

          {/* Menu items for mobile */}
          {[
            { section: "hero", label: "Hero" },
            { section: "about", label: "About" },
            { section: "technologies", label: "Technologies" },
            { section: "experience", label: "Experience" },
            { section: "courses", label: "Courses" },
            { section: "projects", label: "Projects" },
            { section: "contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.section}
              to={link.section}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => {
                setActiveSection(link.section);
                setIsMenuOpen(false); // Closes the menu when an item is clicked
              }}
              className="cursor-pointer hover:text-cyan-300"
            >
              {link.label} {/* Display section label */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
