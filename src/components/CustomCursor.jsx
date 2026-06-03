import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot,  { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.45, ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 1.8, borderColor: "#33c2cc", duration: 0.25, ease: "power2.out" });
      gsap.to(dot,  { scale: 0,   duration: 0.15 });
    };
    const onLeave = () => {
      gsap.to(ring, { scale: 1,   borderColor: "#7a57db", duration: 0.25, ease: "power2.out" });
      gsap.to(dot,  { scale: 1,   duration: 0.15 });
    };

    window.addEventListener("mousemove", onMove);
    const els = document.querySelectorAll("a, button, [role='button'], .cursor-grab");
    els.forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      els.forEach(el => { el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave); });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: -4, left: -4,
          width: 8, height: 8, borderRadius: "50%",
          background: "#7a57db", pointerEvents: "none",
          zIndex: 9998, transform: "translate(-50%,-50%)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: -16, left: -16,
          width: 32, height: 32, borderRadius: "50%",
          border: "1.5px solid #7a57db", pointerEvents: "none",
          zIndex: 9997, transform: "translate(-50%,-50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
