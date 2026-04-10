import { motion } from "motion/react";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Saurav Kumar
        </motion.h1>
        <div className="flex flex-col items-start mt-4 border-l-4 border-indigo-500 pl-4">
          <motion.p
            className="text-6xl font-bold text-neutral-100 uppercase"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Data Professional &<br/>
            Full-Stack Software Engineer
          </motion.p>
          
          <motion.p
            className="text-2xl font-medium text-neutral-400 mt-6 max-w-3xl"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Bridging rigorous public health data analytics with scalable software engineering.
          </motion.p>
          <motion.div 
            className="flex gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a href="#work" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-neutral-600 hover:border-neutral-400 text-white rounded-lg font-medium transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Saurav Kumar
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Data Professional <br />& Software Engineer
          </motion.p>
          <motion.p
            className="text-xl font-medium text-neutral-400 mt-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Bridging rigorous public health data analytics with scalable software engineering.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <a href="#work" className="px-6 py-3 text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 text-center border border-neutral-600 hover:border-neutral-400 text-white rounded-lg font-medium transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
