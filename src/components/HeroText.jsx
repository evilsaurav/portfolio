import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";
import { gsap } from "gsap";

const MagneticButton = ({ children, href, className }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(btn, {
        x: (e.clientX - cx) * 0.25,
        y: (e.clientY - cy) * 0.25,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a ref={btnRef} href={href} className={className} style={{ display: "inline-block" }}>
      {children}
    </a>
  );
};

const HeroText = () => {
  const variants = {
    hidden:  { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0  },
  };

  const roles = [
    "M&E Professional",
    "Software Engineer",
    "Full-Stack Developer",
    "Data Analyst",
  ];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">

      {/* Desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          style={{ background: "linear-gradient(135deg,#ffffff 60%,#7a57db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          variants={variants} initial="hidden" animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Saurav Kumar
        </motion.h1>

        <div className="flex flex-col items-start mt-4 border-l-4 pl-4" style={{ borderImage: "linear-gradient(to bottom, #5c33cc, #33c2cc) 1" }}>

          <motion.div
            className="text-5xl font-bold text-neutral-100 uppercase min-h-[3.5rem]"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords words={roles} duration={2500} className="text-5xl font-bold uppercase" />
          </motion.div>

          <motion.p
            className="text-2xl font-medium text-neutral-400 mt-6 max-w-3xl"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.5 }}
          >
            Bridging 8 years of rigorous public health data analytics with scalable software engineering.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.8 }}
          >
            <MagneticButton
              href="#work"
              className="px-6 py-3 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/30"
              style={{ background: "linear-gradient(135deg, #5c33cc, #33c2cc)" }}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-6 py-3 border border-neutral-600 hover:border-lavender text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Mobile — keep same structure, just remove GSAP (touch devices) */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          style={{ background: "linear-gradient(135deg,#ffffff 60%,#7a57db)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          variants={variants} initial="hidden" animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Saurav Kumar
        </motion.p>
        <div>
          <motion.div
            className="text-4xl font-black text-neutral-300 min-h-[3rem]"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords words={roles} duration={2500} className="text-4xl font-black" />
          </motion.div>
          <motion.p
            className="text-xl font-medium text-neutral-400 mt-4"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.5 }}
          >
            Bridging rigorous public health data analytics with scalable software engineering.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 mt-8"
            variants={variants} initial="hidden" animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a href="#work"    className="px-6 py-3 text-center text-white rounded-lg font-medium" style={{ background: "linear-gradient(135deg,#5c33cc,#33c2cc)" }}>View My Work</a>
            <a href="#contact" className="px-6 py-3 text-center border border-neutral-600 hover:border-neutral-400 text-white rounded-lg font-medium transition-colors">Contact Me</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
