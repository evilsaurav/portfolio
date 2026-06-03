import React, { useEffect, useState } from "react";
import Navbar from './sections/Navbar';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

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

      {/* Custom cursor — hidden on touch devices */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </>
  );
};

export default App;
