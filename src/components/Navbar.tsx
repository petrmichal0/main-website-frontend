import { Link } from "react-scroll"; // Import pro smooth scroll
import { useState, useEffect } from "react";
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

          {/* Seznam nadpisů vpravo - Skrytí na mobilech */}
          <div className="hidden lg:flex space-x-8 text-xl text-neutral-300">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("hero")}
              onClick={() => setActiveSection("hero")}
              className={`cursor-pointer ${
                isActive("hero") ? "text-cyan-300" : "hover:text-cyan-300"
              }`}
            >
              Hero
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("about")}
              onClick={() => setActiveSection("about")}
              className={`cursor-pointer ${
                isActive("about") ? "text-cyan-300" : "hover:text-cyan-300"
              }`}
            >
              About
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("technologies")}
              onClick={() => setActiveSection("technologies")}
              className={`cursor-pointer ${
                isActive("technologies")
                  ? "text-cyan-300"
                  : "hover:text-cyan-300"
              }`}
            >
              Technologies
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("experience")}
              onClick={() => setActiveSection("experience")}
              className={`cursor-pointer ${
                isActive("experience") ? "text-cyan-300" : "hover:text-cyan-300"
              }`}
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("projects")}
              onClick={() => setActiveSection("projects")}
              className={`cursor-pointer ${
                isActive("projects") ? "text-cyan-300" : "hover:text-cyan-300"
              }`}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              spy={true}
              onSetActive={() => setActiveSection("contact")}
              onClick={() => setActiveSection("contact")}
              className={`cursor-pointer ${
                isActive("contact") ? "text-cyan-300" : "hover:text-cyan-300"
              }`}
            >
              Contact
            </Link>
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

          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("hero");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            Hero
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("about");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            About
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("technologies");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            Technologies
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("experience");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("projects");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            spy={true}
            onSetActive={() => {
              setActiveSection("contact");
              setIsMenuOpen(false);
            }}
            className="cursor-pointer hover:text-cyan-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
