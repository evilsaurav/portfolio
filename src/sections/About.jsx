import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Reveal from "../components/Reveal";

/* 3D tilt hook — add directly in this file */
const useTilt = () => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`;
    el.style.transition = "transform 0.1s ease";
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
      ref.current.style.transition = "transform 0.5s ease";
    }
  };

  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
};

const About = () => {
  const grid2Container = useRef();
  const tilt1 = useTilt();
  const tilt2 = useTilt();
  const tilt3 = useTilt();
  const tilt4 = useTilt();
  const tilt5 = useTilt();

  return (
    <section className="c-space section-spacing" id="about">
      <Reveal>
        <h2 className="text-heading">About Me</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[22rem] mt-12">

        {/* Grid 1 */}
        <Reveal delay={0.1} className="grid-1">
          <div className="flex flex-col justify-between grid-default-color h-full" {...tilt1}>
            <div className="z-10 relative">
              <p className="headtext">Driving Impact through Data & Software</p>
              <p className="subtext mt-4">
                I'm a results-focused M&E professional and Software Engineer with 8 years of experience ensuring data integrity, conducting rigorous audits, and building AI-powered full-stack applications for large-scale public health operations.
              </p>
              <p className="subtext mt-3">
                Thriving at the intersection of data management and software — from TB elimination dashboards to full-stack apps. Outside of code: human physiology, motorcycle mechanics, and music production.
              </p>
            </div>
            <div className="relative h-36 md:h-44 mt-4 overflow-hidden rounded-xl">
              <img src="assets/coding-pov.png" className="absolute bottom-0 right-0 w-auto h-full object-cover scale-110 origin-bottom-right opacity-80" alt="Coding POV" />
              <div className="absolute inset-0 bg-gradient-to-r from-storm via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Grid 2 */}
        <Reveal delay={0.2} className="grid-2">
          <div className="grid-default-color h-full" ref={grid2Container}>
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
              <p className="text-3xl text-gray-500 font-bold text-center select-none">CODE IS CRAFT</p>
              <Card style={{ rotate: "75deg",  top: "20%", left: "20%" }} text="M&E & DQA"        containerRef={grid2Container} />
              <Card style={{ rotate: "-30deg", top: "45%", left: "45%" }} text="SOLID"              containerRef={grid2Container} />
              <Card style={{ rotate: "90deg",  top: "15%", left: "65%" }} text="KPI Tracking"      containerRef={grid2Container} />
              <Card style={{ rotate: "-45deg", top: "40%", left: "0%"  }} text="Design Patterns"   containerRef={grid2Container} />
              <Card style={{ rotate: "20deg",  top: "5%",  left: "35%" }} text="HMIS & NIKSHAY"    containerRef={grid2Container} />
              <Card style={{ rotate: "30deg",  top: "50%", left: "65%" }} image="assets/logos/csharp-pink.png"  containerRef={grid2Container} />
              <Card style={{ rotate: "-45deg", top: "50%", left: "22%" }} image="assets/logos/dotnet-pink.png"  containerRef={grid2Container} />
              <Card style={{ rotate: "-45deg", top: "3%",  left: "5%"  }} text="Capacity Building"  containerRef={grid2Container} />
            </div>
          </div>
        </Reveal>

        {/* Grid 3 */}
        <Reveal delay={0.3} className="grid-3">
          <div className="grid-black-color h-full" style={{ boxShadow: "0 0 40px rgba(51,194,204,0.15)" }}>
            <div className="z-10 w-[48%] flex flex-col justify-center h-full pl-2">
              <p className="headtext">Time Zone</p>
              <p className="subtext mt-2">Based in India — open to remote work worldwide.</p>
            </div>
            <figure className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-center overflow-hidden">
              <div className="scale-[0.62] origin-center"><Globe /></div>
            </figure>
          </div>
        </Reveal>

        {/* Grid 4 */}
        <Reveal delay={0.4} className="grid-4">
          <div className="grid-special-color h-full" {...tilt4}>
            <div className="flex flex-col items-center justify-center gap-5 size-full px-6">
              <p className="text-center headtext leading-snug">Do you want to start a project together?</p>
              <CopyEmailButton />
            </div>
          </div>
        </Reveal>

        {/* Grid 5 */}
        <Reveal delay={0.2} className="grid-5">
          <div className="grid-default-color h-full" {...tilt5}>
            <div className="z-10 w-[45%] flex flex-col justify-center h-full">
              <p className="headtext">Tools & Expertise</p>
              <p className="subtext mt-2">Languages, frameworks, and M&E systems for full-stack apps and public health data.</p>
            </div>
            <div className="absolute inset-y-0 w-full h-full start-[42%]">
              <Frameworks />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
