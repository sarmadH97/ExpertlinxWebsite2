"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionDirector() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-flow-line]",
        { strokeDashoffset: 1800, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.55,
          stagger: 0.025,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".flow-paths",
        { x: 18, y: -12 },
        { x: 0, y: 0, duration: 1.7, ease: "power3.out" },
      );

      gsap.utils.toArray<HTMLElement>("[data-heading-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-row-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 91%", once: true },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
