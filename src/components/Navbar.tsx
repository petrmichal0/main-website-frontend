import { Link } from "react-scroll"; // Import pro smooth scroll
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import pro animace
import { FaBars, FaTimes } from "react-icons/fa"; // Import ikony hamburger a cancel (křížek)
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  const navbarHeight = 96; // Výška navigace (6rem = 96px)
  const [activeSection, setActiveSection] = useState("hero"); // Stav pro aktivní sekci
  const [isScrolled, setIsScrolled] = useState(false); // Stav pro sledování, zda se uživatel posunul
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stav pro sledování, zda je menu otevřeno

  // Funkce, která kontroluje, zda je stránka scrollovaná
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Jakmile uživatel skroluje dolů
    } else {
      setIsScrolled(false); // Pokud je uživatel zpět nahoře
    }
  };

  // Přidání scroll event listeneru při načtení komponenty
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Čištění event listeneru při odmountování komponenty
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) => section === activeSection;

  // Animace pro odkazy v navbaru
  const linkVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
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
          {/* Logo vlevo - Kliknutí na logo přejde na sekci Hero */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("hero")}
              onClick={() => setActiveSection("hero")}
              className="cursor-pointer"
            >
              <img className="mx-2 w-10" src={logo} alt="logo" />
            </Link>
          </motion.div>

          {/* Seznam nadpisů vpravo - Skrytí na mobilech */}
          <div className="hidden lg:flex space-x-8 text-xl text-neutral-300">
            {[
              { section: "hero", label: "Hero" },
              { section: "about", label: "About" },
              { section: "technologies", label: "Technologies" },
              { section: "experience", label: "Experience" },
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
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Ikona hamburger menu na mobilech */}
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

      {/* Overlay pro zavření panelu kliknutím mimo něj */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Boční panel (off-canvas menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[1000] bg-neutral-900 shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-col space-y-8 p-8 text-neutral-300">
          {/* Tlačítko "Cancel" pro zavření panelu */}
          <button
            className="absolute top-4 right-4 text-neutral-300 text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {[
            { section: "hero", label: "Hero" },
            { section: "about", label: "About" },
            { section: "technologies", label: "Technologies" },
            { section: "experience", label: "Experience" },
            { section: "projects", label: "Projects" },
            { section: "contact", label: "Contact" },
          ].map((link, index) => (
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
