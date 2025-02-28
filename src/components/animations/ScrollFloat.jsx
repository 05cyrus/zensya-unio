import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 0.8, // Reduced for smoother animation
  ease = "power3.out", // Lighter easing function
  scrollStart = "top bottom-=20%",
  scrollEnd = "bottom top+=30%",
  stagger = 0.08, // Slower stagger to reduce lag
}) => {
  const containerRef = useRef(null);

  // Split text into characters for animation
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block will-change-transform will-change-opacity" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    let ticking = false;

    gsap.fromTo(
      charElements,
      {
        opacity: 0,
        yPercent: 100,
        scaleY: 1.5,
        scaleX: 0.9,
        transformOrigin: "50% 0%",
        willChange: "opacity, transform",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        force3D: true, // Forces GPU acceleration
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: 0.5, // Lower scrub value for smoother interaction
          onUpdate: (self) => {
            if (!ticking) {
              requestAnimationFrame(() => {
                self.animation.progress(self.progress);
                ticking = false;
              });
              ticking = true;
            }
          },
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
