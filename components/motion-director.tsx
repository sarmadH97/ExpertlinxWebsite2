"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionDirector() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const removeListeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const mobileMotion = window.matchMedia("(max-width: 900px)").matches;
      const motionFactor = mobileMotion ? 1.35 : 1;

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
        ".hero-flow-ambient",
        { x: 22, y: -16, scale: 0.985 },
        { x: 0, y: 0, scale: 1, duration: 1.7, ease: "power3.out" },
      );

      [12, 16, 20].forEach((duration, group) => {
        gsap.to(`[data-flow-speed="${group}"]`, {
          strokeDashoffset: -2196,
          duration: duration * motionFactor,
          delay: 1.55,
          repeat: -1,
          ease: "none",
        });
      });

      gsap.to(".hero-flow-ambient", {
        x: mobileMotion ? 5 : 11,
        y: mobileMotion ? -4 : -9,
        rotation: mobileMotion ? 0.25 : 0.55,
        scale: mobileMotion ? 1.008 : 1.016,
        duration: 11 * motionFactor,
        delay: 1.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const driftSettings = [
        { x: 4, y: -2, duration: 9 },
        { x: -3, y: 3, duration: 12 },
        { x: 5, y: 2, duration: 15 },
      ];

      driftSettings.forEach((settings, group) => {
        gsap.to(`[data-flow-drift="${group}"] path`, {
          x: settings.x,
          y: settings.y,
          duration: settings.duration * motionFactor,
          delay: 1.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 0.82)}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
        .to(".hero-copy", { opacity: 0 }, 0)
        .to(".hero-flow", {
          x: () => -window.innerWidth * (mobileMotion ? 0.12 : 0.22),
          y: () => window.innerHeight * (mobileMotion ? 0.1 : 0.18),
          scale: mobileMotion ? 1.28 : 1.58,
          rotation: 0.7,
          opacity: 0,
        }, 0)
        .fromTo(
          "[data-transition-service]",
          { y: 52, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.82, ease: "none" },
          0.18,
        );

      const orbitTimelines = new Map<HTMLElement, gsap.core.Timeline>();
      const orbitRings = gsap.utils.toArray<HTMLElement>("[data-orbit-ring]");

      orbitRings.forEach((ring) => {
        const duration = Number(ring.dataset.orbitDuration ?? 30);
        const direction = Number(ring.dataset.orbitDirection ?? 1);
        const labels = ring.querySelectorAll<HTMLElement>("[data-orbit-label]");
        const timeline = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "none" } });

        timeline.to(ring, { rotation: direction * 360, duration }, 0);
        timeline.to(labels, { rotation: direction * -360, duration }, 0);
        orbitTimelines.set(ring, timeline);

        ring.querySelectorAll<HTMLElement>(".orbit-node").forEach((node) => {
          const slow = () => timeline.timeScale(0.35);
          const resume = () => timeline.timeScale(1);
          node.addEventListener("pointerenter", slow);
          node.addEventListener("pointerleave", resume);
          removeListeners.push(() => {
            node.removeEventListener("pointerenter", slow);
            node.removeEventListener("pointerleave", resume);
          });
        });
      });

      const orbitStage = document.querySelector<HTMLElement>("[data-orbit-stage]");
      if (orbitStage) {
        gsap.fromTo(
          orbitStage,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: orbitStage,
              start: "top 92%",
              once: true,
              onEnter: () => orbitTimelines.forEach((timeline) => timeline.play()),
            },
          },
        );

        gsap.fromTo(
          orbitStage.querySelectorAll(".orbit-node"),
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: orbitStage, start: "top 92%", once: true },
          },
        );
      }

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

    return () => {
      removeListeners.forEach((remove) => remove());
      ctx.revert();
    };
  }, []);

  return null;
}
