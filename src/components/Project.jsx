import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
  const [isHidden, setIsHidden] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMove = (e) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, { x: (e.clientX - (r.left + r.width/2)) * 0.3, y: (e.clientY - (r.top + r.height/2)) * 0.3, duration: 0.3, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-sand text-sm px-2 py-0.5 rounded-full border border-sand/20 transition-all duration-200 hover:border-aqua/60 hover:text-aqua hover:shadow-sm"
                style={{ "--tw-shadow-color": "#33c2cc" }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          ref={btnRef}
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation text-neutral-400 hover:text-white transition-colors"
          style={{ display: "inline-flex" }}
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {isHidden && (
        <ProjectDetails
          title={title} description={description} subDescription={subDescription}
          image={image} tags={tags} href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
