"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function MotionDirector() { useLayoutEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.registerPlugin(ScrollTrigger); const ctx = gsap.context(() => { gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => { gsap.fromTo(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 86%", once: true } }); }); gsap.to(".hero-visual .system-diagram", { y: -16, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .5 } }); }); return () => ctx.revert(); }, []); return null; }
