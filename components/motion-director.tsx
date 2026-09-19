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
        ".hero [data-heading] > span",
        { yPercent: 115 },
        { yPercent: 0, duration: 1.05, stagger: 0.1, ease: "power4.out", delay: 0.15 },
      );

      gsap.fromTo(
        ".hero [data-line-reveal], .hero-bottom",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.14, ease: "power3.out", delay: 0.55 },
      );

      gsap.utils.toArray<HTMLElement>("[data-heading]").slice(1).forEach((heading) => {
        gsap.fromTo(
          heading.children,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power4.out",
            scrollTrigger: { trigger: heading, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.closest(".hero")) return;
        gsap.fromTo(
          element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-offering]").forEach((row) => {
        const visual = row.querySelector(".offering-visual");
        const copy = row.querySelector(".offering-copy");
        if (visual) {
          gsap.fromTo(
            visual,
            { clipPath: "inset(0 0 0 100%)" },
            {
              clipPath: "inset(0 0 0 0%)",
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: { trigger: row, start: "top 82%", once: true },
            },
          );
        }
        if (copy) {
          gsap.fromTo(
            copy,
            { opacity: 0, x: -24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 82%", once: true },
            },
          );
        }
      });

      gsap.fromTo(
        "[data-capability]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".capability-list", start: "top 84%", once: true },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-project]").forEach((project) => {
        const visual = project.querySelector(".project-visual");
        if (!visual) return;
        gsap.fromTo(
          visual,
          { clipPath: "inset(0 0 0 100%)", x: 35 },
          {
            clipPath: "inset(0 0 0 0%)",
            x: 0,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: project, start: "top 82%", once: true },
          },
        );
        gsap.to(visual, {
          y: -24,
          ease: "none",
          scrollTrigger: { trigger: project, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
