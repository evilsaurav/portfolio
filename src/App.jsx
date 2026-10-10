import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Page-load wipe overlay */}
      {!loaded && <div className="page-loader" />}

      <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experiences />
        <Contact />
      </div>
    </>
  );
};

export default App;
