import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="main-container bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Courses />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
