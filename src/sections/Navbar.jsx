import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ activeSection }) {
  const links = [
    { href: "#home",    label: "Home",    id: "home"    },
    { href: "#about",   label: "About",   id: "about"   },
    { href: "#work",    label: "Work",    id: "work"    },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <ul className="nav-ul">
      {links.map(({ href, label, id }) => (
        <li className="nav-li" key={id}>
          <a
            className={`nav-link transition-all duration-200 ${
              activeSection === id
                ? "text-white font-medium"
                : "text-neutral-400 hover:text-white"
            }`}
            href={href}
          >
            {label}
            {activeSection === id && (
              <motion.span
                layoutId="nav-underline"
                className="block h-[2px] rounded-full mt-0.5"
                style={{ background: "linear-gradient(90deg, #5c33cc, #33c2cc)" }}
              />
            )}
          </a>
        </li>
      ))}
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
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-20 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled
          ? "bg-primary/85 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-primary/40"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            style={{ background: "linear-gradient(90deg,#7a57db,#33c2cc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Saurav
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle" />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0  }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
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
