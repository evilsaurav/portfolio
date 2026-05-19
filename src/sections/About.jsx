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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[22rem] mt-12">

        {/* ── Grid 1 — Bio ─────────────────────────────────────────────── */}
        <Reveal delay={0.1}><div className="flex flex-col justify-between grid-default-color grid-1 h-full w-full">

          {/* Text block — top of card, always visible */}
          <div className="z-10 relative">
            <p className="headtext">Driving Impact through Data & Software</p>
            <p className="subtext mt-4">
              I'm a results-focused M&E professional and Software Engineer with 8 years of experience ensuring data integrity, conducting rigorous audits, and building AI-powered full-stack applications for large-scale public health operations.
            </p>
            <p className="subtext mt-3">
              Thriving at the intersection of data management and software development — from TB elimination dashboards to full-stack apps. Outside of code: human physiology, motorcycle mechanics, and music production.
            </p>
          </div>

          {/* Image — anchored to bottom-right, does NOT overlap text */}
          <div className="relative h-36 md:h-44 mt-4 overflow-hidden rounded-xl">
            <img
              src="assets/coding-pov.png"
              className="absolute bottom-0 right-0 w-auto h-full object-cover scale-110 origin-bottom-right opacity-80"
              alt="Coding POV"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-storm via-transparent to-transparent" />
          </div>

        </div></Reveal>

        {/* ── Grid 2 — Draggable Cards ──────────────────────────────────── */}
        <Reveal delay={0.2}><div className="grid-default-color grid-2 h-full w-full">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="text-3xl text-gray-500 font-bold text-center select-none">
              CODE IS CRAFT
            </p>
            <Card style={{ rotate: "75deg",  top: "20%", left: "20%" }} text="M&E & DQA"       containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "45%", left: "45%" }} text="SOLID"             containerRef={grid2Container} />
            <Card style={{ rotate: "90deg",  top: "15%", left: "65%" }} text="KPI Tracking"     containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "40%", left: "0%"  }} text="Design Patterns"  containerRef={grid2Container} />
            <Card style={{ rotate: "20deg",  top: "5%",  left: "35%" }} text="HMIS & NIKSHAY"   containerRef={grid2Container} />
            <Card style={{ rotate: "30deg",  top: "50%", left: "65%" }} image="assets/logos/csharp-pink.png"  containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "50%", left: "22%" }} image="assets/logos/dotnet-pink.png"  containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "3%",  left: "5%"  }} text="Capacity Building" containerRef={grid2Container} />
          </div>
        </div></Reveal>

        {/* ── Grid 3 — Globe / Timezone ─────────────────────────────────── */}
        <Reveal delay={0.3}><div className="grid-black-color grid-3 h-full w-full">
          <div className="z-10 w-[48%] flex flex-col justify-center h-full pl-2">
            <p className="headtext">Time Zone</p>
            <p className="subtext mt-2">
              Based in India — open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute right-0 top-0 bottom-0 w-[55%] flex items-center justify-center overflow-hidden">
            <div className="scale-[0.62] origin-center">
              <Globe />
            </div>
          </figure>
        </div></Reveal>

        {/* ── Grid 4 — Contact CTA ──────────────────────────────────────── */}
        <Reveal delay={0.4}><div className="grid-special-color grid-4 h-full w-full">
          <div className="flex flex-col items-center justify-center gap-5 size-full px-6">
            <p className="text-center headtext leading-snug">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div></Reveal>

        {/* ── Grid 5 — Frameworks ───────────────────────────────────────── */}
        <Reveal delay={0.2}><div className="grid-default-color grid-5 h-full w-full">
          <div className="z-10 w-[45%] flex flex-col justify-center h-full">
            <p className="headtext">Tools & Expertise</p>
            <p className="subtext mt-2">
              Languages, frameworks, and M&E systems for full-stack apps and public health data.
            </p>
          </div>
          <div className="absolute inset-y-0 w-full h-full start-[42%]">
            <Frameworks />
          </div>
        </div></Reveal>

      </div>
    </section>
  );
};

export default About;
