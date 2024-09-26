gsap.registerPlugin(ScrollTrigger);

// Timeline for hero section animations
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_explainer-hero",
      start: "top top", // Start animation when the hero section hits the top of the viewport
      end: "bottom top", // End after 100% of the viewport height has been scrolled
      scrub: true, // Sync the animation with the scroll position
      pin: true, // Pin the hero section during the scroll-triggered animation
    },
  })
  // Scale and fade out background
  .to(".explainer_hero-background", {
    rotate: 180,
    scale: 1.5,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  })

  // Twist and distort the heading
  .to(
    ".explainer_hero-heading",
    {
      opacity: 0,
      scale: 3,
      rotation: 5,
      filter: "blur(5px)",
    },
    "<"
  ) // This runs at the same time as the background scaling

  // Fade out text
  .to(
    ".explainer_hero-text",
    {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "<"
  );
