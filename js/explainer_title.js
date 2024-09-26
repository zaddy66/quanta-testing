// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all .experiment_title-container elements
const containers = document.querySelectorAll(".experiment_title-container");

containers.forEach((container) => {
  const accent = container.querySelector(".explainer-title_eyebrow");
  const heading = container.querySelector(".heading-h1");
  const lines = container.querySelector(".experiment2_animation-wrapper");

  // Accent animation: Trigger slightly earlier
  gsap.fromTo(
    accent,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: "top top", // End when bottom of container reaches top of viewport
        scrub: true, // Smooth transition over the scroll
        markers: false,
      },
    }
  );

  // Heading animation
  gsap.fromTo(
    heading,
    { scale: 1, rotation: 0, blur: 0, opacity: 1 },
    {
      scale: 4,
      rotation: 5,
      filter: "blur(15px)",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "center center", // Start when container enters 75% of viewport
        end: "bottom top", // End when bottom of container reaches top of viewport
        scrub: true, // Smooth transition over the scroll
        markers: false,
      },
    }
  );

  // Lines animation
  gsap.fromTo(
    lines,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "top top", // End when bottom of container reaches top of viewport
        scrub: true, // Smooth transition over the scroll
        markers: false,
      },
    }
  );
});
