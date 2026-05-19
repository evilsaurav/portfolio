import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import Reveal from "../components/Reveal";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <Reveal delay={0.1}><div className="flex items-end grid-default-color grid-1 h-full w-full">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 pb-4">
            <p className="headtext">Driving Impact through Data & Software</p>
            <p className="subtext mt-4">
              I am a results-focused Monitoring & Evaluation (M&E) professional and Software Engineer with 8 years of experience. My foundation is built on ensuring data integrity, conducting rigorous audits, and developing comprehensive analytics dashboards for large-scale operations.
            </p>
            <p className="subtext mt-4">
              Driven by a hyper-analytical mindset, I thrive at the intersection of data management and software development—building AI-powered, full-stack applications while simultaneously managing critical public health data for TB elimination and COVID-19 response.
            </p>
            <p className="subtext mt-4">
              When I am not architecting databases or writing code, you can find me studying human physiology, researching motorcycle mechanics, or producing music.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div></Reveal>
        {/* Grid 2 */}
        <Reveal delay={0.2}><div className="grid-default-color grid-2 h-full w-full">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl md:text-5xl text-gray-500 font-bold text-center">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="M&E & DQA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="KPI Tracking"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="HMIS & NIKSHAY"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              text="Capacity Building"
              containerRef={grid2Container}
            />
          </div>
        </div></Reveal>
        {/* Grid 3 */}
        <Reveal delay={0.3}><div className="grid-black-color grid-3 h-full w-full">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div></Reveal>
        {/* Grid 4 */}
        <Reveal delay={0.4}><div className="grid-special-color grid-4 h-full w-full">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div></Reveal>
        {/* Grid 5 */}
        <Reveal delay={0.2}><div className="grid-default-color grid-5 h-full w-full">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tools & Expertise</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and M&E systems that allow me to build scalable full-stack applications and manage rigorous public health data initiatives.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div></Reveal>
      </div>
    </section>
  );
};

export default About;
