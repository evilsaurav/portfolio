import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ activeSection }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className={`nav-link transition-colors ${activeSection === "home" ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`} href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link transition-colors ${activeSection === "about" ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`} href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link transition-colors ${activeSection === "work" ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`} href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className={`nav-link transition-colors ${activeSection === "contact" ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`} href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "work", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <div className={`fixed inset-x-0 z-20 w-full backdrop-blur-lg transition-all duration-300 ${scrolled ? "bg-primary/80 border-b border-white/10 py-1" : "bg-primary/40 py-0"}`}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Saurav
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation activeSection={activeSection} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
